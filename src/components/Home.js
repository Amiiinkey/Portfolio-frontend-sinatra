import './home.css'
import anime from './images/download7.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Animated from './Animated'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['','A','M', 'I', 'N', '',]
  const jobArray = ['w','e','b',' ','d', 'e', 'v', 'e', 'l','o','p', 'e', 'r','.', ]

useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  console.log(letterClass)

  return (
    <div className='main'>
      <div className="container home-page">
        <div className="text-z">
          <h1>
            
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <Animated
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <Animated
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
          </h1>
          <h2>Full-stack Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        
      </div>
      <div><img src={anime} alt="anime" id="img1"/></div>

      <Loader type="pacman" />
    </div>
  )
}

export default Home