import { Container } from './styles'

export default function Textarea({ value, placeholder, ...rest}){
    return(
        <Container {...rest}>
            <label htmlFor="description">Description</label>
            <textarea id="description" value={value} placeholder={placeholder}>{ value }</textarea>
        </Container>
    )
}