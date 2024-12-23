import React from 'react'

export const metadata = {
    title : 'articles page'
}

function layout({children}) {
    return (
        <div>
            <h1>Articles</h1>
            <div className='mt-10 bg-red-900 p-10 rounded-md'>
                {children}
            </div>
        </div>
    )
}

export default layout   