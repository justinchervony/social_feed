import React, { useState } from "react"
import CurrentDateAndTime from "./CurrentDateAndTime";

const AddPostForm = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [time, setTime] = useState('');
    const currentTime = '';

    function handleCreate(event){
        event.preventDefault();
        let newPost ={
            name: name,
            post: post,
            time: time
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return (
        <form onSubmit={handleCreate} className='form-grid'>
            <div className="form-group">
                <h4 className="label">Name</h4>
                <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="form-group">
                <h4 className="label">Post</h4>
                <textarea className='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <CurrentDateAndTime newDateAndTime = {currentTime}/>
            <text value={time} onChange={() => setTime(currentTime.target.value)} />
            <button type='submit' className="submitButton">Create</button>
            
        </form>
    );
}

export default AddPostForm;