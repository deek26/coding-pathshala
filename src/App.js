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
import Career from "./pages/Career";
import Catalogue from "./pages/Catalogue";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Shipping from "./pages/Shipping";
import Books from "./pages/Books";
import ExamCombos from "./pages/ExamCombos";
import OnlineTest from "./pages/OnlineTest";
import VideoCourses from "./pages/VideoCourses";
import Magazines from "./pages/Magazines";
import Affiliates from "./pages/Affiliates";
import Authors from "./pages/Authors";
import Partners from "./pages/Partners";
import CoachingInstitutes from "./pages/CoachingInstitutes"
import ExamUpdates from "./pages/ExamUpdates";
import Favorite from "./pages/Favorite";
import Mycart from "./pages/Mycart";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        <Route path="/career" element={<Career />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/exam-combos" element={<ExamCombos />} />
        <Route path="/online-test" element={<OnlineTest />} />
        <Route path="/books" element={<Books />} />
        <Route path="/videocourses" element={<VideoCourses />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/coaching-institutes" element={<CoachingInstitutes />} />
        <Route path="/exam-updates" element={<ExamUpdates />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/mycart" element={<Mycart />} />

        
      </Routes>

      <Footer />


    </Router>
    <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
      />
   
   
   </>

  );
}

export default App;
