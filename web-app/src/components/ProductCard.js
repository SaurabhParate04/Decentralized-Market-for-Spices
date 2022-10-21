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
            let imgLoaded = await getDownloadURL( ref(firebaseStorage, `Products/${title}.png`))
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
                <a href="#"><img src={Image}></img></a>
                <div class="ct-product-controls">
                    <Link to={{pathname:"/productdetails", state:props}} >
                        <a href="#" class="btn-custom secondary">Buy Now <i class="fas fa-arrow-right"></i> </a>
                    </Link>
                </div>
            </div>
            <div class="ct-product-body">
                <h5 class="product-title"> <a href="#">{title}</a> </h5>
                <p class="product-price custom-secondary">{price} ₹</p>
                <p class="product-text">{description}</p>
            </div>
        </div>
        </>
    )
}

export default ProductCard
