import React from 'react';

const DATA = [
    {

        title: 'Rahul',
    },
    {
        title: 'Rahul',
    },
    {
        title: 'Rahul'
    },
    {
        title: 'Rahul'
    },
    {
        title: 'Rahul'
    },
    {
        title: 'Rahul'
    },
    {
        title: 'Rahul'
    },
    {
        title: 'Rahul'
    },
]
const RankPredictors=()=>{
    return(
        <section id='Rank Predictors'>
        <div  className='rightView'>
            <div className='top'>
            <text className='topText'>Rank Predictors</text>
            <text className='topText1'>VIEW ALL</text>
            </div>
            <div className='line'></div>
            <div className='view'>
                <div className='images'>
                    <text>Hey</text>
                    <text>Rahul</text>
                    <text>Predict your Rank based on
your Exam Scores</text>
<text>Predict your College Admission
chances in your preferred Colleges</text> 
<text>Get in-depth insights on what Rank you
can expect for your preferred Courses in
your preferred Colleges</text>
            <img className='imagecoll' src="https://cache.careers360.mobi/images/home/rPredictorBanner.svg" alt=""></img>
          
                </div>
           <div className='textview'>
             {
                    DATA.map((Element) => {
                        return (
                            <div className='ranking'>
                     <text  >{Element.title}</text>
                            </div>
                        )
                    })
                }
            </div>
           
            </div>
         </div>
         </section>
    );
}
export default RankPredictors;
