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

import { useState } from 'react'
import { useAuthContext } from "../../authHook/context.jsx"

import { api } from '../../services/api'


export default function AddDish() {

    const [ dishImageFile, setDishImageFile ] = useState(null)
    const [ dishId, setDishId ] = useState('')

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    
    const [ ingredients, setIngredients ] = useState([])
    const [ newIngredient, setNewIngredient ] = useState('')

    const [ price, setPrice ] = useState('')
    const [ description, setDescription ] = useState('')

    
    function handleAddDishImage(event) {

        const file = event.target.files[0]

        // checkpoint for image file extensions

        const fileExtension = String(file.name.split('.')[1])
        console.log(fileExtension)

        if (fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'jpeg') {
            return alert('Please, upload a valid image file (png, jpg or jpeg).')
        }

        setDishImageFile(file)
     
    }

    async function handleCreateDish () {

        console.log(category)
        const dishData = {
            name, category, description, ingredients, price 
        }
        
        const dishCreateResponse  = await api.post("/dishes", dishData)
        const dish_id = dishCreateResponse.data
        alert("The dish was sucessfully created.")

        // saving encrypted image file in database 

        const imageFileUploadForm = new FormData()
        imageFileUploadForm.append("dish_image", dishImageFile)

        const response = await api.patch(`/dishes/dish_image/${dish_id}`, imageFileUploadForm)
        console.log(response.data)
        
    }
        

    function handleAddIngredient () {

        if (!newIngredient){
            alert("Please, inform the ingredient.")
            return
        } 

        setIngredients([ ...ingredients, newIngredient ])
        setNewIngredient("")
    }

    function handleRemoveIngredient (ingredientToBeDeleted) {
        setIngredients(ingredients.filter( ingredient => ingredient !== ingredientToBeDeleted ))
    }
    
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
                        onChange={ handleAddDishImage }
                        />

                        <AiOutlineUpload />
                        <span>{dishImageFile ? dishImageFile.name : "Select dish image"}</span>
                        
                    </label>

                </div>

                <Input title="Name" onChange={ (e) => setName(e.target.value)} />
                <Select id="Category" onChange={ (e) => setCategory(e.target.value)} />
            
            </div>

            <div className="input-wrapper-row1">

                <Ingredients>

                    <h1>Ingredients</h1>

                    <div className="ingredientsTags">

                        {
                            ingredients.map( (ingredient, id) => (        

                            <DishIngredients                        
                            value={ingredient}
                            key={id}
                            onClick={ () => handleRemoveIngredient(ingredient) }
                            />
                            
                            ))

                        }

                        <DishIngredients    
                        isNew  
                        placeholder="Add"                  
                        value={newIngredient}
                        onChange={ e => setNewIngredient(e.target.value) }
                        onClick={ handleAddIngredient } 
                        />  

                    </div>

                </Ingredients>

                <Input title="Price" onChange={ e => setPrice(e.target.value) }/>

            </div>

            <Textarea placeholder="Describe your dish" onChange={ e => setDescription(e.target.value) } />


            <ButtonText title="Create dish" className="create-dish-button" onClick={ handleCreateDish } />

            </MainContent>

            <Footer />
        </>
    )


}