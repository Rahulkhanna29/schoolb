import React from 'react';
import photo from '../Assets/photo.jpg';

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
const CollegeRanking = () => {
    return (
        <section id='College Ranking'>
        <div className='rightView2'>
            <div className='top'>
                <text className='topText'>College Ranking</text>
                <text className='topText1'>VIEW ALL</text>
            </div>
            <div className='line'></div>
            <div className='rank' >
                {
                    DATA.map((Element) => {
                        return (
                            <div className='ranking'>
                     <text className='textranking' >{Element.title}</text>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </section>
    );
}
export default CollegeRanking;