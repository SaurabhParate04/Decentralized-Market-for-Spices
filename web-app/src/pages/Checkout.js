import React from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import thumb from '../images/Cloves.jpg'

export default function ProductDetails(props) {

    const usercart = props.location.state.usercart
    const quantity = props.location.state.quantity
    const total = props.location.state.total

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <>
        <Navbar/>
        
        <section className="section extra-padding">
            <div className="container">

                <form method="post">
                    <div className="row">
                        <div className="col-xl-6">
                            {/* <!-- Buyer Info --> */}
                            <h4>Buyer Info</h4>
                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label>First Name <span className="text-danger">*</span></label>
                                    <input type="text" placeholder="First Name" name="fname" className="form-control" defaultValue="" required=""></input>
                                </div>
                                <div className="form-group col-xl-6">
                                    <label>Last Name <span className="text-danger">*</span></label>
                                    <input type="text" placeholder="Last Name" name="lname" className="form-control" defaultValue="" required=""></input>
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
                                        <option defaultValue="Åland Islands">Åland Islands</option>
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
                                    <input type="text" placeholder="Street Address One" name="addr-1" className="form-control" defaultValue="" required=""></input>
                                </div>
                                <div className="form-group col-xl-6">
                                    <label>Street Address 2</label>
                                    <input type="text" placeholder="Street Address Two (Optional)" name="addr-1" className="form-control" defaultValue=""></input>
                                </div>
                                <div className="form-group col-xl-12">
                                    <label>Town / City <span className="text-danger">*</span></label>
                                    <input type="text" placeholder="Town/City" name="town" className="form-control" defaultValue="" required=""></input>
                                </div>
                                <div className="form-group col-xl-6">
                                    <label>Phone Number <span className="text-danger">*</span></label>
                                    <input type="text" placeholder="Phone Number" name="phone" className="form-control" defaultValue="" required=""></input>
                                </div>
                                <div className="form-group col-xl-6">
                                    <label>Email Address <span className="text-danger">*</span></label>
                                    <input type="email" placeholder="Email Address" name="email" className="form-control" defaultValue="" required=""></input>
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
                            {
                                usercart.map((e, key) => {
                                    return(
                                        <tr>
                                            <td data-title="Product">
                                            <div className="cart-product-wrapper">
                                                <img src={thumb} alt="prod1"></img>
                                                <div className="cart-product-body">
                                                    <h6> <a href="/">{e.productBrand + ' ' + e.productName}</a> </h6>
                                                    <p>{e.varient}</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td data-title="Quantity"> x {quantity[e.productBrand + ' ' + e.productName + ' ' + e.varient] / e.price} </td>
                                            <td data-title="Total">{quantity[e.productBrand + ' ' + e.productName + ' ' + e.varient]} ₹</td>
                                        </tr>
                                    )
                                })
                            }
                                <tr>
                                    <td data-title="Product">
                                    <div className="cart-product-wrapper">
                                        <div className="cart-product-body">
                                            <h6> <a href="/">Grand Total</a> </h6>
                                            <p>Shipping Charges: 40 ₹</p>
                                        </div>
                                    </div>
                                    </td>
                                    <td data-title="Quantity"></td>
                                    <td data-title="Total">{total} ₹</td>
                                </tr>
                            </tbody>
                        </table>

                        <p style={{"marginTop": "50px"}} className="small">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a className="btn-link" href="/">privacy policy.</a> </p>
                        <button type="submit" className="btn-custom primary btn-block">Place Order</button>

                        {/* <!-- /Billing Details --> */}

                        </div>
                    </div>
                </form>

            </div>
        </section>
        
        <Footer/>
        </>
    )
}