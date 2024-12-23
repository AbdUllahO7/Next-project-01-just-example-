import PostDetails from '@/app/components/postDetails';
import React, { Suspense } from 'react';

const PostDetailsPage = async ({ params }) => {
    const { postId } = await params;
    const loadingJsx = (
        <div>
            <h1>loading... </h1>
        </div>
    )
    return (
        <div>
            <h1 className='font-bold text-center text-2xl'>Post Details</h1>
            <div>
                <Suspense fallback={loadingJsx}> {/*  this make the parent component loading and then continue load the child component  */}
                    
                    <PostDetails postId = {postId}/>
                </Suspense>
            </div>
        </div>
    );
};

export default PostDetailsPage;
