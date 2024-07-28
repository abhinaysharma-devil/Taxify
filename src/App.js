import './App.css';
import { Header } from './component/navbar'
import { Body } from './component/body'
import { Footer } from './component/footer'
import { AboutUS } from './component/aboutUs'
import { ContactUs } from './component/contactUs'
import { ServiceDetail } from './component/serviceDetail'
import Particles from './component/dashboardImgAndtsParticle'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Header/>
      <Body/>
      <AboutUS/>
      <Footer/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Particles /><Body /><AboutUS /><Footer /></>} />
          {/* <Route path="/" element={<><Header /><Particles /></>} /> */}
          <Route path="contact-us" element={<><Header /><ContactUs /><Footer /></>}/>
          <Route path="/services/gst" element={<><Header /><ServiceDetail /><Footer /></>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
