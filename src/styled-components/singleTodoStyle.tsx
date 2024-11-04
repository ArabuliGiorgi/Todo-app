import styled from "styled-components"

const Single = styled.div<{argument: string, complete: string}>`
    width: 100%;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.17px;
        text-align: left;
        color: ${(props) => props.complete=="true" ? (props.argument === "true" ? '#4D5067' : '#D1D2DA') : (props.argument === "true" ? '#C8CBE7' : '#4D5067')};
        text-decoration: ${(props) => props.complete=="true" ? 'line-through' : 'none'};
    }
    h1:hover{
        cursor: pointer;
    }
    .todo{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 12px;
    }
    .circle{
        width: 20px;
        height: 20px;
        position: relative;
        border: 1px solid ${(props) => props.argument=="true" ? '#393A4B' : '#E3E4F1' };
        border-radius: 50%;
        box-sizing: border-box;
    }
    .circle:hover{
        cursor: pointer;
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.argument=="true" ? '#25273D' : '#FFFFFF' };
        border-radius: 50%;
    }
    img{
        width: 20px;
    }
    .cross{
        width: 12px;
    }
    .cross:hover{
        cursor: pointer;
    }

    @media only screen and (min-width: 720px){
        padding: 20px 24px;

        h1{
            font-size: 18px;
            line-height: 18px;
            letter-spacing: -0.25px;
        }
        .todo{
            gap: 24px;
        }
        .circle{
            width: 24px;
            height: 24px;
        }
        .circle:hover::after{
            content: '';
            width: 22px;
            height: 22px;
        }
        img{
            width: 24px;
        }
        .cross{
            width: 18px;
            visibility: hidden;
        }
        &:hover .cross{
            visibility: visible;
        }
    }
`

export {Single};