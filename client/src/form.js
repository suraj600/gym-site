import React from 'react';


class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            firstName : "",
            lastName : "",
            DOB : "",
            gender : "",
            number : "",
            //errors: {},
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    DOBhandler = (event) => {
        this.setState({
            DOB: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    numberhandler = (event) => {
        this.setState({
            number: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //if(this.validate()){
        alert(`${this.state.firstName} ${this.state.lastName} registered successfully`)
        console.log(this.state);
        this.setState({
            firstName:"",
            lastName:"",
            DOB:"",
            gender:"",
            number:"",
        })
        fetch('http://localhost:5000/api' , {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
          })
          .then((result) => result.json())
          .then((info) => { console.log(info); })
        
    }

    // validate(){
    //     let first = this.state.firstName;
    //     let last = this.state.lastName;
    //     let password = this.state.password;
    //     let email = this.state.email;
    //     let gender = this.state.gender;
    //     let errors = {};
    //     let isValid = true;

    //     if(!first){
    //         isValid = false;
    //         errors["firstName"] = "Please enter your first name";
    //     }

    //     if(!last){
    //         isValid = false;
    //         errors["lastName"] = "Please enter your last name";
    //     }

    //     if(!password){
    //         isValid = false;
    //         errors["password"] = "Please enter your password";
    //     }

    //     if(!email){
    //         isValid = false;
    //         errors["email"] = "Please enter your email";
    //     }

    //     if (typeof email !== "undefined") {
          
    //         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //         if (!pattern.test(email)) {
    //           isValid = false;
    //           errors["email"] = "Please enter valid email address.";
    //         }
    //     }

    //     if(!gender){
    //         isValid = false;
    //         errors["gender"] = "Please select your gender";
    //     }
        
    //     this.setState({
    //         errors:errors
    //     });

    //     return isValid;
    // }

    

    render() {
        return(
            <div>

                <form onSubmit={this.handleSubmit} method="post" >
                    <h1>User Registration</h1>
                    <label>Firstname :</label> <input type="text" name ="firstName" value={this.state.firstName} onChange={this.firsthandler} placeholder="Enter your first name"/><br />
                    <label>Lastname :</label> <input type="text" name = "lastName" value={this.state.LastName} onChange={this.lasthandler} placeholder= "Enter you last name"/><br />
                    <label>DOB :</label> <input type="date" name = "DOB" value={this.state.DOB} onChange={this.DOBhandler} placeholder="Enter DOB"/><br />                      
                    <label>Gender :</label> <select onChange={this.genderhandler} defaultValue='Select Gender'><br />
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>Phone number :</label> <input type="number" name = "number" value={this.state.number} onChange={this.numberhandler} placeholder = "Enter your phone number"/>
                    <input type="submit" value="Submit" />   
                </form>                        
            </div>
        )
    }
}


export default Form;
