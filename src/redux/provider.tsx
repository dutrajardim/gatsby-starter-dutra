import * as React from 'react'
import { Provider } from 'react-redux'

import createStore from './store'

interface GatsbyRootProps {
    element: React.ReactNode
}

export default ({ element }: GatsbyRootProps) => {
    const store = createStore()

    return (
        <Provider store={store}>{element}</Provider>
    )
}