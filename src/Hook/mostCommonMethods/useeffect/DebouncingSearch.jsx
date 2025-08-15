function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        fetch(`https://api.example.com/search?q=${query}`)
          .then(res => res.json())
          .then(data => setResults(data));
      }
    }, 500); // Wait 500ms before searching

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [query]); // Runs when `query` changes

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {results.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}