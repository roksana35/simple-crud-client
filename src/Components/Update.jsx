import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadeduser=useLoaderData();
    const handleUpdate=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email)
        const Updateuser={name,email}
        fetch(`http://localhost:5000/users/${loadeduser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Updateuser)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <h2>Updated Information {loadeduser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadeduser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadeduser.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;