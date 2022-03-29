import React from 'react';
import photo from '../Assets/photo.jpg';

const DATA = [
    {
       img:"https://cache.careers360.mobi/media/admission_buddy_media/logos/UPES-200_YqZ9iUo.jpg" ,
        title: 'UPES MBA Admissions 2022',
    },
    {
       img:"https://cache.careers360.mobi/media/0_ioV6DXC.png"  ,
      title: 'IFMR MBA Admissions 2022',
    },
    {
       img:"https://cache.careers360.mobi/media/download_281.jpg" ,
        title: 'Praxis Business School PGDM Admissions 2022'
    },
    {
       img:"https://cache.careers360.mobi/media/admission_buddy_media/logos/itm_logo16.jpg"  ,
       title: 'TM Business School PGDM Admissions 2022',
    },
    {
       img: "https://cache.careers360.mobi/media/admission_buddy_media/logos/UPES-200_xIhQTPA.jpg" ,
       title: 'UPES BBA Admissions 2022'
    },
    {
       img:"https://cache.careers360.mobi/media/CHitkar_logo.jpg",
       title: 'Chitkara University UG/PG Admissions 2022 Open'
    },
   
]
const AdmissionsOpen = () => {
    return (
        <section id='Admissions Open'>
        <div className='rightView2'>
            <div className='top'>
                <text className='topText'>Applications for Admissions are open.</text>
                <text className='topText1'>VIEW ALL APPLICATION FORMS</text>
            </div>
            <div className='line'></div>
            <div className='rank1' >
                {
                    DATA.map((Element) => {
                        return (
                            <div className='admission'>
                                <img className='imageadmin' src={Element.img}></img>
                     <text className='textranking' >{Element.title}</text>
                     <button className='buttoncareer1'>Apply </button>

                            </div>
                        )
                    })
                }
            </div>
        </div>
        </section>
    );
}
export default AdmissionsOpen;