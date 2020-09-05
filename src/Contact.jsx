import React,{useState}from 'react';


const Contact = () => {

    const [data , setDate] =  useState({
        fullname: "",
        phone : "",
        email : "",
        msg : ""
    });
    const inputEvent = (event) =>{
      const {name , value } = event.target;

      setDate((preVal)=>{
         return{
             ...preVal,
             [name]  : value,
         }
     })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. and my phone number is ${data.phone}.
        and my email is ${data.email} and I wanna say ${data.msg}`);
    } 
    return(
        <>
         <div className = "my-5">
             <h1 className = "text-center">Contact US</h1>
         </div>    
         <div className = "container contact_div">
             <div className ="row">
                 <div className = "col-md-6 col-10 mx-auto">
                <form onSubmit = {formSubmit}>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1 ">
                        FullName 
                     </label>
                     <input
                        type="text" 
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name = "fullname"
                        value = {data.fullname}
                        placeholder = "Enter your Name.."
                        onChange = {inputEvent} 
                        />
    
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1">
                        Phone
                     </label>
                     <input 
                        type="number"
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name = "phone"
                        value = {data.phone}
                        placeholder = "Enter Your Phone Number"
                        onChange = {inputEvent} 
                        />
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1">
                        Email
                     </label>
                     <input 
                        type="text"
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name = "email"
                        value = {data.email} 
                        placeholder= "abc@gmail.com"
                        onChange = {inputEvent}  
                         />
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1">
                        Message
                     </label>
                     <textarea
                        type="number"
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name = "msg"
                        value = {data.msg}
                        placeholder= "Type Message"
                        onChange = {inputEvent} 
                        >

                    </textarea>        
                  </div>
                <div className = "col-12">
                 <button 
                 type="submit" 
                 class="btn btn-outline-primary">
                     Submit Form
                </button>
                </div>
         </form>    
        </div>
    </div>
</div>

    </>
    )
}
export default Contact;