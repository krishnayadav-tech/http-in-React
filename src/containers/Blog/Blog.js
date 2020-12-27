import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';


class Blog extends Component {
    state = {
        posts : [],
        selectedpost : null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            //console.log(res.data);
            
            
            
            this.setState({
                posts : res.data.slice(0,3)
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    onselecthandler = (id)=>{
        
        this.setState({
            selectedpost : id
        });
    }

    ondeleteblog = (id)=>{
        this.setState({
            selectedpost : null
        });
    }

    render () {

        let postmap = this.state.posts.map(x=>{
            return <Post clicked={()=>this.onselecthandler(x.id)} key={x.id} author="krishna" title={x.title}></Post>
        })
        return (
            <div>
                <section className="Posts">
                    {postmap}
                </section>
                <section>
                    <FullPost delete={this.ondeleteblog} id={this.state.selectedpost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;