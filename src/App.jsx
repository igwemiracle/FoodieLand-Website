import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import RecipeDetails from './pages/RecipeDetails';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import "./App.css";
import { ThemeProvider } from './contexts/ThemeContext';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import ContactPage from './pages/Contact';


const App = () => (
  <ThemeProvider>
    <Router>
      <Header />
      <PageRoutes />
      <Footer />
    </Router>
  </ThemeProvider>
);


const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/recipes" element={<RecipeDetails />} />
    <Route path="/bloglist" element={<BlogList />} />
    <Route path="/blogpost" element={<BlogPost />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);


export default App;