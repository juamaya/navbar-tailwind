import React from 'react'
import './About.css'
import juan from '../images/YO.jpg'

const About = () => {
  return (
    <main className='bg-indigo-600 w-full  h-screen  '>
      <div className='text-2xl  text-white text-center  '>About me


        {/* LIBROS */}

        <div className="books">
          <div className="book">
            <p> Juan Marin</p>
            <div className="cover">
              <p>NAME</p>
            </div>
          </div>

          <div className="book">
            <img src={juan} alt="Juan" width={150} />
            <div className="cover">
              <p>PHOTO</p>
            </div>
          </div>

          <div className="book">
            <p> 633 03 94 85</p>
            <div className="cover">
              <p>PHONE</p>
            </div>
          </div>

          <div className="book">
            <p>correo@correo.hotmail</p>
            <div className="cover">
              <p>EMAIL</p>
            </div>
          </div>




        </div>
        <div className="CV">
          <a
            href="https://juamaya.github.io/curricujuan.github.io/ "
            target="_blank"
          >
            Ver  CV   💥          </a>
            <a
            href="https://juamaya.github.io/portafolio-juan"
            target="_blank"
          >
            Ver PORTAFOLIO  💥          </a>

          <a href="../../public/curriculum.pdf" download={"Curriculum"}>
            {" "}
            Descargar  CV
          </a>
        </div>

      </div>

    </main>
  )
}

export default About