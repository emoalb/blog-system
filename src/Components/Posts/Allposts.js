import React, {Component} from 'react';
import Post from './Post';
import Auth from '../../Crud/auth'
import Columns from 'react-columns';
import Navbar from "../Headers/Navbar";

export default class AllPost extends Component {
constructor(props) {
    super(props);
    let authToken =Auth.AuthObj.GUEST_TOKEN;
    if(sessionStorage.getItem('authToken')) {
        authToken = sessionStorage.getItem('authToken');
    }else (sessionStorage.setItem('authToken',authToken));

    this.state = {
        posts :[],
        authToken:authToken,
    };
}
    componentDidMount(){
        const urlPosts = Auth.AuthObj.BASE_URL + 'appdata/' + Auth.AuthObj.APP_KEY + '/posts';
        const headers =    {'Authorization': 'Kinvey ' + this.state.authToken};
      fetch( urlPosts,
            {   method:'GET',
                headers: headers,
            })
            .then(data=>data.json()).then(res=>{
            //  console.log(res);
            this.setState({posts:res})

        }).catch(err=>console.log(err));
    }

    render() {
        const style = {
            bottom: 30,
            margin: "20px"
        };
       let  queries = [{
           columns: 1,
           query: 'min-width: 500px',
           gap :'100px'
       },
           {
            columns: 2,
            query: 'min-width: 500px',
           gap :'100px'
        }, {
            columns: 3,
            query: 'min-width: 1000px',
           gap :'100px'
        }
       ];
        let Posts = this.state.posts;
        if(Posts===undefined)Posts=[];
        return (
                <div style={style} className="container">
                    <Navbar/>
                    <h4>Home</h4>
                <Columns  queries={queries}>
                {
                    Posts.map((post,index)=> {
                    return (
                    <Post isFavView = {false} authToken={this.state.authToken} id={post._id} key ={index} title={post.title} imgUrl={post.imgUrl}
                    context={post.context}/>
                    )
                })
                }
                </Columns>
            </div>
            );
    }
}