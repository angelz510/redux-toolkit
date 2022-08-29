import "./App.css";
import Header from "./Components/Header";
import Home from "./features/Home/Home";
import Profile from "./features/Profile/Profile";
import { useSelector } from "react-redux";

function App() {
  const home = useSelector((state) => state.home);

  return (
    <div className="App">
      <Header />
      {home.screen === "home" ? <Home /> : <Profile />}
    </div>
  );
}

export default App;
