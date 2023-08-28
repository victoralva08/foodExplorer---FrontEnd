import { Container } from './styles'

export default function Select ({id, value, ...rest}) {

    return (

        <Container {...rest}>

        <label htmlFor={id}>Category</label>

        <select value={value ? value : "Meals" } id={id} {...rest}>
            <option value="Meals">Meal</option>
            <option value="Desserts">Dessert</option>
            <option value="Drinks">Drink</option>
        </select>

        </Container>

    )

}