import Home from './Pages/Home';
import HowWorks from './Pages/HowWorks'
import Memories from './Pages/Memories'
import Join from "./Pages/Join"
import Login from "./Pages/Login"
import Password from "./Pages/Password"
import StartRespecta from "./Pages/StartRespecta"
import Blog from "./Pages/Blog"
import Pricing from "./Pages/Pricing"
import Contact from "./Pages/Contact"
import Profile from "./Pages/Profile"
import Edit from "./Pages/Edit"
import Friend from "./Pages/Friend"
import Notification from "./Pages/Notification"
import Settings from "./Pages/Settings"
import CreateUser from "../src/Admin/CreateUser"
import ManagePosts from "../src/Admin/ManagePosts"
import ManageTopics from "../src/Admin/ManageTopics"
import ManageUsers from "../src/Admin/ManageUsers"
import CreateTopics from "../src/Admin/CreateTopics"
import CreatePosts from "../src/Admin/CreatePosts"
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/how" element={<HowWorks />} />
        <Route exact path="/memory" element={<Memories />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password" element={<Password />} />
        <Route exact path="/respecta" element={<StartRespecta />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/edit" element={<Edit />} />
        <Route exact path="/friend" element={<ProtectedRoute> <Friend /></ProtectedRoute>} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/createuser" element={<CreateUser />} />
        <Route exact path="/manageposts" element={<ManagePosts />} />
        <Route exact path="/managetopics" element={<ManageTopics />} />
        <Route exact path="/manageusers" element={<ManageUsers />} />
        <Route exact path="/createtopic" element={<CreateTopics />} />
        <Route exact path="/createpost" element={<CreatePosts />} />

      </Routes>
    </Router>
  );
}

export default App;
