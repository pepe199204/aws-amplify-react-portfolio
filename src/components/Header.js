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
            <Button text='Experience'/>
            <Button text='Work'/>
            <Button text='Contact'/>
            <Button text='Resume'/>
        </header>
    )
}
Header.defaultProps = {

}
Header.propTypes = {
    title : PropTypes.string.isRequired
}
export default Header

