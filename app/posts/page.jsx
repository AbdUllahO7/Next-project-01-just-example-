import Link from "next/link"

const postsPage = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        next : {revalidate : 120 }
    })
    const posts = await  response.json()

    const postsJsx = posts.map((post)=> {
        return (
            <Link href={`/posts/${post?.id}`} className="bg-yellow-100 rounded-md w-[250px] p-3 text-secondary ">
            <div >
                <h1 className="font-bold">{post.title}</h1>
                <p>{post.body}</p>
            </div>
            </Link>
            
        )
    })
    return (
        <div>
            <h1 >All Posts</h1>
            <div className="container py-12 mx-auto">
                <div className=" flex flex-wrap mx-auto gap-5  w-full">
                    {postsJsx}
                </div>
            </div>
        
        </div>
        
    )
}

export default postsPage
    