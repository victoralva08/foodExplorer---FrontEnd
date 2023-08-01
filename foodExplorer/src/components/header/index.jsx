import { Container, HeaderButton } from './styles.js'
import Logo from '../logo/index.jsx'
import Input from '../input'
import ButtonText from '../button_text/index.jsx'

import { ImExit } from 'react-icons/im'
import { FiSearch } from 'react-icons/fi'
import { FaShoppingBasket } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'


export default function Header () {

    return (
        <Container>


            <HeaderButton>
                <BsList className='mobile' />
            </HeaderButton>
                
                <Logo />

                <Input className="desktop" id="search-input" icon={FiSearch} placeholder="Search dish" />
                    
                <ButtonText className="desktop" title="Dishes (2)" icon={FaShoppingBasket} />
                    
                <HeaderButton>
                    <FaShoppingBasket className='mobile'/>
                    <ImExit className='desktop'/>
                </HeaderButton>


        </Container>
    )

}