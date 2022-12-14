import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';

import coverImg from '../images/No_Image.jpg'
import prodImg from '../images/Cloves.jpg'

import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import userContext from '../context/User/UserContext';


const ProductCard = (props) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);
    const {productBrand, productName, description, price, qrcode} = props;
    const [Image, setImage] = useState()
    const context = useContext(userContext);
    const {loggedIn} = context

    useEffect(() => {
        getCardInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCardInfo = async() => {
        try {
            let imgLoaded = await getDownloadURL( ref(firebaseStorage, `Products/${productBrand + ' ' + productName }`))
            setImage(imgLoaded)
        } catch(FirebaseError) {
            setImage(coverImg)
        } finally {

        }
    }

    return (
        <>
        <div className="ct-product">
            <div className="ct-product-thumbnail">
                <a href="/"><img src={Image}></img></a>
                <div className="ct-product-controls">
                    <Link to={{pathname:"/productdetails", state:props}} >
                        <button className="btn-custom secondary">Buy Now <i className="fas fa-arrow-right"></i> </button>
                    </Link>
                </div>
            </div>
            <div className="ct-product-body">
                <h5 className="product-title"> <a href="/">{productBrand + ' ' + productName}</a> </h5>
                <p className="product-price custom-secondary">{price} ₹</p>
                <p className="product-text">{description}</p>
            </div>
        </div>
        </>
    )
}

export default ProductCard
