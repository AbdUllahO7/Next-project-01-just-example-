"use client"

import React, { useEffect, useState } from 'react'

function Todo() {
    const [todo , setTodo] = useState({})


    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1' , {
            next : {revalidate : 60 }
        });

        const result = await  response.json();
        setTodo(result)
    } , [])

    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    )
}

export default Todo
