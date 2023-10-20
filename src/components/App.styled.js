import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
`;

export const AppTitle = styled.h1`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgb(0, 0, 0, 0.4); 
  color: #03e9f4;
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const ContactsList = styled.div`
  width: 50vw;
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  color: white;
  padding: 10px;
  font-size: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;