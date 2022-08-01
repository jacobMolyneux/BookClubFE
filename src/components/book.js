import Card from 'react-bootstrap/Card'
import {useState} from 'react'
const Book = (props) => {
   let [showReview, setShowReview] = useState(false) 
   const showReviewSide = () => setShowReview(true)
   const showTitleSide = () => setShowReview(false)
   
   if (showReview == false){
    return(
        <Card className = 'm-3 border-primary p-3' style = {{minHeight: '200px', minWidth: '150px'}} onClick = {showReviewSide}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Body className = 'd-column align-center'>
                <Card.Text>{props.author}</Card.Text>
            </Card.Body>
        </Card>
    )
   }
   else if(showReview == true){
       return(
           <Card className ='m-3 border-primary p-3' style = {{minHeight: '200px', minWidth: '150px'}} onClick = {showTitleSide}>
               <Card.Title>{props.title}</Card.Title>
               <Card.Body className = 'd-column align-center'>
                   <p>{props.review}</p>
                   <p><em>Rating:</em>{props.rating}</p>
               </Card.Body>
           </Card>
       )
   }
}
export {Book}