import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import GamePage from "./pages/GamePage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GameReviews from "./components/GameReviews";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import GameVideos from "./components/GameVideos";
import AccountSettings from "./pages/AccountSettings";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];
  const user = useSelector((state)=>state.user.user);
  
  

  return (  
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/reviews" element={<GameReviews/>}/>       
        <Route path="/videos" element={<GameVideos/>}/>
        <Route path="/about" element={<AboutPage />} />

        <Route path="/login" element={user? <Navigate to={'/'}/>:<LoginPage/>} />
        <Route path="/signup" element={user? <Navigate to={'/'}/>:<SignupPage />} />
        {/* <Route path="/profile" element={user? <ProfilePage />:<Navigate to={'/login'}/>} /> */}
        <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/profile/edit" element={<AccountSettings/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
