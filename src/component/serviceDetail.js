import gst_img from '../assests/images/gst_img.png';
import '../assests/css/common.css'

export const ServiceDetail = () => {
    return (
        <>
            <div className="service-detail-v1" >
                <h1>GST</h1>
                <hr style={{ margin: "auto", padding: "10px" }} />
                <div className="service-div">
                    <img src={gst_img} style={{ width: "500px" }} />
                    <div className="text-item">
                        <h2>Why is it necessary to verify the GST Number?</h2>
                        <p>
                            A GSTIN or GST number is public information. GST search by name is an important task that every business dealing with GST-registered taxpayers must carry out to ensure the authenticity of the vendor and the GSTIN or GST number being used in the invoice. <br /><br />

                            You can partly verify the GSTIN or GST number on the first look by checking if the vendor’s PAN number matches with the digits between 3 and 10 in the GSTIN. <br /><br />

                            It is also necessary to carry out a thorough check of the GSTIN authenticity to avoid generating incorrect invoices and e-invoices, to claim a genuine input tax credit, and to pass on the tax credits to rightful buyers, to mention a few.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};