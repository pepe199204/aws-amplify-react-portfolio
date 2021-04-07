const section = {
        id:2,
        title: 'Portfolio',
        text: 'This is a sample of my expertise',
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

const Portfolio = () => {

    return (
        <div className='section'>
    
           <h2>{section.title}</h2>
           <p>{section.text}</p>

           <div className='flexContainer'>
            
             <button className='itemFlexWork'>
                <img className='img' alt="" src={`/images/${section.works.work1.image}`}/>
                <div>{section.works.work1.title}<br/></div>
            </button>

             <button className='itemFlexWork'>
                <img className='img' alt="" src={`/images/${section.works.work1.image}`}/>
                <div>{section.works.work2.title}<br/></div>
            </button>

             <button className='itemFlexWork'>
                <img className='img' alt="" src={`/images/${section.works.work1.image}`}/>
                <div>{section.works.work3.title}<br/></div>
            </button>

           </div>
        </div>
    )

}

export default Portfolio
