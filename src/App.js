
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Containers/Header';
import ProductsList from './Containers/ProductsList';
import ProductsDetail from './Containers/ProductsDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={ProductsList}/>
          <Route path='/product/:productId' exact component={ProductsDetail}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
