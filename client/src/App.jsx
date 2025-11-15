import "./App.css";
import {Outlet} from 'react-router-dom'
import {Header, Footer} from './components/index.js'

function App() {

  return (
    <div className="bg-red-600">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
