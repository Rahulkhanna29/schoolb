import React, { useRef } from 'react';
import CustomBox from './CustomBox';
const Right1 = () => {
//     const myRef = useRef(null)
 
//     const executeScroll = () => myRef.current.scrollIntoView()    
//     // run this function from an event handler or an effect to execute scroll 
 
//     return (
//        <> 
//           <div ref={myRef}>Element to scroll to</div> 
//           <button onClick={executeScroll}> Click to scroll </button> 
//        </>
//     )
//  }
//  export default Right1;
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
    return(
        <section id='Featured Articles'>
            <CustomBox  text='Featured Articles' text1='VIEW ALL'>
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
export default Right1;