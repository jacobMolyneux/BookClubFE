import {Book} from '../components/book'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
const Homepage = () => {
    let [showForm, setShowForm] = useState(false);
    let [bookTitle, setBookTitle] = useState('')
    let [bookAuthor, setBookAuthor] = useState('')
    let [bookReview, setBookReview] = useState('')
    let [bookRating, setBookRating] = useState(null)
    
    const handleClose = () => setShowForm(false)
    const handleShow = () => setShowForm(true)
    return(
        <div>
            <Modal show ={showForm}
            onHide = {handleClose}
            backdrop ='static'
            keyboard ='false'>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Author</Form.Label>
                            <Form.Control type ='text' placeholder = 'Author'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type ='text' placeholder = 'Title'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rating</Form.Label>
                            <Form.Select type ='text'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Book Review</Form.Label>
                            <Form.Control placeholder = 'What did you think?' as = 'textarea'></Form.Control>
                        </Form.Group>
                         </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick = {handleClose}>close</Button>
                    <Button variant='primary'>Okay</Button>
                </Modal.Footer>
                
            </Modal>
            <div>
            <h1>Your Library</h1>
            <Button onClick = {handleShow}>Add a Book</Button>
            </div>
            <Stack direction="horizontal" gap={3}>       
            <Book/>
            
            </Stack>
            
        </div>
    )
}

export {Homepage}