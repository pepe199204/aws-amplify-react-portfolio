import PropTypes from 'prop-types'

const Button = ({ color, text, image, onAdd, link}) => {


    if(image === 'true'){
        return (
            <button id ={text} className='btn'>
                <a rel="noreferrer" href={link} target="_blank">{image === 'true' && <img className='socialNetwork' alt="" src={`/images/${text}.png`}
                />
                }</a>
                </button>
            )
    }else{
        return (
            <button id ={text} onClick={onAdd}><a rel="noreferrer" href={link} className='btn' target="_blank">{text}</a></button>
        )
    }

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button
