import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Passwordrecovery from './Pages/Passwordrecovery';
import Blogpage from './Pages/Blogpage';
import Course1 from './Components/Courses/Course1';
import Course2 from './Components/Courses/Course2';
import Course3 from './Components/Courses/Course3';
import Course4 from './Components/Courses/Course4';
import Course5 from './Components/Courses/Course5';
import Course6 from './Components/Courses/Course6';
import Course7 from './Components/Courses/Course7';
import Course8 from './Components/Courses/Course8';
import Mentor1 from './Pages/Mentorpage';
import { ThemeProvider } from './Components/ThemeContext';
import { AuthProvider } from './Components/AuthContexte';
import Aboutpage from './Pages/Aboutpage';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Password-recovery' element={<Passwordrecovery />} />
          <Route path="/Blogpage" element={<Blogpage />} />
          {/*categories of courses*/}
          <Route path="/courses/contentWriting" element={<Course1 />} />
          <Route path="/courses/graphicDesign" element={< Course2 />} />
          <Route path="/courses/uxUiDesign" element={<Course3 />} />
          <Route path="/courses/webDevelopment" element={< Course4 />} />
          <Route path="/courses/appDevelopment" element={<Course5 />} />
          <Route path="/courses/digitalMarketing" element={< Course6 />} />
          <Route path="/courses/3dModeling" element={<Course7 />} />
          <Route path="/courses/videoEditing" element={< Course8 />} />


          <Route path="/Mentorpage" element={<Mentor1 />} />
          <Route path="/Aboutpage" element={<Aboutpage />} />
        </Routes>
      </AuthProvider>
    </Router>


  )
}

export default App
