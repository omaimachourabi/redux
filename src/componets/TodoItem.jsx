import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,updateTodo } from '../redux/action';

function TodoItem  ({todo}) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch(); 
  return (
    <div>
        <div className='row'>
            <div>#{todo.id.length > 1 ? todo.id[2] : todo.id }</div>
            <div>
            {editable ? <input type="text" 
            value={name}
            onChange={
              (e)=> setName(e.target.value)
            }
            /> : <div>{todo.name}</div>}
            </div>
            <button 
            onClick={()=>{
              dispatch(updateTodo({
                ...todo,
                name: name
            }));
              if (editable){
                setName(todo.name);
              }
              setEditable(!editable);
            }}>{editable ? "Update" : "Edit"}</button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>

        </div>
    </div>
  )
}

export default TodoItem