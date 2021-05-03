import { getSuggestedQuery } from '@testing-library/dom';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Nav from './components/Nav';
import Profiles from './components/Profiles';
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profiles />
    </div>
  );
}
