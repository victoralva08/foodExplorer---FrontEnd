import { Container } from './styles'

export function ButtonText( {title, isactive = false, icon: Icon, ...rest} ) {

    return(

        <Container
        type='button'
        isactive={isactive}
        {...rest}
        >

        {Icon && <Icon size={20} />}
        { title }

        </Container>

    )

}

export default ButtonText