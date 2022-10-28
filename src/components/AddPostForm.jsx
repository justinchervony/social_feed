import React, { useState } from "react"

const AddPostForm = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleCreate(event){
        event.preventDefault();
        let newPost ={
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return (
        <form onSubmit={handleCreate} className='form-grid'>
            <div className="form-group">
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Post</label>
                <input type='text' className='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary">Create</button>
        </form>
    );
}

export default AddPostForm;