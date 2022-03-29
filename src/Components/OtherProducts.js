import React from 'react';
import CustomBox from './CustomBox';

const OtherProducts = () => {
   return (
      <section id='Other Products'>
         <CustomBox text='Other Products' style={{ height:'280px'}} >
         <div className='products'>
       <img src="https://cache.careers360.mobi/images/home/college-compare.svg"  width="50" height="59" ></img>
       <img src="https://cache.careers360.mobi/images/home/college-review.svg" alt="" width="37" height="59"></img>
       <img src="https://cache.careers360.mobi/images/home/btech-companion.svg" alt="" width="34" height="59"></img>
       <img src="https://cache.careers360.mobi/images/home/mbbs-companion.svg" alt="" width="33" height="59"></img>
       <img src="https://cache.careers360.mobi/images/home/course-listing.svg" alt="" width="35" height="58"></img>
       </div>
      <div className='productstext'>
      <text>College</text>
      <text>College</text>
      <text>College</text>
      <text>College</text>
      <text>College</text>
      </div>
      </CustomBox>
    </section>
   );
}
export default OtherProducts;