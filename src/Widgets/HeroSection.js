import './HeroSection.css'
import Home from './Pics/Home.png'
import Location from './Pics/Location.svg'
import Dollar from './Pics/Dollar.svg'
import House from './Pics/House.svg'
import Search from './Pics/Search.svg'

function HeroSection() {
    return (
        <div className='HeroSection'>
            <div className='Image-Container'>
                <img className='Image' src={Home}  />
            </div>
            <div className='Hero-Content'>
                <h1 className='Title_text'>Discover a place <br/> you will love to live</h1>
                <p className='Description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Imperdiet tempus felis vitae sit est quisque.</p>  
                <div className='Info_container'>
                    <div className='Block'>
                        <img className='Info_pic' src={Location}/>
                        <div className='Info_text'>
                            <p className='Upper_text'>Location</p>
                            <p className='Lower_text'>Ahmedabad, India</p>
                        </div>
                    </div>
                    <div className='Block'>
                        <img className='Info_pic' src={Dollar}/>
                        <div className='Info_text'>
                            <p className='Upper_text'>Price</p>
                            <p className='Lower_text'>$1000 - $10,000</p>
                        </div>
                    </div>
                    <div className='Block'>
                        <img className='Info_pic' src={House}/>
                        <div className='Info_text'>
                            <p className='Upper_text'>Type of Property</p>
                            <p className='Lower_text'>Apartment</p>
                        </div>
                    </div>
                    <div className='Search_btn'>
                        <img src={Search}/>
                    </div>  {/*добавить лупу))) */}
                </div>
                <div className='Numbers'>
                    <div className='Column'>
                        <p className='Nums'>2000+</p>
                        <p className='Nums_text'>Property Ready</p>
                    </div>
                    <div className='Column'>
                        <p className='Nums'>500+</p>
                        <p className='Nums_text'>Happy Customers</p>
                    </div>
                    
                </div>
            </div>
            
               
        </div>
)}

export default HeroSection;