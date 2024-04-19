import { RiStarSmileFill, RiExternalLinkFill } from "@remixicon/react"
import { useState } from "react"
import Tech from "./components/tech"
import Stars from "./components/stars"
import Projects from "./components/projects"


function App() {
  const [whichPage, setWhichPage] = useState('')
  const [fallStar, setFallStar] = useState(false)

  const navBox = (text, page) => {
    return <div onClick={() => setWhichPage(page)} className={`px-3 md:w-[145px] w-[110px] py-1.5 whitespace-nowrap flex items-center justify-center cursor-pointer rounded-sm bg-white/20 text-[#2FA5E7] md:text-lg text-sm tracking-wider`}>{text}</div>

  }

  return (
    <>
      <section className="w-full h-full">
        <section className="py-6 w-full relative">
          <Stars fallStar={fallStar} />
          <div className="w-[88%] flex md:flex-row gap-6 flex-col mx-auto justify-between md:items-center">

            <div className="flex gap-4">
              <img className={`h-12 rounded-full ${whichPage === 'about' ? 'move-image' : 'rotate-anime'}`} src="./leo.jpg" alt="pic" />
              <div className="flex flex-col text-gray-300">
                <p className="font-[Oregano] text-lg">GYANENDRA VERMA</p>
                <p className="tracking-wide">Full stack developer</p>
              </div>
            </div>

            <div className="md:gap-6 gap-2 justify-center flex">
              <span className="cursor-pointer" onClick={() => setFallStar(prev => !prev)}><RiStarSmileFill color={`${fallStar ? 'yellow' : 'white'}`} size={24} /></span>
              <span className="flex gap-3 items-center tracking-wide md:text-md text-gray-300 drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">Resume <span className="cursor-pointer"><RiExternalLinkFill size={16} /></span></span>
              <span className="flex gap-3 items-center tracking-wide md:text-md text-gray-300 drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">Whatsapp <span className="cursor-pointer"><RiExternalLinkFill size={16} /></span></span>
            </div>
          </div>
        </section>

        <section className="py-4 md:pl-20 w-full flex md:flex-row flex-col md:gap-20 gap-10">
          <div className="flex md:flex-col flex-row flex-wrap md:justify-normal justify-center md:mt-20 gap-6 relative">
            <div className="absolute w-24 h-12 bg-white blur-[70px] left-10 top-20"></div>
            {navBox('ABOUT', 'about')}
            {navBox('TECH STACK', 'tech')}
            {navBox('PROJECTS', 'project')}
            {navBox('CONTACT', 'contact')}
          </div>

          <div className="w-full relative">
            {whichPage === 'tech' ? <Tech /> :
           <Projects /> }
          </div>
        </section>
      </section>
    </>
  )
}

export default App
