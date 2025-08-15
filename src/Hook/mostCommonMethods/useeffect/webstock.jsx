function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://example.com/chat');
    ws.onmessage = (event) => {
      setMessages(prev => [...prev, JSON.parse(event.data)]);
    };
    setSocket(ws);

    return () => ws.close(); // Cleanup on unmount
  }, []); // Runs once on mount

  return (
    <div>
      {messages.map((msg, i) => <p key={i}>{msg.text}</p>)}
    </div>
  );
}