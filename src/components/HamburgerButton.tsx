import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectIsActive, toogle } from '../redux/slices/hamburgerButtonSlice'

interface HamburgerProps {
    className?: string
}

export default function Hamburger({ className }: HamburgerProps): React.ReactElement {
    const isActive: boolean = useSelector(selectIsActive)
    const dispatch = useDispatch()
    const activeModifier = isActive ? 'hamburger--active' : ''
    const strokeUnits = 5
    const linecap = "round"

    return (
        <svg viewBox='0 0 40 40'
            className={`hamburger ${className} ${activeModifier}`}
            onClick={() => dispatch(toogle())}>

            <path d='M 4, 8 H 36'
                stroke='currentColor'
                strokeWidth={strokeUnits}
                strokeLinecap={linecap}
                strokeDasharray='20 9'
                className='hamburger__top-line' />

            <path d='M 4,20 H 36'
                stroke='currentColor'
                strokeWidth={strokeUnits}
                strokeLinecap={linecap}
                className='hamburger__middle-line' />

            <path d='M 4,32 H 36'
                stroke='currentColor'
                strokeWidth={strokeUnits}
                strokeLinecap={linecap}
                strokeDasharray='5 9 25'
                className='hamburger__bottom-line' />

        </svg>
    )
}