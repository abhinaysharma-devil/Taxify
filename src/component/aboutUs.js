export const AboutUS = () => {
    const about_div = {
        // display: "inline-flex",
        margin: "0 10%",
        flexWrap : "wrap",
        // border : "2px solid red"
    }
    return (
        <>
            <div className="" style={about_div}>
                <h4>ABOUT US</h4>
                <hr style={{ margin : "auto", padding : "10px" }}/>
                <p>
                    GST Tax Solution. In was established in the year 2017. An accounting and tax consulting firm rendering comprehensive professional services which include audit, management consultancy, tax consultancy, accounting services, manpower management, secretarial services etc.
                </p>
            </div>
        </>
    )
};