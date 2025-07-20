import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const filtered = data.filter(d => d.title.includes(query));

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">API Posts</h1>
      <input
        type="text"
        placeholder="Search posts"
        className="border p-2 mb-4"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {loading ? <p>Loading...</p> : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {filtered.slice(0, 10).map(post => (
            <div key={post.id} className="p-4 border rounded">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
