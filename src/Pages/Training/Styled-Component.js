import styled from "styled-components";

export const Label = styled.label`
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  padding-left: 20px;
`;

export const ExerciseSelect = styled.select`
  width: 200px;
  font-size: 20px;
  height: 100%;
  border-radius: 5px;
  padding: 5px;
`;

export const TrainingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExerciseDiv = styled.div`
  margin: 10px;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 300px;
  height: 25px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
`;

export const InputTextArea = styled.textarea`
  width: 300px;
  height: 100px;
`;

export const Button = styled.button`
  background-color: #96A8D6;
  border-radius: 20px;
  border: 0px solid;
  padding: 10px;
  font-size: 20px;
  width: 250px;
  cursor: pointer;
`;

export const ExerciseDevider = styled.div`
  width: 100%;
  border: 2px solid gray; 
  margin-top: 10px;
  margin-bottom: 10px;
`;
