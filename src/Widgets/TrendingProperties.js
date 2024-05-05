import './TrendingProperties.css'
import Ap1 from './Pics/Ap1.svg'
import Ap2 from './Pics/Ap2.svg'
import Ap3 from './Pics/Ap3.svg'
import Ap4 from './Pics/Ap4.svg'
import Ap5 from './Pics/Ap5.svg'
import Ap6 from './Pics/Ap6.svg'
import Bedroom from './Pics/Bedroom.svg'
import Bathroom from './Pics/Bathroom.svg'
import Garage from './Pics/Garage.svg'
import Loc from './Pics/Loc.svg'


function Properties() {
    return (
        <div className='Properties'>
            <h1 className='Title'>Our most trending properties</h1>
            <p className='Under_title'> It is a long established fact that a reader will be distracted by the readable <br/> content of a page when looking at its layout. The point of using.</p>
            <div className='Photos'>
                <div className='Upper_photos'>
                    <div className='Ap_info'>
                        <img className='Ap_photo' src={Ap1} />
                        <p className='Price'>$250000</p>
                        <p className='Lux'>Luxury Apartment <br /> in California</p>
                        <div className='Pictures_description'>
                            <img src={Bedroom} />
                            <p className='Amount'>2</p>
                            <img src={Bathroom} />
                            <p className='Amount'>2</p>
                            <img src={Garage} />
                            <p className='Amount'>1</p>
                        </div>
                        <div className='Location'>
                            <img className= 'Loc_pic' src={Loc} />
                            <p className='Loc_info_prop'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        </div>
                    </div>
                    <div className='Ap_info'>
                        <img className='Ap_photo' src={Ap2} />
                        <p className='Price'>$175000</p>
                        <p className='Lux'>Luxury Apartment <br /> in California</p>
                        <div className='Pictures_description'>
                            <img src={Bedroom} />
                            <p className='Amount'>2</p>
                            <img src={Bathroom} />
                            <p className='Amount'>2</p>
                            <img src={Garage} />
                            <p className='Amount'>1</p>
                        </div>
                        <div className='Location'>
                            <img className= 'Loc_pic' src={Loc} />
                            <p className='Loc_info_prop'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        </div>
                    </div>
                    <div className='Ap_info'>
                        <img className='Ap_photo' src={Ap3} />
                        <p className='Price'>$300000</p>
                        <p className='Lux'>Luxury Apartment<br /> in California</p>
                        <div className='Pictures_description'>
                            <img src={Bedroom} />
                            <p className='Amount'>2</p>
                            <img src={Bathroom} />
                            <p className='Amount'>2</p>
                            <img src={Garage} />
                            <p className='Amount'>1</p>
                        </div>
                        <div className='Location'>
                            <img className= 'Loc_pic' src={Loc} />
                            <p className='Loc_info_prop'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        </div>
                    </div>
                </div>
                <div className='Bottom_photos'>
                <div className='Ap_info'>
                        <img className='Ap_photo' src={Ap4} />
                        <p className='Price'>$140000</p>
                        <p className='Lux'>Luxury Apartment<br /> in California</p>
                        <div className='Pictures_description'>
                            <img src={Bedroom} />
                            <p className='Amount'>2</p>
                            <img src={Bathroom} />
                            <p className='Amount'>2</p>
                            <img src={Garage} />
                            <p className='Amount'>1</p>
                        </div> 
                        <div className='Location'>
                            <img className= 'Loc_pic' src={Loc} />
                            <p className='Loc_info_prop'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        </div>
                    </div>
                    <div className='Ap_info'>
                        <img className='Ap_photo' src={Ap5} />
                        <p className='Price'>$500000</p>
                        <p className='Lux'>Luxury Apartment <br />in California</p>
                        <div className='Pictures_description'>
                            <img src={Bedroom} />
                            <p className='Amount'>2</p>
                            <img src={Bathroom} />
                            <p className='Amount'>2</p>
                            <img src={Garage} />
                            <p className='Amount'>1</p>
                        </div>
                        <div className='Location'>
                            <img className= 'Loc_pic' src={Loc} />
                            <p className='Loc_info_prop'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        </div>
                    </div>
                    <div className='Ap_info'>
                        <img className='Ap_photo' src={Ap6} />
                        <p className='Price'>$275000</p>
                        <p className='Lux'>Luxury Apartment <br />in California</p>
                        <div className='Pictures_description'>
                            <img src={Bedroom} />
                            <p className='Amount'>2</p>
                            <img src={Bathroom} />
                            <p className='Amount'>2</p>
                            <img src={Garage} />
                            <p className='Amount'>1</p>
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

export default Properties;