import styled from 'styled-components';

export const Container = styled.div`
   
   height: 100%;
   display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas: 
    "main"
    "footer";
    flex-direction: column;
   @media screen and (max-width: 600px){

}

`

export const Content = styled.div`

    width:100%;
    max-width: 400px;
    margin: 36vh auto;
    grid-area: main;
    justify-self: center;
    //position: relative;
   // top: 45vh;
    background: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px;
    @media screen and (max-width: 600px){
       // top: 35vh;
       margin: 31vh auto;
        width:97%;
}

`

export const Footer = styled.div`

   
    grid-area: footer;
    justify-self: end;
    width:100%;
    margin-top: 11vh;
    background-color: #3c096c;
    padding: 20px;
    h1{
        color: white;
        font-size: 20px;
        text-align: center;
    }
    @media screen and (max-width: 500px){
        h1{
        color: white;
        font-size: 18px;
        text-align: center;
    }
    }

`