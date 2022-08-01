import {Book} from '../components/book'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import booksImage from '../images/antique-books-on-shelves.jpg'

import Image from 'react-bootstrap/Image'
import {useState} from 'react'
const Homepage = () => {
    let [showForm, setShowForm] = useState(false);
    let [bookTitle, setBookTitle] = useState('')
    let [bookAuthor, setBookAuthor] = useState('')
    let [bookReview, setBookReview] = useState('')
    let [bookRating, setBookRating] = useState(null)
    let [library, setLibrary] = useState([
        {
            "Title": "Harry Potter",
            "Author": 'JK Rowling',
            "Review": "this is a book review",
            "Rating": '5'
        },
        {
            "Title": "Harry Potter",
            "Author": 'JK Rowling',
            "Review": "this is a book review",
            "Rating": '5'
        },
        {
            "Title": "Harry Potter",
            "Author": 'JK Rowling',
            "Review": "this is a book review",
            "Rating": '5'
        },
        {
            "Title": "Harry Potter",
            "Author": 'JK Rowling',
            "Review": "this is a book review",
            "Rating": '5'
        },
    ])
    
    const handleClose = () => setShowForm(false)
    const handleShow = () => setShowForm(true)

    const add_a_book = () => {
        let bookData = [{
            'Title': bookTitle,
            'Author': bookAuthor,
            'Review': bookReview,
            'Rating': bookRating
        }]
        library.push(bookData)

    }
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
                            <Form.Control type ='text' placeholder = 'Author' onChange = {(e) => {setBookAuthor(e.target.value)}}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type ='text' placeholder = 'Title' onChange = {(e) => {setBookTitle(e.target.value)}}></Form.Control>
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
                            <Form.Label onChange = {(e) => {setBookReview(e.target.value)}}>Book Review</Form.Label>
                            <Form.Control placeholder = 'What did you think?' as = 'textarea'></Form.Control>
                        </Form.Group>
                         </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick = {handleClose}>close</Button>
                    <Button variant='primary' onClick = {add_a_book}>Okay</Button>
                </Modal.Footer>
                
            </Modal>
            <div>
                
            <div className = 'border-bottom d-flex justify-content-between p-3'>
                <h1>Your Library</h1>
                <Button variant = 'light'>Filter</Button>
            </div>
            <Button onClick = {handleShow}>Add a Book</Button>
            </div>
            <Stack direction="horizontal" gap={3}>       
            <Book/>
            {library.map((book) => {
                return(
                    <Book title = {book.Title} author = {book.Author} review = {book.Review} rating = {book.Rating}/>
                )
            })}
            
            </Stack>
            
        </div>
    )
}

export {Homepage}