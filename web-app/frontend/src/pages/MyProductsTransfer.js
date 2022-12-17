import React, { useEffect, useState, useContext } from 'react'
import userContext from '../context/User/BusinessUserContext';
import AgroProductCard from '../components/ManufacturedProductCard';
import '../Styles.css'
import Navbar from '../components/NavbarBusiness';
import Footer from '../components/Footer';

const MyProductsTransfer = (props) => {

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

    const clearFilter = ()=>{
        setcategoryFilter("ALL");
    }

    return (
        <>   
            <Navbar/>

            {/* <div className="mapContainer"> */}
                {/* <Map coords={coords} handleOnClick={handleOnClick}  />  */}
                {/* <div className="mapStateContainer"> */}
                    {/* <div className="dropdown-container align-items-center" id="dd-1">
                        <Dropdown categoryFilter={categoryFilter}  setcategoryFilter={setcategoryFilter} />
                    </div> */}
                    {/* <h3 className="mapState" id="map-2">{categoryFilter}</h3> */}
                    {/* <div className="mt-4 " id="filterCharityWrapper">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter(card.category);
                        }).map((category,idx,arr) => (
                
                                <p key={idx} className="text-start">{" >  " + category.productName}</p>
                        )) 
                    }{' '}
                        
                    </div> */}
                {/* </div>   */}
            {/* </div> */}
            {/* <div className="filler_map"></div> */}
            
            <section style={{marginTop:"180px"}} className="card-conatiner-warpper">
                {/* <div className="cards-container-title top-0 ">
                    Popular Products
                </div>
                <button className="clear-btn top-0 end-0" onClick={clearFilter}> clear filter</button> */}
                <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-0 justify-content-evenly card-container gx-5">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter(card.category);
                        }).map(card => (
                            ((userProfileBusiness.usertype === 'Wholesaler' && card.wholesaler === userProfileBusiness.username) || (userProfileBusiness.usertype === 'Retailer' && card.retailer === userProfileBusiness.username)) && <AgroProductCard
                                key={card._id + "k"}
                                id={card._id}
                                productName={card.productName}
                                productBrand={card.productBrand}
                                description={card.description}
                                price={card.price}
                                packetSize={card.packetSize}
                                quantity={card.quantity}
                                myProducts={true}
                                usertype={userProfileBusiness.usertype}
                                prodId={card.productId}
                                manufacturer={card.manufacturer}
                                wholesaler={card.wholesaler}
                                retailer={card.retailer}
                                />
                            ))
                    }{' '}
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default MyProductsTransfer
