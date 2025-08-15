function CheckboxList() {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <div>
      {['Apple', 'Banana', 'Orange'].map(item => (
        <label key={item}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => toggleItem(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
}