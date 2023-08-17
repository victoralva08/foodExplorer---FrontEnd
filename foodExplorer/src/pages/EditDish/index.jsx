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

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'


export default function EditDish() {

    const [ dishImageFile, setDishImageFile ] = useState(null)

    const [ dishData, setDishData] = useState({})

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    
    const [ ingredients, setIngredients ] = useState([])
    const [ newIngredient, setNewIngredient ] = useState('')

    const [ price, setPrice ] = useState(0)
    const [ description, setDescription ] = useState('')

    const params = useParams()
    const navigate = useNavigate()

    function handleNavigate() {
        navigate(-1)
    }

    async function handleUpdate() {

        const updatedDish = {

            name,
            category,
            ingredients,
            price,
            description
            
        }

        const dishUpdated = Object.assign(dishData, updatedDish)

        if (dishImageFile) { 
            
            const imageFileUploadForm = new FormData()
            imageFileUploadForm.append("dish_image", dishImageFile)

            await api.patch(`/dishes/dish_image/${params.id}`, imageFileUploadForm)
         
        }

        try {

            await api.put(`/dishes/${params.id}`, dishUpdated)
            alert("Dish updated.")

        } catch (error) {

            if(error.response) {
            alert(error.response.data.message)
            }
           
        }

        handleNavigate()

    }
   
    function handleAddDishImage(event) {

        const file = event.target.files[0]

        // checkpoint for image file extensions

        const fileExtension = String(file.name.split('.')[1])

        if (fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'jpeg') {
            return alert('Please, upload a valid image file (png, jpg or jpeg).')
        }

        setDishImageFile(file)
     
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

    async function handleDeleteDish () {

        const deleteDish = window.confirm("Delete dish?")

        if(deleteDish){

        try {

            await api.delete(`/dishes/${params.id}`)
            alert("Dish deleted.")

        } catch (error) {

            if(error.response) {
            alert(error.response.data.message)
            }
           
        }

        handleNavigate()

        }

    }

    function formatPriceValue(inputPrice) {

        const numericPriceValue = inputPrice.replace(/[^\d,.]/g, '')

        setPrice(Number(numericPriceValue))

    }

    useEffect(() => {

        async function fetchDishDetails() {
            const response = await api.get(`/dishes/${params.id}`)
            setDishData(response.data.dish)
            setIngredients(response.data.ingredients)
        }

        fetchDishDetails()  

    }, [params.id]) 

    useEffect( () => {

        setName(dishData.name)
        setCategory(dishData.category)
        setPrice(dishData.price)
        setDescription(dishData.description)

    }, [dishData])

    return (
        <>
            <Header />

            <MainContent>

            <Button className='interface-title' icon={PiCaretLeftBold} title="return" onClick={ handleNavigate }/>
            
            <h1 className='interface-title'>Edit Dish</h1>

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
                        <span>{ dishImageFile ? dishImageFile.name : "Select new dish image" }</span>
                        
                    </label>

                </div>

                <Input title="Name" className="name-input" value={name} onChange={ (e) => setName(e.target.value)} />
                <Select id="Category" className="category-input" value={category} onChange={ (e) => setCategory(e.target.value)} />
            
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

                <Input title="Price" placeholder='R$' className="price-input" value={price} onChange={ e => formatPriceValue(e.target.value) }/>

            </div>

            <Textarea placeholder="Describe your dish" className="description-input" value={description} onChange={ e => setDescription(e.target.value) } />

            <div className="buttons">

            <ButtonText title="Delete dish" className="delete-dish-button"  onClick={ handleDeleteDish } />
            <ButtonText title="Save dish" className="create-dish-button" onClick={ handleUpdate } />

            </div>

            </MainContent>

            <Footer />
        </>
    )


}