//taiwid testing
import './index.css'
import TailwindcssReact from "./TailwindcssReact";

//classbased compnents
import Testing from "./classComponenets/Testing";
import Button from './components/Button';
import SortingNumString from './components/SortingNumString';
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
//bussiness card componests that made with tailwindcss
import BusinessCardHeader from "./Businness-card/BusinessCardHeader";
import BusinessCardBody from "./Businness-card/BusinessCardBody";
import BusinessCardFooter from "./Businness-card/BusinessCardFooter";
//bussiness card css styled practicing and calling ones  for multi users  using map
import Bheader from './classComponenets/BusinessCard/Bheader';
import BCard from './classComponenets/BusinessCard/BCard';
import userData from './assets/usersData';

//hook importing
import CounterHook from './Hook/CounterHook';
import IncDec from './Hook/IncDec';
import ShoppingCart from './Hook/ShoppingCart';
import ToDoList from './Hook/ToDoListApp/ToDoList';
import ThemeToggle from './Hook/mostCommonMethods/usestate/ThemeToggle';
import DisplayWelcome from './Hook/DisplayWelcome';
function App() {
return (
 <div className="app">
  
  {/* <Testing/> */}
  {/* <TailwindcssReact/> */}
  
   {/* <Test/> */}
    {/* <Intro/> */}
    {/* these are basic of website header content  navbar and footer  */}
    
    
    
    {/*
     <Header/>
    <Navbar/>
    <Content/>
    <Footer/> */}
  {/* <Button/> */}
  {/* <SortingNumString/> */}

   {/* <Cardprobs/>
    <Card name="Abel Bereket"departmet="Software Engineering"address="Gojjam"batch="2014"/>
    <Card name="Leta Kasahun"departmet="Software Engineering"address="Ambo"batch="2014"/>
    <Card name="Hayle Bereket"departmet="Computor Sience"address="Hawasa"batch="2014"/>
    <Card name="Abel Dessalegn"departmet="Information Technology"address="Addi Ababa"batch="2014"/>
    <CardFooter/> */}

    {/* <BusinessCardHeader/>
      <BusinessCardBody name="Teku Kasahun"position="student"email="teku@gmail.com"phone="+251934567898"/>
   <BusinessCardFooter/>
   
    <BusinessCardHeader/> 
      <BusinessCardBody name="Tamirat Dessalegn"position="Instractor"email="tame@gmail.com"phone="+251935567800"/>
    <BusinessCardFooter/>
   
   <BusinessCardHeader/>
      <BusinessCardBody name="Teklemariam Mamo"position="Inspector"email="tekle@gmail.com"phone="+251934567888"/>
    <BusinessCardFooter/> */}

  {/*css styled card and calling using map functions */}
  {/* <Bheader/>
   {
     userData.map((data)=>{
      return <BCard nth={data.color} name={data.name} position={data.position} email={data.email} phone={data.phone}/>
     
    })
   } */
   }


 {/* <CounterHook/> */}
  {/* <IncDec/> */}
{/* <ThemeToggle/> */}

{/* <DisplayWelcome/> */}

{/* <ShoppingCart/> */}
<ToDoList/>






 </div>
);}
export default App
