function DisplayPosts(props) {
    return (
        <body>
            {props.parentPosts.map((post, index) => {
                return (
                    <div className="feedBox">
                        <h4>{post.name}</h4>
                        <h6>{post.post}</h6>
                        <button>Like</button>
                        <button>Dislike</button>
                        <hr />
                    </div>
                );
            })}
        </body>
    );
}

export default DisplayPosts;
