import './HowItWorks.css'
import Search_house from './Pics/Search_house.svg'
import Search_house_active from './Pics/Search_house_active.svg'
import Select_house from './Pics/Select_house.svg'  //штучку надо починить чтобы не было заливки синенькой
import Select_house_active from './Pics/Select_house_active.svg'
import Confirm_house from './Pics/Confirm_house.svg'
import Confirm_house_active from './Pics/Confirm_house_active.svg'

import { useState } from 'react'

function HowItWorks() {

    const [Info_id, setInfo_id] = useState(-1);
    console.log(Info_id)

    return (
        <div className='HowItWorks'>
            <p className='Title'>How it Works</p>
            <p className='Under_title'>Using it can make you sound like you have been studying english <br/> for a long time. Here’s the challenge</p>
            <div className='Info'>
                <div 
                    onMouseEnter={() => setInfo_id(1)}
                    onMouseLeave={() => setInfo_id(-1)}

                className={Info_id==1 ? 'Info_block_active' : 'Info_block'}>
                    <img className='Info_img' src={Info_id==1 ? Search_house_active : Search_house}/>  
                    <p className='Upper_txt'>Search Apartment</p>
                    <p className='Lower_txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</p>
                </div>
                <div 
                    onMouseEnter={() => setInfo_id(2)}
                    onMouseLeave={() => setInfo_id(-1)}
                className={Info_id==2 ? 'Info_block_active' : 'Info_block'}>
                    <img className='Info_img' src={Info_id==2 ? Select_house_active : Select_house}/>
                    <p className='Upper_txt'>Select Apartment</p>
                    <p className='Lower_txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</p>
                </div>
                <div 
                    onMouseEnter={() => setInfo_id(3)}
                    onMouseLeave={() => setInfo_id(-1)}
                className={Info_id==3 ? 'Info_block_active' : 'Info_block'}>
                    <img className='Info_img' src={Info_id==3 ? Confirm_house_active : Confirm_house}/>
                    <p className='Upper_txt'>Confirm Apartment</p>
                    <p className='Lower_txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</p>
                </div>
            </div>
        </div>
)}

export default HowItWorks;