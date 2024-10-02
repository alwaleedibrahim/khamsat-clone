// "use client"
// import React from 'react'
// import ReCAPTCHA from 'react-google-recaptcha';

// const Recaptcha = ({ onVerify }) => {
//     const recaptchaRef = React.useRef();

//     const handleVerify = (token) => {
//         onVerify(token); 
//     }
//     return (
//         <div className="flex flex-col items-center mt-4">
//             <ReCAPTCHA
//                 sitekey="YOUR_SITE_KEY" 
//                 onChange={handleVerify}
//                 ref={recaptchaRef}
//                 className="w-72 h-20" 
//             />
//         </div>

//     )
// }

// export default Recaptcha