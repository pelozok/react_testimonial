import { Fragment } from 'react';
import './App.css';
import Testimonial from './components/testimonial';

function App() {
  return (
    <div className="App">
      <div className='primary-container'>
        <h1>Esto es lo que dicen nuestros clientes sobre dlg.</h1>
        <Testimonial 
          name='Emma Bostian'
          country='Brazil'
          role='Engineer'
          company='Spotify'
          testimony='Abcde'
          image='emma' />

        <Testimonial 
          name='Peter Wang'
          country='Singapur'
          role='Scrum Master'
          company='Amazon'
          testimony='Abcde'
          image='peter' />

        <Testimonial 
          name='Sarah Lanner'
          country='United States'
          role='Product Owner'
          company='delaguayaba'
          testimony={
            <Fragment>Esto es un texto <strong>en negrita</strong></Fragment>
          }
          image='sarah' /> 
      </div>
    </div>
  );
}

export default App;

/*
Retos:
- Que el valor de alt de la foto cambie se asigne segun el nombre del autor
- Guardar los valores de los props desde otro archivo
*/