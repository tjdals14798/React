import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoCreate from "./com_Todo/TodoCreate";
import TodoHead from "./com_Todo/TodoHead";
import TodoList from "./com_Todo/TodoList";
import TodoTemplate from "./com_Todo/TodoTemplate";
import { TodoProvider } from "./com_Todo/TodoContext";

const GlobalStyle = createGlobalStyle`
    body{
        background: #e9ecef;
    }
`;

function AppToDoList(){
    return(
        <TodoProvider>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    )
}

export default AppToDoList;