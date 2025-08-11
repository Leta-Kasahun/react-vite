//classbased compnents
import Testing from "./classComponenets/Testing";
//functions based components
import Test from "./components/Introduction/Test";
import Intro from './components/Introduction/Intro';
//main componets
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Cardprobs from "./probs/Cardprobs";
import Card from "./probs/Card";
import CardFooter from "./probs/CardFooter";

import './App.css';

function App() {
return (
 <div className="app">
  
  {/* <Testing/> */}
  
   {/* <Test/> */}
    {/* <Intro/> */}
    {/* these are basic of website header content  navbar and footer  */}
    
    
    
    {/*
     <Header/>
    <Navbar/>
    <Content/>
    <Footer/> */}
   <Cardprobs/>
    <Card name="Abel Bereket"departmet="Software Engineering"address="Gojjam"batch="2014"/>
    
    <Card name="Leta Kasahun"departmet="Software Engineering"address="Ambo"batch="2014"/>
    
    <Card name="Hayle Bereket"departmet="Computor Sience"address="Hawasa"batch="2014"/>
    
    <Card name="Abel Dessalegn"departmet="Information Technology"address="Addi Ababa"batch="2014"/>
    <CardFooter/>
 </div>
);}
export default App
