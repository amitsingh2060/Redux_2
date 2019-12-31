import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            page:1,
            per_page:4
        }
    }


    // handleSort = ()=>{
    //     let x =  this.props.allComments.comments.sort((a,b)=>(a.sales- b.sales))
    //     console.log(x);
    //   this.setState({ 

    //   })
    // }
    
   
    handleClick = (pageNo) => {
        this.setState({page:pageNo})
      }

    rowChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }
 
    render() {
    // **************************PAGINATION*********************************     
         var pageNo = this.state.page
         var per_page_no = this.state.per_page


         var toatalData = this.props.allComments.comments
        //    console.log(toatalData)
         var total_pages = Math.ceil(toatalData.length/per_page_no)

        let start = (pageNo-1)*per_page_no  //10
        let end = start + per_page_no // 10
        let slicedData = toatalData.slice(start,end)
        //   console.log(slicedData)

        var pageNumbers = []
        for(var i=1; i<=total_pages; i++){
              pageNumbers.push(i)
        }
        // console.log(pageNumbers)

        var button = pageNumbers.map(btn => {
            return(
            <button onClick={() =>this.handleClick(btn)}>{btn}</button>
            )
        })


      
// *************************Pagination above******************************
      console.log(this.props.allComments.comments)

      let showData = slicedData.map(each => {
            return (
                <tbody>
                    <tr>
                        <th scope="row">{each.name}</th>
                        <td>{each.email}</td>
                        <td>{each.phone}</td>
                        <td>{each.sale}</td>
                        <td><Link to={`/edit/${each.id}`}>Edit</Link></td>    
                        <td><Link to="/delete" onClick={()=>this.props.dispatch({type:'DELETE_DATA',id:each.id})}> Delete</Link></td>
                    </tr>
                </tbody>
            )
        })

        return (
            <div className="container mt-5">
                       {button}<Link to="/add" className="btn btn-primary">Back</Link>
                <select className="form-control offset-5 mb-5 btn btn-primary"style={{width:"120px"}} onChange={this.rowChange} name="per_page">
                    <option value="" selected>Per Page</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            {/* <button value="sort" onClick={this.handleSort}>Sort</button> */}  
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Sales-2019-2020</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {showData}
                </table>
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        allComments :state.comments
    }
}


export default connect(mapStateToProps) (Table);