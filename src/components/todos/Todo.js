import React from 'react'

const Todo = props => <span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button>

export default Todo;
