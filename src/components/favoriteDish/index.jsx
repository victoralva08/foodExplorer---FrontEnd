import { Container } from './styles'
import { api } from '../../services/api'

import Button from '../../components/button/index.jsx'
import { useNavigate } from 'react-router-dom'



export default function FavoriteDish ( { dish, ...rest} ) {

    const navigate = useNavigate()

    async function handleRemoveDish () {

        const removeDish = window.confirm("Remove dish from favorites?")

        if(removeDish){

            try {

                await api.delete(`/favorites/${dish.dish_id}`)
    

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

            <img src={`${api.defaults.baseURL}/files/${dish.dishImage}`} onClick={ () => handleNavigateToDetails(dish.dish_id) } alt="Dish image" />

            <div>

                <div className="dish-info">
                    <h1 onClick={ () => handleNavigateToDetails(dish.dish_id) }>{dish.dishName}</h1>
                    <span>R$ {dish.dishPrice}</span>
                </div>

                <Button className="remove-button" title="Remove" onClick={handleRemoveDish}/>

            </div>

        </Container>
    )

}