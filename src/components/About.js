
const section = {
    
        id:1,
        title: 'About me',
        text1: 'Hi, my name is Felipe and I love to code solutions for problem solving. I made my first lines of code during my Associate Degree of Multimedia Development back in 2010, and since that time i decided to become a Multimedia Developer with an emphasis on software development.',

        text2: 'My first programming language was ActionScript 3.0, which with i created multiple interfaces and games, and as time when by, i put my focus on JavaScript, putting my experience and applying my knowledge in the development of E-learning courses and games.',

        text3: 'Being self-taught has allowed me to learn new technologies and apply them to improve my skills, creating alternatives to solve the everyday challenges in the most optimal and effective way. I am currently learning React to acquire better technical skills and make the best possible integrations to its componentization capabilities. ',

        technologies: {
          title : 'These are a few technologies and tools that i have been working',
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
            title: 'Multimedial Developer',
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
        },
        languages: {
          title : 'Laguages',
          language1: {
            title: 'Spanish',
            proficiency: 'Native or bilingual proficiency',
            code: 'es-ES'
          },
          language2: {
            title: 'Engish',
            proficiency: 'Limited working proficiency',
            code: 'en-US'
          }
        }
    
}

const About = () => {


        return (
            <div className='section'>
               <h2>{section.title}</h2>
               <p>{section.text1}</p>
               <p>{section.text2}</p>
               <p>{section.text3}</p>

               <hr/>

               <h3>{section.technologies.title}</h3>
               <div className='flexContainer'>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech1}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech2}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech3}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech4}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech5}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech6}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech7}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech8}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech9}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech10}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech11}</div>
               </div>
               <br/>

               <hr/>

               <h3>{section.experiences.title}</h3>
               <div className='flexContainer'>
                   
                   
                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience7.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience7.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience7.time}</b></div>
                   </div>


                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience6.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience6.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience6.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience5.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience5.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience5.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience4.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience4.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience4.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience3.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience3.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience3.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience2.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience2.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience2.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience1.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience1.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience1.time}</b></div>
                   </div>
                   
                   
               </div>
                
               <hr/>



               <h3>{section.languages.title}</h3>
               <div className='flexContainer'>
                   
                   
                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.languages.language1.title}</b><br/>
                    <div className='subItemFlex'>{section.languages.language1.proficiency}<br/>
                    <b className='experienceE'>{section.languages.language1.code}</b></div>
                   </div>
                   
                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.languages.language2.title}</b><br/>
                    <div className='subItemFlex'>{section.languages.language2.proficiency}<br/>
                    <b className='experienceE'>{section.languages.language2.code}</b></div>
                   </div>

                </div>


            </div>
        )


}

export default About
