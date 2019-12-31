import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             password:''
        }
    }
    handleInput = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log((this.state));
        alert('Success!')
        this.props.history.push("/login")
    }
    
    render() {
        return (
           <React.Fragment>
                        <form onSubmit={this.handleSubmit} className="col-5 offset-3 mt-5">
                            <h1 className="text-center">SIGNUP</h1>
                            <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control"  placeholder="Enter name"
                            name="name" value={this.state.name} onChange={this.handleInput} required/>
                    
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control" placeholder="Enter email"
                            name="email" value={this.state.email} onChange={this.handleInput} required/>
                    
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control"  placeholder="Password"
                            name="password" value={this.state.password} onChange={this.handleInput} required/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Create</button>
                        </form>
           </React.Fragment>
        );
    }
}

export default Signup;