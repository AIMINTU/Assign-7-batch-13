
import flogo from '../assets/logo-xl.png'
import fb from '../assets/facebook.png'
import ig from '../assets/instagram.png'
import tw from '../assets/twitter.png'


const Footer = () => {
    return (
        <div className="bg-[#244D3F] p-20">
            <div>
                <div>
                    <img className="ml-75" src={flogo} alt="footerlogo" />
                    <p className="text-center text-gray-100">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className="m-10 py-5">
                    <p className="text-center text-gray-100">Social Links</p>
                    <div className="flex gap-10 justify-center" >
                        <span><img src={ig} alt="" /></span>
                    <span><img src={fb} alt="fblogo" /></span>
                        <span><img src={tw} alt="" /></span>
                    </div>
                </div>
                <div className="flex justify-between m-10 ">
                    <p className="text-gray-100">© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex justify-between gap-5 text-gray-100">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;