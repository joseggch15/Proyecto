import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
  <div className="App">
    </Router>
      
     <Switch>
          <Header/>
        </Switch>
    <Footer/>
  </div>
  );
}

export default App;
