import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setToken}){
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate();


async function handleSubmit(event){
    event.preventDefault()
    try{
    const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", 
     {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
      )

    const result = await response.json()
    console.log(result)
setToken(result.token)
localStorage.setItem("token",result.token)
// localStorage.setItem("token",token)

if(result.token){
  navigate("/")
}


} catch (err){
 console.error(err)
}

}


return(
<>


<form onSubmit={handleSubmit}>

<label>Email:</label>
<input value={email} onChange={(event)=>setEmail(event.target.value)}></input>

<label>Password:</label>
<input value={password} onChange={(event)=>setPassword(event.target.value)}></input>

<button>Submit</button>
</form>


</>
)

}



