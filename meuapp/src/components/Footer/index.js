import React from 'react';
import { Card } from 'react-bootstrap';


export default function Footer(){
    return(

        <>
            <br />
            <Card bg="dark" text="white" style={{ width: '100%' }}>
                <Card.Header style ={{textAlign: 'center'}}>Primeiro projeto com react js</Card.Header>
                <Card.Body style ={{textAlign: 'center'}}>
                <Card.Title >Aprendendo react js do Basico</Card.Title>
                <Card.Text>
                    Nesse estudo aprendi a usar o ReactJS 
                </Card.Text>
                </Card.Body>
            </Card>
        </>

    )
}