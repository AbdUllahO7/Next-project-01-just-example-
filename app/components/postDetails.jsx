import React from 'react';

const PostDetails = async ({ postId }) => {

        await new Promise((resolve) => {
            setTimeout(()=> {
                resolve();
            } , 500)
        }) // this make the page wait 500 mil seconde  

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: { revalidate: 120 },
    });

    const post = await response.json();

    return (
        <div>
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetails;
