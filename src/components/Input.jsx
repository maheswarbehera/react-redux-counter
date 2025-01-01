import React, { useId, useState } from "react";
import PropTypes from "prop-types";


const Input = React.forwardRef(function Input({
    label, 
    type = 'text', 
    className= '', 
    required = false,
    touched = false,
    error,
    ...props
    }, ref) {

    const id = useId()

    const [hasError, setHasError] = useState(false);
    const [value, setValue] = useState(""); // new state variable to store the input field's value
 
    const handleChange = (event) => {
        setValue(event.target.value); // update the value state variable

        if (required && event.target.value === "") {
            setHasError(true);
        } else {
            setHasError(false);
        }
        if (touched && error) {
            setHasError(true);
        }
    };


    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1' htmlFor={id}> {label}</label>
            }
            <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${hasError ? "border-red-500" : ""} ${className}`} 
            {...props}
            ref={ref}
            id={id}
            value={value} // bind the value state variable to the input field
            onChange={handleChange} // call the handleChange function on change
           
            />
            {hasError && (
                <div className="text-red-500 text-sm">{error}</div>
            )}
        </div>
    )
})

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,
  };

export default Input;