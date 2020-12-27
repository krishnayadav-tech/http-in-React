import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    constructor(props){
        super(props);
        this.state= {
            data : null
        };
    }
    componentDidUpdate(){
        if(this.props.id !== null && (this.state.data === null || this.state.data.id !== this.props.id)){
            axios.get('/posts/'+this.props.id).then(res=>{
                
                this.setState({
                    data : res.data
                })
            }).catch(err=>{
                console.log(err);
            })
        }
    }
    render () {
        let post;
        if(this.props.id==null){
            post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
            return post;
        }

        if(this.state.data==null || this.state.data.id !== this.props.id){
            post = <p style={{textAlign:"center"}}>Loading</p>;
        }
        else
            post = (
                <div className="FullPost">
                    <h1>{this.state.data.title}</h1>
                    <p>{this.state.data.body}</p>
                    <div className="Edit">
                        <button onClick={()=>this.props.delete(this.state.data.id)} className="Delete">Delete</button>
                    </div>
                </div>

            );
        return post;
    }
}

export default FullPost;