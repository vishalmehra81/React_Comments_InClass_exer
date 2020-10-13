import React from 'react';

export default function Comment(props){
    return (
        <div>
            <h4>{props.children}</h4>
            <p>{props.author}</p>
        </div>
    )
}
