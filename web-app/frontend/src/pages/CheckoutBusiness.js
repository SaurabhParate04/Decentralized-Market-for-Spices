import React, { useEffect, useContext, useState } from "react";
import '../Styles.css'
import Navbar from '../components/NavbarBusiness'
import Footer from '../components/Footer'
import thumb from '../images/Cloves.jpg'
import userContext from "../context/User/BusinessUserContext";
import { useHistory, useLocation } from "react-router-dom";

export default function CheckoutBusiness(props) {

    const context = useContext(userContext);
    const { userProfileBusiness, getBusinessProfileInfo } = context;
    const location = useLocation()
    const history = useHistory()

    const [sellerCredentials, setSellerCredentials] = useState()
    const maxQty = location.state.quantity
    const [quantity, setQuantity] = useState(maxQty)
    const price = location.state.price
    const category = location.state.category
    const description = location.state.description
    let total = quantity * price
    const productName = location.state.productName
    const seller = location.state.seller
    const [sellerContact, setSellerContact] = useState('+91 9876543210')
    const prodId = location.state.prodId
    const id = location.state.id
    const [dataFromBlockchain, setDataFromBlockchain] = useState({})


    const writeOnChain = async() => {
        let obj = ''
        let channel = 'mychannel'
        const now = String(new Date())
        if(userProfileBusiness.usertype === 'Farmer') {
            obj = `--obj.Farmer '"${userProfileBusiness.firstname + '_' + userProfileBusiness.lastname}"' --obj.Field_Location='"${(userProfileBusiness.location).replace(/ /g,"_")}"' --obj.Farmer_Transfer_Date='' --obj.Trader='' --obj.Trader_Location='' --obj.Trader_Transfer_Date='' --obj.Manufacturer='' --obj.Manufactured_Product_Name='' --obj.Brand_Name='' --obj.Manufacturing_Unit_Location='' --obj.Manufacturer_Transfer_Date='' --obj.Wholesaler='' --obj.Wholesaler_Location='' --obj.Wholesaler_Transfer_Date='' --obj.Retailer='' --obj.Retailer_Location=''`
        } 
        else if(userProfileBusiness.usertype === 'Trader') {
            obj = `--obj.to='"Trader"' --obj.Trader '"${userProfileBusiness.firstname + '_' + userProfileBusiness.lastname}"' --obj.Trader_Location='"${(userProfileBusiness.location).replace(/ /g,"_")}"' --obj.Farmer_Transfer_Date='"${now.replace(/ /g,"_")}"'`
            updateUser()
        }
        if(userProfileBusiness.usertype !== 'Manufacturer' && (maxQty - quantity >= 0) && maxQty !== 0) {
            updateProd()
            createNewProdInChannel2(prodId)
        }
        else if(userProfileBusiness.usertype === 'Manufacturer') {
            obj = `--obj.to='"Manufacturer"' --obj.Manufacturer '"${(userProfileBusiness.companyname).replace(/ /g,"_")}"' --obj.Manufacturing_Unit_Location='"${(userProfileBusiness.location).replace(/ /g,"_")}"' --obj.Trader_Transfer_Date='"${now.replace(/ /g,"_")}"'`
            addManufacturer()
            channel = 'channel2'
        }
        invoke('transferProduct', prodId, obj, channel)
    }

    const initiatePayment = async () => {
        await writeOnChain()
        console.log("Payment initialized")
        try {
            const url = "http://localhost:5000/api/payment/orders";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.parse(JSON.stringify({ amount: total }))
            });
            // console.log(response)
            completePayment()
        } catch (error) {
            console.error(error.message)
        }
    }

    const completePayment = () => {
        const amt = total * 100
        const options = {
            key: 'rzp_test_tELMr5dwofTrc1',
            amount: amt,
            currency: 'INR',
            handler: async (response) => {
                try {
                    const verifyurl = 'http://localhost:5000/api/payment/verify'
                    const res = await fetch(verifyurl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json',
                        },
                        body: response
                    })
                    // const data = res.json()
                    console.log(res)
                    history.go(-1)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        const rzpay = new window.Razorpay(options)
        rzpay.open()
    }

    const invoke = async(func, prodId, objp, channel) => {
        try {
            console.log('invoke from checkoutBusiness' + func, prodId)
            const url = "http://localhost:5000/api/blockchain/invoke"
            await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'user': String(userProfileBusiness.username),
                    'func': String(func),
                    'prodId': prodId,
                    'obj': objp,
                    'usertype': String(userProfileBusiness.usertype),
                    'channel': channel
                }
            });
        } catch(error) {
            console.log(error)
        }
    }

    const updateProd = async() => {
        try {
            let objcreate = ''
            console.log('Update product after transaction')
            const now = String(new Date())
            const newId = 'Prod' + now.substring(8,10) + now.substring(11,15) + now.substring(16,18) + now.substring(19,21) + now.substring(22,24)
            console.log('old id: ' + prodId + ' new id: ' + newId)
            const status = ((maxQty - quantity) === 0)? true: false
            console.log(status)
            const url = "http://localhost:5000/api/agroproduct/updateproduct/" + id;
            //eslint-disable-next-line
            const response = await fetch(url,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        productId: newId,
                        quantity: maxQty - quantity,
                        isSatiafied: status
                    })
                }
            );

            const url2 = "http://localhost:5000/api/rawmaterial/createproduct"
            //eslint-disable-next-line
            const response2 = await fetch(url2,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        productId: prodId,
                        productName: productName,
                        price: price,
                        quantity: quantity,
                        manufacturer: '',
                        description: description,
                        user: seller
                    })
                }
            );

            // console.log(sellerCredentials.firstname + '_' + sellerCredentials.lastname)
            const loc = (sellerCredentials.location).replace(/ /g,"_")
            // console.log(loc)
            // console.log(userProfileBusiness.usertype)
            if(userProfileBusiness.usertype === 'Farmer') {
                objcreate = `--obj.productId=${newId} --obj.ProductName=${productName} --obj.Trader '"${sellerCredentials.firstname + '_' + sellerCredentials.lastname}"' --obj.Trader_Location='"${loc}"' --obj.Farmer_Transfer_Date='' --obj.Farmer='' --obj.Field_Location='' --obj.Trader_Transfer_Date='' --obj.Manufacturer='' --obj.Manufactured_Product_Name='' --obj.Brand_Name='' --obj.Manufacturing_Unit_Location='' --obj.Manufacturer_Transfer_Date='' --obj.Wholesaler='' --obj.Wholesaler_Location='' --obj.Wholesaler_Transfer_Date='' --obj.Retailer='' --obj.Retailer_Location=''`
            } 
            else if(userProfileBusiness.usertype === 'Trader') {
                objcreate = `--obj.productId=${newId} --obj.ProductName=${productName} --obj.Farmer '"${sellerCredentials.firstname + '_' + sellerCredentials.lastname}"' --obj.Field_Location='"${loc}"' --obj.Farmer_Transfer_Date='' --obj.Trader='' --obj.Trader_Location='' --obj.Trader_Transfer_Date='' --obj.Manufacturer='' --obj.Manufactured_Product_Name='' --obj.Brand_Name='' --obj.Manufacturing_Unit_Location='' --obj.Manufacturer_Transfer_Date='' --obj.Wholesaler='' --obj.Wholesaler_Location='' --obj.Wholesaler_Transfer_Date='' --obj.Retailer='' --obj.Retailer_Location=''`
            }
            // console.log(objcreate)
            invoke('createProduct', newId, objcreate, 'mychannel')
        } catch(error) {
            console.error(error)
        }
    }

    const getSellerInfo = async() => {
        try {
            const url = "http://localhost:5000/api/businessuser/fetchuserx/"
            const response = await fetch(url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'id': seller
                    }
                }
            );
            const data = await response.json()
            setSellerCredentials(data[0])
            console.log(data[0])
            setSellerContact(data[0].phoneNumber)
        } catch(error) {
            console.error(error)
        }
    }
    
    const addManufacturer = async() => {
        const url = "http://localhost:5000/api/rawmaterial/updateproductbyid/" + id;
        //eslint-disable-next-line
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    manufacturer: userProfileBusiness.username
                })
            }
        );
    }

    const updateUser = async() => {
        const url = "http://localhost:5000/api/agroproduct/updateproduct/" + id;
        //eslint-disable-next-line
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    trader: userProfileBusiness.username
                })
            }
        );
    }

    const createNewProdInChannel2 = async(prodId) => {
        // await query(prodId, 'mychannel')
        // console.log(dataFromBlockchain.productName)
        let obj = `--obj.productId=${prodId} --obj.ProductName='' --obj.Farmer '' --obj.Field_Location='' --obj.Farmer_Transfer_Date='' --obj.Trader='' --obj.Trader_Location='' --obj.Trader_Transfer_Date='' --obj.Manufacturer='' --obj.Manufactured_Product_Name='' --obj.Brand_Name='' --obj.Manufacturing_Unit_Location='' --obj.Manufacturer_Transfer_Date='' --obj.Wholesaler='' --obj.Wholesaler_Location='' --obj.Wholesaler_Transfer_Date='' --obj.Retailer='' --obj.Retailer_Location=''`
        await invoke('createProduct', prodId, obj, 'channel2')
    }

    const query = async(prodId, channel) => {
        try {
            console.log('query from checkoutBusiness' + prodId)
            const url = "http://localhost:5000/api/blockchain/query"
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'user': String(userProfileBusiness.username),
                    'prodId': prodId,
                    'usertype': String(userProfileBusiness.usertype),
                    'channel': channel
                }
            });
            const data = await response.json();
            // console.log(data.substring(42))
            const obj = JSON.parse(data.substring(42))
            setDataFromBlockchain(obj)
            console.log(obj.productName)
        } catch(error) {
            console.log(error)
        }
    }

    const handlePayment = (e) => {
        e.preventDefault()
        initiatePayment()
    }

    const quantityHandler = (e) => {
        e.preventDefault()
        if(e.target.value > maxQty) {
            e.target.value = maxQty
        }
        setQuantity(e.target.value)
    }

    const getSeller = async() => {
        getSellerInfo()
    }

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    useEffect(() => {
        getSeller()
    }, [])

    useEffect(() => {
        getBusinessProfileInfo()
    }, [])

    return (
        <>
            <Navbar />

            <section className="section extra-padding">
                <div className="container">

                    <form>
                        <div className="row">
                            <div className="col-xl-6">
                                {/* <!-- Buyer Info --> */}
                                <h4>Buyer Info</h4>
                                <div className="row">
                                    <div className="form-group col-xl-6">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="First Name" name="fname" className="form-control" defaultValue={userProfileBusiness.firstname} required=""></input>
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Last Name <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Last Name" name="lname" className="form-control" defaultValue={userProfileBusiness.lastname} required=""></input>
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Company Name</label>
                                        <input type="text" placeholder="Company Name (Optional)" name="cname" className="form-control" defaultValue=""></input>
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Country <span className="text-danger">*</span></label>
                                        <select className="form-control">
                                            <option defaultValue="">Select a Country</option>
                                            <option defaultValue="Afghanistan">Afghanistan</option>
                                            <option defaultValue="??land Islands">??land Islands</option>
                                            <option defaultValue="Albania">Albania</option>
                                            <option defaultValue="Algeria">Algeria</option>
                                            <option defaultValue="American Samoa">American Samoa</option>
                                            <option defaultValue="Andorra">Andorra</option>
                                            <option defaultValue="Angola">Angola</option>
                                            <option defaultValue="Anguilla">Anguilla</option>
                                            <option defaultValue="Antarctica">Antarctica</option>
                                            <option defaultValue="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option defaultValue="Argentina">Argentina</option>
                                            <option defaultValue="Armenia">Armenia</option>
                                            <option defaultValue="Aruba">Aruba</option>
                                            <option defaultValue="Australia">Australia</option>
                                            <option defaultValue="Austria">Austria</option>
                                            <option defaultValue="Azerbaijan">Azerbaijan</option>
                                            <option defaultValue="Bahamas">Bahamas</option>
                                            <option defaultValue="Bahrain">Bahrain</option>
                                            <option defaultValue="Bangladesh">Bangladesh</option>
                                            <option defaultValue="Barbados">Barbados</option>
                                            <option defaultValue="Belarus">Belarus</option>
                                            <option defaultValue="Belgium">Belgium</option>
                                            <option defaultValue="Belize">Belize</option>
                                            <option defaultValue="Benin">Benin</option>
                                            <option defaultValue="Bermuda">Bermuda</option>
                                            <option defaultValue="Bhutan">Bhutan</option>
                                            <option defaultValue="Bolivia">Bolivia</option>
                                            <option defaultValue="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                            <option defaultValue="Botswana">Botswana</option>
                                            <option defaultValue="Bouvet Island">Bouvet Island</option>
                                            <option defaultValue="Brazil">Brazil</option>
                                            <option defaultValue="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                            <option defaultValue="Brunei Darussalam">Brunei Darussalam</option>
                                            <option defaultValue="Bulgaria">Bulgaria</option>
                                            <option defaultValue="Burkina Faso">Burkina Faso</option>
                                            <option defaultValue="Burundi">Burundi</option>
                                            <option defaultValue="Cambodia">Cambodia</option>
                                            <option defaultValue="Cameroon">Cameroon</option>
                                            <option defaultValue="Canada">Canada</option>
                                            <option defaultValue="Cape Verde">Cape Verde</option>
                                            <option defaultValue="Cayman Islands">Cayman Islands</option>
                                            <option defaultValue="Central African Republic">Central African Republic</option>
                                            <option defaultValue="Chad">Chad</option>
                                            <option defaultValue="Chile">Chile</option>
                                            <option defaultValue="China">China</option>
                                            <option defaultValue="Christmas Island">Christmas Island</option>
                                            <option defaultValue="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                            <option defaultValue="Colombia">Colombia</option>
                                            <option defaultValue="Comoros">Comoros</option>
                                            <option defaultValue="Congo">Congo</option>
                                            <option defaultValue="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                            <option defaultValue="Cook Islands">Cook Islands</option>
                                            <option defaultValue="Costa Rica">Costa Rica</option>
                                            <option defaultValue="Cote D'ivoire">Cote D'ivoire</option>
                                            <option defaultValue="Croatia">Croatia</option>
                                            <option defaultValue="Cuba">Cuba</option>
                                            <option defaultValue="Cyprus">Cyprus</option>
                                            <option defaultValue="Czech Republic">Czech Republic</option>
                                            <option defaultValue="Denmark">Denmark</option>
                                            <option defaultValue="Djibouti">Djibouti</option>
                                            <option defaultValue="Dominica">Dominica</option>
                                            <option defaultValue="Dominican Republic">Dominican Republic</option>
                                            <option defaultValue="Ecuador">Ecuador</option>
                                            <option defaultValue="Egypt">Egypt</option>
                                            <option defaultValue="El Salvador">El Salvador</option>
                                            <option defaultValue="Equatorial Guinea">Equatorial Guinea</option>
                                            <option defaultValue="Eritrea">Eritrea</option>
                                            <option defaultValue="Estonia">Estonia</option>
                                            <option defaultValue="Ethiopia">Ethiopia</option>
                                            <option defaultValue="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                            <option defaultValue="Faroe Islands">Faroe Islands</option>
                                            <option defaultValue="Fiji">Fiji</option>
                                            <option defaultValue="Finland">Finland</option>
                                            <option defaultValue="France">France</option>
                                            <option defaultValue="French Guiana">French Guiana</option>
                                            <option defaultValue="French Polynesia">French Polynesia</option>
                                            <option defaultValue="French Southern Territories">French Southern Territories</option>
                                            <option defaultValue="Gabon">Gabon</option>
                                            <option defaultValue="Gambia">Gambia</option>
                                            <option defaultValue="Georgia">Georgia</option>
                                            <option defaultValue="Germany">Germany</option>
                                            <option defaultValue="Ghana">Ghana</option>
                                            <option defaultValue="Gibraltar">Gibraltar</option>
                                            <option defaultValue="Greece">Greece</option>
                                            <option defaultValue="Greenland">Greenland</option>
                                            <option defaultValue="Grenada">Grenada</option>
                                            <option defaultValue="Guadeloupe">Guadeloupe</option>
                                            <option defaultValue="Guam">Guam</option>
                                            <option defaultValue="Guatemala">Guatemala</option>
                                            <option defaultValue="Guernsey">Guernsey</option>
                                            <option defaultValue="Guinea">Guinea</option>
                                            <option defaultValue="Guinea-bissau">Guinea-bissau</option>
                                            <option defaultValue="Guyana">Guyana</option>
                                            <option defaultValue="Haiti">Haiti</option>
                                            <option defaultValue="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                            <option defaultValue="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                            <option defaultValue="Honduras">Honduras</option>
                                            <option defaultValue="Hong Kong">Hong Kong</option>
                                            <option defaultValue="Hungary">Hungary</option>
                                            <option defaultValue="Iceland">Iceland</option>
                                            <option defaultValue="India">India</option>
                                            <option defaultValue="Indonesia">Indonesia</option>
                                            <option defaultValue="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                            <option defaultValue="Iraq">Iraq</option>
                                            <option defaultValue="Ireland">Ireland</option>
                                            <option defaultValue="Isle of Man">Isle of Man</option>
                                            <option defaultValue="Israel">Israel</option>
                                            <option defaultValue="Italy">Italy</option>
                                            <option defaultValue="Jamaica">Jamaica</option>
                                            <option defaultValue="Japan">Japan</option>
                                            <option defaultValue="Jersey">Jersey</option>
                                            <option defaultValue="Jordan">Jordan</option>
                                            <option defaultValue="Kazakhstan">Kazakhstan</option>
                                            <option defaultValue="Kenya">Kenya</option>
                                            <option defaultValue="Kiribati">Kiribati</option>
                                            <option defaultValue="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                            <option defaultValue="Korea, Republic of">Korea, Republic of</option>
                                            <option defaultValue="Kuwait">Kuwait</option>
                                            <option defaultValue="Kyrgyzstan">Kyrgyzstan</option>
                                            <option defaultValue="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                            <option defaultValue="Latvia">Latvia</option>
                                            <option defaultValue="Lebanon">Lebanon</option>
                                            <option defaultValue="Lesotho">Lesotho</option>
                                            <option defaultValue="Liberia">Liberia</option>
                                            <option defaultValue="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                            <option defaultValue="Liechtenstein">Liechtenstein</option>
                                            <option defaultValue="Lithuania">Lithuania</option>
                                            <option defaultValue="Luxembourg">Luxembourg</option>
                                            <option defaultValue="Macao">Macao</option>
                                            <option defaultValue="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                            <option defaultValue="Madagascar">Madagascar</option>
                                            <option defaultValue="Malawi">Malawi</option>
                                            <option defaultValue="Malaysia">Malaysia</option>
                                            <option defaultValue="Maldives">Maldives</option>
                                            <option defaultValue="Mali">Mali</option>
                                            <option defaultValue="Malta">Malta</option>
                                            <option defaultValue="Marshall Islands">Marshall Islands</option>
                                            <option defaultValue="Martinique">Martinique</option>
                                            <option defaultValue="Mauritania">Mauritania</option>
                                            <option defaultValue="Mauritius">Mauritius</option>
                                            <option defaultValue="Mayotte">Mayotte</option>
                                            <option defaultValue="Mexico">Mexico</option>
                                            <option defaultValue="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                            <option defaultValue="Moldova, Republic of">Moldova, Republic of</option>
                                            <option defaultValue="Monaco">Monaco</option>
                                            <option defaultValue="Mongolia">Mongolia</option>
                                            <option defaultValue="Montenegro">Montenegro</option>
                                            <option defaultValue="Montserrat">Montserrat</option>
                                            <option defaultValue="Morocco">Morocco</option>
                                            <option defaultValue="Mozambique">Mozambique</option>
                                            <option defaultValue="Myanmar">Myanmar</option>
                                            <option defaultValue="Namibia">Namibia</option>
                                            <option defaultValue="Nauru">Nauru</option>
                                            <option defaultValue="Nepal">Nepal</option>
                                            <option defaultValue="Netherlands">Netherlands</option>
                                            <option defaultValue="Netherlands Antilles">Netherlands Antilles</option>
                                            <option defaultValue="New Caledonia">New Caledonia</option>
                                            <option defaultValue="New Zealand">New Zealand</option>
                                            <option defaultValue="Nicaragua">Nicaragua</option>
                                            <option defaultValue="Niger">Niger</option>
                                            <option defaultValue="Nigeria">Nigeria</option>
                                            <option defaultValue="Niue">Niue</option>
                                            <option defaultValue="Norfolk Island">Norfolk Island</option>
                                            <option defaultValue="Northern Mariana Islands">Northern Mariana Islands</option>
                                            <option defaultValue="Norway">Norway</option>
                                            <option defaultValue="Oman">Oman</option>
                                            <option defaultValue="Pakistan">Pakistan</option>
                                            <option defaultValue="Palau">Palau</option>
                                            <option defaultValue="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                            <option defaultValue="Panama">Panama</option>
                                            <option defaultValue="Papua New Guinea">Papua New Guinea</option>
                                            <option defaultValue="Paraguay">Paraguay</option>
                                            <option defaultValue="Peru">Peru</option>
                                            <option defaultValue="Philippines">Philippines</option>
                                            <option defaultValue="Pitcairn">Pitcairn</option>
                                            <option defaultValue="Poland">Poland</option>
                                            <option defaultValue="Portugal">Portugal</option>
                                            <option defaultValue="Puerto Rico">Puerto Rico</option>
                                            <option defaultValue="Qatar">Qatar</option>
                                            <option defaultValue="Reunion">Reunion</option>
                                            <option defaultValue="Romania">Romania</option>
                                            <option defaultValue="Russian Federation">Russian Federation</option>
                                            <option defaultValue="Rwanda">Rwanda</option>
                                            <option defaultValue="Saint Helena">Saint Helena</option>
                                            <option defaultValue="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                            <option defaultValue="Saint Lucia">Saint Lucia</option>
                                            <option defaultValue="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                            <option defaultValue="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                            <option defaultValue="Samoa">Samoa</option>
                                            <option defaultValue="San Marino">San Marino</option>
                                            <option defaultValue="Sao Tome and Principe">Sao Tome and Principe</option>
                                            <option defaultValue="Saudi Arabia">Saudi Arabia</option>
                                            <option defaultValue="Senegal">Senegal</option>
                                            <option defaultValue="Serbia">Serbia</option>
                                            <option defaultValue="Seychelles">Seychelles</option>
                                            <option defaultValue="Sierra Leone">Sierra Leone</option>
                                            <option defaultValue="Singapore">Singapore</option>
                                            <option defaultValue="Slovakia">Slovakia</option>
                                            <option defaultValue="Slovenia">Slovenia</option>
                                            <option defaultValue="Solomon Islands">Solomon Islands</option>
                                            <option defaultValue="Somalia">Somalia</option>
                                            <option defaultValue="South Africa">South Africa</option>
                                            <option defaultValue="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                            <option defaultValue="Spain">Spain</option>
                                            <option defaultValue="Sri Lanka">Sri Lanka</option>
                                            <option defaultValue="Sudan">Sudan</option>
                                            <option defaultValue="Suriname">Suriname</option>
                                            <option defaultValue="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                            <option defaultValue="Swaziland">Swaziland</option>
                                            <option defaultValue="Sweden">Sweden</option>
                                            <option defaultValue="Switzerland">Switzerland</option>
                                            <option defaultValue="Syrian Arab Republic">Syrian Arab Republic</option>
                                            <option defaultValue="Taiwan, Province of China">Taiwan, Province of China</option>
                                            <option defaultValue="Tajikistan">Tajikistan</option>
                                            <option defaultValue="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                            <option defaultValue="Thailand">Thailand</option>
                                            <option defaultValue="Timor-leste">Timor-leste</option>
                                            <option defaultValue="Togo">Togo</option>
                                            <option defaultValue="Tokelau">Tokelau</option>
                                            <option defaultValue="Tonga">Tonga</option>
                                            <option defaultValue="Trinidad and Tobago">Trinidad and Tobago</option>
                                            <option defaultValue="Tunisia">Tunisia</option>
                                            <option defaultValue="Turkey">Turkey</option>
                                            <option defaultValue="Turkmenistan">Turkmenistan</option>
                                            <option defaultValue="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                            <option defaultValue="Tuvalu">Tuvalu</option>
                                            <option defaultValue="Uganda">Uganda</option>
                                            <option defaultValue="Ukraine">Ukraine</option>
                                            <option defaultValue="United Arab Emirates">United Arab Emirates</option>
                                            <option defaultValue="United Kingdom">United Kingdom</option>
                                            <option defaultValue="United States">United States</option>
                                            <option defaultValue="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                            <option defaultValue="Uruguay">Uruguay</option>
                                            <option defaultValue="Uzbekistan">Uzbekistan</option>
                                            <option defaultValue="Vanuatu">Vanuatu</option>
                                            <option defaultValue="Venezuela">Venezuela</option>
                                            <option defaultValue="Viet Nam">Viet Nam</option>
                                            <option defaultValue="Virgin Islands, British">Virgin Islands, British</option>
                                            <option defaultValue="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                            <option defaultValue="Wallis and Futuna">Wallis and Futuna</option>
                                            <option defaultValue="Western Sahara">Western Sahara</option>
                                            <option defaultValue="Yemen">Yemen</option>
                                            <option defaultValue="Zambia">Zambia</option>
                                            <option defaultValue="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Street Address 1 <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Street Address One" name="addr-1" className="form-control" defaultValue={userProfileBusiness.addressl1} required=""></input>
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Street Address 2</label>
                                        <input type="text" placeholder="Street Address Two (Optional)" name="addr-1" className="form-control" defaultValue={userProfileBusiness.addressl2}></input>
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Town / City <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Town/City" name="town" className="form-control" defaultValue={userProfileBusiness.landmark} required=""></input>
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Phone Number <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Phone Number" name="phone" className="form-control" defaultValue={userProfileBusiness.phoneNumber} required=""></input>
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Email Address <span className="text-danger">*</span></label>
                                        <input type="email" placeholder="Email Address" name="email" className="form-control" defaultValue={userProfileBusiness.email} required=""></input>
                                    </div>
                                    <div className="form-group col-xl-12 mb-0">
                                        <label>Order Notes</label>
                                        <textarea name="name" rows="5" className="form-control" placeholder="Order Notes (Optional)"></textarea>
                                    </div>
                                </div>

                                {/* <!-- /Buyer Info --> */}

                            </div>
                            <div className="col-xl-6 checkout-billing">
                                {/* <!-- Billing Details --> */}
                                <h4>Billing Details</h4>
                                <table className="ct-responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Qunantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-title="Product">
                                                <div className="cart-product-wrapper">
                                                    <img src={thumb} alt="prod1"></img>
                                                    <div className="cart-product-body">
                                                        <h6> <a href="/">{productName}</a> </h6>
                                                        <p>{seller}</p>
                                                        <p>{sellerContact}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            {userProfileBusiness.usertype !== 'Manufacturer' && <td data-title="Quantity"> <input type="number" name="quantity" onChange={quantityHandler} defaultValue={quantity} min={1} max={maxQty} required/> KG</td>}
                                            {userProfileBusiness.usertype === 'Manufacturer' && <td data-title="Quantity"> <input type="number" name="quantity" defaultValue={maxQty} min={maxQty} max={maxQty} required/> KG</td>}
                                            <td data-title="Total">??? {total}</td>
                                        </tr>
                                        <tr>
                                            <td data-title="Product">
                                                <div className="cart-product-wrapper">
                                                    <div className="cart-product-body">
                                                        <h6> <a href="/">Grand Total</a> </h6>
                                                        <p>Shipping Charges: 40 ???</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-title="Quantity"></td>
                                            <td data-title="Total">{total} ???</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p style={{ "marginTop": "50px" }} className="small">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a className="btn-link" href="/">privacy policy.</a> </p>
                                <button onClick={handlePayment} className="btn-custom primary btn-block">Place Order</button>

                                {/* <!-- /Billing Details --> */}

                            </div>
                        </div>
                    </form>

                </div>
            </section>

            <Footer />
        </>
    )
}