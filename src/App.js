import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Navbar from "./Components/navbar/Navbar.jsx";
import "./style.scss";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LeftBar from "./Components/leftbar/LeftBar.jsx";
import Rightbar from "./Components/rightbar/Rightbar.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  const currentUser = true;
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{display:'flex'}}>
          <LeftBar />
          <div style={{flex:8}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedPaths = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedPaths>
          <Layout />
        </ProtectedPaths>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
