import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import {addComment} from './../Redux/Action'
import { connect } from 'react-redux';


class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            email:'',
            phone:'',
            sale:'',
            id: new Date()


            
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        let temp ={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            sale:this.state.sale,
            id:this.state.id
        }
       
        
        this.props.addComment(temp)


          
    }
    
    render() {
     
        return (
           <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name"  value={this.state.name} onChange={this.handleInput}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control"  name="email"  value={this.state.email} onChange={this.handleInput}/>
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control"  name="phone" value={this.state.phone} onChange={this.handleInput}/>
                                </div>

                                <div className="form-group">
                                    <label>Sales of Income</label>
                                    <input type="text" className="form-control"  name="sale" value={this.state.sale} onChange={this.handleInput}/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary ">Submit</button>
                                <Link to="/table" type="submit" className="btn btn-success ml-5">Show Table</Link>
                        </form>
                        </div>
                    </div>
                </div>
                
           </React.Fragment>
        );
    }
}

const mapDispatchToState = (dispatch) => {
    return {
      addComment: (commentData) => dispatch(addComment(commentData))
    }
}

export default connect (null, mapDispatchToState) (Add);