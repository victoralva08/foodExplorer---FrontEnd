import Header from '../../components/header/index.jsx'
import { Container } from './styles.js'

import { api } from '../../services/api.js'

import { useState, useEffect } from 'react'


import CartItem from '../../components/cartItem/index.jsx'
import ButtonText from '../../components/button_text/index.jsx'
import Footer from '../../components/footer/index.jsx'

import { MdPix } from 'react-icons/md'
import {BsFillCreditCardFill} from 'react-icons/bs'
import Input from '../../components/input/index.jsx'
import Button from '../../components/button/index.jsx'

export default function MobilePayment () {

    const [ orderedDishesResponse, setOrderedDishesResponse ] = useState([])
    const [ orderedDishes, setOrderedDishes ] = useState([])
    const [ totalPrice, setTotalPrice ] = useState(0)
 
    async function fetchOrderDishes () {

        setOrderedDishesResponse( await api.get('/cart/cart-orders') )
       
    } 

    useEffect( () => {

        fetchOrderDishes()    

    }, [])

    useEffect( () => {

        if (orderedDishesResponse.data) {
            
            setOrderedDishes(orderedDishesResponse.data) 

            function calculateTotalPrice () {

                orderedDishes.map( orderedDish => {
                    const price = Number(orderedDish.dishPrice * orderedDish.dishQuantity)
                    setTotalPrice( prevState => prevState + price )
                })
        
            }

            calculateTotalPrice() 
        }

        

    }, [orderedDishesResponse])

    return(
        <>

        <Container>

        <div className="payment-chart">

            <div className="payment-type">
                
                <Button className='pix' title="Pix" icon={MdPix}/>
                <line></line>
                <Button className='credit-card' title="Credit Card" icon={BsFillCreditCardFill} />

            </div>

            <div className="input-wrapper">

                <Input title='Card Number' />

                <div className="inner-input">
                    <Input title='Expiration Date'/>
                    <Input title='CVC' />
                </div>

            </div>

            <ButtonText className="confirm-button" title="Confirm" />

        </div>
           

        

        </Container>

        <Footer />

        </>
    )

}