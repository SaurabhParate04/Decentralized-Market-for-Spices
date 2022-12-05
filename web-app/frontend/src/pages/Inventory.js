import React, { useEffect, useState, useContext } from 'react'
import userContext from '../context/User/BusinessUserContext';
import AgroProductCard from '../components/AgroProductCard';
import '../Styles.css'
import Navbar from '../components/NavbarBusiness';
import Footer from '../components/Footer';

const Inventory = (props) => {

    //state declaration
    props.useScrollToTop();

    // Admin Buttons Hide based on superUser
    const context = useContext(userContext);
    const { getBusinessProfileInfo, userProfileBusiness, loggedInBusiness} = context;
    const { _id } = userProfileBusiness;

    const [allCardsInfo, setAllCardsInfo] = useState([]);
    const [categoryFilter, setcategoryFilter] = useState("ALL")
    //eslint-disable-next-line

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
                
                <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-0 justify-content-evenly card-container gx-5">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter(card.category);
                        }).map(card => (
                            (card.manufacturer === userProfileBusiness.username) && <AgroProductCard
                                key={card._id + "5"}
                                id={card._id}
                                productName={card.productName}
                                description={card.description}
                                price={card.price}
                                quantity={card.quantity}
                                user={card.user}
                                myProducts={true}
                                manufacturer={card.manufacturer}
                                usertype={userProfileBusiness.usertype}
                            />
                        ))
                    }{' '}
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Inventory
