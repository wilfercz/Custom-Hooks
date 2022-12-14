import { useState } from 'react'

const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    const HandleInputChange = ({target}) =>{

        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    
    return [values, HandleInputChange, reset];
}

export default useForm;
