import { Container, OpeningCard, List } from './styles.js'
import Header from '../../components/header'
import fruits_image from "../../assets/fruits_image.png"
import FoodCard from '../../components/foodCard/index.jsx'
import Footer from '../../components/footer/index.jsx'
import SwiperSlider from '../../components/swiper/index.jsx'

import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home () { 

    const [ dishes, setDishes ] = useState([])
    
    const [ mealDishes, setMealDishes ] = useState([])
    const [ dessertsDishes, setDessertDishes ] = useState([])
    const [ drinksDishes, setDrinkDishes ] = useState([])

    async function fetchDishes() {

        const response = await api.get(`/dishes`)
        setDishes(response.data)

    }

    useEffect( () => {

        fetchDishes()
    
    }, [])

    useEffect( () => {

        dishes.map( dish => {

            if (dish.category === "Meals") {
    
                setMealDishes(dishes.filter( dish => dish.category === "Meals"))
    
            } else if (dish.category === "Desserts") {
    
                setDessertDishes(dishes.filter( dish => dish.category === "Desserts"))
    
            } else {
    
                setDrinkDishes(dishes.filter( dish => dish.category === "Drinks"))
    
            }
            
        })

    }, [dishes])

       
    return (
    <>


        <Header onChange={ (e) => setSearch(e.target.value) } />
        
        <Container>
            
            <OpeningCard>

                <img src={fruits_image} alt="Fruits image" />

                <div className="texts">

                    <h1>Unequaled flavors</h1>
                    <p>Taste the care during preparation with selected ingredients</p>

                </div>

            </OpeningCard>

           

            <List>
                <section>

                    <h1 className='section-title'>Meals</h1>
         
                        <SwiperSlider>
                           
                        {
                            
                            mealDishes.map( dish => (
                                <FoodCard
                                key={dish.id}
                                id={dish.id}
                                name={dish.name}
                                category={dish.category}
                                image={dish.image}
                                description={dish.description}
                                price={dish.price}
                                />
                            ))
                        }

                        </SwiperSlider>

                    <h1 className='section-title'>Desserts</h1>

    
                        <SwiperSlider>
                        {
                            dessertsDishes.map( dish => (
                                <FoodCard
                                key={dish.id}
                                id={dish.id}
                                name={dish.name}
                                category={dish.category}
                                image={dish.image}
                                description={dish.description}
                                price={dish.price}
                                />
                            ))
                        }
                        </SwiperSlider>
            
                

                    <h1 className='section-title'>Drinks</h1>

            
                        <SwiperSlider>
                        {
                            drinksDishes.map( dish => (
                                <FoodCard
                                key={dish.id}
                                id={dish.id}
                                name={dish.name}
                                category={dish.category}
                                image={dish.image}
                                description={dish.description}
                                price={dish.price}
                                />
                            ))
                        }
                        </SwiperSlider>
                    
                </section>
            </List>

        </Container>

        <Footer />
    </>

    )

}
