import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Heading from './Heading';
import Request from './Request';
import Account from './Account';
import AboutUs from './AboutUs';
// import Sidebar from "./Components/Sidebar"
// import Navbar from "./Components/Navbar"
function App() {
  return (
    <div className="App">
      <div className='app-content'>
      <Navigation />
         <div className='right-view'>
        <Heading />

            <div className='body-wrapper'>
           <Router>
          <Routes>
           <Route path="/" element={<Request />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Account" element={<Account />} />
          </Routes>
          </Router>
            </div>
        </div>
      </div>
      {/* <Navbar/>
     <Sidebar/> */}
    </div>
  );
}

export default App;
