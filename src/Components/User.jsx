import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const User = () => {

    const loadusers =useLoaderData();
    const [users,setUsers]=useState(loadusers);
    const handleDelete=_id=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remaning =users.filter(user=>user._id !== _id);
                setUsers(remaning)

            }
           
        })

    }
    return (
        <div>
            <h2>User:{users.length}</h2>
            {
                users.map(item =><li key={item._id}>{item.name}: {item.email} {item._id}
                <Link to={`/users/${item._id}`}> <button>Update</button> </Link>
                <button onClick={()=>handleDelete(item._id)}>X</button>
                </li>)
            }
        </div>
    );
};

export default User;