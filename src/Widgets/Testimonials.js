import './Testimonials.css'
import Woman from './Pics/Woman.svg'
import Stars from './Pics/Stars.svg'
import Circles from './Pics/Circles.svg'

function Testimonials() {
    return (
        <div className='Testimonials'>
            <h1 className='Title'>What our customers say's</h1>
            <p className='Under_title'>It is a long established fact that a reader will be distracted by the readable <br/> content of a page when looking at its layout.</p>
            <div className='Review'>
                <div className='Review_content'>
                <img className='Woman' src={Woman} />
                <div className='Comment'>
                    <img className='Stars' src={Stars} />
                    <p className='Comment_txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    
                    <div className='Com_bottom'>
                        <div className='About_commentator'>
                            <p className='Name'>Kety Willions</p>
                            <p className='From'>California, United State</p>
                        </div>
                        <img className='Circles' src={Circles} />
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Testimonials;