import React from 'react';
import NavBar from './components/NavBar'
import CarouselHome from'./components/carouselHome'
import CardsProducts from'./components/CardsProducts'
import CardsDigimon from'./components/CardsDigimon'
import Footer from './components/Footer'
import {Row, Container} from'react-bootstrap'



function App() {
  return (
    <>
      <NavBar/>
      <CarouselHome/>
      <br></br>
      <Container>
        <hr></hr>
        <h1>Produtos</h1>
        <Row>
          <CardsProducts/>
        </Row>
        <br></br>
        <hr></hr>
        <h1>Digimons</h1>
        <Row>
          <CardsDigimon></CardsDigimon>  
        </Row>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App;
