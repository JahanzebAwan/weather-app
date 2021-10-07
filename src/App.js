import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/Header/Header";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
