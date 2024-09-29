import { faFacebook, faLinkedin, faTelegram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ServiceSocialMedia = () => {
    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                كلمات مفتاحية
            </h5>
            <ul className="flex justify-center mx-auto space-x-4 p-container-space">
                {/* Twitter */}
                <li className="text-twitter">
                    <a
                        href="https://twitter.com/intent/tweet?text=&amp;via=&amp;related=KhamsatDotCom&amp;url=https://khamsat.com/programming/2031001"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="hover:text-blue-500 px-4"
                        style={{borderRadius:'50%'}}
                    >
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{borderRadius:'50%'}}/>
                    </a>
                </li>

                {/* Facebook */}
                <li className="text-facebook">
                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://khamsat.com/programming/2031001"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="hover:text-blue-700"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </li>

                {/* LinkedIn */}
                <li className="text-linkedin">
                    <a
                        href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://khamsat.com/programming/2031001"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </li>

                {/* Telegram */}
                <li className="text-telegram">
                    <a
                        href="https://t.me/share/url?url=https://khamsat.com/programming/2031001"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FontAwesomeIcon icon={faTelegram} size="2x" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ServiceSocialMedia