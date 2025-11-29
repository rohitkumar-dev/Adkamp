import "./App.css";
import {Outlet} from 'react-router-dom'
import {Header, Footer} from './components/index.js'
import Header2 from "./components/header/Header2.jsx";

function App() {

  return (
    <div className=" ">
      <Header/>
      <Header2/>
      <main className="">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
