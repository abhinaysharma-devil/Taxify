import location_logo from '../assests/images/location_logo.png';
import './contactUs.css'

export const ContactUs = () => {
    const about_div = {
        // display: "inline-flex",
        margin: "0 10%",
        flexWrap: "wrap",
        // border : "2px solid red"
    }

    
    return (
        <>
            <div className="" style={about_div}>
                <h4>Contact US</h4>
                <hr style={{ margin: "auto", padding: "10px" }} />
                <div className="contact-us-div">
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Address : Office</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur ab? Voluptatem .</p>
                    </div>
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Contact</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetu.</p>
                    </div>
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Other Contact</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur ab? Voluptatem .</p>
                    </div>
                    <div className="contact-items-location">
                        <div style={{display: "flex"}}>
                            <img src={location_logo} className='contact-icons'/>
                            <h4>Mail</h4>
                        </div>
                        <p className='item-text'>Lorem ipsum dolor sit amet consectetu.</p>
                    </div>
                </div>
            </div>
        </>
    )
};