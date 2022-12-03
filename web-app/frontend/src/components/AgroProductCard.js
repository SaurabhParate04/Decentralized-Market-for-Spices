import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';

import coverImg from '../images/No_Image.jpg'
import prodImg from '../images/Cloves.jpg'
import orderComplete from '../images/Order_complete.png'

import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import userContext from '../context/User/BusinessUserContext';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';


const AgroProductCard = (props) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);
    const {productName, description, price, quantity, category, user, id, myProducts, usertype, quantityRaised, openModal, isSatisfied, prodId, originalQty, manufacturer} = props;
    const [Image, setImage] = useState()
    const context = useContext(userContext);
    const {getBusinessProfileInfo, userProfileBusiness} = context

    useEffect(() => {
        getCardInfo();
        getBusinessProfileInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const getCardInfo = async() => {
        try {
            let imgLoaded = await getDownloadURL( ref(firebaseStorage, `agroproductcover/${productName + ' ' + user}`))
            setImage(imgLoaded)
        } catch(FirebaseError) {
            setImage(coverImg)
        } finally {

        }
    }

    return (
        <>
        <div className={`${(isSatisfied && usertype !== 'Manufacturer')? "ct-product agro-prod-card card-faded": "ct-product agro-prod-card"}`}>
            <div className="ct-product-thumbnail">
                <a href="/"><img src={Image} alt="Product Thumbnail"></img></a>
                <div className="ct-product-controls">
                    <div>
                        {
                            !isSatisfied && myProducts && <Link to={{pathname:"/business/productform", state:{button_name:"update", info:{productName:productName, category:category, description:description, price:price, quantity:quantity, id:id}}}} className="btn-custom secondary">Update Now <i className="fas fa-arrow-right"></i> </Link>
                        }
                        {
                            !isSatisfied && !myProducts && usertype === "Farmer" && <button onClick={() => openModal(id)} className="btn-custom secondary">Contact Buyer & Sell<i className="fas fa-arrow-right"></i> </button>
                        }
                        {
                            !isSatisfied && !myProducts && usertype === "Trader" && <Link to={{pathname:"/business/checkout", state:{prodId:prodId, productName:productName, category:category, description:description, price:price, quantity:quantity, seller:user, usertype:usertype, id:id}}} className="btn-custom secondary">Buy Now<i className="fas fa-arrow-right"></i> </Link>
                        }
                        {
                            isSatisfied && usertype !== "Manufacturer" && <img src={orderComplete} alt="Order is completed" width={"100px"} style={{"opacity":"1"}}></img>
                        }
                        {
                            isSatisfied && !myProducts && usertype === "Manufacturer" && manufacturer === '' && <Link to={{pathname:"/business/checkout", state:{prodId:prodId, productName:productName, category:category, description:description, price:(price + price * 0.2), quantity:originalQty, seller:user, usertype:usertype, id:id}}} className="btn-custom secondary">Buy Now<i className="fas fa-arrow-right"></i> </Link>
                        }
                        {
                            isSatisfied && !myProducts && usertype === "Manufacturer" && manufacturer !== '' && <img src={orderComplete} alt="Order is completed" width={"100px"} style={{"opacity":"1"}}></img>
                        }
                        {
                            isSatisfied && myProducts && usertype === "Manufacturer" && manufacturer !== '' && <div></div>
                        }
                    </div>
                </div>
            </div>
            <div className="ct-product-body">
                <div style={{"display":"flex", "justifyContent":"space-between"}}>
                    <h5 className="product-title"> <a href="/">{productName}</a> </h5>
                    {(isSatisfied && usertype !== 'Manufacturer') &&<h7 className="product-title">Order is completed</h7>}
                </div>
                <div style={{"display":"flex", "justifyContent":"space-between"}}>
                    <span className="product-price custom-secondary">Quantity : {(usertype === 'Manufacturer')? originalQty: quantity} KG</span>
                    <span className="product-price custom-secondary">Price : {(usertype === 'Manufacturer')? (price + (price * 0.20)): price} ₹ Per KG</span>
                </div>
                {!isSatisfied && !myProducts && <span className="product-price custom-secondary">Remaining : {quantity - quantityRaised} KG</span>}
                <p className="product-text"><strong>Description: </strong>{description.substring(0,200)}...</p>
            </div>
        </div>
        </>
    )
}

export default AgroProductCard
