import './App.css';
import LeftSection from './component/LeftSection';
import RightSection from './component/RightSection';
import SkillSection from './Containers/SkillSection';
import ProjectSection from './Containers/ProjectSection';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row" id='home'>
        <div className="col-sm-12 col-md-5">
          <LeftSection />
        </div>
        <div className="col-sm-12 col-md-7">
          <RightSection />
        </div>
        </div>
        <div className='row' id='skills'>
          <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
            <SkillSection />
          </div>
        </div>
        <div className='row' id='projects'>
          <div className="col-md-12">
            <ProjectSection />
          </div>
        </div>
        <div className='row' id='contact'>
          <div className="col-md-12">
            <Contact />
          </div>
        </div>

    </div>
    </>
  );
}

export default App;
