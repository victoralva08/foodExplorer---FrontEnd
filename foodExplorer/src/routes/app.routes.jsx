import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Details from '../pages/Details'
import AddDish  from '../pages/AddDish'
import CheckoutCart  from '../pages/CheckoutCart'
import EditDish from '../pages/EditDish'

import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function AppRoutes (){

    const [ isUserAdmin, setIsUserAdmin ] = useState(0) 

    useEffect ( () => {

        // with this function we'll check if the current user is Admin or not
        async function checkUserAdmin () {
            setIsUserAdmin( await api.get(`/users`) )
        }
        
        checkUserAdmin()  

    }, [])


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path={isUserAdmin.data ? '/add-dish' : null} element={<AddDish />} />
            <Route path={isUserAdmin.data ? '/edit-dish/:id' : null} element={<EditDish />} />
            <Route path="/checkout" element={<CheckoutCart />} />
        </Routes>
    )
}