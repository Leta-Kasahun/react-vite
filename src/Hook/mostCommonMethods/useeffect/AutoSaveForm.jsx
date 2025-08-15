function AutoSaveForm() {
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('draft', JSON.stringify(formData));
    }, 1000); // Auto-save after 1 second

    return () => clearTimeout(timer);
  }, [formData]); // Runs when `formData` changes

  return (
    <form>
      <input
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
    </form>
  );
}