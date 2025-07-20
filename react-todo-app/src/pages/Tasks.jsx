import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  function addTask() {
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput('');
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const filtered = tasks.filter(t =>
    filter === 'all' ? true : filter === 'active' ? !t.done : t.done
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add a task"
             className="border p-2 mr-2" />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2">Add</button>

      <div className="mt-4 space-x-2">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <ul className="mt-4">
        {filtered.map(task => (
          <li key={task.id} className="flex justify-between">
            <span
              onClick={() => toggleTask(task.id)}
              className={task.done ? 'line-through' : ''}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
