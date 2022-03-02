import styled from 'styled-components';

export const IdOuter = styled.div`

    position:relative; width:100%; height:100%;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    align-items: flex-end;
    justify-content: center;
    flex-flow: row nowrap;
`

export const Container = styled.div`
   
   display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    align-items: flex-end;
    align-self: flex-end;
    justify-content: center;
    position:absolute;  left:0; right:0;
    flex-direction: column;
   @media screen and (max-width: 600px){
   // height: 89vh;
}

`

export const Content = styled.div`

    width:100%;
    position:relative;
    max-width: 400px;
    margin: 0 auto;
    align-self: center;
    align-items: center;
    margin-bottom: 40vh;
    justify-content: center;
    //position: relative;
   // top: 45vh;
    background: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px;
    @media screen and (max-width: 600px){
       // top: 35vh;
      // margin: 31vh auto;
        width:97%;
}

`

export const Footer = styled.div`

   
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    position:relative; 
    align-self: flex-end;
    align-items: end;
    justify-content: center;
    width:100%;
   // margin-top: 11vh;
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