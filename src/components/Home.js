import React, { Component } from 'react';
import { Link} from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>
                
               <div className="container mt-5 ml-4">
               <Link to="/add" type="button" class="btn btn-primary mr-4">ADD NEW STAFF</Link>
                <Link to="/table" class="btn btn-success">VIEW ALL STAFF</Link>
               </div>
            
            </React.Fragment>
        );
    }
}

export default Home;