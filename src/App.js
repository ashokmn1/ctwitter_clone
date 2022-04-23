import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import TweetsListings from './Components/TweetsListings';
import Messages from './Components/Messages';
import Notification from './Components/Notification';
import ProfileComponent from './Components/ProfileComponent';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AddTweets from './Components/AddTweets';
import Comment from './Components/Comment';



function App() {
  return (
    <div className="app">
      <Router>
        <div className='mainContainer'>
          <div className='main-container'>
            <Routes>
              <Route path='/' exact element={<SignIn />} />
              <Route path='/home' element={<TweetsListings />} />
              <Route path='/messages' exact element={<Messages />} />
              <Route path='/notification' exact element={<Notification />} />
              <Route path='/profile' exact element={<ProfileComponent />} />
              <Route path='/signup' exact element={<SignUp />} />
              <Route path='/tweet' exact element={<AddTweets />} />
              <Route path='/tweets/:id/comment' exact element={<Comment/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
