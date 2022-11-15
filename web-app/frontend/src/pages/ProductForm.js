import React, { useEffect, useState, useContext } from 'react'
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

export default function ProductForm(props) {

    const context = useContext(BusinessUserContext)
    const { getBusinessProfileInfo, userProfileBusiness } = context
    const userid = userProfileBusiness._id
    const action = userProfileBusiness.usertype

    useEffect(() => {
        window.scrollTo({ top: 0 })
        getBusinessProfileInfo()
    }, [])

    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);

    const history = useHistory();

    const location = useLocation()
    const event = location.state.button_name
    const info = location.state.info

    const [credentialProduct, setcredentialProduct] = useState({
        productName: info.productName || "",
        category: info.category || "",
        description: info.description || "",
        price: info.price || "",
        quantity: info.quantity || ""
    })

    //cover-image
    const [img, setImg] = useState(cardImage)
    const [coverImageUpload, setCoverImageUpload] = useState(false)

    const [submitPressed, setSubmitPressed] = useState(false)

    const [uploadingCoverImage, setUploadingCoverImage] = useState(false)
    const [progressCoverImage, setProgressCoverImage] = useState(0)

    const [category, setCategory] = useState(credentialProduct.category || "Leaves")

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
            setSubmitPressed(true)
            if (event === "Add New") {
                const url = "http://localhost:5000/api/agroproduct/createproduct"

                //eslint-disable-next-line
                const response = await fetch(url,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            productName: credentialProduct.productName,
                            category: category,
                            description: credentialProduct.description,
                            price: credentialProduct.price,
                            quantity: credentialProduct.quantity,
                            action: action,
                            user: userid
                        })
                    }
                );
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
                            category: category,
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
                    // console.log('Charity cover image upload is ' + progress + '% done');
                    setUploadingCoverImage(true)
                    setProgressCoverImage(progress)

                    //eslint-disable-next-line
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Charity cover image upload is paused');
                        break;
                    case 'running':
                        console.log('Charity cover image upload is running');
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
            if(!coverImageUpload) {
                history.go(-1)
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        if(submitPressed && progressCoverImage === 100 && coverImageUpload) {
            history.go(-2)
        }
        else if(submitPressed && !coverImageUpload) {
            history.go(-2)
        }
        else if(submitPressed && coverImageUpload) {
            if(progressCoverImage === 100) {
                history.go(-2)
            }
        }
    }, [progressCoverImage])

    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }

    return (
        <>
            {
                (uploadingCoverImage) && 
                <Loading 
                    progressCoverImage={progressCoverImage}
                    uploadingCoverImage={uploadingCoverImage}
                />
            }

            <Navbar />

            <div className={uploadingCoverImage ? "cf-container charity-form loading-blur" : "cf-container charity-form"}>
                <div className="cf-container_det">
                    <div className="cf-title">Product Form</div>
                    <div className="cf-content">
                        <form onSubmit={onSubmitCharity} onChange={onChangeCharity}>
                            <div className="user-details">
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Product Name</span>
                                    <input type="text" name="productName" placeholder="Enter Product Name" defaultValue={info.productName || ""} required />
                                </div>
                                {/* <div className="input-box" style={{width:"100%"}}>
                                    <span className="details">Cause</span>
                                    <input type="text" name="cause" placeholder="Enter Cause" defaultValue={info.cause || ""} required />
                                </div> */}
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Category</span>
                                    <div className="select">
                                        <select className="form-select select-box select-wrapper" name="cause" defaultValue={category || "miscellaneous"} onChange={categoryHandler} required>
                                            <option value="Leaves">Leaves</option>
                                            <option value="Seeds">Seeds</option>
                                            <option value="Barks">Barks</option>
                                            <option value="Flowers/Buds">Flowers/Buds</option>
                                            <option value="Fruits">Fruits</option>
                                            <option value="Bulbs">Bulbs</option>
                                            <option value="Roots">Roots</option>
                                            <option value="Aril">Aril</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Description</span>
                                    <textarea type="text" name="description" rows="3" placeholder="Enter description" defaultValue={info.description || ""} required style={{ fontSize: "13px" }}></textarea>
                                </div>
                                {/* <div className="input-box">
                                    <span className="details">State</span>
                                    <input type="text" name="state" placeholder="Enter State" defaultValue={info.state || ""} required />
                                </div> */}
                                <div className="input-box">
                                    <span className="details">Price</span>
                                    <input type="number" name="price" placeholder="Enter the price per KG" defaultValue={info.price || ""} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Quantity</span>
                                    <input type="number" name="quantity" placeholder="Enter the quantity in KG" defaultValue={info.quantity || ""} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Select Cover Image</span>
                                    <label htmlFor="cover-img-upload" className="custom-file-upload">
                                        <i className="fa fa-cloud-upload"></i>  Upload Sample Image
                                    </label>
                                    <input id="cover-img-upload" accept="image/*" name="imageURL" type="file" onChange={coverImageHandler} style={{ display: "none" }} />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" defaultValue={props.button_name}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}