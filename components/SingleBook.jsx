import { useParams } from 'react-router-dom';

export default function SingleBook(){

let {bookID} = useParams()
// let {bookTitle} = useParams()
return(
<>
<p>Book Id is {bookID}</p>
{/* <p>Book Title is {bookTitle}</p> */}
</>
)

}



