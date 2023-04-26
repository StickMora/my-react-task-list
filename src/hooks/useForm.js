import { useState } from "react"

export const useForm = (initialForm) => {
    const[formState, setForState] = useState(initialForm)

    const onInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setForState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setForState(initialForm)
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }

}