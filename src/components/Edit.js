import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            email:'',
            phone:'',
            sale:'',
            id:''
        }
    }

    componentDidMount() {
        this.props.tableData.comments.map(each => {
            if(each.id == this.props.match.params.id){
                this.setState({name: each.name, email:each.email, phone:each.phone, sale:each.sale, id:each.id })
            }
        })
    }
    
    handleInput = (e) => {
           this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.tableData.comments.map(each => {
            if(each.id == this.props.match.params.id){
                 each.name =  this.state.name
            }
        })

        this.props.history.push('/table')
    }


    render() {
       // console.log(this.props.tableData.comments);
      //  console.log(this.props.match.params.id)  //
        
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
                            
                            <button type="submit" className="btn btn-primary ">SAVE</button>
                            <Link to="/table" type="submit" className="btn btn-success ml-5">Cancel</Link>
                    </form>
                    </div>
                </div>
            </div>
            
       </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        tableData : state.comments
    }
}

export default connect(mapStateToProps) (Edit);