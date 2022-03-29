import React from 'react';
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
const Listofcareers = () => {
   return (
      <section id='List of careers'>
      <div className='rightView'>
         <div className='top'>
            <text className='topText'>List of careers</text>
         </div>
         <div className='line'></div>
         <div className='view1'>
            {
               DATA.map((Element) => {
                  return (
                     <div className='Exams'>
                        <text  >{Element.title}</text>
                        <text  >{Element.title}</text>
                        <text  >{Element.title}</text>
                        <text  >{Element.title}</text>
                      <button className='buttoncareer'>Download </button>
                        </div>
                  )
               })
            }
         </div>
      </div>
      </section>
   );
}
export default Listofcareers;