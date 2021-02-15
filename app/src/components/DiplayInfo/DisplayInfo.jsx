import React, { useContext, useState } from 'react'
import { CalculatorContext } from '../../context/CalculatorProvider'
import './style.css'


export const DisplayInfo = () => {
        const { expression, result } = useContext(CalculatorContext)

        return (
                <div className="displayInfo">
                        <div className="infoOperation">
                                <p className="number"> {expression} </p>
                        </div>
                        <p className="result">{result}</p>
                </div>
        )
}
