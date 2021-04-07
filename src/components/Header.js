import Button from './Button'

const Header = ({onAdd, showText}) => {


    return (
        <header className='header'>
            <Button id={1} text={showText ? 'About' : 'Portfolio'} onAdd={onAdd}/>
            <Button id={2} text='Contact' link={'https://mail.google.com/mail/?view=cm&fs=1&to=pepe199204@com'}/>
            <Button id={3} text='Resume' link={'/cv/cv.pdf'}/>
            <Button id={4} text='Linkedin' image='true' link={'https://www.linkedin.com/in/felipe-mendoza-pel%C3%A1ez-3285252b/'}/>
            <Button id={5} text='Github' image='true' link={'https://github.com/pepe199204'}/>

        </header>
    )
}
export default Header

