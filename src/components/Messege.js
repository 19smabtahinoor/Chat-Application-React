import React,{forwardRef} from 'react'
import styled from 'styled-components'



const Messege = forwardRef(({ key ,messege, username },ref) => {
    const isUser = username === messege.username

    return (
        <MessegeWrapper>
            <div ref={ref} className={`messege_guest ${isUser && 'messege_user'}`}>
                <h3 className={isUser ? 'messege_user' : 'messege_guest'}>{messege.username} : {messege.messege}</h3>
            </div>
        </MessegeWrapper>
    ) 

})

    const MessegeWrapper = styled.div`
        .messege_guest{
            background:#ddd;
            color:black;
            border-radius: 10px;
            padding:8px 10px;
            width:fit-content;
            font-weight:500;
            margin-top:10px;
        }
        .messege_user{
            background:#477DE4;
            border-radius: 10px;
            padding:8px 10px;
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
