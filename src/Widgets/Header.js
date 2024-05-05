import './Header.css'
import Logo from './Pics/Logo.png'

function Header() {
  return (
    <div className='Header'>
        <img className='Logo' src={Logo} alt=""/>
        <div className='Header_btn_container'>
          <p className='Header_btn'>Home</p>
          <p className='Header_btn'>About</p>
          <p className='Header_btn'>Service</p>
          <p className='Header_btn'>New property</p>
          <p className='Header_btn'>Contact</p>
        </div>
        
        <button className='Login_btn'>Login</button>
    </div>
)};

export default Header;