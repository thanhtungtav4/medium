import React, { Component } from "react";
export default class Spinner extends Component {  
  render() {
  return (
        <div className="spinner">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
        <style jsx>{`
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          .spinner {
            --size: 62px;
          
            width: var(--size);
            height: var(--size);
          
            border-radius: 50%;
            perspective: 800px;
          }
          
          .inner {
            position: absolute;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 3px solid transparent;
          }
          
          .inner.one {
            left: 0;
            top: 0;
            animation: rotate-one 1s linear infinite;
            border-bottom: 3px solid #2cfffe;
          }
          
          .inner.two {
            right: 0;
            top: 0;
            animation: rotate-two 1s linear infinite;
            border-right: 3px solid #fcc10f;
          }
          
          .inner.three {
            right: 0;
            bottom: 0;
            animation: rotate-three 1s linear infinite;
            border-top: 3px solid #ec1b60;
          }
          
          @keyframes rotate-one {
            0% {
              transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
            }
          }
          
          @keyframes rotate-two {
            0% {
              transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
            }
          }
          
          @keyframes rotate-three {
            0% {
              transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
            }
          }          
        `}</style>
  </div>
    );
  }
}