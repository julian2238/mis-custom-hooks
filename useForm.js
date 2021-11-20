import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState)


    const reset = () =>{
        setvalues(initialState);
    }

    const handleInputchange = ({target}) =>{
        setvalues({
            ...values,
            [target.name]: target.value

        }); 
    }

    return [values, handleInputchange, reset]
}
