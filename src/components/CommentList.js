import React from 'react';
import Comment from './Comment';

export default function CommentList(props){
    const commentNodes = props.comments.map(comment=> {
        return <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
    });

    return (
        <div>
            {commentNodes}
        </div>
    )
}
