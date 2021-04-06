import PropTypes from 'prop-types'

const Button = ({color, text, onClick, image}) => {


    if(image === 'true'){
        return (
        
            <button onClick = {onClick} style={{backgroundColor:color}} className='btn'>
                {image === 'true' && <img className='socialNetwork' alt="" src={`/images/${text}.png`}
                />
                }
                </button>
            )
    }else{
        return (
        <button onClick = {onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
        )
    }

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
