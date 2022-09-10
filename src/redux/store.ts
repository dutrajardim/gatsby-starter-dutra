import { configureStore } from '@reduxjs/toolkit'
import hamburgerButtonReducer from './slices/hamburgerButtonSlice'

const createStore = () => configureStore({
    reducer: {
        hamburger: hamburgerButtonReducer
    }
})

type ConfiguredStore = ReturnType<typeof createStore>
type StoreGetState = ConfiguredStore["getState"]

export type RootState = ReturnType<StoreGetState>
export type AppDispatch = ConfiguredStore["dispatch"]
export default createStore