import React, { useEffect, useState, useContext, useRef } from 'react'
import userContext from '../context/User/BusinessUserContext';
import AgroProductCard from '../components/AgroProductCard';
import '../Styles.css'
import Navbar from '../components/NavbarBusiness';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const MarketPlace = (props) => {

    //state declaration
    props.useScrollToTop();

    // Admin Buttons Hide based on superUser
    const context = useContext(userContext);
    const { getBusinessProfileInfo, userProfileBusiness, loggedInBusiness} = context;
    const { usertype } = userProfileBusiness;

    const [allCardsInfo, setAllCardsInfo] = useState([]);
    const [categoryFilter, setcategoryFilter] = useState("ALL")
    const checkoutModalToggle = useRef();
    const [isClicked, setIsClicked] = useState([[{productName: "", quantity:0, quantityRaised:0}]]);
    const [quantity, setQuantity] = useState(0);
    const [quantityRaised, setQuantityRaised] = useState(0);
    const [productName, setProductName] = useState("");
    const [user, setUser] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setcategory] = useState("");
    const [id, setId] = useState("");
    const [myAmount, setmyAmount] = useState(0);
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    
    const handleInputOnChange = (e) =>{
        setmyAmount(e.target.value)
    }
    
    const openModal = (id) => {
        setIsClicked(isClicked.push(allCardsInfo.filter(item => item._id === id)));
        console.log(isClicked[isClicked.length - 1][0]);
        setQuantity(isClicked[isClicked.length-1][0].quantity)
        setQuantityRaised(isClicked[isClicked.length-1][0].quantityRaised)
        setProductName(isClicked[isClicked.length-1][0].productName)
        setId(isClicked[isClicked.length-1][0]._id)
        setPrice(isClicked[isClicked.length-1][0].price)
        setcategory(isClicked[isClicked.length-1][0].category)
        setUser(isClicked[isClicked.length-1][0].user)
        checkoutModalToggle.current.click();
    }

    const rangeOnChange = (e)=>{
        setmyAmount(e.target.value)
        //console.log(e.target.value)
    }

    useEffect(() => {
        getAllProducts();
        if(loggedInBusiness) {
            getBusinessProfileInfo()
        }
    }, [])

    const getAllProducts = async() => {
        try {
            const url = "http://localhost:5000/api/agroproduct/fetchallproducts"
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

    const clearState = () => {
        setIsClicked([[{productName: "", quantity:0, quantityRaised:0}]])
        setmyAmount(0)
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
                            <>
                                {
                                    ((usertype === 'Farmer' && card.action === 'Trader') || (usertype === 'Trader' && card.action === 'Farmer') || (usertype === 'Manufacturer' && card.isSatisfied === true)) && <AgroProductCard
                                        key={card._id + "5"}
                                        id={card._id}
                                        productName={card.productName}
                                        description={card.description}
                                        price={card.price}
                                        quantity={card.quantity}
                                        quantityRaised={card.quantityRaised}
                                        category={card.category}
                                        action={card.action}
                                        user={card.user}
                                        myProducts={false}
                                        usertype={usertype}
                                        openModal={openModal}
                                        isSatisfied={card.isSatisfied}
                                        prodId={card.productId}
                                        originalQty={card.originalQty}
                                        manufacturer={card.manufacturer}
                                    />
                                }
                                {/* Donatin button hidden */}
                                <button key={card._id + '0'} type="button" ref={checkoutModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={clearState}></button>

                                {/* Donation modal */}
                                <div key={card._id + '1'} className="modal fade modal-cont" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content" style={{borderRadius:"0px", border:"none"}}>
                                            <div className="modal-header paymentModalHeader">
                                                <h5 className="modal-title " id="staticBackdropLabel">Payment Details</h5>
                                                <button type="button" style={{color:"white"}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-7 col-xs-12 modal-body">
                                                    <div className="d-flex flex-row">
                                                        <div><h6>Seller&nbsp;:</h6></div>
                                                        <div>{ userProfileBusiness.firstname + ' ' + userProfileBusiness.lastname }</div>
                                                    </div>
                                                    <div className="d-flex flex-row">
                                                        <div><h6>Product&nbsp;:</h6></div> 
                                                        <div>{ productName } </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-xs-12 modal-body">
                                                    <div className="d-flex flex-row">
                                                        <div><h6>Date&nbsp;:</h6></div>
                                                        <div>{ date }</div>
                                                    </div>
                                                    <div className="d-flex flex-row">
                                                        <div><h6>Time&nbsp;:</h6></div> 
                                                        <div>{ time } </div>
                                                    </div>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mt-2"><h6>Quantity : <input className='inputInvalid' style={{width: "30%"}} type="number"  max={(quantity - quantityRaised)} min="0" value={myAmount} onChange={handleInputOnChange}  ></input> </h6>  </div>
                                                    <input type="range" className="form-range" min="0" max={(quantity - quantityRaised)} step="1" id="customRange1" value={myAmount} onChange={rangeOnChange} ></input>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" style={{border:"none",backgroundColor:"transparent", margin:"0px 20px", lineHeight:'1.5'}} data-bs-dismiss="modal">Cancel</button>
                                                <Link type="submit" to={{pathname:"/business/productform", state:{button_name:"Add New", updateQuantity:true, id:id, quantityRaised:quantityRaised, quantity:quantity, notify:true, receiver:user, info:{productName:productName, category:category, description:"", price:price, quantity:myAmount}}}} className="btn btn-primary donateBtn" style={{backgroundColor: "#00ffc3", color: "black"}} onClick={()=>{checkoutModalToggle.current.click()}}>Proceed</Link>
                                                {/* onClick={(e)=>{updateQuantity(quantityRaised, myAmount, card._id)}} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }{' '}
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default MarketPlace
