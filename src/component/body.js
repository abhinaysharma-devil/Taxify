
import React from 'react';
import { useState } from 'react';
import taxImg from '../assests/images/tax_img_1.jpg';
import clock from '../assests/images/clock.png';
import thumb_up_finger from '../assests/images/thumb_up_finger.png';
import Indian_rupee_logo from '../assests/images/Indian_rupee_logo.png';
import thumb_up_map from '../assests/images/thumb_up_map.png';
import { useNavigate } from 'react-router-dom';
import { serviceDetails } from '../../src/data/dataset';
import '../assests/css/common.css'

export const Body = () => {

    const [serviceState] = useState(serviceDetails)

    const navigate = useNavigate()

    function gotoServices(item) {
        navigate("/services" + `/${item.service_title}`, { state: { data: item } })
    }

    return (
        <>
            <div className="root-body">
                <div className='top-slider'>
                    <div className='top-slider-div'>TAXIFY</div>
                    <div className='top-slider-div'>
                        <span className='top-slider-span'>Professional Services Platform</span>
                    </div>
                </div>
                <img src={taxImg} style={{ width: "100%", height: "50vh", padding: "0px 4px", objectFit: "cover" }} />
                <h1 className="text-center" style={{ margin: "3% 0px" }}>OUR SERVICES</h1>
                <hr className="hr-for-indi-flag" style={{ border: "2px solid #fd721c" }} />
                <hr className="hr-for-indi-flag" style={{ border: "2px solid #9efb56" }} />
                <div style={{ width: "62%", margin: "auto" }}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 m-2">
                        {serviceState.map((item, index) => {
                            return (
                                <>
                                    <div className="card-items" key={item.service_title} onClick={() => { gotoServices(item) }} >
                                        <img src={item.img_name} key={item.service_title} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0", display: "grid" }} />
                                        <div className="card-title bg-dark" key={index} >{item.service_title}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="first-add" style={{ height: "228px", marginTop: "70px", display: "flex" }}>
                    <img src={thumb_up_map} alt="" width={"300px"} style={{ marginLeft: "15%", marginTop: "-70px"}} />
                    <div style={{ margin: "auto 40px", color: "#f8faf7" }} className='font-family-class'>
                        <h1>Fill Your ITR</h1>
                        <p>At Taxify, we take care of Accounting, Business, Compliance, and handle end-to-end solutions.</p>
                        <button className='' style={{ width: "150px", height: "40px", border: "none", borderRadius: "10px", color: "#f8faf7", backgroundColor: "#fd721c" }}>Get Started</button>
                    </div>
                </div>
                <div style={{ margin: "5% 15%", display: "block" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", marginTop: "20px", marginRight: "160px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={clock} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Quick Customer Support</h4>
                                <p>Queries are responded within 24 hours</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={thumb_up_finger} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Easy-to-use dashboard</h4>
                                <p>Streamlined navigation for service requests and tracking.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", marginTop: "20px", marginRight: "40px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={Indian_rupee_logo} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Affordable Professional Services</h4>
                                <p>Proven legal and financial solutions with senior experts.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <div style={{ border: "3px solid #0e8201", width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px" }}>
                                <img src={Indian_rupee_logo} width={"30px"} height={"30px"} style={{ position: "relative", left: "23px", top: "21px" }} />
                            </div>
                            <div className='font-family-class' style={{ margin: "auto 0" }}>
                                <h4>Affordable Professional Services</h4>
                                <p>Proven legal and financial solutions with senior experts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};