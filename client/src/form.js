import React from 'react';


class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            firstName : "",
            lastName : "",
            password : "",
            email : "",
            gender : "",
            errors: {},
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

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.validate()){
        alert(`${this.state.firstName} ${this.state.lastName} registered successfully`)
        console.log(this.state);
        this.setState({
            firstName:"",
            lastName:"",
            password:"",
            email:"",
            gender:"",
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
    }

    validate(){
        let first = this.state.firstName;
        let last = this.state.lastName;
        let password = this.state.password;
        let email = this.state.email;
        let gender = this.state.gender;
        let errors = {};
        let isValid = true;

        if(!first){
            isValid = false;
            errors["firstName"] = "Please enter your first name";
        }

        if(!last){
            isValid = false;
            errors["lastName"] = "Please enter your last name";
        }

        if(!password){
            isValid = false;
            errors["password"] = "Please enter your password";
        }

        if(!email){
            isValid = false;
            errors["email"] = "Please enter your email";
        }

        if (typeof email !== "undefined") {
          
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
        }

        if(!gender){
            isValid = false;
            errors["gender"] = "Please select your gender";
        }
        
        this.setState({
            errors:errors
        });

        return isValid;
    }

    

    render() {
        return(
            <div>

                <form onSubmit={this.handleSubmit} method="post" >
                    <h1>User Registration</h1>
                    <label>Firstname :</label> <input type="text" name ="firstName" value={this.state.firstName} onChange={this.firsthandler} placeholder="Enter your first name"/>{this.state.errors.firstName}<br />
                    <label>Lastname :</label> <input type="text" name = "lastName" value={this.state.LastName} onChange={this.lasthandler} placeholder= "Enter you last name"/>{this.state.errors.lastName}<br />
                    <label>Password :</label> <input type="password" name = "password" value={this.state.password} onChange={this.passwordhandler} placeholder="Enter password"/>{this.state.errors.password}<br />                          
                    <label>Email :</label> <input type="text" name = "email" value={this.state.email} onChange={this.emailhandler} placeholder = "Enter you email address"/>{this.state.errors.email}<br />
                    <label>Gender :</label> <select onChange={this.genderhandler} defaultValue='Select Gender'>{this.state.errors.gender}<br />
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />   
                </form>                        
            </div>
        )
    }
}


export default Form;
