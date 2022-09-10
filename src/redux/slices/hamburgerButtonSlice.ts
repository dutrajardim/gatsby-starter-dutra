import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface HamburgerButtonState {
    isActive: boolean
}

const initialState: HamburgerButtonState = {
    isActive: false
}

const hamburgerButtonSlice = createSlice({
    name: 'hamburgerButton',
    initialState,
    reducers: {
        toogle: state => { state.isActive = !state.isActive }
    }
})

export const selectIsActive = (state: RootState) => state.hamburgerButton.isActive
export const { toogle } = hamburgerButtonSlice.actions
export default hamburgerButtonSlice.reducer