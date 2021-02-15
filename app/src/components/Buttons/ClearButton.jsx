import React from 'react'
import { CalculatorContext } from '../../context/CalculatorProvider'
import classNames from 'classnames'


export const ClearButton = () => {
        const { handleClear } = React.useContext(CalculatorContext)
        return (
                <button className={classNames("btn", "btnClear")} onClick={() => handleClear()} >
                        AC
                </button>
        )
}
