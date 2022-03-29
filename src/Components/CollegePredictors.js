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
const CollegePredictors=()=>{
    return(
        <section id='College Predictors'>
        <div className='rightView'>
            <div className='top'>
            <text className='topText'>College Predictors</text>
            <text className='topText1'>VIEW ALL</text>
            </div>
            <div className='line'></div>
            <div className='view'>
                <div className='images'>
                    <text>Hey</text>
                    <text>Rahul</text>
                    <text>Predict your College Admission
chances in your preferred Colleges</text>
<text>Predict your College Admission
chances in your preferred Colleges</text> 
<text>Download your personalized report with
your Admission chances based on
cutoffs, caste, gender, home state
and other quotas</text>
            <img className='imagecoll' src="https://cache.careers360.mobi/images/home/cPredictorBanner.svg" alt=""></img>
          
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
export default CollegePredictors;
