import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, useParams, Outlet } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        alert("您已登出");
        navigate('/login', { replace: true });
      }}
    >
      登出
    </button>
  );
};
const Todo = () => {
  return (
    <div>
      <p>這是 Todo 頁面</p>
      <Logout />
    </div>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Home = () => {
  return <p>這是首頁</p>;
};
const Post = () => {
  return (
    <div style={{ padding: '10px', border: '1px solid #333' }}>
      <h3>Post 頁面</h3>
      <Outlet />
    </div>
  );
};

const PostId = () => {
  const { postId } = useParams();

  return (
    <div style={{ marginTop: '10px', color: 'blue' }}>
      <p>Post ID: {postId}</p>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/post7533967">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>

        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;