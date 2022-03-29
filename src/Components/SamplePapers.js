import React from 'react';
import photo from '../Assets/photo.jpg';
import CustomBox from './CustomBox';

const DATA = [
    {

        title: 'CAT',
    },
    {
        title: 'UPESMET',
    },
    {
        title: 'MAT'
    },
    {
        title: 'SNAP'
    },
    {
        title: 'XAT'
    },
    {
        title: 'SNAP'
    },
    {
        title: 'XAT'
    },
    {
        title: 'SNAP'
    },
    {
        title: 'XAT'
    },
]
const SamplePapers = () => {
    return (
        <section id='Sample Papers'>
             <CustomBox text='Sample Papers' text1='VIEW ALL' style={{ height:'330px'}}>
            <div className='view1'>
                {
                    DATA.map((Element) => {
                        return (
                            <div className='Exams1'>
                                <img src={photo} className='image' />
                                <div className='sample'>
                                <text  >{Element.title}</text>
                                <button className='button3'> Free Download
                           </button>
                           </div>
                            </div>
                        )
                    })
                }
            </div>
            </CustomBox>
        </section>
    );
}
export default SamplePapers;