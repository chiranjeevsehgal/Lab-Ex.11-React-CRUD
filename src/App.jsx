import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useReducer } from 'react';
import tasksReducer from './reducers/taskReducers';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className="d-flex flex-column justify-content-center mx-2 my-2">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ margin: 'auto' }}>Task List</h3>
        <AddTask onAddTask={handleAddTask} />
      </div>
      <div>
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Task-1', done: false },
  { id: 1, text: 'Task-2', done: false },
  { id: 2, text: 'Task-3', done: false },
];

export default App;
