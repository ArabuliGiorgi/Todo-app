import mobile_darkBG from '/images/bg-mobile-dark.jpg';
import mobile_lightBG from '/images/bg-mobile-light.jpg';
import desktop_darkBG from '/images/bg-desktop-dark.jpg';
import desktop_lightBG from '/images/bg-desktop-light.jpg';
import styled from 'styled-components';

const Main = styled.div<{argument: string}>`
  width: 100%;
  min-height: 100vh;
  padding: 48px 24px 72px;
  background-image: url(${(props) => (props.argument=="true" ? mobile_darkBG : mobile_lightBG)});
  background-repeat: no-repeat;
  background-size: 100% 200px;
  background-position: 50% 0;
  background-color: ${(props) => (props.argument=="true" ? '#171823' : '#FAFAFA')};
  display: flex;
  align-items: start;
  justify-content: center;

  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    h1{
        color: white;
        font-weight: 700;
        font-size: 27px;
        letter-spacing: 9px;
        line-height: 20px;
    }
    img{
        height: 20px;
    }
  }
  form{
    width: 100%;
    height: 48px;
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px ${(props) => props.argument=="true" ? '#00000080' : '#C2C3D680' };
    background-color: ${(props) => props.argument=="true" ? '#25273D' : '#FFFFFF' };
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 16px;
    gap: 12px;

    .circle{
        width: 20px;
        height: 20px;
        position: relative;
        border: 1px solid ${(props) => props.argument=="true" ? '#393A4B' : '#E3E4F1' };
        border-radius: 50%;
        box-sizing: border-box;
    }
    .circle:hover::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 50%;
        background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%);
    }
    .circle:hover::after{
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        background-color: ${(props) => props.argument=="true" ? '#25273D' : '#FFFFFF' };
        border-radius: 50%;
    }
    img{
        width: 20px;
    }
    input{
        width: 90%;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.17px;
        text-align: left;
        color: ${(props) => props.argument=="true" ? '#C8CBE7' : '#393A4B' };
        outline: none;
        background-color: transparent;
        caret-color: #3A7CFD;
    }
    input::placeholder{
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.17px;
        text-align: left;
        color: ${(props) => props.argument=="true" ? '#9495A5' : '#767992' };
    }
  }
  .footer{
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.19px;
    text-align: center;
    color: ${(props) => props.argument=="true" ? '#5B5E7E' : '#9495A5' };
    margin-top: 40px;
  }

  @media only screen and (min-width: 500px){
    background-image: url(${(props) => (props.argument=="true" ? desktop_darkBG : desktop_lightBG)});
    background-size: 1440px 300px;
  }
`

export {Main}