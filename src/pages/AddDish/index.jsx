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

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddDish() {

    const [ dishImageFile, setDishImageFile ] = useState(null)

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('Meals')
    
    const [ ingredients, setIngredients ] = useState([])
    const [ newIngredient, setNewIngredient ] = useState('')

    const [ price, setPrice ] = useState(null)
    const [ description, setDescription ] = useState('')

    const navigate = useNavigate()
    
    function handleNavigateToHomeInterface() {
        navigate(-1)
    }

    function handleAddDishImage(event) {

        const file = event.target.files[0]

        // checkpoint for image file extensions

        const fileExtension = String(file.name.split('.')[1])

        if (fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'jpeg') {
            return toast.error('Please, upload a valid image file (png, jpg or jpeg).')
        }

        setDishImageFile(file)
     
    }

    async function handleCreateDish () {

        const dishData = {
            name, category, description, ingredients, price 
        }

        if (!dishImageFile ) {
            return toast.error("Please, fill all dish information. Your dish must also have an image to display.")
        } else if (  !name || !category || !description || ingredients.length === 0 || !price ) {
            return toast.error("Please, fill all dish information.")
        }

        if ( newIngredient ) {
            return toast.error("Your ingredient wasn't added.")
        }
        
        const dishCreateResponse  = await api.post("/dishes", dishData)
        const dish_id = dishCreateResponse.data

        // saving encrypted image file in database 

        const imageFileUploadForm = new FormData()
        imageFileUploadForm.append("dish_image", dishImageFile)

        await api.patch(`/dishes/dish_image/${dish_id}`, imageFileUploadForm)

        toast("The dish was sucessfully created.")
        handleNavigateToHomeInterface()
        
    }

    function handleAddIngredient () {

        if (!newIngredient){
            toast.error("Please, inform the ingredient.")
            return
        } 

        setIngredients([ ...ingredients, newIngredient ])
        setNewIngredient("")
    }

    function handleRemoveIngredient (ingredientToBeDeleted) {
        setIngredients(ingredients.filter( ingredient => ingredient !== ingredientToBeDeleted ))
    }

    function formatPriceValue(inputPrice) {

        const numericValue = inputPrice.replace(/[^\d\.\,]/g, '')
        setPrice(numericValue)

    }
    
    return (
        <>
            <ToastContainer />
            <Header />

            <MainContent>

            <Button className='interface-title' icon={PiCaretLeftBold} title="return" onClick={handleNavigateToHomeInterface} />
            
            <h1 className='interface-title'>Add Dish</h1>

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

                <Input title="Name" className="name-input" placeholder="Name your dish" onChange={ (e) => setName(e.target.value)} />
                <Select className="category-input" value={category} onChange={ (e) => setCategory(e.target.value)} />
            
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

                <Input title="Price" className="price-input" placeholder='R$' value={price} onChange={ e => formatPriceValue(e.target.value) }/>

            </div>

            <Textarea className="description-input" placeholder="Describe your dish" onChange={ e => setDescription(e.target.value) } />


            <ButtonText title="Create dish" className="create-dish-button" onClick={ handleCreateDish } />

            </MainContent>

            <Footer />
        </>
    )


}