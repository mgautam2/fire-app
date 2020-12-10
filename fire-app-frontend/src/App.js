import Container from '@material-ui/core/Container';
import {Switch, Route} from 'react-router-dom';
import Map from './components/map';
import News from './components/news';
import Incidents from './components/incidents';
import Guidelines from './components/guidelines';
import './App.css';


function App() {
  return (
    <Container >
      <Switch>
        <Route exact path = "/">
          <Map/>
        </Route> 
        <Route  path = "/news">
          <News/>
        </Route> 
        <Route  path = "/guidelines">
          <Guidelines/>
        </Route> 
        <Route  path = "/incidents">
          <Incidents/>
        </Route> 
      </Switch>
      
    </Container>
  );
}

export default App;
