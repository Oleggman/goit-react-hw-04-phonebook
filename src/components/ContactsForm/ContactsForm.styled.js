import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const FormTitle = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  max-width: 360px;
  width: 100%;
  height: 400px;
  flex-direction: column;
  padding: 40px;
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
`;

export const InputBox = styled.label`
  position: relative;
`

export const InputLabel = styled.span`
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ span,
  &:valid ~ span {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

export const SubmitBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
  }
`;

export const Error = styled(ErrorMessage)`
  width: fit-content;
  text-align: center;
  padding: 4px 8px;
  color: #cc0033;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  position: absolute;
  right: 0;
  bottom: -5%;
`;