import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Profiles from "./components/Profiles/Profiles";
import Settings from "./components/Settings/Settings";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapper-components">
          <Route path="/Profiles" render={()=> <Profiles data={props.appState.profilesPage}/>} />
          <Route path="/Messages" render={()=> <Messages data={props.appState.messagesPage}/>} />
          <Route path="/News" render={()=> <News/>} />
          <Route path="/Music" render={ ()=><Music/>} />
          <Route path="/Settings" render={ ()=><Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;