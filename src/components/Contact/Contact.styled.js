import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  width: fit-content;
  background: rgba(0,0,0,.5);
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 2px;
  padding: 12px 20px;
  box-shadow: rgba(0, 0, 0, 0.93) -6px 8px 10px -3px;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
   display: inline-block;
  padding: 4px 8px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
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