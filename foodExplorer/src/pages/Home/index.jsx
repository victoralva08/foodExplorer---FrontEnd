import { Container, OpeningCard, List } from './styles.js'
import Header from '../../components/header'
import fruits_image from "../../assets/fruits_image.png"
import FoodCard from '../../components/food_card/index.jsx'
import Footer from '../../components/footer/index.jsx'
import SwiperSlider from '../../components/swiper/index.jsx'



export default function Home () {

    return (
        <>
        <Header />
        
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

                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />

                        </SwiperSlider>

                    <h1 className='section-title'>Desserts</h1>

    
                        <SwiperSlider>
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                        </SwiperSlider>
            
                

                    <h1 className='section-title'>Drinks</h1>

            
                        <SwiperSlider>
                            <FoodCard />
                            <FoodCard />
                        </SwiperSlider>
                    
                </section>
            </List>

        </Container>

        <Footer />
        </>

    )

}
