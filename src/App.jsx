
import './App.css'
import Home from './pages/Home'
import Layout from './Layout/Layout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Service from './pages/services';
import Article from './pages/Article';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/privacy';
import Terms from './pages/Terms';

function App() {

  return (
    <div className="App">
      <Router >
        <Routes>

          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/article' element={<Article />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/terms' element={<Terms />} />

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
