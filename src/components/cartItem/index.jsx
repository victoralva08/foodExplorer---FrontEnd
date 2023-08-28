import { Container } from './styles'
import { api } from '../../services/api'

import Button from '../../components/button/index.jsx'

import { useNavigate } from 'react-router-dom'


export default function CartItem ( { dish, ...rest} ) {

   const navigate = useNavigate()

    async function handleRemoveDish () {

        const removeDish = window.confirm("Remove dish from cart?")

        if(removeDish){

            try {

                await api.delete(`/cart/${dish.dish_id}`)
    

            } catch (error) {

                if(error.response) {
                alert(error.response.data.message)

            }
            
            }
        } 

    }

    function handleNavigateToDetails ( dish_id ) {
        navigate(`/details/${dish_id}`)
    }

    return (
        <Container {...rest}>

            <img src={`${api.defaults.baseURL}/files/${dish.dishImage}`} alt="Dish image" onClick={ () => handleNavigateToDetails(dish.dish_id) } />

            <div>

                <div className="dish-info"  onClick={ () => handleNavigateToDetails(dish.dish_id) }>
                    <h1>{dish.dishQuantity} x {dish.dishName}</h1>
                    <span>R$ {dish.dishPrice}</span>
                </div>

                <Button className="remove-button" title="Remove" onClick={handleRemoveDish}/>

            </div>

        </Container>
    )

}