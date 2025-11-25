import "./App.css";
import {Outlet} from 'react-router-dom'
import {Header, Footer} from './components/index.js'

function App() {

  return (
    <div className=" ">
      <Header/>
      <main className="">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
