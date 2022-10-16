import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';

import coverImg from '../images/No_Image.jpg'
import prodImg from '../images/Cloves.jpg'

import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import userContext from '../context/User/userContext';


const ProductCard = (props) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);
    const {title, description, price, qrcode} = props;
    const [Image, setImage] = useState()
    const context = useContext(userContext);
    const {loggedIn} = context

    useEffect(() => {
        getCardInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCardInfo = async() => {
        try {
            let imgLoaded = await getDownloadURL( ref(firebaseStorage, `productcover/${title}`))
            setImage(imgLoaded)
        } catch(FirebaseError) {
            setImage(coverImg)
        } finally {
            
        }
    }

    return (
        <>
        <div class="ct-product">
            <div class="ct-product-thumbnail">
                <a href="#"><img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/products/2.png"></img></a>
                <div class="ct-product-controls">
                    <a href="#" class="btn-custom secondary">Buy Now <i class="fas fa-arrow-right"></i> </a>
                </div>
            </div>
            <div class="ct-product-body">
                <h5 class="product-title"> <a href="#">Agro</a> </h5>
                <p class="product-price custom-secondary">20.00 ₹</p>
                <p class="product-text">Agro always a good in tast, grab it  ....</p>
            </div>
        </div>
        </>
    )
}

export default ProductCard
