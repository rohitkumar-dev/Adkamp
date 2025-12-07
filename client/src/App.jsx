import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/index.js";

function App() {
  const { pathname } = useLocation();
  const hideFooter = pathname.startsWith("/admin");

  return (
    <div className="">
      {/* <Header/>
      <main className="">
        <Outlet/>
      </main>
      <Footer/> */}

      {!pathname.startsWith("/admin") && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
