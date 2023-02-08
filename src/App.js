import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAccount from './pages/MyAccount';
import FAQs from './pages/FAQs';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header'


function App() {
  return (
   <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>




    </Router>
   
   
   </>

  );
}

export default App;
