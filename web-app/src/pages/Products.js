import React, { useEffect, useState, useContext } from 'react'
import userContext from '../context/User/userContext';
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
    const { getProfileInfo, userProfile, loggedIn} = context;
    const { usertype } = userProfile;

    const [allCardsInfo, setAllCardsInfo] = useState([]);
    const [categoryFilter, setcategoryFilter] = useState("ALL")
    //eslint-disable-next-line

    useEffect(() => {
        getAllProducts();
        getProfileInfo();
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
            console.log(allCardsInfo)
        } catch(error) {
            console.log(error)
        }
    }

    // const handleOnClick = (e) => {
    //     if(e.target.getAttribute("title")) {
    //         let x = e.pageX - 17.3 -50  ;
    //         let y = e.pageY - 74 - 53.8 - 15;
    //         setcoords({xcoords:x,ycoords:y})
    //         setcategoryFilter(e.target.getAttribute("title"))
    //     }
    // }

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
            
            <section className="card-conatiner-warpper">
                <div className="cards-container-title top-0 ">
                    Popular Products
                </div>
                <button className="clear-btn top-0 end-0" onClick={clearFilter}> clear filter</button>
                <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-0 justify-content-evenly card-container gx-5">
                    {
                        allCardsInfo.filter(card =>{
                            return cardFilter(card.category);
                        }).map(card => (
                            <ProductCard
                                key={card._id + "5"}
                                id={card._id}
                                title={card.productBrand + ' ' + card.productName}
                                description={card.description}
                                price={card.price}
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
