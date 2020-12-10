import React , {useState} from 'react'
import Container from '@material-ui/core/Container';

import Header from './header';



function Incidents() {

  return (
    <>
      <Header/>
      <Container style = {{width: "100%", marginTop:"70px", background : "red" }}>
        {"Teri maa ki"}
      </Container>
    </>
  );
}




export default Incidents;
