import { Container } from './styles'
import Button from '../button'
import ButtonText from '../button_text'

import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { updateValue } from '../../reduxHook/store'

import { useAuthContext } from "../../authHook/context.jsx"

export default function FoodCard({ id, name, category, image, description, price, ...rest }) {

    const [ quantity, setQuantity ] = useState(1)
    const [ isDishFavorited, setDishIsFavorite ] = useState(false)
    const [ favoriteDishResponse, setFavoriteDishResponse ] = useState([])
    const [ isUserAdmin, setIsUserAdmin ] = useState(0) 

    const dispatch = useDispatch()
    const contextDataObject = useAuthContext() 

    const navigate = useNavigate()

    function addQuantity () {
        setQuantity ( Number(quantity) + 1 )
    }

    function subtractQuantity () {
        if (quantity > 1){
            setQuantity ( Number(quantity) - 1 )
        }
    }

    async function addDishToCheckoutCart () {
        
        const dishData = {
            name, price, image, quantity
        }
        
        
        await api.post(`/cart/${id}`, dishData)
        .then(() => {
            
            fetchCheckoutCartQuantity()
            
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    
    async function fetchCheckoutCartQuantity () {
            
        const TotalCartQuantity = await api.get(`/cart`) 
    
        contextDataObject.saveGlobalCartQuantity(TotalCartQuantity.data)
        dispatch( updateValue(TotalCartQuantity.data) )
        
    }

    async function FavoriteDish () {

        const dishData = {
            name, category, price, image
        }
        
        await api.post(`/favorites/${id}`, dishData)
        .catch(error => {
            console.log(error)
        })
        
    }

    async function RemoveFavoriteDish () {
    
    
        await api.delete(`/favorites/${id}`)
        .catch(error => {
            console.log(error)
        })

    }

    async function handleFavoriteDishInput () {
        
        if (isDishFavorited == false) {

            setDishIsFavorite(true)
            FavoriteDish()

        } else {

            setDishIsFavorite(false)
            RemoveFavoriteDish()

        }

    }

    function handleDetails() {
        navigate(`/details/${id}`)
    }

    function handleEditDish() {
        navigate(`/edit-dish/${id}`)
    }
   
    useEffect( () => {
        
        async function fetchFavoriteDishes() {
            setFavoriteDishResponse( await api.get(`/favorites/${id}`) )
        }
        
        async function checkUserAdmin () {
            setIsUserAdmin( await api.get(`/users`) )
        }

        fetchFavoriteDishes()
        fetchCheckoutCartQuantity()
        checkUserAdmin()  
        
    }, [])
    
    useEffect(() => {
        
        // if this dish is favorited, favoriteDishes table will be able to filter it by using dish_id and the user_id. If it is not, the input checkbox will not be checked, for the dish is not yet favorite.

        if (favoriteDishResponse.data) {
            setDishIsFavorite(true)
        } 

    }, [favoriteDishResponse])

    return (

        <Container {...rest}>

            {
            
            isUserAdmin.data ?

            <Button className="edit-button" icon={BsFillPencilFill} onClick={ handleEditDish }/>
            
            :

            <div className="input-wrapper">
                <input type="checkbox" id={id} onChange={handleFavoriteDishInput} checked={isDishFavorited}/> 
                <label htmlFor={id}></label>
            </div>
            
            }

            <img src={`${api.defaults.baseURL}/files/${image}`} alt="Dish image" />

            <h2 onClick={ () => handleDetails(id)} > {name} →</h2>
            <p className='description'>{description}</p>

            <h1>R$ {price}</h1>

            {

            isUserAdmin.data ?

            null 

            :

            <div className="checkout">

                <div className="quantity-select">

                    <Button icon={AiOutlineMinus} onClick={subtractQuantity} />
                                
                    <p> {String(quantity).padStart(2, 0)} </p>

                    <Button icon={AiOutlinePlus} onClick={addQuantity} />

                </div>

                <ButtonText className="checkout-button" title="Include" onClick={addDishToCheckoutCart}/>

            </div>

            }   


        </Container>
    )


}