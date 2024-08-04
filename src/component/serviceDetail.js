import gst_img from '../assests/images/gst_img.png';
import '../assests/css/common.css'
import { useLocation } from 'react-router-dom';

export const ServiceDetail = () => {
    const location = useLocation();
    return (
        <>
            <div className="service-detail-v1" >
                <h1>{location.state.data.service_title}</h1>
                <hr style={{ margin: "auto", padding: "10px" }} />
                <div className="service-div">
                    <img src={gst_img} style={{ width: "500px" }} />
                    <div className="text-item">
                        <h2>{location.state.data.service_sub_title}</h2>
                        <p>{location.state.data.detail}</p>
                        <h2>What we do?</h2>
                        <ul>
                            {location.state.data.what_we_do?.map((item)=>{
                                return (
                                    <>
                                    <li key={item.id} >{item.title}</li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};