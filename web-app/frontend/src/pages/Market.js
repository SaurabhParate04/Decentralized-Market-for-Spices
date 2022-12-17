import React, { useEffect, useState, useContext, useRef } from 'react'
import userContext from '../context/User/BusinessUserContext';
import AgroProductCard from '../components/ManufacturedProductCard';
import '../Styles.css'
import Navbar from '../components/NavbarBusiness';
import Footer from '../components/Footer';

const Market = (props) => {

    //state declaration
    props.useScrollToTop();

    // Admin Buttons Hide based on superUser
    const context = useContext(userContext);
    const { getBusinessProfileInfo, userProfileBusiness, loggedInBusiness} = context;
    const { usertype } = userProfileBusiness;

    const [allCardsInfo, setAllCardsInfo] = useState([]);
    const [categoryFilter, setcategoryFilter] = useState("ALL")
    
    useEffect(() => {
        getAllProducts();
        if(loggedInBusiness) {
            getBusinessProfileInfo()
        }
    }, [])

    const getAllProducts = async() => {
        try {
            const url = "http://localhost:5000/api/manufacturedproduct/fetchallproducts"
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                }
            });
            const data = await response.json();
            setAllCardsInfo(data)
        } catch(error) {
            console.log(error)
        }
    }

    const cardFilter = (category)=>{
        if(categoryFilter === "ALL")
        {
            return true;
        }
        else{
            if(categoryFilter === category)
            {
                return true;
            }
            return false;
        }
    }

    return (
        <>   
            <Navbar/>
            
            <section style={{marginTop:"150px"}} className="card-conatiner-warpper">
                {/* <div className="cards-container-title top-0 ">
                    Popular Products
                </div>
                <button className="clear-btn top-0 end-0" onClick={clearFilter}> clear filter</button> */}
                <div className=" row row-cols-1 row-cols-md-2 g-4 row-cols-lg-3  mx-0 justify-content-evenly card-container gx-5">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter(card.category);
                        }).map(card => (
                            <>
                                {
                                    ((userProfileBusiness.usertype === 'Wholesaler' && card.wholesaler === '') || (userProfileBusiness.usertype === 'Retailer' && card.retailer === '' && card.wholesaler !== '')) && <AgroProductCard
                                        key={card._id + "k"}
                                        id={card._id}
                                        productName={card.productName}
                                        productBrand={card.productBrand}
                                        description={card.description}
                                        price={card.price}
                                        packetSize={card.packetSize}
                                        quantity={card.quantity}
                                        myProducts={false}
                                        usertype={usertype}
                                        prodId={card.productId}
                                        manufacturer={card.manufacturer}
                                    />
                                }
                            </>
                        ))
                    }{' '}
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Market
