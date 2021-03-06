import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({propiedad}) => {

const [inputValue, setinputValue] = useState('')

const handleInputChange = (e) => {
    setinputValue(e.target.value) 
}

const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {
        propiedad( cats => [ inputValue, ...cats, ] );
        setinputValue('');
    }
}

    return (
        <form onSubmit={ handleSubmit }>
            <p> { inputValue }</p>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    propiedad: PropTypes.func.isRequired
}
