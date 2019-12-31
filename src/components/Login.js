import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    
 handleinput = (e) => {
     this.setState({[e.target.name]:e.target.value})
 }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.history.push('/home')
    }
    render() {
        return (
            <React.Fragment>
            <div className="container offset-4">
                <div className="row">
                    <div className="col-4">
                        <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Email </label>
                                    <input type="text" className="form-control" required placeholder="Email" name="email" onChange={this.handleinput}/>                   
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" required placeholder="Password" name="password"  onChange={this.handleinput}/>
                                </div>            
                                <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Login;