import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';

import coverImg from '../images/No_Image.jpg'

import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import 'react-lazy-load-image-component/src/effects/blur.css';
import userContext from '../context/User/BusinessUserContext';


const ManufacturedProductCard = (props) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);
    const {productBrand, productName, description, price, quantity, packetSize} = props;
    const [Image, setImage] = useState()
    const context = useContext(userContext);

    console.log(quantity, packetSize)
    let total = Math.floor(quantity * 1000 / packetSize)

    useEffect(() => {
        getCardInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCardInfo = async() => {
        try {
            let imgLoaded = await getDownloadURL( ref(firebaseStorage, `Products/${productBrand + ' ' + productName }.png`))
            setImage(imgLoaded)
        } catch(FirebaseError) {
            setImage(coverImg)
        } finally {

        }
    }

    return (
        <>
        <div className="ct-product" style={{"border": "2px solid black", "padding": "0.5em"}}>
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
                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="product-price custom-secondary">{price} ₹</span>
                    <span className="product-price custom-secondary">{packetSize} g</span>
                    <span className="product-price custom-secondary">{total} Items</span>
                </div>
                <p className="product-text">{description}</p>
            </div>
        </div>
        </>
    )
}

export default ManufacturedProductCard
