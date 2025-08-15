const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function LoginButton() {
  const { user, login, logout } = useContext(AuthContext);
  return user ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={() => login({ name: 'John' })}>Login</button>
  );
}
