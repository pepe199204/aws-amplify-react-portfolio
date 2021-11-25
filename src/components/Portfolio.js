const section = {
        id:2,
        title: 'Portfolio',
        text: 'These are samples of my skills',
        works: {
          work1: {
            title: 'Handlebars + JavaScript +Sass',
            description: 'In this project i used handlebars.js for generate dynamically the template consuming a json file and Sass for styles.',
            link: 'https://pepe199204.github.io/handlebars-sass/src/',
            image: 'app1.jpg'
          }
          //,
          // work2: {
          //   title: 'React App work2',
          //   image: 'app1.jpg'
          // },
          // work3: {
          //   title: 'React App work3',
          //   image: 'app1.jpg'
          // },
          // work4: {
          //   title: 'React App work4',
          //   image: 'app1.jpg'
          // }
        }
}

const Portfolio = () => {

    return (

      <div className='section'>
  
          <h2>{section.title}</h2>
          <p>{section.text}</p>

          <div className='flexContainerWork'>
          
            <a className='itemFlexWork' href={section.works.work1.link} target='_blank'>
              <img className='img' alt="" src={`/images/${section.works.work1.image}`}/>
              <h3>{section.works.work1.title}</h3>
              <p>{section.works.work1.description}</p>
            </a>
            
          </div>

      </div>

    )

}

export default Portfolio
