import React from 'react'
import './style.css'
import { ContentInfo } from './ContentInfo/ContentInfo'
import { DisplayInfo } from './DiplayInfo/DisplayInfo'


export const Calculator = () => {
        return (
                <div className="calculator">
                        <DisplayInfo />
                        <ContentInfo />
                </div>
        )
}
