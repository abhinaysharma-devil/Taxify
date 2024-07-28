
import React from 'react';
import taxImg from '../assests/images/tax_img_1.jpg';
import gstImg from '../assests/images/gst_img.png';
import { Link } from 'react-router-dom';


export const Body = () => {
    return (
        <>
            <div className="root-body">
                <img src={taxImg} style={{ width: "100vw", height: "50vh", padding: "0px 4px" }} />
                <h1 className="text-center" style={{ margin: "15px 0px" }}>What we do?</h1>
                <div className="cards text-center" >
                    <div className="card-items" >
                        <Link className="" to="/services/gst">
                            <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0" }} />
                            <div className="card-title" >GST Sevices</div>
                        </Link>
                    </div>
                    <div className="card-items" >
                        <Link className="" to="/services/gst">
                            <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0" }} />
                            <div className="card-title" >TDS Sevices</div>
                        </Link>
                    </div>
                    <div className="card-items" >
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0" }} />
                        <div className="card-title" >GST Sevices</div>
                    </div>
                    <div className="card-items" >
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0" }} />
                        <div className="card-title" >GST Sevices</div>
                    </div>
                    <div className="card-items" >
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0" }} />
                        <div className="card-title" >GST Sevices</div>
                    </div>
                    <div className="card-items" >
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius: "10px 10px 0 0" }} />
                        <div className="card-title" >GST Sevices</div>
                    </div>
                </div>
            </div>
        </>
    )
};