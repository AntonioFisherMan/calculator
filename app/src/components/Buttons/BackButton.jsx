import React from 'react'
import { CalculatorContext } from '../../context/CalculatorProvider'

export const BackButton = () => {
        const { handleBack } = React.useContext(CalculatorContext)

        return (
                <>
                        <button className="btn" onClick={() => handleBack()}>
                                <img src="https://cdn3.iconfinder.com/data/icons/social-productivity-line-art-3/128/delete-512.png" className="btnImg" />
                        </button>


                </>
        )
}
