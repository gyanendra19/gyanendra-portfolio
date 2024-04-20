import { RiStarSmileFill, RiExternalLinkFill } from "@remixicon/react"
import { useState } from "react"
import Tech from "./components/tech"
import Stars from "./components/stars"
import Projects from "./components/projects"
import About from "./components/about"
import Contact from "./components/contacts"


function App() {
  const [whichPage, setWhichPage] = useState('about')
  const [fallStar, setFallStar] = useState(false)

  const navBox = (text, page) => {
    return <div onClick={() => setWhichPage(page)} className={`px-3 md:w-[145px] w-[110px] py-1.5 whitespace-nowrap flex items-center justify-center cursor-pointer relative z-[2] rounded-sm text-[#2FA5E7] md:text-lg text-sm tracking-wider ${whichPage === page ? 'bg-white/40' : 'bg-white/20'}`}>{text}</div>

  }

  return (
    <>
      <section className="w-full h-full overflow-hidden">
        <section className="py-6 w-full h-full relative">
          <Stars fallStar={fallStar} />
          <div className="w-[88%] flex md:flex-row gap-6 flex-col mx-auto justify-between md:items-center">

            <div className="flex gap-4">
              {whichPage === 'about' && <img className={`h-12 rounded-full object-contain absolute rotate-anime`} src="./face.jpg" alt="pic" />}
              <img className={`h-12 rounded-full object-contain ${whichPage === 'about' ? 'move-image-phone' : 'rotate-anime'}`} src="./face.jpg" alt="pic" />
              <div className="flex flex-col text-gray-300">
                <p className="font-[Oregano] text-lg">GYANENDRA VERMA</p>
                <p className="tracking-wide">Full stack developer</p>
              </div>
            </div>

            <img onClick={() => setFallStar(prev => !prev)} className="h-16 cursor-pointer md:block hidden letter" src="./star.png" alt="" />
            <div className="md:gap-6 gap-3 justify-center flex">
            <img onClick={() => setFallStar(prev => !prev)} className="h-12 cursor-pointer md:hidden block letter" src="./star.png" alt="" />
              <a href="https://docs.google.com/document/d/1BYMy9mrB77g_Twp_b_JDLFN8C2lgMERCyykxCmAO4hs/edit?usp=sharing" target="_blank" className="flex gap-3 items-center tracking-wide md:text-lg text-gray-300 drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">Resume <span className="cursor-pointer"><RiExternalLinkFill size={16} /></span></a>
              <a href="https://github.com/gyanendra19" target="_blank" className="flex gap-3 items-center tracking-wide md:text-lg text-gray-300 drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">Github<span className="cursor-pointer"><RiExternalLinkFill size={16} /></span></a>
            </div>
          </div>
        </section>

        <section className="py-4 md:pl-20 w-full flex md:flex-row flex-col md:gap-20 gap-10">
          <div className="flex md:flex-col flex-row flex-wrap md:justify-normal justify-center md:mt-20 gap-6 relative">
            <div className="absolute w-24 h-12 bg-white blur-[70px] z-[1] left-10 top-20"></div>
            {navBox('ABOUT', 'about')}
            {navBox('TECH STACK', 'tech')}
            {navBox('PROJECTS', 'project')}
            {navBox('CONTACT', 'contact')}
          </div>

          <div className="w-full relative">
            {whichPage === 'tech' ? <Tech /> :
           whichPage === 'about' ? <About /> :
           whichPage === 'contact' ? <Contact /> :
           <Projects />
          }
          </div>
        </section>
      </section>
    </>
  )
}

export default App
