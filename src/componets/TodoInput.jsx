import React, {useState} from 'react'
import {addTodo} from '../redux/action'
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';


function TodoInput() {
  let [name, setName] =  useState();
  // let [done, setDone] =  useState("all");

  let dispatch = useDispatch();
  return (
    <div>
        <div className='row2'>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text"/>
        <button className='btnadd' onClick={()=>{dispatch(
          addTodo (
            {
              id: uuid(),
              name: name
            }
          )
        ) ;
        
        setName('');
        }}>Add</button>
        </div>
        {/* <button onClick={()=>setDone("all")}>all</button>
            <button onClick={()=>setDone("done")}>done</button>
            <button onClick={()=>setDone("undone")}>undone</button>
     { done==="all" ?
            todos.map((el,key)=><div key={el.id}>
                <h1 className={el.done ? "done" : "undone"}>{el.text}</h1>
                <h1>{el.done}</h1>
                <button  onClick={()=>dispatch(doneTodo(el.id))}>{el.done? "done": "undone"}</button>
                <button  onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
            </div>) : done==="done" ?  todos.filter( el=>el.done===true).map((el,key)=><div key={el.id}>
                <h1 className={el.done ? "done" : "undone"}>{el.text}</h1>
                <h1>{el.done}</h1>
                <button  onClick={()=>dispatch(doneTodo(el.id))}>{el.done? "done": "undone"}</button>
                <button  onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
            </div>): todos.filter( el=>el.done===false).map((el,key)=><div key={el.id}>
                <h1 className={el.done ? "done" : "undone"}>{el.text}</h1>
                <h1>{el.done}</h1>
                <button  onClick={()=>dispatch(doneTodo(el.id))}>{el.done? "done": "undone"}</button>
                <button  onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
            </div>)
            
        } */}
    </div>
  )
  
}

export default TodoInput