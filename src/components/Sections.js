import Section from './Section'

const Sections = ({showSection,sections}) => {

    console.log(showSection);
    return (
        <>
        {sections.map((section) => (
        <Section key={section.id} section={section}/>
        ))}
        </>
    )
}

export default Sections
