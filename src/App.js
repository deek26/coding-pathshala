import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAccount from './pages/MyAccount';
import FAQs from './pages/FAQs';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header'
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import RequestForSpecimen from "./pages/RequestForSpecimen";
import TrackYourOrders from "./pages/TrackYourOrders";
import ConnectUs from "./pages/ConnectUs";
import Team from "./pages/Team";


function App() {
  return (
   <>
    <Router>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/request-for-specimen" element={<RequestForSpecimen />} />
        <Route path="/track-your-orders" element={<TrackYourOrders />} />
        <Route path="/connect-us" element={<ConnectUs />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />


    </Router>
   
   
   </>

  );
}

export default App;
