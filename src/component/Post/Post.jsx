import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="gambar" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="dess">{props.data.body}</p>
                <button onClick={() => props.remove(props.data.id)}>
                    Remove
                </button>
                <button onClick={() => props.update(props.data)}>
                    UPDATE
                </button>
                <button onClick={() => props.goDetail(props.data.id)}>
                    DETAIL
                </button>
            </div>
        </div>
    )
};

export default Post;