import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Alert from './components/layout/Alert';
import User from './pages/User';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';





function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <Alert />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='/notfound' element={<Notfound />} />
            <Route path='/*' element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
    
  );
}

export default App;
