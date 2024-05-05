import './Footer.css'
import Flora from './Pics/Flora.svg'
import Socials from './Pics/Socials.svg'

function Footer() {
    return (
        <div className='Footer'>
            <div className='Main_Footer'>
            <div className='Col'>
                <img className='Logo_footer' src={Flora} />
                <p className='Logo_txt'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Imperdiet tempus <br/> felis vitae sit est quisque.</p>
            </div>
            <div className='Col'>
                <p className='Footer_name'>Service</p>
                <p className='Under_name'>Payment & Tax</p>
                <p className='Under_name'>Features</p>
                <p className='Under_name'>View Booking</p>
                <p className='Under_name'>Support</p>
            </div>
            <div className='Col'>
                <p className='Footer_name'>About</p>
                <p className='Under_name'>About Us</p>
                <p className='Under_name'>News</p>
                <p className='Under_name'>Pricing</p>
                <p className='Under_name'>New Property</p>
            </div>
            <div className='Col'>
                <p className='Footer_name'>Our Location</p>
                <p className='Under_name'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                <img className='Socials' src={Socials} />
            </div>
            </div>
            <div className='Under_Footer'>
            <p>Copyright 2022 flora. All Rights Reserved</p>
            <div className='Under_Footer_right'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            </div>
        </div>
    )
}

export default Footer;