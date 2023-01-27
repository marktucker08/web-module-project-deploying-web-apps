import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form () {

const navigate = useNavigate();

const [formValues, setFormValues] = useState({ 
    name: "", 
    size: undefined, 
    pepperoni: false, 
    sausage: false, 
    pineapple: false, 
    steak: false, 
    bacon: false, 
    mushrooms: false, 
    special: "" 
})

const [errors, setErrors] = useState({
    name: "", 
    size: "", 
    pepperoni: "", 
    sausage: "", 
    pineapple: "", 
    steak: "", 
    bacon: "", 
    mushrooms: "", 
    special: "",
  });



const setFormErrors = (name, value) => {
    // Yup
    // .reach(formSchema, name)
    // .validate(value)
    // .then(() => {
    //   setErrors({
    //     ...errors, [name]: ""
    //   });
    // })
    // .catch(err => {
    //   setErrors({
    //     ...errors, [name]: err.errors[0]
    //   });
    // });
}

const handleChange = event => {
    const { name, type, checked, value } = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    // setFormErrors(name, updatedInfo);
    setFormValues({...formValues, [name]: updatedInfo});
} 

// const [post, setPost] = useState([]);

const formSubmit = event => {
    event.preventDefault();
    navigate('/confirmation');
}

    return ( 
        <>
        <div className="form">
            <h3>Order Fresh Pizza - Ready in Minutes!</h3>
            <form onSubmit={formSubmit} id="pizza-form">
                <label>Name: <input onChange={handleChange} name="name" type="text" value={formValues.name} id="name-input"></input></label>
                <div>{errors.name}</div>
                <div className="sizes">
                    <h3>Choose Your Pizza Size:</h3>

                    <select onChange={handleChange} value={formValues.size} name="size" id="size-dropdown">
                    <option value="">--select a size--</option>
                        <option value="1">Individual</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="4">Extra Large</option>
                    </select>
    
                </div>
                <div className="toppings">
                <h3>Choose Your Toppings!</h3>
                    <label><input onChange={handleChange} type="checkbox" name="pepperoni" checked={formValues.pepperoni} />pepperoni</label>
                    <label><input onChange={handleChange} type="checkbox" name="sausage" checked={formValues.sausage} />sausage</label>
                    <label><input onChange={handleChange} type="checkbox" name="pineapple" checked={formValues.pineapple} />pineapple</label>
                    <label><input onChange={handleChange} type="checkbox" name="steak" checked={formValues.steak}/>steak</label>
                    <label><input onChange={handleChange} type="checkbox" name="bacon" checked={formValues.bacon} />bacon</label>
                    <label><input onChange={handleChange} type="checkbox" name="mushrooms" checked={formValues.mushrooms}/>mushrooms</label>
                </div>
                <div className="special">
                <h3>Any Special Requests?</h3>
                    <label>Special Instructions: <input onChange={handleChange} type="text" name="special" value={formValues.special} id="special-text" />
                    </label>
                </div>
                <button id="order-button" >Place Order!</button>
            </form>
        </div>
        </>

    )
}


export default Form;