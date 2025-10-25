import { useState } from "react"
import "../css/addUser.css" 
const AddUser=()=>{
    const [Name,setName]=useState("")
    const [email,setEmail]=useState("")
    const handleAdduser=()=>{

    }
    return(
        <div className="add-user-form">
            <form onSubmit={handleAdduser}>
                <input type="text" placeholder="Name..." />
                <input type="text" placeholder="Email"  />
                <button>Add User</button>
            </form>
        </div>
    )
}

export default AddUser