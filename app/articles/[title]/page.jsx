import React from 'react'

function ShowArticlePage(props) {
    return (
        <div>
            <h1>Show Article </h1>
            <h2>{props.params.title}</h2>
        </div>
    )
}

export default ShowArticlePage
