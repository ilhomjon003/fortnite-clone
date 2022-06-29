import './App.css';
import { BrowserRouter as Router,  Route , Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './router/home/Home';
import Login from './router/login/Login';
import Product from "./router/product-wrapper/Product";
import SinglePage from './router/single-page/SinglePage';

function App() {
  
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" component={SinglePage}/>
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
