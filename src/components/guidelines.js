import Container from '@material-ui/core/Container';
import {Switch, Route} from 'react-router-dom';

import Header from './header';


function Guidelines() {
  return (
    <>
      <Header/>
      <Container style ={{margin : "70px 0px 0px 0px"}}>
        <h1> Guidelines Here </h1>
      </Container>
    </>
  );
}

export default Guidelines;
