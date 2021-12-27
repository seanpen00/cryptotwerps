// import logo from './logo.svg';
import './App.css';

//import components
import Header from './components/header/header';
import Team from './components/team/team';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Meet from './components/meet/meet';
import FounderThing from './components/founderthing/founderthing';
import il from './assets/CenterPic.png';
import NavBar from './components/navbar/navbar';
import './assets/newStyle.css';
import FaqMap from './components/faqmap/faqmap';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      {/* <img className="thePicture" src={il}/> */}
      <About />
      <Meet />
      
      <Mint />
      {/* <TopItems /> */}
      <RoadMap />
      {/* <FounderThing /> */}
      <Team />
      {/* <JoinCommunity /> */}
      <FaqMap />
      <Footer />
    </div>
  );
}

export default App;
