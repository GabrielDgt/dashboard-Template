import { BrowserRouter, Routes, Route } from "react-router-dom";

//Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Recovery from "./pages/auth/Recovery";
//Admin pages
import Home from "./pages/admin/Home";
import Chat from "./pages/admin/Chat";
import Profile from './pages/admin/Profile';
import Error404 from "./pages/Error404";
//Layout
import AdminLayout from "./layout/AdminLayout";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/" element={<AuthLayout />}></Route>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
