import styled from "styled-components";

export const FormHeader = styled.h1`
  margin: 10px;
`;

export const FormButton = styled.button`
  background-color: #96A8D6;
  border-radius: 20px;
  border: 0px solid;
  padding: 10px;
  font-size: 20px;
  width: 250px;
  cursor: pointer;
`;

export const Form = styled.form`
  position: fixed;
  left: 32%;
  top: 100px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 450px;
  height: 300px;
  background-color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 22px;
`;

export const FormFieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 350px;
  margin: 10px;
`;

export const LabelField = styled.span`
  width: 300px;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
`;

export const InputForm = styled.input`
  width: 260px;
  height: 25px;
  background-color: white;
  border: 1px solid black;
  margin-left: 15px;
`;