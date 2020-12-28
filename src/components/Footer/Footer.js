import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <footer  className="tc-l w-100 ">
          <div className="flex justify-center">
            
            <a className="link black-80 dim inline-flex items-center ma2 tc br2 pa2" href="https://github.com/yuwen-c" target="_blank" title="GitHub" rel="noopener noreferrer">
              <svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
              <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
              <span className="f6 ml1 ">yuwen-c</span>
            </a>
            
            <a className="link black-80 dim inline-flex items-center ma2 tc br2 pa2" href="mailto: http://codepen.io" title="Gmail">
              <svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" >
              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/></svg>     
              <span className="f6 ml1 ">mail me</span>
            </a>
            
          </div>
        </footer>
    )
}

export default Footer;