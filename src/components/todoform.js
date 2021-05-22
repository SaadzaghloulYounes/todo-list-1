import React, { useState } from 'react'

function todoform() {
const [input, setInput] = useState('')
    return (
        <form clasName ="todo-form">
            <input 
            type="text" 
            placeholder="add a todo" value={input}
            name="text"
            className="todo-input"
            />
            <button className="todo-button">add todo</button>
        </form>
    )
}

export default todoform
