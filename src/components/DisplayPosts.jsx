function DisplayPosts(props) {
    return (
        <body>
            {props.parentPosts.map((post, index) => {
                return (
                    <div>
                        <h4>{post.name}</h4>
                        <h6>{post.post}</h6>
                    </div>
                );
            })}
        </body>
    );
}

export default DisplayPosts;
