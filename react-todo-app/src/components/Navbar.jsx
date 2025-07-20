// Navbar.jsx
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold">My App</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
    </nav>
  );
}
