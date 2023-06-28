import React, { useState } from 'react';

const Main = () => {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState(["Buy Groceries", "Take Jimmy for a walk", "Do Homework"]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodoItem = () => {
    setTasks([...tasks, search]);
    setSearch('');
  };

  const removeTodoItem = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompleted = (index) => {
    const taskIndex = completedTasks.indexOf(index);
    if (taskIndex === -1) {
      setCompletedTasks([...completedTasks, index]);
    } else {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(taskIndex, 1);
      setCompletedTasks(updatedCompletedTasks);
    }
  };

  return (
    <div className='main--container'>
      <div className="main--form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter A Todo' className='user--input' value={search} onChange={e => setSearch(e.target.value)} />
          <button className='btn' type='submit' onClick={addTodoItem}>Add Task</button>
        </form>
      </div>
      <div className='todo--container'>
        {
          tasks.map((item, index) => (
            <div className={`todo ${completedTasks.includes(index) ? 'line--through' : ''}`} key={index}>
              <span className="task-text">{item}</span>
              <div className="icon--div">
                <i className="fa-solid fa-square-check fa-lg icon" onClick={() => toggleCompleted(index)}></i>
                <i className="fa-solid fa-trash fa-lg icon" onClick={() => removeTodoItem(index)}></i>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Main;
