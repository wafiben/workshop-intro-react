import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Components/Navbar.js";
import Main from "./Components/Main";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <CustomNavbar />
      </div>

      <div style={{ width: "30%", margin: "auto" }}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
