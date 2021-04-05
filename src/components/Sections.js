import Section from './Section'
const Sections = ({sections}) => {

    return (
        <>
        {sections.map((section) => (
        <Section key={section.id} section={section}/>
        ))}
        </>
    )
}

export default Sections
