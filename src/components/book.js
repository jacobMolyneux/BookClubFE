import Card from 'react-bootstrap/Card'
import {useState} from 'react'
const Book = () => {
    
    return(
        <Card className = 'm-3'>
            <Card.Header>Book Title</Card.Header>
            <Card.Body className = 'd-flex align-center'>
                <p>Book title</p>
            </Card.Body>
            <Card.Footer>Book Author</Card.Footer>
        </Card>
    )
}
export {Book}