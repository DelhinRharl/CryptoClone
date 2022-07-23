import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>
        <ul className="flex gap-4 fixed bottom-0 hover:cursor-pointer">
            <li>
               <LinkedInIcon/>
            </li>
            <li>
               <TwitterIcon/>
            </li>
            <li>
               <GitHubIcon/>
            </li>
            <li>
               <YouTubeIcon/>
            </li>
            <li>
               <InstagramIcon/>
            </li>
        </ul>
    </div>
  )
}

export default Footer