import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom'

import YtLogo from "../images/yt-logo.png"
import YtLogoMobile from "../images/yt-logo-mobile.png"

const Header = () => {
  return (
    <div>
      <img src={YtLogo} alt="" />
    </div>
  )
}

export default Header