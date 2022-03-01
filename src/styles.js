import styled from 'styled-components';

export const Container = styled.div`

   height: 100%;
   -webkit-display: flex;
   display: flex;
    flex-direction: column;
   justify-content:space-between;
   align-items:end;

`

export const Content = styled.div`

    width:100%;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    top: 45vh;
    background: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px;
    @media screen and (max-width: 500px){
        width:97%;
}

`

export const Footer = styled.div`

    display: flex;
    -webkit-display: flex;
    align-items: end;
    justify-content:center;
    width:100%;
    margin-top: 18%;
    background-color: #3c096c;
    padding: 20px;
    h1{
        color: white;
        font-size: 20px;
        text-align: center;
    }
    @media screen and (max-width: 500px){
        margin-top: 60%;
        h1{
        color: white;
        font-size: 18px;
        text-align: center;
    }
    }

`