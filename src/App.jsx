import React from 'react';
import Navbar from './components/navbar';
import WelcomePage from './components/welcomepage-main';
import './App.css'; // Ensure you import the CSS
import Footer from './components/footer/footer'
function App() {
  // const { width } = useWindowSize();
  return (
    <div className="App">
      {/* {width <= 768 ? <MobileNavbar /> : <Navbar />}
      {width <= 768 ? <MobileWelcomePage /> : <WelcomePage />}
      {width <= 768 ? <MobileFooter /> : <Footer />} */}
      <Navbar/>
      <WelcomePage/>
      <Footer/> 
      {/* Other components or content can go here */}
    </div>
  );
}

export default App;

