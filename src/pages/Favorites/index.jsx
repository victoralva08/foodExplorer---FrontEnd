import Header from '../../components/header'
import { Container } from './styles'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import {PiCaretLeftBold} from 'react-icons/pi'


import FavoriteDish from '../../components/favoriteDish'
import Button from '../../components/button'
import Footer from '../../components/footer'
import { useNavigate } from 'react-router-dom'

export default function Favorites() {

    const [ favoritedDishesResponse, setFavoritedDishesResponse ] = useState(null)
    const [ favoritedDishes, setFavoritedDishes ] = useState([])

    const [ refreshInterface, setRefreshInterface ] = useState(false)

    const navigate = useNavigate()
    
    function handleReturn () {
        navigate(-1)
    }

    async function fetchFavoritedDishes () {

        setFavoritedDishesResponse( await api.get('/favorites') )
       
    } 

    function updateFavoriteList() {
        setRefreshInterface(true)
    }

    useEffect( () => {

        fetchFavoritedDishes()  
        setRefreshInterface(false)  

    }, [refreshInterface])

    useEffect( () => {

        if (favoritedDishesResponse) {

        setFavoritedDishes(favoritedDishesResponse.data)
        console.log(favoritedDishes)  

        }

    }, [favoritedDishesResponse])

    return(

        <>

        <Header />

        <Container>

        <div className="return-button">
            <Button icon={PiCaretLeftBold} title="return" onClick={handleReturn}/>
        </div>

        <h1 className='interface-title'>My favorite dishes</h1>

        <div className='favorites-list'>
        {   
            (favoritedDishes.length > 0) ?

            favoritedDishes.map( (favoritedDish, id) => (

                <FavoriteDish 
                dish={favoritedDish} 
                key={id}
                onClick={updateFavoriteList}

                />

            ))

            :

            <p>You have no favorited dishes!</p>

        }
        </div>

        
        </Container>


        </>

    )
}