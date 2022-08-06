import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre ...</h1>
        <Testimonio 
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="joven"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonioantes="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. "
          testimonioprincipal="freeCodeCamp cambió mi vida."
          testimoniodespues="" />

        <Testimonio 
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="lady"
          cargo="Ingenieria de Software"
          empresa="ChatDesk"
          testimonioprincipal="freeCodeCamp fue la puerta de entrada a mi carrera"
          testimoniodespues=" como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble." />

        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="testimonio-emma"
          cargo="Ingenieria de Software"
          empresa="Spotify"
          testimonioantes="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en "
          testimonioprincipal="freeCodeCamp me dio las habilidades"
          testimoniodespues=" y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." />
      </div>
    </div>
  );
}

export default App;
