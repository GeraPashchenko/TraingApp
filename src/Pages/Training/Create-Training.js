const React = require('react');
const {useState} = require('react');
const {ExerciseSelect, FieldDiv, Label, TrainingDiv, Button, ExerciseDevider} = require('./Styled-Component');
const {useTranslation} = require("react-i18next");
const Exercise = require("./Exercise");

function CreateTraining() {
    const {t} = useTranslation();
    const trainingTypes = t(`trainingTypes`, {joinArrays: ','}).split(',');
    const [exercises, setExercise] = useState([1])

    return (
        <TrainingDiv>
            <FieldDiv>
                <Label>{t('createTraining.chooseTrainingType')}</Label>
                <ExerciseSelect name='ExerciseType'>
                    {trainingTypes.map(type => {
                        return <option>{type}</option>
                    })}
                </ExerciseSelect>
            </FieldDiv>

            <ExerciseDevider/>
            {exercises.map(ex => {
                return (
                    <>
                        <h1>{`${t('createTraining.Exercise')} ${ex}`}</h1>
                        <Exercise key={ex}/>
                        <ExerciseDevider/>
                    </>
                )
            })}

            <Button onClick={() => AddExercise(exercises, setExercise)}>{t('createTraining.addExercise')}</Button>
        </TrainingDiv>

    )
}

function AddExercise(exercises, setExercise) {
    setExercise([...exercises, exercises.length + 1]);
}

export default CreateTraining;