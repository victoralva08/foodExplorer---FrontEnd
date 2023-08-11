import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Details from '../pages/Details'
import AddDish  from '../pages/AddDish'

export function AppRoutes (){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="/add-dish" element={<AddDish />} />
        </Routes>
    )
}