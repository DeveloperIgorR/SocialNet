import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profiles from "./components/Profiles/Profiles";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profiles />
    </div>
  );
}
export default App;