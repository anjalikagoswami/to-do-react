import React from 'react';

const Task = ({task , deleteTodo , index, handleEdit}) => {

  return (
    <div className='main'>
    <div className='task'>
      <div className='taskname'>
        <h2> {task} </h2>
      </div>
      <div className='buttons'>
        <button className='delete-btn' onClick={() => deleteTodo(index)}> <i class="fa-regular fa-trash-can"></i> </button>
        <button className='edit-btn' onClick={() => handleEdit(index)}> <i class="fa-regular fa-pen-to-square"></i> </button>
      </div>
      </div>
    
    </div>
  )
}

export default Task;
