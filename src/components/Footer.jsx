import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <div className='footer top'>
            <div className='hoverdiv'>Created with <i className="fa-solid fa-shield-heart footer--icon"></i> by Subbu</div>
        </div>
        <div className='footer'>
            <div className='linksdiv'> 
                <a href="https://www.instagram.com/subbu_uwu/" target="_blank"><i className="fa-brands fa-instagram insta"></i></a>
                <a href="https://www.linkedin.com/in/subramanian-narayanan-52900624b/" target="_blank"><i className="fa-brands fa-linkedin linkedin"></i></a>
                <a href="https://github.com/subbuwu" target="_blank"><i className="fa-brands fa-github github"></i></a>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Footer