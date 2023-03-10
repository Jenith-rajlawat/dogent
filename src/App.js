import './App.css';
import Navigation from './Navigation';
import Heading from './Heading';
import Request from './Request';
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
          <Request />
            </div>
        </div>
      </div>
      {/* <Navbar/>
     <Sidebar/> */}
    </div>
  );
}

export default App;
