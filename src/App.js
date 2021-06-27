import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AllCirts from "./components/AllCirts";
import Mycirtificate from "./components/Mycirtificate";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/post/:slug'/>
        <Route component={Post} path='/post'/>
        <Route component={Project} path='/project'/>
        <Route component={Mycirtificate} path='/certificates/:slug'/>
        <Route component={AllCirts} path='/certificates'/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
