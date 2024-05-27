import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
// import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
// import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Sign_in from "./components/signup_signin/Sign_in"
import SignUp from "./components/signup_signin/SignUp"
import Home from "./components/home/Home"
import Lectures from "./components/videos/Lectures"
import Rea from "./components/videos/Rea"
import Nod from "./components/videos/Nod"
import Ml from "./components/videos/Ml"
import Dm from "./components/videos/Dm"
import Da from "./components/videos/Da"
import Dtm from "./components/videos/Dtm"
import Iot from "./components/videos/Iot"
import Nn from "./components/videos/Nn"
import Fm from "./components/videos/Fm"
import Cc from "./components/videos/Cc"
import Oracle from "./components/videos/Oracle"
import Csharp from "./components/videos/Csharp"
import Cs from "./components/videos/Cs"
import Ba from "./components/videos/Ba"
import Ac from "./components/videos/Ac"
function App() {
  return (
   <>
    <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          {/* <Route path='/team' element={<Team />} /> */}
          <Route path='/pricing' element={<Pricing />} />
          {/* <Route path='/journal' element={<Blog />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Sign_in />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/classes' element={<Lectures />} />
          <Route path='/reactjs' element={<Rea />} /> 
          <Route path='/nodejs' element={<Nod />} /> 
          <Route path='/mlwithai' element={<Ml />} />
          <Route path='/ditalmarketing' element={<Dm />} />
          <Route path='/datanalytics' element={<Da />} />
          <Route path='/datamining' element={<Dtm />} />
          <Route path='/iot' element={<Iot />} />  
          <Route path='/neuralnetworks' element={<Nn />} />
          <Route path='/fluedmechanics' element={<Fm />} />
          <Route path='/cloudcomputing' element={<Cc />} />
          <Route path='/oracle' element={<Oracle />} />
          <Route path='/csharp' element={<Csharp />} />
          <Route path='/cybersecurity' element={<Cs />} />
          <Route path='/businessanalytics' element={<Ba />} />
          <Route path='/autocad' element={<Ac />} />
        </Routes>
       <Footer />
    
    </BrowserRouter>
   </>
  )
}

export default App