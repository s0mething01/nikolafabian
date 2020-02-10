import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useLax } from 'use-lax';

function App() {
  useLax();
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <GlobalStyle/>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  .mainTitle {
        text-align: center;
        font-size: 3rem;
        @media only screen and (max-width: 1024px) {
            font-size: 2.5rem;
        }
        @media only screen and (max-width: 568px) {
            font-size: 1.8rem;
        }
        @media only screen and (max-width: 420px) {
            font-size: 1.5rem;
        }
        @media only screen and (max-width: 360px) {
            font-size: 1.2rem;
        }
        span {
            display: block;
        }
  }
  .mainParagraph {
        font-size: 1rem;
        max-width: 650px;
        padding: 3rem 0;
        line-height: 2rem;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 0 auto;
        text-align: center;
        @media only screen and (max-width: 1280px) {
            font-size: .9rem;
            line-height: 1.8rem;
            max-width: 500px;
        }
        @media only screen and (max-width: 1100px) {
            font-size: .8rem;
            line-height: 1.4rem;
            max-width: 450px;
        }
        @media only screen and (max-width: 1024px) {
            font-size: 1rem;
            line-height: 1.8rem;
            max-width: 800px;
        }
        @media only screen and (max-width: 420px) {
            font-size: .9rem;
            line-height: 1.5rem;
        }
        @media only screen and (max-width: 360px) {
            font-size: .8rem;
            line-height: 1.4rem;
        }
  }
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  body {
    font-family: 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFA69E;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    font-family: 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`;