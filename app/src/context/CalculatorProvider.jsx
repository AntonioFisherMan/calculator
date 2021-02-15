import React, { useState } from 'react'
import * as math from 'mathjs'

export const CalculatorContext = React.createContext()

const CalculatorProvider = (props) => {
        const [expression, setExpression] = useState("")
        const [result, setResult] = useState("")


        const handleSetNumber = value => {
                setResult("")
                if (Number(value) <= 9 && result !== "") {
                        setExpression(value)
                }
                else {
                        setExpression(prev => prev + value)
                }

        }
        const handleResult = () => {
                try {
                        setResult(math.evaluate(expression));
                        setExpression(math.evaluate(expression).toString());
                } catch (error) {
                        alert("Input correct expression")
                }
        }
        const handleBack = () => {

                setExpression(prev => prev.length <= 1 ? "" : prev.slice(0, -1))
        }
        const handleClear = () => {
                setExpression("")
                setResult("")
        }
        return (
                <CalculatorContext.Provider value={{ expression, result, handleSetNumber, handleResult, handleBack, handleClear }}>
                        {props.children}
                </CalculatorContext.Provider>
        )
}

export default CalculatorProvider