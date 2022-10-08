import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import usePageTracking from "./utils/usePageTracking";
import useScrollToTop from "./utils/useScrollToTop";

function App() {
  usePageTracking();
  useScrollToTop();

  return (
    <div className="App">
      <Header />
      <main role="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <hr className="end-divider" />
      <Footer />
    </div>
  );
}

export default App;
