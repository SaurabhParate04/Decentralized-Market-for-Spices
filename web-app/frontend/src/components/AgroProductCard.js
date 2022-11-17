import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';

import coverImg from '../images/No_Image.jpg'
import prodImg from '../images/Cloves.jpg'

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
    const {productName, description, price, quantity, category, user, id, myProducts, usertype, quantityRaised, openModal} = props;
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
        <div className="ct-product agro-prod-card">
            <div className="ct-product-thumbnail">
                <a href="/"><img src={Image} alt="Product Thumbnail"></img></a>
                <div className="ct-product-controls">
                    <div>
                        {
                            myProducts && <Link to={{pathname:"/business/productform", state:{button_name:"update", info:{productName:productName, category:category, description:description, price:price, quantity:quantity, id:id}}}} className="btn-custom secondary">Update Now <i className="fas fa-arrow-right"></i> </Link>
                        }
                        {
                            !myProducts && usertype === "Farmer" && <button onClick={() => openModal(id)} className="btn-custom secondary">Sell Now <i className="fas fa-arrow-right"></i> </button>
                        }
                        {
                            !myProducts && usertype === "Trader" && <button onClick={openModal} className="btn-custom secondary">Buy Now<i className="fas fa-arrow-right"></i> </button>
                        }
                    </div>
                </div>
            </div>
            <div className="ct-product-body">
                <h5 className="product-title"> <a href="/">{productName}</a> </h5>
                <div style={{"display":"flex", "justifyContent":"space-between"}}>
                    <span className="product-price custom-secondary">Price : {price} ₹ Per KG</span>
                    <span className="product-price custom-secondary">Quantity : {quantity} KG</span>
                </div>
                <p className="product-text"><strong>Description: </strong>{description.substring(0,200)}...</p>
            </div>
        </div>
        </>
    )
}

export default AgroProductCard
