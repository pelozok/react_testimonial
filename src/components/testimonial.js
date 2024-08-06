import React from 'react';
import '../stylesheets/Testimonial.css'

function Testimonial(props) {
  return(
    <div className='testimonial-container'>
      <img 
        className='testimonial-img' 
        src={require(`../images/testimonial-${props.image}.png`)}
        alt='Testimonial' />
      <div className='testimonial-container-text'>
        <p className='testimonial-name'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='testimonial-role'>
          {props.role} at <strong>{props.company}</strong>
        </p>
        <p className='testimonial-text'>{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimonial;