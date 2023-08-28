import { Container } from './styles.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


export default function SwiperSlider({ children }) {

    return (
    
        <Container>

            <Swiper
                spaceBetween={5} 
                modules={[Navigation]}
                navigation
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    600:{
                    slidesPerView:2
                    },
                    960:{
                    slidesPerView:3
                    },
                    1300:{
                    slidesPerView:4
                    },
                    1550:{
                    slidesPerView:5
                    }
                }}

                centeredSlides={true}
            >
                    
                    {children.map( (foodCard, id) => (
                        <SwiperSlide className='swiper-slider' key={id}>
                            {foodCard}
                        </SwiperSlide>
                    ))}
        
                
            </Swiper>

        </Container>
    )

}