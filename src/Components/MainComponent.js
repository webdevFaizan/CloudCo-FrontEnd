import React from 'react';

export default function MainComponent(props){

    let {title, content, author} = props;

    return(
        <>
            <h1>{title}</h1>
            {
            content
            }
            <br />
            {
            author
            }
        </>
    )
}