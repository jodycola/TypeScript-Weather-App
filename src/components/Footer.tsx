import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

export const Footer: React.FC = () => {

    function redirectGithub() {
        window.location.assign('https://github.com/jodycola/TypeScript-Weather-App');
    }

    function redirectLinkedin() {
        window.location.assign('https://www.linkedin.com/in/kody-samaroo/')
    }

    return (
        <div className="footer">
            <AiFillGithub className="github" onClick={redirectGithub}/>
            {" "}
            <FaLinkedinIn className="linkedin" onClick={redirectLinkedin}/>
        </div>
    )
}