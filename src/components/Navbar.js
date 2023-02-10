import React from 'react' //imr
import PropTypes from 'prop-types' //impt

//class-className, sab tags ko band, href-href="/"
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       <div className="container-fluid">
       <a className="navbar-brand" href="/">{props.title}</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
           <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
     </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //to ensure props are not undefined
    aboutText: PropTypes.string.isRequired
  }

    Navbar.defaultProps = {
        title: 'set title ',
        aboutText: 'about',}

