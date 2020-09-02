import React, {Component} from 'react'
import  {Card,Button,col} from 'react-bootstrap'

class CardsProducts extends Component {

    state = {
      cards: [
            {
                imagem: 'https://i.pinimg.com/originals/6a/3b/d5/6a3bd5cda86fad6f8f7d9720ad521ea7.jpg',
                title: 'Card 1',
                text: 'Text do card 1 para que nós possamos ver a diferença entre um e outro.',

            },
            {
                imagem: 'https://pbs.twimg.com/profile_images/690658094896951296/YvG27LjO_400x400.jpg',
                title: 'Card 2',
                text: 'Text do card 2 para que nós possamos ver a diferença entre um e outro.',

            },
            {
                imagem: 'https://i.pinimg.com/originals/67/55/ab/6755ab1a95a5de85dafae71b007ba884.jpg',
                title: 'Card 3',
                text: 'Text do card 3 para que nós possamos ver a diferença entre um e outro.',

            }
        ]  
    };
    render() {
        return(
            <>

                {this.state.cards.map(card =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card.imagem} />
                        <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.text}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )}    
            </>
        )
    }
}

export default CardsProducts;