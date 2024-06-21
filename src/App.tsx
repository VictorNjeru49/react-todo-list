import React, { useReducer, useEffect } from 'react';
import './app.scss';
import Mainsection from './components/header/header';
import check from './images/icon-cross.svg';
import { Task } from './interfaces/interface';
import { Initialstate, Reducing } from './components/reducers/reducers';



function App() {
  const [state, dispatch] = useReducer(Reducing, Initialstate);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      dispatch({ type: 'SETNEWTASK', set: '' });
      dispatch({ type: 'SETFILTER', filter: 'all' });
      dispatch({ type: 'ADDTASK', addtask: JSON.parse(storedTasks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const addTask = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch({ type: 'ADDTASK', addtask: state.newTask });
  };

  const filteredTasks = (): Task[] => {
    switch (state.filter) {
      case 'active':
        return state.tasks.filter((task) => !task.completed);
      case 'completed':
        return state.tasks.filter((task) => task.completed);
      default:
        return state.tasks;
    }
  };

  const remainingTasks = (): number => {
    return state.tasks.filter((task) => !task.completed).length;
  };

  return (
    <div>
      <Mainsection />
      <form onSubmit={addTask}>
        <input
          type="text"
          value={state.newTask}
          onChange={(e) =>
            dispatch({ type: 'SETNEWTASK', set: e.target.value })
          }
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {filteredTasks().map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed}
              onChange={() =>dispatch({ type: 'TOGGLETASK', toggle: task.id })}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <button
              onClick={() =>
                dispatch({ type: 'DELETETASK', delete: task.id })
              }
            >
              <img src={check} />
            </button>
          </li>
        ))}
      </ul>

      <div>
      <span>{remainingTasks()} items left</span>


        <button onClick={() => dispatch({ type: 'SETFILTER', filter: 'all' })}>
          All
        </button>
        <button
          onClick={() => dispatch({ type: 'SETFILTER', filter: 'active' })}
        >
          Active
        </button>
        <button
          onClick={() => dispatch({ type: 'SETFILTER', filter: 'completed' })}
        >
          Completed
        </button>
        <button onClick={() => dispatch({ type: 'CLEARCOMPLETED' })}>
          Clear Completed
        </button>
        
      </div>


      
    </div>
  );
}

export default App;
