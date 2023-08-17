import { Container } from './styles'

export function Input ( {title, value, id, icon:Icon, type, placeholder, ...rest} ) {

    return (

        <Container {...rest}>

            <label htmlFor={id}>
            
            {title}

            <div className="input-wrapper">
                {Icon && <Icon size={20} />}
                <input placeholder={placeholder} value={value} type={type} id={id} />
            </div>

            </label>

        </Container>

    )

}

export default Input