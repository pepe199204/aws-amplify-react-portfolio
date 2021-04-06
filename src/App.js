import Header from './components/Header'
import Sections from './components/Sections'
import { useState } from 'react'
import Footer from './components/Footer'


function App() {



  const [sections] = useState([
    {
        id:1,
        title: 'About me',
        text1: 'Hi, mi name is Felipe and i love create solutions with code for resolve problems. My firsts lines of code was during my Associate Degree of Multimedia Development, and since that time i decided become in a Multimedial Developer with an emphasis on software development.',

        text2: 'The first language that i learned was ActionScript 3.0, with this language i created multiples interfaces and games, but with the time i changed my focus and migrated to Javascript. In recent years I have applied my knowledge to the development of E-learning courses and games.',

        text3: 'Being self-taught has allowed me to learn new technologies and apply them to improve my skills, creating alternatives for solving in the most optimal way the challenges that arise everyday in my work as a developer. Actually i am learning with more intensity React for acquire betters technical skills and create better integrations.',

        technologies: {
          title : 'This are a few technologies and tools that i have been working',
          techs: {
            tech1: 'JavaScript',
            tech2: 'CreateJs',
            tech3: 'HTML',
            tech4: 'CSS',
            tech5: 'React',
            tech6: 'Sass',
            tech7: 'AWS',
            tech8: 'Git',
            tech9: 'Adobe After Effects',
            tech10: 'Adobe Animate',
            tech11: 'Adobe Photoshop',
            tech12: 'Adobe Illustrator'
         }
        },
        experiences: {
          title : 'Experience',
          experience1: {
            title: 'Multimedial Developer',
            enterprise: 'Cesde Educational Institution',
            time: 'jun 2011 - jun 2013 '
          },
          experience2: {
            title: 'Interactivity I Teacher',
            enterprise: 'Cesde Educational Institution',
            time: 'feb 2013 - dic 2015'
          },
          experience3: {
            title: 'Virtual didactic analyst',
            enterprise: 'FORMACTIVA LTDA',
            time: 'jun 2013 - oct 2015'
          },
          experience4: {
            title: 'Digital animator',
            enterprise: 'euno',
            time: 'nov 2015 - oct 2017'
          },
          experience5: {
            title: 'IT Coordinator',
            enterprise: 'euno',
            time: 'oct 2017 - nov 2018'
          },
          experience6: {
            title: 'Freelance',
            enterprise: 'Freelancer Multimedia Developer',
            time: 'dec 2018 - Present'
          },
          experience7: {
            title: 'Software Developer',
            enterprise: 'euno',
            time: 'dec 2020 - Present'
          },
        }
    },
    {
      id:2,
      title: 'Works',
      text: 'This is a sample of my works ',
      works: {
        work1: {
          title: 'React App work1',
          image: 'app1.jpg'
        },
        work2: {
          title: 'React App work2',
          image: 'app1.jpg'
        },
        work3: {
          title: 'React App work3',
          image: 'app1.jpg'
        }
      }
  }
    
]
)



  return (
    <div className="container">
      <Header title='Felipe Mendoza Peláez'/>
      <Sections sections={sections}/>
      <Footer/>
    </div>
    
  );
}

export default App;
