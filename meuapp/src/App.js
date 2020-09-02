import React from 'react';
import NavBar from './components/NavBar'
import CarouselHome from'./components/carouselHome'
import CardsProducts from'./components/CardsProducts'
import {Row, Container} from'react-bootstrap'



function App() {
  return (
    <>
      <NavBar/>
      <CarouselHome/>
      <Container>
        <Row>
          <CardsProducts/>
        </Row>
      </Container>
    </>
  )
}

export default App;
