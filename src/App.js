import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Router>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </Router>
      </div>
    </Provider>
   
  );
}

export default App;
