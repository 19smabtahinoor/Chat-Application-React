import React from 'react'
import styled from 'styled-components'



function Messege({ messege, username }) {
    const isUser = username === messege.username

    return (
        <MessegeWrapper>
            <div className={`messege_guest ${isUser && 'messege_user'}`}>
                <h3 classname={isUser ? 'messege_guest' : 'messege_user'}>{messege.username} : {messege.messege}</h3>
            </div>
        </MessegeWrapper>
    ) 

}

    const MessegeWrapper = styled.div`
        .messege_guest{
            background:#ddd;
            color:black;
            border-radius: 10px;
            padding:20px;
            width:fit-content;
            font-weight:500;
            margin-top:10px;
        }
        .messege_user{
            background:#477DE4;
            border-radius: 10px;
            padding:20px;
            width:fit-content;
            font-weight:500;
            margin-left: auto;
            margin-top:10px;
            color:white;
            text-align:left !important;
            /* margin:10px; */
        }
    `


export default Messege
