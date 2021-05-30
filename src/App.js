import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Profiles from "./components/Profiles/Profiles";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapper-components">
          <Route path="/Profiles" render={() => <Profiles profilesPage={props.appState.profilesPage}
                                                          dispatch={props.dispatch} />} />
          <Route path="/Messages" render={() => <Messages data={props.appState.messagesPage}
                                                          dispatch={props.dispatch}
                                                 newMessageText={props.appState.messagesPage.newMessageText}/>}/>
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
          <Route path="/Friends" render={() => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;