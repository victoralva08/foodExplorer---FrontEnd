import Button from '../../components/button'
import ButtonText from '../../components/button_text'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Tag from '../../components/tag'
import { Container, MainContent, DishInformation, Ingredients } from './styles'

import { PiCaretLeftBold } from 'react-icons/pi'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

import { api } from '../../services/api'

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { updateValue } from '../../reduxHook/store'

import { useAuthContext } from "../../authHook/context.jsx"

export default function Details () {

    const [ isUserAdmin, setIsUserAdmin ] = useState(0) 
    const [ dishData, setDishData ] = useState({})
    const [ quantity, setQuantity ] = useState(1)
    const [ ingredients, setIngredients ] = useState([])

    const params = useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const contextDataObject = useAuthContext() 

    useEffect(() => {

        async function fetchDishDetails() {
            const response = await api.get(`/dishes/${params.id}`)
            setDishData(response.data.dish)
            setIngredients(response.data.ingredients) 
        }

        fetchDishDetails()
        console.log(ingredients)
    }, [params.id])

    useEffect ( () => {

        async function checkUserAdmin () {
            setIsUserAdmin( await api.get(`/users`) )
        }
        
        checkUserAdmin()  

    }, [])

    function addQuantity () {
        setQuantity ( Number(quantity) + 1 )
    }

    function subtractQuantity () {
        if (quantity > 1){
            setQuantity ( Number(quantity) - 1 )
        }
    }

    async function fetchCheckoutCartQuantity () {
            
        const dishTotalCartQuantity = await api.get(`/cart`) 
    
        contextDataObject.saveGlobalCartQuantity(dishTotalCartQuantity.data)
        dispatch( updateValue(dishTotalCartQuantity.data) )
        
    }

    async function addDishToCheckoutCart () {
        
        const name = dishData.name
        const price = dishData.price
        const image = dishData.image

        await api.post(`/cart/${params.id}`, {name, price, image, quantity})
        .then(() => {
            
            alert("Dish added to cart.")
            fetchCheckoutCartQuantity()
            
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    function handleReturn() {
        navigate(-1)
    }

    function handleEditDish(id) {
        navigate(`/edit-dish/${id}`)
    }

    return (
        <Container>
            <Header />

            <div className="return-button">
                <Button icon={PiCaretLeftBold} title="return" onClick={handleReturn}/>
            </div>
            
            <MainContent>

                <img src={`${api.defaults.baseURL}/files/${dishData.image}`}   alt="" />

                <DishInformation>

                    <h1>{dishData.name}</h1>
                    <p>{dishData.description}</p>
                    
                    <Ingredients>
                            
                        {
                            
                            ingredients.map( (ingredient, id) => (

                                <Tag 
                                key={id}
                                title={ingredient}
                                />
                    
                            ))

                        }
                            
                    </Ingredients>

                    <div className="checkout">

                        {
                            isUserAdmin.data ?

                            null

                            :

                            <div className='dishCartQuantity'>
                                <Button icon={AiOutlineMinus}  onClick={subtractQuantity}/>
                                    
                                <p> {String(quantity).padStart(2, 0)} </p>

                                <Button icon={AiOutlinePlus} onClick={addQuantity}/>
                            </div>
                        
                        }

                        {
                            isUserAdmin.data ?

                            <ButtonText title='Edit Dish' onClick={ () => handleEditDish(params.id)} />
                            :
                            <ButtonText title={`include ∙ R$ ${dishData.price}`} onClick={addDishToCheckoutCart} />
                        
                        }

                    </div>

                </DishInformation>

            </MainContent>

            <Footer />
        </Container>
    )

}