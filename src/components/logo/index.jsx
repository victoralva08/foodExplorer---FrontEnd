import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'



export function Logo () {
    
    const [ isUserAdmin, setIsUserAdmin ] = useState([])
    const navigate = useNavigate()
    
    function handleNavigateToHomeInterface() {
        navigate('/')
    }

    useEffect ( () => {

        // with this function we'll check if the current user is Admin or not
        async function checkUserAdmin () {
            setIsUserAdmin( await api.get(`/users`) )
        }
        
        checkUserAdmin()  

    }, [])

    return (
        <Container onClick={handleNavigateToHomeInterface}>

            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="31" viewBox="0 0 26 31" fill="none">
                <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#065E7C"/>
            </svg>

            <div>
                <h1>food explorer</h1>
                {
                    isUserAdmin.data ?

                    <span>admin</span>
                    :
                    null
                    
                }
            </div>
        </Container>
    )
}

export default Logo