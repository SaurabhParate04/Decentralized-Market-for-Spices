import React, { useEffect, useState, useContext, useRef } from 'react'
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/NavbarBusiness';
import './ProductForm.css'
import cardImage from '../images/Cloves.jpg'
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loading from '../components/Loading';
import BusinessUserContext from '../context/User/BusinessUserContext';
import Dropdown from '../components/Dropdown';

export default function ManufacturerProductForm(props) {

    const context = useContext(BusinessUserContext)
    const { getBusinessProfileInfo, userProfileBusiness } = context

    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);

    const history = useHistory();

    const location = useLocation()
    const event = location.state.button_name
    const info = location.state.info
    const id = location.state.id

    let obj = ''
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const checkoutModalToggle = useRef();
    const [ingredientsQuantity, setIngredientsQuantity] = useState(new Map())
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalQtyStr, setTotalQtyStr] = useState('')
    const [ingredientsUsed, setIngredientsUsed] = useState('')
    const [totalNum, setTotalNum] = useState(0)

    const [credentialProduct, setcredentialProduct] = useState({
        productName: info.productName || "",
        description: info.description || "",
        quantity: info.quantity || 0,
    })

    //cover-image
    const [img, setImg] = useState(cardImage)
    const [coverImageUpload, setCoverImageUpload] = useState(false)

    const [submitPressed, setSubmitPressed] = useState(false)

    const [uploadingCoverImage, setUploadingCoverImage] = useState(false)
    const [progressCoverImage, setProgressCoverImage] = useState(0)

    const coverImageHandler = (e) => {
        try {
            let file = e.target.files[0];
            setImg(file);
            setCoverImageUpload(true)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0 })
        getBusinessProfileInfo()
    }, [])

    useEffect(() => {
        // To reflect changes in the state of coverImageUpload and charityImgsUpload
        console.log("update cover image:" + coverImageUpload)
        // console.log("update carousel images: " + charityImgsUpload)
    }, [coverImageUpload])


    const onChangeCharity = async (e) => {
        setcredentialProduct({
            ...credentialProduct, [e.target.name]: e.target.value
        })
    }

    const onSubmitCharity = async (e) => {
        e.preventDefault();
        try {
            const now = String(new Date())
            const prodId = 'Prod' + now.substring(8,10) + now.substring(11,15) + now.substring(16,18) + now.substring(19,21) + now.substring(22,24)
            setSubmitPressed(true)
            if (event === "Add New") {
                const url = "http://localhost:5000/api/manufacturedproduct/createproduct"

                //eslint-disable-next-line
                const response = await fetch(url,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            productId: prodId,
                            productName: credentialProduct.productName,
                            productBrand: userProfileBusiness.companyname,
                            description: credentialProduct.description,
                            quantity: totalQuantity,
                            ingredientsUsed: ingredientsUsed,
                            packetSize: credentialProduct.packetSize,
                            price: credentialProduct.price,
                            manufacturer: userProfileBusiness.username
                        })
                    }
                );
                updateFunc(ingredientsUsed)

                obj = `--obj.productId=${prodId} --obj.ProductName='' --obj.Farmer '' --obj.Field_Location='' --obj.Farmer_Transfer_Date='' --obj.Trader='' --obj.Trader_Location='' --obj.Trader_Transfer_Date='' --obj.Manufacturer='"${userProfileBusiness.firstname + '_' + userProfileBusiness.lastname}"' --obj.Manufactured_Product_Name='"${(credentialProduct.productName).replace(/ /g,"_")}"' --obj.Brand_Name='"${(userProfileBusiness.companyname).replace(/ /g,"_")}"' --obj.Manufactured_Product_Ingredients='"${(ingredientsUsed).replace(/ /g,"_")}"' --obj.Manufacturing_Unit_Location='"${(userProfileBusiness.location).replace(/ /g,"_")}"' --obj.Manufacturer_Transfer_Date='' --obj.Wholesaler='' --obj.Wholesaler_Location='' --obj.Wholesaler_Transfer_Date='' --obj.Retailer='' --obj.Retailer_Location=''`
                invoke('createProduct', prodId, obj, 'channel3')
                
            }
            else if (event === "update") {
                console.log(credentialProduct)
                const url = "http://localhost:5000/api/agroproduct/updateproduct/" + info.id;
                //eslint-disable-next-line
                const response = await fetch(url,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            productName: credentialProduct.productName,
                            description: credentialProduct.description,
                            price: credentialProduct.price,
                            quantity: credentialProduct.quantity,
                        })
                    }
                );
            }

            if (coverImageUpload) {
                let coverImgRef = ref(firebaseStorage, `agroproductcover/${credentialProduct.productName + ' ' + userProfileBusiness._id}`);
                const uploadTask = uploadBytesResumable(coverImgRef, img)
                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion

                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // console.log('Product cover image upload is ' + progress + '% done');
                        setUploadingCoverImage(true)
                        setProgressCoverImage(progress)

                        //eslint-disable-next-line
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Product cover image upload is paused');
                                break;
                            case 'running':
                                console.log('Product cover image upload is running');
                                break;
                        }
                    },
                    (error) => {
                        console.log('Error while uploading cover-image: ', error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('Cover image available at', downloadURL);
                        });
                        setUploadingCoverImage(false)
                    });
            }
            
        } catch (error) {
            console.error(error.message)
        }
    }

    // useEffect(() => {
    //     if (submitPressed && progressCoverImage === 100 && coverImageUpload) {
    //         history.go(-1)
    //     }
    //     else if (submitPressed && !coverImageUpload) {
    //         history.go(-1)
    //     }
    // }, [progressCoverImage, submitPressed, coverImageUpload, history])


    const updateFunc = async(ingredients) => {
        const num = String(ingredients).length / 17
        let start=0
        let curr = 0 
        for(let i=0; i<num; i++) {
            let key = String(ingredients).substring(start, start+16)
            let n = totalQtyStr.indexOf(" ", curr);
            let qty = Number(totalQtyStr.substring(curr, n))
            console.log(qty)
            console.log(key)
            updateQuantityFunc(key, qty)
            start = start + 17
            curr = n+1;
        }
    }

    const updateQuantityFunc = async (prodId, qty) => {
        // console.log(ingredientsQuantity.get(prodId), prodId, ingredientsQuantity.get('Prod092022153939'))
        const url = "http://localhost:5000/api/rawmaterial/updateproduct/"
        //eslint-disable-next-line
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'prodId': prodId
                },
                body: JSON.stringify({
                    $inc: {quantity: -qty}
                })
            }
        );
    }

    const invoke = async(func, prodId, obj, channel) => {
        try {
            // console.log('invoke from productform' + userProfileBusiness.username)
            const url = "http://localhost:5000/api/blockchain/invoke"
            await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'user': String(userProfileBusiness.username),
                    'func': func,
                    'prodId': prodId,
                    'obj': obj,
                    'usertype': String(userProfileBusiness.usertype),
                    'channel': channel
                }
            });
        } catch(error) {
            console.log(error)
        }
    }

    const clearState = () => {
        setIngredientsQuantity(new Map())
    }

    const openModal = () => {
        checkoutModalToggle.current.click();
    }

    const handleInput = (prod, qty, e) => {
        let val = e.target.value
        if(val > qty) {
            setIngredientsQuantity(new Map(ingredientsQuantity.set(prod, qty)))
        } else if(val < 0) {
            setIngredientsQuantity(new Map(ingredientsQuantity.set(prod, 0)))
        } else {
            setIngredientsQuantity(new Map(ingredientsQuantity.set(prod, val)))
        }
    }

    const handleRange = (prod, qty, e) => {
        let val = e.target.value
        if(val > qty) {
            setIngredientsQuantity(new Map(ingredientsQuantity.set(prod, qty)))
        } else if(val < 0) {
            setIngredientsQuantity(new Map(ingredientsQuantity.set(prod, 0)))
        } else {
            setIngredientsQuantity(new Map(ingredientsQuantity.set(prod, val)))
        }
    }

    const handleQty = () => {
        checkoutModalToggle.current.click()
        let total = 0
        let totalstr = ''
        let prod = ''
        let num = 0
        for (let [key, value] of ingredientsQuantity) {
            console.log(key + " = " + value);
            total += Number(value)
            prod += String(key) + ' '
            totalstr += String(value) + ' '
            num += 1
        }
        setTotalQuantity(total)
        setIngredientsUsed(prod)
        setTotalQtyStr(totalstr)
        setTotalNum(num)
    }

    return (
        <>

            <button type="button" ref={checkoutModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={clearState}></button>

            <div className="modal fade modal-cont" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{borderRadius:"0px", border:"none"}}>
                        <div className="modal-header paymentModalHeader">
                            <h5 className="modal-title " id="staticBackdropLabel">Manage Ingredients</h5>
                            <button type="button" style={{color:"white"}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="row">
                            {
                                selectedIngredients.map((e, key) => {
                                    let prod = e.substring(0, e.indexOf("|"))
                                    let quantity = Number(e.substring(e.indexOf("|")+1, e.indexOf("?")))
                                    let prodId = e.substring(e.indexOf("?")+1)
                                    console.log(prodId)
                                    return (
                                    <div key={key}>
                                        <div className="modal-body">
                                            <div style={{"justifyContent": "space-between"}} className="d-flex flex-row">
                                                <div>
                                                    <span><strong>Product&nbsp;:</strong></span> 
                                                    <span><strong>{ '    ' + prod}</strong></span>
                                                </div>
                                                <div style={{"width": "9rem"}}><strong>Quantity : <input className='inputInvalid' style={{width: "40%"}} type="number"  max={quantity} min={1} value={ingredientsQuantity.get(prodId)} onChange={(e)=>handleInput(prodId, Number(quantity), e)}  ></input> </strong> </div>
                                            </div>
                                        </div>
                                        <div style={{"width": "30.6rem", "padding": "0 1.5rem"}} className="modal-body">
                                            <input type="range" className="form-range" min="0" max={quantity} step="1" id="customRange1" value={ingredientsQuantity.get(prodId)} onChange={(e)=>handleRange(prodId, Number(quantity), e)} ></input>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary donateBtn" style={{backgroundColor: "#00ffc3", color: "black"}} onClick={handleQty}>Submit</button>
                            <button type="button" style={{border:"none",backgroundColor:"transparent", margin:"0px 20px", lineHeight:'1.5'}} data-bs-dismiss="modal" onClick={clearState}>Cancel</button>
                            {/* {onClick={(e)=>{updateQuantity(quantityRaised, myAmount, card._id)}} */}
                        </div>
                    </div>
                </div>
            </div>

            {
                (uploadingCoverImage) &&
                <Loading
                    progressCoverImage={progressCoverImage}
                    uploadingCoverImage={uploadingCoverImage}
                />
            }

            <Navbar />

            <div className={uploadingCoverImage ? "cf-container charity-form loading-blur" : "cf-container charity-form"}>
            <div className='overlay'>
                <div className="cf-container_det">
                        <div className="cf-title">Product Form</div>
                        <div className="cf-content">
                            <form onSubmit={onSubmitCharity} onChange={onChangeCharity}>
                                <div className="user-details">
                                    <div className="input-box" style={{ width: "100%" }}>
                                        <span className="details">Product Brand</span>
                                        <input type="text" name="productBrand" placeholder="Enter Product Brand" defaultValue={userProfileBusiness.companyname || ""} required readOnly />
                                    </div>
                                    <div className="input-box" style={{ width: "100%" }}>
                                        <span className="details">Product Name</span>
                                        <input type="text" name="productName" placeholder="Enter Product Name" defaultValue={info.productName || ""} required />
                                    </div>
                                    <div className="input-box" style={{ width: "48%" }}>
                                        <span className="details">Packet size (in grams)</span>
                                        <input type="number" name="packetSize" placeholder="Enter Packet Size (in grams)" defaultValue={info.packetSize || ""} required />
                                    </div>
                                    <div className="input-box" style={{ width: "48%" }}>
                                        <span className="details">Price (per packet)</span>
                                        <input type="number" name="price" placeholder="Enter Price (per packet)" defaultValue={info.price || ""} required />
                                    </div>
                                    <div className="input-box" style={{ width: "100%" }}>
                                        <span className="details">Ingredients Required</span>
                                        <div className="select">
                                            <Dropdown username={userProfileBusiness.username} setSelectedIngredients={setSelectedIngredients}/>
                                        </div>
                                    </div>
                                    {/* <div className="input-box" style={{ width: "100%" }}>
                                        <span className="details">Create Varients</span>
                                        <textarea type="text" name="description" rows="3" placeholder="Ex. If you want 400 Pcs of 100g and 500 Pcs of 200g type '400x100g;500x200g'" required style={{ fontSize: "13px" }}></textarea>
                                    </div> */}
                                    <div className="input-box" style={{ width: "100%" }}>
                                        <span className="details">Description</span>
                                        <textarea type="text" name="description" rows="3" placeholder="Enter description" defaultValue={info.description || ""} required style={{ fontSize: "13px" }}></textarea>
                                    </div>
                                    <div className="input-box" onClick={openModal}>
                                        <span className="details">Select quantities for Ingredients</span>
                                        <label htmlFor="manage-ingredients" className="custom-file-upload">
                                            Manage quantities for Ingredients
                                        </label>
                                        <input name="manage-ingredients" style={{ display: "none" }} />
                                    </div>












                                    {/* Add field for packet size one fixed in grams, add field for price per packet Add these things in model also add manufacturer field to catch username; work on manufacturedproduct page change fetchallproducts to fetch products where you are manufacturer create explore page for wholesaler there fetchallproducts from manufacturedproducts create myproducts for wholesaler; add to products schema for consumer side whatever the one and only retailer buys */}
                                    <div className="input-box">
                                        <span className="details">Select Product Image</span>
                                        <label htmlFor="cover-img-upload" className="custom-file-upload">
                                            <i className="fa fa-cloud-upload"></i>  Upload Sample Image
                                        </label>
                                        <input id="cover-img-upload" accept="image/*" name="imageURL" type="file" onChange={coverImageHandler} style={{ display: "none" }} />
                                    </div>
                                </div>
                                <div className="button">
                                    <input type="submit" defaultValue={props.button_name} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}