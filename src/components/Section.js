const Section = ({ section }) => {
    return (
        <div className='section'>
           <h2>{section.title}</h2> 
           <p>{section.text}</p> 
        </div>
    )
}

export default Section
