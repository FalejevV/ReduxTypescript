import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import Countries from './components/Countries/Countries';
import {GlobalStyle} from './components/Global.styled';
// import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
// import TodoList from './components/TodoList/TodoList';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
        <Routes>
          <Route path="/countries/*" element={<Countries />} />
        </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
