import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
//main componets

function App() {
return (
 <div className="app">
    <Header/>
    <Navbar/>
    <Content/>
    <Footer/>
 </div>
);}
export default App
