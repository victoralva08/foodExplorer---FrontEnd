import { Container, HeaderButton } from './styles.js'
import Logo from '../logo/index.jsx'
import Input from '../input'
import ButtonText from '../button_text/index.jsx'
import DishSuggestion from '../dishSuggestion/index.jsx'

import { ImExit } from 'react-icons/im'
import { FiSearch } from 'react-icons/fi'
import { FaShoppingBasket } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'
import { MdAddCircle } from 'react-icons/md'

import { useAuthContext } from "../../authHook/context.jsx"

import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'

import { useSelector } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../button/index.jsx'

export default function Header ({ onChange }) {

    const [ isUserAdmin, setIsUserAdmin ] = useState(0) 
    const [ search, setSearch ] = useState('')
    const [ dishes, setDishes ] = useState([])

    const contextDataObject = useAuthContext() 
    const valueFromRedux = useSelector(state => state.value);
    
    const navigate = useNavigate()
    
    function signOut() {
        navigate('/')
        contextDataObject.signOut()
    }

    function handleNavigateToAddDish() {
        navigate('/add-dish')
    }

    function handleNavigateCheckoutCart() {
        navigate('/checkout')
    }

    function handleNavigateToMenu() {
        navigate('/menu')
    }

    
    // if the 'add-dish' interface is rendered, the button which routes to it will be hidden
    const location = useLocation()
    const isAddDishInterfaceRendered = location.pathname === '/add-dish'
    const isCheckoutInterfaceRendered = location.pathname === '/checkout'
    const isFavoritesInterfaceRendered = location.pathname === '/favorites'
    
    function handleNavigateToDish(dish_id) {
        setSearch('')
        navigate(`/details/${dish_id}`)
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

    return (
        <Container>


            <HeaderButton>

            {

            isAddDishInterfaceRendered ?

            null

            :
            <BsList className='mobile' onClick={handleNavigateToMenu}/>

            }    
            
            </HeaderButton>
                
            <Logo />

            <div className="search-wrapper">
                
                <Input className="desktop" id="search-input" icon={FiSearch} placeholder="Search dish" onChange={ e => setSearch(e.target.value) } />

                <div className="suggestions">

                    {
                        dishes &&

                        search ?

                            dishes.map( (dish, id) => (

                                <DishSuggestion
                                key={id}
                                dish={dish}
                                className='dishSuggestion'
                                onClick={ () => handleNavigateToDish( dish.id ) }
                                />

                            ))

                        :

                            null

                    }
                    
                    
                </div>

            </div>  

            {

                isUserAdmin.data ?

                null

                :

                    isFavoritesInterfaceRendered ?

                    null
                    
                    :

                    <Button className='favorites-button' title='My favorites' onClick={handleNavigateToFavorites} />
                

            }


            { 
            
            isUserAdmin.data ? 

                // if the 'add-dish' interface is rendered, the button which routes to it will be hidden
                isAddDishInterfaceRendered ?

                null
                :
                <ButtonText className="desktop" title="Create a new dish" icon={MdAddCircle} onClick={handleNavigateToAddDish}/> 
                

            :  

                isCheckoutInterfaceRendered ?
                

                null
                :
                <ButtonText className="desktop" title={`Dishes (${ valueFromRedux ? valueFromRedux : 0 })`} icon={FaShoppingBasket} onClick={handleNavigateCheckoutCart} /> 
            
            
            } 
                        
            <HeaderButton>

                {
                
                isUserAdmin.data ? 

                    isAddDishInterfaceRendered ?

                    null
                    
                    :

                    <MdAddCircle className='mobile' onClick={handleNavigateToAddDish}/>

                :
                
                    isCheckoutInterfaceRendered ?

                    null

                    :

                    <div id='mobile-basket-icon' className='mobile' onClick={handleNavigateCheckoutCart}>
                        <span>{ valueFromRedux ? valueFromRedux : 0 }</span>
                        <FaShoppingBasket className='mobile' />
                    </div>

                }

                <ImExit className='desktop' onClick={signOut}/>
            </HeaderButton>


        </Container>
    )

}