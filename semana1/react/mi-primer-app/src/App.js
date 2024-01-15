import logo from './logo.svg';
  import './App.css';
  import Evento from './components/Evento';
  import EventoB from './components/EventoB';
  import EventoC from './components/EventoC';



  function App() {
    return (
      <div className="App">
        <Evento/>
        <EventoB title="MeetUp 08 - Revolutionize your Development using TDD"
        image="evento1"
        dateLiteral="15 de Abril de 2023"
        placeLiteral="Online"
        description="
        ¡Hola Pythonista!
        Acompáñanos al MeetUp mensual de la comunidad Python La Paz
        En este Meet Up tendremos la participación de Reddy Tintaya Conde
        En esta charla Reddy nos presentara: Revolutionize your Development using TDD
        Resumen:
        En esta charla exploraremos las ventajas de usar Test Driven Development (TDD) en el desarrollo de cualquier tipo de software. También hablaremos de buenas prácticas para escribir tus tests.
        Ya sea que estés comenzando o ya tengas experiencia en el mundo del software, esta charla te dará tips valiosos para potenciar tu proceso de desarrollo.
        "
      />
      <EventoC title="MeetUp 11 - 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)"
        image="evento2"
        dateLiteral="25 de Noviembre de 2023"
        placeLiteral="Online"
        description={[
          "¡Hola Pythonista!",
          "Acompáñanos al MeetUp mensual de la comunidad Python La Paz",
          "En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five",
          "Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala",
          "ha impartido conferencias y talleres en diversas PyCon en múltiples países.",
        ]}  
        />

      </div>
    );
  }

  export default App;