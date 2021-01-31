const React = require("react");
const {Label, Input, FieldDiv, InputTextArea, ExerciseDiv} = require('./Styled-Component');
const {useTranslation} = require("react-i18next");

function Exercise() {
    const {t} = useTranslation();

    return(
        <ExerciseDiv>
            <FieldDiv>
                <Label> {t(`createTraining.exerciseName`)}</Label>
                <Input name='name' required/>
            </FieldDiv>

            <FieldDiv>
                <Label>{t(`createTraining.repeats`)}</Label>
                <Input name='repeats' required/>
            </FieldDiv>

            <FieldDiv>
                <Label>{t(`createTraining.howToDo`)}</Label>
                <InputTextArea name='howToDo' required/>
            </FieldDiv>

            <FieldDiv>
                <Label> {t(`createTraining.tips`)} </Label>
                <InputTextArea name='tips' />
            </FieldDiv>
        </ExerciseDiv>
    )
}

export default Exercise;