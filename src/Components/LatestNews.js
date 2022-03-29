import React from 'react';
import CustomBox from './CustomBox';
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
   
const LatestNews=()=>{
    return(
        <section id='Latest News'>
            <CustomBox  text='Latest News' text1='VIEW ALL'>
            <div className='view'>
          <img src="https://cache.careers360.mobi/media/presets/543X273/article_images/2022/3/24/DCSMAT-MBA-featured-image.jpg" alt=""></img>
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
        </CustomBox>
         </section>
    );
}
export default LatestNews;