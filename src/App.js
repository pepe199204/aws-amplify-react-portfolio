import Header from './components/Header'
import Sections from './components/Sections'
import { useState } from 'react'


function App() {



  const [sections, setSection] = useState([
    {
        id:1,
        title: 'About me',
        text: 'I am a Multimedia Developer with an emphasis on software development. In recent years I have applied my knowledge to the development of E-learning courses and games. Being self-taught has allowed me to learn new technologies and apply them to improve my skills, generate new alternatives and solve in the most optimal way the challenges that arise every day in my work as a developer./Soy Desarrollador Multimedial con énfasis en desarrollo de software. En los últimos años he aplicado mi conocimiento para el desarrollo de cursos y juegos E-learning. El ser autodidacta me ha permitido aprender nuevas tecnologías y aplicarlas para mejorar mis habilidades, generar nuevas alternativas y solucionar de la manera más optima los retos que se me presentando día a día en mi trabajo como desarrollador'
    },
    {
        id:2,
        title: 'Experience',
        text: 'somewhere over the rainbow experience'
    },
    {
        id:3,
        title: 'Work',
        text: 'somewhere over the rainbow work'
    },
    {
        id:4,
        title: 'Contact',
        text: 'somewhere over the rainbow contact'
    },
    {
        id:5,
        title: 'Resume',
        text: 'somewhere over the rainbow resume'
    },
]
)



  return (
    <div className="container">
      <Header title='Felipe Mendoza Peláez'/>
      <Sections sections={sections}/>
    </div>
  );
}

export default App;
