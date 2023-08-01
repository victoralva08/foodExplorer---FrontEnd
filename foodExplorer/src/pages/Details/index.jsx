import Button from '../../components/button'
import ButtonText from '../../components/button_text'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { Container, MainContent, DishInformation, Tags } from './styles'

import { PiCaretLeftBold } from 'react-icons/pi'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'



import dish from '../../assets/dish.png'
import Tag from '../../components/tag'


export default function Details () {

    return (
        <Container>
            <Header />

            <div className="return-button">
                <Button icon={PiCaretLeftBold} title="return" />
            </div>
            
            <MainContent>

                <img src={dish} alt="" />

                <DishInformation>

                    <h1>Ravanello salad</h1>
                    <p>Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds. The naan bread adds a special touch.</p>
                    
                    <Tags>
                        <Tag title="abc" />
                        <Tag title="abc" />
                        <Tag title="abc" />
                    </Tags>

                    <div className="checkout">

                            <Button icon={AiOutlineMinus} />
                            
                            <p>01</p>

                            <Button icon={AiOutlinePlus} />

                            <ButtonText title="Include" />
                    
                    </div>

                </DishInformation>

            </MainContent>

            <Footer />
        </Container>
    )

}