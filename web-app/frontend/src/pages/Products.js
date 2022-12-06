import React, { useEffect, useState, useContext } from 'react'
import userContext from '../context/User/UserContext';
import ProductCard from '../components/ProductCard';
import '../Styles.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import Dropdown from '../components/Dropdown';

const Products = (props) => {

    //state declaration
    props.useScrollToTop();

    // Admin Buttons Hide based on superUser
    const context = useContext(userContext);
    const { getProfileInfo, userProfile, loggedIn, getCartInfo} = context;
    const { usertype } = userProfile;

    const [allCardsInfo, setAllCardsInfo] = useState([]);
    const [categoryFilter, setcategoryFilter] = useState("ALL")
    //eslint-disable-next-line

    useEffect(() => {
        getAllProducts();
        if(loggedIn) {
            getProfileInfo()
            getCartInfo()
        }
    }, [])

    const getAllProducts = async() => {
        try {
            const url = "http://localhost:5000/api/product/fetchallproducts"
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
                <div className=" row row-cols-1  g-4 row-cols-md-2 row-cols-lg-3  mx-0 justify-content-evenly card-container gx-5">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter(card.category);
                        }).map(card => (
                            <ProductCard
                                key={card._id + "5"}
                                id={card._id}
                                productBrand={card.productBrand}
                                productName={card.productName}
                                description={card.description}
                                price={card.price}
                                ratingPts={card.ratingPts}
                                ratingCnt={card.ratingCnt}
                                sizes={card.sizes}
                                avilableQty={card.avilableQty}
                                category={card.category}
                                reviews={card.reviews}
                                reviewsCnt={card.reviewsCnt}
                                options={card.options}
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

export default Products
