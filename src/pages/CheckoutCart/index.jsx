import Header from '../../components/header/index.jsx'
import { Container, MainContent } from './styles.js'

import { api } from '../../services/api.js'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CartItem from '../../components/cartItem/index.jsx'
import ButtonText from '../../components/button_text/index.jsx'
import Button from '../../components/button/index.jsx'
import Input from '../../components/input/index.jsx'

import { MdPix } from 'react-icons/md'
import {BsFillCreditCardFill} from 'react-icons/bs'
import { PiCaretLeftBold } from 'react-icons/pi'
import Footer from '../../components/footer/index.jsx'



export default function CheckoutCart () {

    const [ orderedDishesResponse, setOrderedDishesResponse ] = useState([])
    const [ orderedDishes, setOrderedDishes ] = useState([])
    const [ totalPrice, setTotalPrice ] = useState(0)
    const [ refreshInterface, setRefreshInterface ] = useState(false)

    const navigate = useNavigate()
 
    async function fetchOrderDishes () {
        setOrderedDishesResponse( await api.get('/cart/cart-orders') )
    } 

    function handleReturn() {
        navigate('/')
    }

    function updateCartList() {
        setRefreshInterface(true)
    }

    function calculateTotalPrice () {

        orderedDishes.map( orderedDish => {
            const price = Number(orderedDish.dishPrice * orderedDish.dishQuantity)
            setTotalPrice( prevState => prevState + price )
        })

    }

    useEffect( () => {

        setRefreshInterface(false)
        fetchOrderDishes()   

    }, [refreshInterface])

    useEffect( () => {

        if (orderedDishesResponse.data) {

            setOrderedDishes(orderedDishesResponse.data) 
            setTotalPrice(0)
            calculateTotalPrice() 
        }

    }, [orderedDishesResponse])

    return(
        <Container>

        <Header />

        <div className="return-button">
            <Button icon={PiCaretLeftBold} title="return" onClick={handleReturn}/>
        </div>

        <MainContent>

            <div className="orders-list">

                <h1 className='interface-title'>Orders</h1>

                {   
                
                    (orderedDishes.length > 0) ?

                    orderedDishes.map( (orderedDish, id) => (

                        <CartItem 
                        dish={orderedDish} 
                        key={id}
                        onClick={updateCartList}
                        />

                    ))

                    :

                    <p>You have no orders yet!</p>

                }

                {
                    (orderedDishes.length > 0) ?

                    <p>Total: R$ {totalPrice.toFixed(2)}</p>
                    :
                    null

                }


            <ButtonText title='Confirm items' className='confirm-button' />
            </div>


            {
                (orderedDishes.length > 0) ?

                
                <div className="payment-section">

                    <h1 className='interface-title'>Payment</h1>

                    <div className="payment-chart">


                        <div className="payment-type">
                            
                            <Button className='pix' title="Pix" icon={MdPix}/>
                            <line></line>
                            <Button className='credit-card' title="Credit Card" icon={BsFillCreditCardFill} />

                        </div>

                        <div className="input-wrapper">

                            <Input title='Card Number' placeholder='XXXX XXXX XXXX XXXX' />

                            <div className="inner-input">
                                <Input title='Expiration Date' placeholder='DD/MM'/>
                                <Input title='CVC' placeholder='XXX' />
                            </div>

                        </div>

                        <ButtonText className="confirm-checkout-button" title="Confirm" />
                    </div>

                </div>

                :
                
                null
            }

        </MainContent>



        </Container>
    )

}