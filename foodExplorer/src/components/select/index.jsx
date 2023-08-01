import { Container } from './styles'

export default function Select ({id, ...rest}) {

    return (

        <Container>

        <label htmlFor={id}>Category</label>

        <select id={id}>
            <option value="meals">Meal</option>
            <option value="desserts">Dessert</option>
            <option value="drinks">Drink</option>
        </select>

        </Container>

    )

}