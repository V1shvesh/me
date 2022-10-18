import React, { useCallback, useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout';
import '../styles/index.scss';
import iconGithub from '../images/github.svg'
import iconLinkedin from '../images/linkedin.svg'
const Header = () => {
  const [mouseX, setMouseX] = useState(0);
  const headerContainer = useRef();

  
  const updateMouseXValue = useCallback((event) => {
    if(window.innerWidth > 768) {
      setMouseX(event.pageX);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMouseXValue, true);
    return () => {
      window.removeEventListener('mousemove', updateMouseXValue, true);
    }
  }, []);

  const headerContainerRect = headerContainer.current?.getBoundingClientRect();
  let widthPercent = 0;
  let hackContainerWidth = 0

  if(headerContainerRect) {
    const {
      width: headerContainerWidth,
      x: headerContainerX,
    } = headerContainerRect;
  
    hackContainerWidth = headerContainerWidth;
    widthPercent = (Math.min(Math.max(mouseX - headerContainerX, 0), headerContainerWidth) / headerContainerWidth) * 100;
  }
  return (
    <div className="hero__header__container" ref={headerContainer}>
      <h1 className="hero__header__text">Vishvesh.</h1>
      <div
        className="hack"
        style={{
          width: `${widthPercent}%`
        }}
      >
        <h1 className="hero__header__text hero__header__text--hack" style={{
          width: hackContainerWidth
        }}>crysna_</h1>
      </div>
    </div>
  )
}


const IndexPage = () => {
  return (
    <Layout page="home">
      <section className="hero">
        <h2 className="hero__subheader">Hey, I'm</h2>
        <Header />
        <h2 className="hero__subheader">
          {"I build cross-platform user experiences"}
          <br/>
          {"(+services to support them)"}
        </h2>
        <div className='contact-bar'>
          <a href='https://www.linkedin.com/in/vishveshsuresh/' target={'_blank'}>
            <img className='contact-bar__item' src={iconLinkedin} />
          </a>
          <a href='https://github.com/V1shvesh' target={'_blank'}>
            <img className='contact-bar__item' src={iconGithub} />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage