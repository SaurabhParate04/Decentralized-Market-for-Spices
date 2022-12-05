import React, { useEffect, useState, useContext } from 'react'
import userContext from '../context/User/BusinessUserContext';
import AgroProductCard from '../components/AgroProductCard';
import '../Styles.css'
import Navbar from '../components/NavbarBusiness';
import Footer from '../components/Footer';

const RawMaterial = (props) => {

    //state declaration
    props.useScrollToTop();

    // Admin Buttons Hide based on superUser
    const context = useContext(userContext);
    const { getBusinessProfileInfo, userProfileBusiness, loggedInBusiness} = context;
    const { usertype, username } = userProfileBusiness;

    const [allCardsInfo, setAllCardsInfo] = useState([]);

    useEffect(() => {
        getAllProducts();
        if(loggedInBusiness) {
            getBusinessProfileInfo()
        }
    }, [])

    const getAllProducts = async() => {
        try {
            const url = "http://localhost:5000/api/rawmaterial/fetchallproducts"
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

    const cardFilter = ()=>{
        return true
    }

    return (
        <>   
            <Navbar/>
            
            <section style={{marginTop:"180px"}} className="card-conatiner-warpper">
                <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-0 justify-content-evenly card-container gx-5">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter();
                        }).map(card => (
                            <>
                                {
                                    (usertype === 'Manufacturer' && card.manufacturer === '') && <AgroProductCard
                                        key={card._id + "5"}
                                        id={card._id}
                                        productName={card.productName}
                                        price={card.price}
                                        quantity={card.quantity}
                                        myProducts={false}
                                        usertype={usertype}
                                        prodId={card.productId}
                                        manufacturer={card.manufacturer}
                                        description={card.description}
                                        user={card.seller}
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

export default RawMaterial
