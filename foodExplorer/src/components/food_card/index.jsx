import { Container } from './styles'
import dish from '../../assets/dish.png'
import Button from '../button'
import ButtonText from '../../components/button_text'

import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

export default function FoodCard() {
    
    return (
        <Container>
            
            <div className="input-wrapper">
                <input type="checkbox" id="favorite-check" /> 
                <label htmlFor="favorite-check"></label>
            </div>
          
            <img src={dish} alt="" />

            <h2>Dish's name →</h2>
            <p>Dish's description</p>

            <h1>R$ 79,90</h1>

            <div className="checkout">

                <div className="quantity-select">

                    <Button icon={AiOutlineMinus} />
                                
                    <p>01</p>

                    <Button icon={AiOutlinePlus} />

                </div>

                <ButtonText className="checkout-button" title="Include" />

            </div>


        </Container>
    )


}