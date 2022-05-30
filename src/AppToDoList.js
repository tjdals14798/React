import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoCreate from "./com_Todo/TodoCreate";
import TodoHead from "./com_Todo/TodoHead";
import TodoList from "./com_Todo/TodoList";
import TodoTemplate from "./com_Todo/TodoTemplate";

const GlobalStyle = createGlobalStyle`
    body{
        background: #e9ecef;
    }
`;

function AppToDoList(){
    return(
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </>
    )
}

export default AppToDoList;