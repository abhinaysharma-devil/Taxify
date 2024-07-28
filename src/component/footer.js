export const Footer = () => {
    return (
        <>
            <div className="bg-dark text-light footer-main-div">
                <div className="text-center" style={{ display: "ruby-text", padding: "20px 0 0 0" }}>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">About-us <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Contact us <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Services <span className="sr-only">(current)</span></a>
                </div>
                <hr style={{ backgroundColor: "gray", margin: "auto", width: "80%" }} />
                <p className="bg-dark text-light text-center" style={{ padding: "10px 0 10px 0" }}>All Rights &copy; Reserve 2024-25 (Developed by Abhinay Sharma)</p>
            </div>
        </>
    )
};