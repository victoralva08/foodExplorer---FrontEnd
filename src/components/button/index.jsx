import { Container } from './styles'


export function Button( {title, icon: Icon, loading, ...rest} ) {

    return(

        <Container
        type='button'
        disabled={loading}
        {...rest}
        >
            
        {Icon && <Icon size={20} />}    
        { loading ? 'Loading...' : title }

        </Container>

    )

}

export default Button