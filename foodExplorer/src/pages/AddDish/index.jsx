import { MainContent, Ingredients } from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Input from '../../components/input'
import Button from '../../components/button'
import Textarea from '../../components/text_area'
import DishIngredients from '../../components/dishIngredients'

import { PiCaretLeftBold } from 'react-icons/pi'
import { AiOutlineUpload } from 'react-icons/ai'
import ButtonText from '../../components/button_text'
import Select from '../../components/select'


export default function AddDish () {
    
    return (
        <>
            <Header />

            <MainContent>

            <Button icon={PiCaretLeftBold} title="return" />
            
            <h1>Add Dish</h1>

            <div className="input-wrapper-row0">

                <div className="file-imageInput-wrapper">

                    <h1>Dish Image</h1>

                    <label htmlFor='dishImage'>

                        <input
                        type="file"
                        id="dishImage"
                        />

                        <AiOutlineUpload />
                        <span>Select image</span>
                        
                    </label>

                </div>

                <Input title="Name"  />
                <Select id="Category" />
            
            </div>

            <div className="input-wrapper-row1">

                <Ingredients>

                    <h1>Ingredients</h1>

                    <div className="ingredientsTags">

                        <DishIngredients                        
                        value="Tag one"/>

                        <DishIngredients
                        isNew
                        placeholder="Add"                            
                        />


                    </div>

                </Ingredients>

                <Input title="Price" />

            </div>

            <Textarea placeholder="Describe your dish" />


            <ButtonText title="Create dish" className="create-dish-button" />

            </MainContent>

            <Footer />
        </>
    )


}