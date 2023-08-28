import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

import { useAuthContext } from '../authHook/context'

export function Routes (){

    const { user } = useAuthContext()

    return (
        <BrowserRouter>
            { user ? <AppRoutes /> : <AuthRoutes /> }
        </BrowserRouter>
    )
}