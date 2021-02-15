import React from 'react'
import { BackButton } from '../Buttons/BackButton'
import { ClearButton } from '../Buttons/ClearButton'
import { MathButton } from '../Buttons/MathButton'
import { NumberButton } from '../Buttons/NumberButton'
import { ResultButton } from '../Buttons/ResultButton'
import './style.css'


export const ContentInfo = () => {
        return (
                <div className="contentInfo">
                        <div className="contentBox">
                                <ClearButton />
                                <BackButton />
                                <MathButton value="%" classes="none" />
                                <MathButton value="/" />
                        </div>
                        <div className="contentBox">
                                <NumberButton number="7" />
                                <NumberButton number="8" />
                                <NumberButton number="9" />
                                <MathButton value="*" />
                        </div>

                        <div className="contentBox">
                                <NumberButton number="4" />
                                <NumberButton number="5" />
                                <NumberButton number="6" />
                                <MathButton value="-" />
                        </div>

                        <div className="contentBox">
                                <NumberButton number="1" />
                                <NumberButton number="2" />
                                <NumberButton number="3" />
                                <MathButton value="+" />
                        </div>
                        <div className="contentBox">
                                <NumberButton number="." />
                                <NumberButton number="0" />
                                <ResultButton />
                        </div>

                </div>
        )
}
