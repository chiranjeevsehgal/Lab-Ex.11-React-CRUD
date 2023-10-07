import React, { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="list-group w-100 ">
      {tasks.map((task) => (
        <li className="list-group-item my-2" style={{ padding: '24px' }} key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          className="form-control"
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
          
        />
        <button
          className="btn btn-dark ml-2"
          onClick={() => setIsEditing(false)}
          style={{ marginLeft: '24px'}}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="btn btn-dark ml-2"
          onClick={() => setIsEditing(true)}
          style={{ marginLeft: '24px'}}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
        style={{ marginRight: '24px'}}
      />
      {taskContent}
      <button className="btn btn-dark ml-2" onClick={() => onDelete(task.id)} style={{ marginLeft: '24px'}}>
        Delete
      </button>
    </label>
  );
}
