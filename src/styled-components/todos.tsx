import styled from 'styled-components';

const TodosDiv = styled.div<{argument: string}>`
    background-color: ${(props) => props.argument=="true" ? '#25273D' : '#FFFFFF' };
    width: 100%;
    padding: 0 0 20px;
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px ${(props) => props.argument === "true" ? '#000000' : '#C2C3D680'};

    .todos-info{
        width: 100%;
        padding: 16px 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            font-size: 12px;
            font-weight: 400;
            line-height: 12px;
            letter-spacing: -0.17px;
            color: ${(props) => props.argument=="true" ? '#5B5E7E' : '#9495A5' };
        }
    }
`
const ListView = styled.div<{view: string, argument: string}>`
    width: 100%;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    box-shadow: 0px 35px 50px -15px ${(props) => props.argument === "true" ? '#000000' : '#C2C3D680'};
    background-color: ${(props) => props.argument === "true" ? '#25273D' : '#FFFFFF'};
    border-radius: 5px;
    margin-top: 16px;

    h1{
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: -0.19px;
    }
    .all{
        color: ${(props) => props.view === "all" ? '#3A7CFD' : props.argument === "true" ? '#5B5E7E' : '#9495A5'};
    }
    .active{
        color: ${(props) => props.view === "active" ? '#3A7CFD' : props.argument === "true" ? '#5B5E7E' : '#9495A5'};
    }
    .completed{
        color: ${(props) => props.view === "completed" ? '#3A7CFD' : props.argument === "true" ? '#5B5E7E' : '#9495A5'};
    }
`

export {TodosDiv, ListView}