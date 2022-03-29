import React from 'react';
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
const Exams = () => {
   return (
      <section id='Exams'>
        <CustomBox  text='Exams'>
         <div className='view1'>
            {
               DATA.map((Element) => {
                  return (
                     <div className='Exams'>
                        <text  >{Element.title}</text>
                        <text  >{Element.title}</text>
                        <text  >{Element.title}</text>
                        <div className='button'>
                           <button className='button1'>Get Updates
                           </button>
                           <button className='button2'>Download Brochure
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
export default Exams;