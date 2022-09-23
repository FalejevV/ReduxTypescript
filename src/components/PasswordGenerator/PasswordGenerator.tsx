import React from "react";
import InputOption from "./InputOption";
import InputSlider from "./InputSlider.styled";
import { AlertText, CopySVG, GenerateButton, GenerateButtonSVG, Page, PasswordGeneratorContainer, PasswordGeneratorForm, PasswordResultContainer, PasswordText, Title } from "./PasswordGenerator.styled";
import checkSvg from "../PasswordGenerator/img/check-line.svg";
import StrengthIndicator from "./StrengthIndicator";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { setResult, setStrength } from "../../features/passwordGenerator.slice";

const lowerLetters : string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters : string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers : string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols : string[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
const charArray : string[][] = [lowerLetters,uppercaseLetters,numbers,symbols];

function PasswordGenerator(){

    function formSubmit(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    const sliderValue = useAppSelector((state : RootState) => state.passwordGenerator.length);
    const isLowercase = useAppSelector((state : RootState) => state.passwordGenerator.lowercase);
    const isUppercase = useAppSelector((state : RootState) => state.passwordGenerator.uppercase);
    const isNumber = useAppSelector((state : RootState) => state.passwordGenerator.numbers);
    const isSymbol = useAppSelector((state : RootState) => state.passwordGenerator.symbols);
    let checkOptions = [isLowercase,isUppercase,isNumber,isSymbol];
    
    const dispatch = useAppDispatch();


    function getCheckCounter(): number{
        let result = 0;
        checkOptions.forEach(item => {
            if(item){
                result += 1;
            }
        })
        return result
    }

    function isRequirementMet() : boolean{
        if(!isLowercase && !isUppercase && !isNumber && !isSymbol){
            return false;
        }
        return true;
    }

    React.useEffect(() => {
        const optionsSelected = getCheckCounter();
        dispatch(setStrength((sliderValue * optionsSelected) * 4 / (18*4)));
    })

    const length: number = useAppSelector((state : RootState) => state.passwordGenerator.length);
    const result = useAppSelector((state : RootState) => state.passwordGenerator.result);

    function generatePassword(){
        if(isRequirementMet()){
            let generatedPassword = "";
            let generateCharArray: string[][] = []
            checkOptions.forEach((option: boolean, index: number) => {
                if(option){
                    generateCharArray.push(charArray[index]);
                }
            });
            for(let i = 0; i<length ; i++){
                let randomSymbol = Math.floor(Math.random() * generateCharArray.length);
                generatedPassword += generateCharArray[randomSymbol][Math.floor(Math.random() * generateCharArray[randomSymbol].length)];
            }
            dispatch(setResult(generatedPassword));
        }
    }

    const [copySuccess,setCopySuccess] = React.useState(false);

    return(
        <Page>
            <PasswordGeneratorContainer>
                <Title>Password Generator</Title>
                <PasswordResultContainer>
                    <PasswordText>
                        {result}
                    </PasswordText>
                    <CopySVG success={copySuccess} onClick={() =>  {setCopySuccess(true); setTimeout(() => {setCopySuccess(false)},500); navigator.clipboard.writeText(result)}} viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"/>
                    </CopySVG>
                </PasswordResultContainer>

                <PasswordGeneratorForm onSubmit={e => formSubmit(e)}>
                    <InputSlider name="charlength" title="Character Length" minValue={5} maxValue={20} />
                    <InputOption title={"Include Uppercase Letters"} inputName="uppercase" image={checkSvg}/>
                    <InputOption title={"Include Lowercase Letters"} inputName="lowercase" image={checkSvg}/>
                    <InputOption title={"Include Numbers"} inputName="numbers" image={checkSvg}/>
                    <InputOption title={"Include Symbols"} inputName="symbols" image={checkSvg}/>
                    <AlertText visible={!isRequirementMet()}>You need to select at least 1 checkbox</AlertText>
                    <StrengthIndicator />
                    <GenerateButton onClick={generatePassword} disabled={!isRequirementMet()} isDisabled={!isRequirementMet()}>
                        Generate 
                        <GenerateButtonSVG viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                        </GenerateButtonSVG>
                    </GenerateButton>
                </PasswordGeneratorForm>
            </PasswordGeneratorContainer>
        </Page>
    )
}

export default PasswordGenerator;