import { Container, HeaderButton } from './styles.js'
import Logo from '../logo/index.jsx'
import Input from '../input'
import ButtonText from '../button_text/index.jsx'

import { ImExit } from 'react-icons/im'
import { FiSearch } from 'react-icons/fi'
import { FaShoppingBasket } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'

import { useAuthContext } from "../../authHook/context.jsx"

import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { updateValue } from '../../reduxHook/store'

export default function Header ({ onChange }) {

    const [ cartCurrentTotalQuantity, setCartCurrentTotalQuantity ] = useState(0) 

    const contextDataObject = useAuthContext() 
    const valueFromRedux = useSelector(state => state.value);

    useEffect ( () => {
        
        async function fetchCheckoutDishQuantity () {
            setCartCurrentTotalQuantity(localStorage.getItem("@foodexplorer:cartQuantity"))
        }

        fetchCheckoutDishQuantity()
   
    }, [])
 
    return (
        <Container>


            <HeaderButton>
                <BsList className='mobile' />
            </HeaderButton>
                
                <Logo />

                <Input className="desktop" id="search-input" icon={FiSearch} placeholder="Search dish" onChange={onChange} />
                    
                <ButtonText className="desktop" title={`Dishes (${ valueFromRedux ? valueFromRedux : cartCurrentTotalQuantity })`} icon={FaShoppingBasket} />
                    
                <HeaderButton>
                    <FaShoppingBasket className='mobile'/>
                    <ImExit className='desktop' onClick={contextDataObject.signOut}/>
                </HeaderButton>


        </Container>
    )

}