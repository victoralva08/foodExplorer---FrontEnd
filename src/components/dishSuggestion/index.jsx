import { Container } from './styles'
import { api } from '../../services/api'


export default function DishSuggestion ( { dish, ...rest} ) {

    return (
        <Container {...rest}>

            <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt="Dish image" />

            <div>
                <h1>{dish.name}</h1>
                <p>{dish.description}</p>
            </div>

        </Container>
    )

}