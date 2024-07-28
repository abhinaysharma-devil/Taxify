
import React from 'react';
import taxImg from '../assests/images/tax_img_1.jpg';
import gstImg from '../assests/images/gst_img.png';
// import Particles from './dashboardImgAndtsParticle'

const cards_css = {
    display: "inline-flex",
    margin: "0 10%",
    flexWrap : "wrap",
    // border : "2px solid red"
}

const card_title_css = {
    width: "300px",
    height: "50px",
    background: "black",
    textAlign: "center",
    color: "White",
    margin: "auto",
    borderRadius : "0 0 10px 10px",
    padding: "10px"
}

const card_item_css = {
    margin: "auto",
    padding : "20px 5px"
}

export const Body = () => {
    return (
        <>
            <div className="root-body">
                <img src={taxImg} style={{ width: "100vw", height: "50vh", padding: "0px 4px"}} />
                <h1 className="text-center" style={{ margin: "15px 0px" }}>What we do?</h1>
                <div className="cards text-center" style={cards_css}>
                    <div className="card-items" style={card_item_css}>
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius : "10px 10px 0 0" }} />
                        <div className="card-title" style={card_title_css}>GST Sevices</div>
                    </div>
                    <div className="card-items" style={card_item_css}>
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius : "10px 10px 0 0" }} />
                        <div className="card-title" style={card_title_css}>GST Sevices</div>
                    </div>
                    <div className="card-items" style={card_item_css}>
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius : "10px 10px 0 0" }} />
                        <div className="card-title" style={card_title_css}>GST Sevices</div>
                    </div>
                    <div className="card-items" style={card_item_css}>
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius : "10px 10px 0 0" }} />
                        <div className="card-title" style={card_title_css}>GST Sevices</div>
                    </div>
                    <div className="card-items" style={card_item_css}>
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius : "10px 10px 0 0" }} />
                        <div className="card-title" style={card_title_css}>GST Sevices</div>
                    </div>
                    <div className="card-items" style={card_item_css}>
                        <img src={gstImg} style={{ width: "300px", height: "300px", borderRadius : "10px 10px 0 0" }} />
                        <div className="card-title" style={card_title_css}>GST Sevices</div>
                    </div>
                </div>
            </div>
        </>
    )
};