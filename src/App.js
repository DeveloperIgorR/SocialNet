import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfilesContainer from "./components/Profiles/ProfilesContainer";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapper-components">
          <Route path="/Profiles" render={() => <ProfilesContainer/>} />
          <Route path="/Messages" render={() => <MessagesContainer/>}/>
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
          <Route path="/FindUsers" render={() => <FindUsersContainer/>} />
          <Route path="/Friends" render={() => <Friends />} />
          </div>
      </div>
    </BrowserRouter>
  );
}
export default App;