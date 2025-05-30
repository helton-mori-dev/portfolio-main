import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import PageHeader from "./components/PageHeader";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import PageFooter from "./components/PageFooter";
import EcommerceProjects from "./pages/EcommerceProjects";
import "./i18n";
import "./App.scss";
import BlogPosts from "./components/BlogPosts";

function AppRoutes() {
  const location = useLocation();
  const isEcommercePage = location.pathname === "/ecommerce";
  return (
    <>
      <PageHeader />
      {!isEcommercePage && (
        <>
          <AboutMe />
          <BlogPosts />
          <MyProjects />
        </>
      )}

      <Routes>
        <Route path="/ecommerce" element={<EcommerceProjects />} />
      </Routes>

      <PageFooter />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
