import React, { useEffect, useState, useContext } from 'react'
import userContext from '../context/User/BusinessUserContext';
import ManufacturedProductCard from '../components/ManufacturedProductCard';
import '../Styles.css'
import Navbar from '../components/NavbarBusiness';
import Footer from '../components/Footer';

const ManufacturedProducts = (props) => {

    //state declaration
    props.useScrollToTop();

    // Admin Buttons Hide based on superUser
    const context = useContext(userContext);
    const { getBusinessProfileInfo, userProfileBusiness } = context

    const [allCardsInfo, setAllCardsInfo] = useState([]);
    const [categoryFilter, setcategoryFilter] = useState("ALL")
    //eslint-disable-next-line

    useEffect(() => {
        getAllProducts();
    }, [userProfileBusiness.username])

    const getAllProducts = async() => {
        try {
            await getBusinessProfileInfo()
            const url = "http://localhost:5000/api/manufacturedproduct/fetchmyproducts"
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'username': userProfileBusiness.username
                }
            });
            const data = await response.json();
            setAllCardsInfo(data)
            console.log(userProfileBusiness.username, data)
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

    const clearFilter = ()=>{
        setcategoryFilter("ALL");
    }

    return (
        <>   
            <Navbar/>
            
            <section style={{marginTop:"180px"}} className="card-conatiner-warpper">
                {/* <div className="cards-container-title top-0 ">
                    Popular Products
                </div>
                <button className="clear-btn top-0 end-0" onClick={clearFilter}> clear filter</button> */}
                <div className=" row row-cols-1  g-4 row-cols-md-2 row-cols-lg-3  mx-0 justify-content-evenly card-container gx-5">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter(card.category);
                        }).map(card => (
                            <ManufacturedProductCard
                                key={card._id + "5"}
                                id={card._id}
                                productBrand={card.productBrand}
                                productName={card.productName}
                                description={card.description}
                                price={card.price}
                                packetSize={card.packetSize}
                                quantity={card.quantity}
                                // qrcode={card.qrcode}
                            />
                        ))
                    }{' '}
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default ManufacturedProducts