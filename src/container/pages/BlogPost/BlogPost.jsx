import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import API from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            userId: 1,
            title: '',
            body: ''
        },
        comments: [],
        isUpdate: false
    }

    getPostAPI= () => {
        API.getNewsBlog().then(res => {
            this.setState({
                post: res
            })
        });

        API.getComments().then(res => {
            this.setState({
                comments: res
            })
        })

        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        //     // .then(response => response.json())
        //     .then(res => {
        //         // console.log(res.data)
        //         this.setState({
        //             post: res.data
        //         })
        //     })
    }

    postDataToAPI = () => {
        API.postNewBlog(this.state.formBlogPost).then(res => {
            this.getPostAPI()
            this.setState({
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: ''
                }
            }) 
        })
        // axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        //     // .then(response => response.json())
        //     .then(res => {
        //         // console.log(res)
        //         this.getPostAPI()
        //         this.setState({
        //             formBlogPost: {
        //                 id: 1,
        //                 userId: 1,
        //                 title: '',
        //                 body: ''
        //             }
        //         })
        //     })
    }

    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(res => {
            this.getPostAPI()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: ''
                }
            })
        })
        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        //     .then(res => {
        //         // console.log(res)
        //         this.getPostAPI()
        //         this.setState({
        //             isUpdate: false,
        //             formBlogPost: {
        //                 id: 1,
        //                 userId: 1,
        //                 title: '',
        //                 body: ''
        //             }
        //         })
        //     })
    }

    handleRemove = (data) => {
        // console.log(data)
        API.deleteNewsBlog(data).then(res=>{
            this.getPostAPI();
        })
        // axios.delete(`http://localhost:3004/posts/${data}`)
        //     .then(res => {
        //         // console.log(res)
        //         this.getPostAPI()
        //     })
    }

    handleUpdate = (data) => {
        // console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        
    }
    
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         post: []
    //     }

    //     console.log('constructor')
    // }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost)
        if(this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    handleFormChange = (event) => {
        // console.log('Form Change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost}
        let timestamp = new Date().getTime()        
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp
        }
        formBlogPostNew[event.target.name] = event.target.value
        // let title = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
        // console.log('Value Obj formBlogPost', this.state.formBlogPost)
        
    }

    componentDidMount () {
        // console.log('componentDidMount')
        this.getPostAPI()
    }

    render () {
        // console.log('render')
        return (
            <>
                <p className="section-title">Blog Post</p>
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Judul</label>
                    <br />  
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="add title" 
                        value={this.state.formBlogPost.title}
                        onChange={this.handleFormChange} 
                    />
                    <br />
                    <label htmlFor="body">Isi</label>
                    <br />
                    <textarea 
                        name="body" 
                        id="body" 
                        cols="30" 
                        rows="10" 
                        placeholder="add content"
                        value={this.state.formBlogPost.body}
                        onChange={this.handleFormChange}
                    >

                    </textarea>
                    <br />
                    <button onClick={this.handleSubmit}>SIMPAN</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return (
                            <>
                                <p>{comment.name} - {comment.email}</p>
                            </>
                        )
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return (
                            <>
                            <Post 
                                key={post.id} 
                                data={post}
                                remove={this.handleRemove}
                                update={this.handleUpdate}
                                goDetail={this.handleDetail}
                            />
                            <hr />
                            </>
                        )
                    })
                }  
                <hr />  
            </>
        )
    }
}

export default BlogPost;
