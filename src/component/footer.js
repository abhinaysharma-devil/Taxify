export const Footer = () => {
    let footer_css = {
        position: "relative",
        top: "1rem"
    }
    return (
        <>
            <div className="bg-dark text-light" style={footer_css}>
    <div className="text-center" style={{display : "ruby-text", padding : "20px 0 0 0"}}>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </div>
                <hr style={{backgroundColor : "gray", margin : "auto", width : "80%" }}/>
                <p className="bg-dark text-light text-center" style={{padding : "10px 0 35px 0"}}>All Rights &copy; Reserve</p>
            </div>
        </>
    )
};