
import React from 'react';
import { useState } from 'react';
import taxImg from '../assests/images/tax_img_1.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { serviceDetails } from '../../src/data/dataset';

export const Body = () => {

    const [serviceState, setServiceState] = useState(serviceDetails)

    const navigate = useNavigate()

    function gotoServices(item) {
        navigate("/services/xys", { state: {data : item} })
    }

    return (
        <>
            <div className="root-body">
                <img src={taxImg} style={{ width: "100vw", height: "50vh", padding: "0px 4px" }} />
                <h1 className="text-center" style={{ margin: "3% 0px" }}>OUR SERVICES</h1>
                <hr className="hr-for-indi-flag" style={{ border: "2px solid #fd721c"}}/>
                <hr className="hr-for-indi-flag" style={{ border: "2px solid #9efb56"}} />
                <div className="cards text-center">
                    {serviceState.map((item, index) => {
                        return (
                            <>
                                <div className="card-items" key={item.service_title} onClick={() => { gotoServices(item) }} >
                                    <img src={item.img_name} key={item.service_title} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0"}} />
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