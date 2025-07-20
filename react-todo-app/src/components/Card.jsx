export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
