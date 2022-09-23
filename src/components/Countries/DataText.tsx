import styled from "styled-components";

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    
`

interface IFontSize{
    fontSize?: string,
}
const BoldText = styled.p<IFontSize>`
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.themeId === 0? theme.darkThemeFontColor : theme.lightThemeFontColor};
    font-weight: 600;
    font-size: ${({ fontSize }) => fontSize || "14px"};
`

const InfoText = styled(BoldText)`
    font-weight: 500;
    padding-left: 3px;
`


function DataText(props:{
    title: string,
    info: string,
    fontSize?:string,
}){
    return(
        <DataContainer>
            <BoldText fontSize={props.fontSize || undefined}>{props.title}:</BoldText>
            <InfoText fontSize={props.fontSize || undefined}>{props.info}</InfoText>
        </DataContainer>
    )
}

export default DataText;