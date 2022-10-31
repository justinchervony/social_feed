import CustomButton from "./CustomButton/CustomButton";

function DisplayPosts(props) {
    return (
        <body>
            {props.parentPosts.map((post, index) => {
                return (
                    <div className="feedBox">
                        <h4>{post.name}</h4>
                        <h6>{post.post}</h6>
                        <CustomButton message1="Like" message2="Dislike" />
                        <hr />
                    </div>
                );
            })}
        </body>
    );
}

export default DisplayPosts;
