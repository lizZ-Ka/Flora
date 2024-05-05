import './DreamHome.css'
import DreamHomeUpper from './Pics/DreamHomeUpper.svg'
import DreamHomeBottom from './Pics/DreamHomeBottom.svg'
import Bedroom from './Pics/Bedroom.svg'
import Bathroom from './Pics/Bathroom.svg'
import Garage from './Pics/Garage.svg'
import Loc from './Pics/Loc.svg'

function DreamHome() {
    return (
        <div className='DreamHome'>
            <p className='Title'>We will help you to find <br/> Dream Home</p>
            <p className='Under_title'>It is a long established fact that a reader will be distracted by the readable content of a page <br/> when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <div className='Img_content'>
            <div className='Img_One'>
                <img className='First_img' src={DreamHomeUpper} />
                <div className='First_img_info'>
                    <p className='Price_dream'>$2000/month</p>
                    <p className='Ap_dream'>Apartment 2500 sqft</p>
                    <div className='Pictures_description_dream'>
                        <img src={Bedroom} />
                        <p>2</p>
                        <img src={Bathroom} />
                        <p>2</p>
                        <img src={Garage} />
                        <p>1</p>
                    </div>
                    <div className='Location'>
                            <img className='Loc_pic' src={Loc} />
                            <p className='Loc_info_prop'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        </div>
                </div> 
            </div>
            <div className='Img_Two'>
                <img className='Second_img' src={DreamHomeBottom} />
                <div className='First_img_info'>
                    <p className='Price_dream'>$5000/month</p>
                    <p className='Ap_dream'>Apartment 2500 sqft</p>
                    <div className='Pictures_description_dream'>
                        <img src={Bedroom} />
                        <p>2</p>
                        <img src={Bathroom} />
                        <p>2</p>
                        <img src={Garage} />
                        <p>1</p>
                    </div>
                    <div className='Location'>
                            <img className= 'Loc_pic' src={Loc} />
                            <p className='Loc_info_prop'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                    </div>
                </div> 
            </div>
            </div>
        </div>
    )
}

export default DreamHome;