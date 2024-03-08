import { useEffect, useState } from "react";

export default function Account({token, newReservedBook}){
const [reservedBooks, setReservedBooks] = useState(null)

useEffect(()=>{
async function getReservedBooks(){
try {
    const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",{  
         headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }})
    const result = await response.json()
    console.log(result)
    setReservedBooks(result.reservation)
} catch (err) {
    console.error(err)
}
}
getReservedBooks()
}, [token, newReservedBook])


return(
<>
{reservedBooks && reservedBooks.map(book=>{
    return <div key={book.id}> 
    <p> {book.title}</p>
    </div>
})

}

</>
)

}



