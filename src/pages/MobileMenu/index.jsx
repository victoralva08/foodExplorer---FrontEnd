import { Container } from './styles'
import { useAuthContext } from "../../authHook/context.jsx"

import Button from '../../components/button'
import Input from '../../components/input'
import DishSuggestion from '../../components/dishSuggestion'

import { FiSearch } from 'react-icons/fi'
import { MdOutlineCancel } from 'react-icons/md'

import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'

import { useNavigate } from 'react-router-dom'

export default function MobileMenu () {

    const [ isUserAdmin, setIsUserAdmin ] = useState(0) 
    const [ search, setSearch ] = useState('')
    const [ dishes, setDishes ] = useState([])

    const navigate = useNavigate()
    const contextDataObject = useAuthContext()

    function handleSignOut() {
        navigate('/')
        contextDataObject.signOut()
    }

    function handleNavigateToDish(dish_id) {
        setSearch('')
        navigate(`/details/${dish_id}`)
    }

    function handleNavigateToAddDish() {
        navigate('/add-dish')
    }

    function handleNavigate() {
        navigate('/')
    }

    function handleNavigateToFavorites() {
        navigate('/favorites')
    }


    useEffect ( () => {

        // with this function we'll check if the current user is Admin or not
        async function checkUserAdmin () {
            setIsUserAdmin( await api.get(`/users`) )
        }
        
        checkUserAdmin()  

    }, [])

    useEffect( () => {

        async function fetchDishes() {
            const response = await api.get(`/dishes/?dishNameOrIngredients=${search}`)
            setDishes(response.data)
            console.log(search)
        }

        fetchDishes()

    }, [ search ])

    return(

        <Container>
            
            <div className="header">
                <Button className="exit-button" icon={MdOutlineCancel} onClick={handleNavigate} />
                <h1>Menu</h1>
            </div>

            <div className="menu-section">

                <Input id="search-input" icon={FiSearch} placeholder="Search dish" onChange={ e => setSearch(e.target.value) } />
                
                {
                    dishes &&

                    search ?
                            
                    <div className="suggestions">

                        {

                         dishes.map( (dish, id) => (

                            <DishSuggestion
                            key={id}
                            dish={dish}
                            className='dishSuggestion'
                            onClick={ () => handleNavigateToDish( dish.id ) }
                            />

                        ))
                        
                        }

                    </div>

                    :

                    null

                }      
                    
                {

                isUserAdmin.data ?

                <Button className='navigate-buttons' title="New dish" onClick={handleNavigateToAddDish} />
                :
                <Button className='navigate-buttons' title='My favorites' onClick={handleNavigateToFavorites} />
                    
                }
                <Button className='navigate-buttons' title="Exit" onClick={handleSignOut} />
                    
            
            </div>

        </Container>

    )

}