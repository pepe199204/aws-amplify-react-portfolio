import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {


    const onClick = (e) => {
        console.log(e);
    }
    return (
        <header className='header'>
            {/* <p>{props.title}</p> */}
            
            <Button text='About' onClick = {onClick}/>
            {/*<Button text='Experience'/>*/}
            <Button text='Work'/>
            <Button text='Contact'/>
            <Button text='Resume'/>
            <Button text='Linkedin' image='true'/>
            <Button text='Github' image='true'/>
            {/* {<div>Iconos diseñados por <a href="https://www.flaticon.es/autores/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>} 
            </div>*/}

        </header>
    )
}
Header.defaultProps = {

}
Header.propTypes = {
    title : PropTypes.string.isRequired
}
export default Header

