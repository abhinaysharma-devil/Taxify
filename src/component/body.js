
import React from 'react';
import { useState } from 'react';
import taxImg from '../assests/images/tax_img_1.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { serviceDetails } from '../../src/data/dataset';
import '../assests/css/common.css'

export const Body = () => {

    const [serviceState] = useState(serviceDetails)

    const navigate = useNavigate()

    function gotoServices(item) {
        navigate("/services" +`/${item.service_title}`, { state: { data: item } })
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
                <div className="cards text-center">
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
        </>
    )
};