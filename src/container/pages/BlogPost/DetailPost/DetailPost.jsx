import React, { Component } from 'react';
import axios from 'axios';

class DetailPost extends Component {
    state = {
        postDetail: {
            title: '',
            body: ''
        },
    }

    componentDidMount () {
        // console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    postDetail : {
                        title : res.data.title,
                        body: res.data.body
                    }
                })
            })
    }

    render() {
        return (
            <>
                <br /><br /><br />
                <div>
                    <div>
                        <img src="http://placeimg.com/200/150/tech" alt="gambar" />
                    </div>
                    <p>{this.state.postDetail.title}</p>
                    <p>{this.state.postDetail.body}</p>
                </div>
            </>
        )
    }
};

export default DetailPost;