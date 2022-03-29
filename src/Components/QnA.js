import React from 'react';
import photo from '../Assets/photo.jpg';

const QnA = () => {
   return (
      <section id='QnA'>
      <div className='rightViewlast'>
         <div className='top'>
            <text className='topText'>QnA</text>
         </div>
         <div className='topqna'>
           <text className='textqna1'>1 Million+ Questions answered | Get answers within 24 hours</text>
           <button className='buttoncareer2'>Ask Now </button>
           </div>
           <div className='main'>
           <text className='textqna'>1 Million+ Questions answered | Get answers within 24 hours</text>
<div className='photo'>
<img className='img' src={photo}></img>
<text className='textqna2'>Anushri Varshney</text>
</div>
<div className='parra'>
<text >Hi there,</text>

<text className='textqna1'>For preparing any entrnace examination course a candidate must have a deep knowledge about the examination pattern and also understand the required study material for the same. It is manadatory to follow the previous year</text>
<div className='line'></div>
<div className='button'>
<text >Answer</text>
<text >Answer later</text>
<text >Report</text>

</div>
</div>


           </div>
           <div className='main'>
           <text className='textqna'>1 Million+ Questions answered | Get answers within 24 hours</text>
<div className='photo'>
<img className='img' src={photo}></img>
<text className='textqna2'>Anushri Varshney</text>
</div>
<div className='parra'>
<text >Hi there,</text>

<text className='textqna1'>For preparing any entrnace examination course a candidate must have a deep knowledge about the examination pattern and also understand the required study material for the same. It is manadatory to follow the previous year</text>
<div className='line'></div>
<div className='button'>
<text >Answer</text>
<text >Answer later</text>
<text >Report</text>

</div>
</div>


           </div>
           <text className='topTextlast'>View All Questions</text>
           <div className='topqna'>
           <text className='textqna1'>1 Million+ Questions answered | Get answers within 24 hours</text>
           <button className='buttoncareer2'>Ask Now </button>
           </div>
      </div>
       </section>
   );
}
export default QnA;