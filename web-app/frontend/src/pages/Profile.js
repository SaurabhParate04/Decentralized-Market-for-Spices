import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import './Profile.css';
import { useContext, useEffect } from 'react';
import userContext from '../context/User/UserContext';
import { Link } from 'react-router-dom';


export const Profile = () => {
    const context = useContext(userContext);
    const { getProfileInfo, userProfile, profileImg } = context;
    const { firstname, lastname, username, address, age, phoneNumber, email, company } = userProfile;

    const [donationHistory, setDonationHistory] = useState([]);
    const donationHistoryModalToggle = useRef();

    const fetchDonations = async () => {
        const url = "http://localhost:5000/api/charitydonations/fetchdonationsbyuser"
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'username': username
                }
            });
        const data = await response.json()
        // console.log(data)
        setDonationHistory(data)
    }

    const handleDonationHistory = () => {
        fetchDonations();
        donationHistoryModalToggle.current.click();
    }

    useEffect(() => {
        getProfileInfo();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchDonations();
        // eslint-disable-next-line
    });

    return (
        <>
            <Navbar />

            {/* Donation history modal button hidden */}
            <button type="button" ref={donationHistoryModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#donationHistory"></button>

            {/* Donation History Modal */}
            <div className="modal fade donation-history-container" id="donationHistory" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="donationHistoryLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered donation-history-modal-dialog">
                    <div className="modal-content" style={{ borderRadius: "0px", border: "none" }}>
                        <div className="modal-header donation-history-modal-header">
                            <h5 className="modal-title donation-history-modal-title" id="donationHistoryLabel">Donation History</h5>
                            <button type="button" style={{ color: "white" }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body donation-history-modal-body">
                            <div className="donation-history-separator"></div>
                        </div>
                        <div className='modal-footer donation-history-modal-footer'>
                            <div>For non-verified charities: </div>
                            <div style={{ width: "20px", height: "20px", background: "#a8ffd2" }}></div>
                            <div>Success</div>
                            <div style={{ width: "20px", height: "20px", background: "#ffffa3" }}></div>
                            <div>Pending</div>
                            <div style={{ width: "20px", height: "20px", background: "#ffbdbd" }}></div>
                            <div>Reverted</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                {/* <!-- Header --> */}
                <div
                    className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                    style={{
                        minHeight: '600px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                    }}
                    id="triangleBackground"
                >
                    <span className="Triangle" id="ATriangle1"></span>
                    <span className="Triangle" id="ATriangle2"></span>
                    <span className="Triangle" id="ATriangle3"></span>
                    <span className="Triangle" id="ATriangle4"></span>
                    <span className="Triangle" id="ATriangle5"></span>
                    <span className="Triangle" id="ATriangle6"></span>
                    <span className="Triangle" id="ATriangle7"></span>
                    <span className="Triangle" id="ATriangle8"></span>
                    <span className="Triangle" id="ATriangle9"></span>
                    <span className="Triangle" id="ATriangle10"></span>

                    {/* <!-- Mask --> */}
                    <span className="mask bg-gradient-default opacity-8"></span>

                    {/* <!-- Header container --> */}
                    <div className="container-fluid d-flex align-items-center">
                        <div className="row">
                            <div className="col-lg-7 col-md-10">
                                <h1 className="display-2 text-white">
                                    {firstname + ' ' + lastname}
                                </h1>
                                <p className="text-white mt-0 mb-5">
                                    This is your profile page. You can see and edit your profile information.
                                </p>
                                <Link to="/editprofile" className="btn btn-info">
                                    Edit profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Page content --> */}
                <div className="container-fluid mt--7" id="profileInfoWrapper">
                    <div className="row">
                        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                            <div className="card card-profile shadow rounded-0">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                            <a href="/">
                                                <img
                                                    src={
                                                        profileImg ||
                                                        'https://www.pngitem.com/pimgs/m/287-2876223_no-profile-picture-available-hd-png-download.png'
                                                    }
                                                    alt="profimage"
                                                    className="rounded-circle"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
							<div className="d-flex justify-content-between">
							<a href="/" className="btn btn-sm btn-info mr-4">Connect</a>
							<a href="/" className="btn btn-sm btn-default float-right">Message</a>
							</div>
						</div> */}
                                <div className="card-body-1 pt-0 pt-md-4">
                                    <div className="row">
                                        <div className="col mb-5"></div>
                                    </div>       
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 order-xl-1">
                            <div className="card bg-secondary shadow rounded-0 ">
                                <div className=" card-header border-0">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h3 className="mb-0">My account</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body-1 light-bg">
                                    <form />
                                    <h6 className="heading-small text-muted mb-4">
                                        User information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className="form-control-label "
                                                        htmlFor="input-username"
                                                    >
                                                        First Name
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {firstname}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {lastname}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        {' '}
                                                        User Name
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {username}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Email Address
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {email}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Password
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {email}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-4" />
                                    {/* <!-- Address --> */}
                                    <h6 className="heading-small text-muted mb-4">
                                        Contact information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="form-group focused">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Address
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {address}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group focused">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {phoneNumber}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Landmark
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {company}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Pincode
                                                    </label>
                                                    <div>
                                                        <small className="form-text text-muted">
                                                            {company}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
