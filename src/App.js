// src/App.js
import React from 'react';
import './App.css';
import Testimonial from './components/testimonial';
import testimonialsData from './testimonialData';

function App() {
  return (
    <div className="App">
      <div className='primary-container'>
        <h1>This is what our clients say about dlg</h1>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial 
            key={index}
            name={testimonial.name}
            country={testimonial.country}
            role={testimonial.role}
            company={testimonial.company}
            testimony={testimonial.testimony}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
