import styled from "styled-components";

export const Body = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  flex: 1 1 0%;
  padding: 20px 0 0 20px;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 2.5em;
  text-align: left;
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  text-align: left;
  color: #727272;
  font-weight: 400;
  line-height: 1.5;
  padding: 15px;

  span {
    font-weight: 800;
    font-size: 1.4em;
    text-align: left;
    color: #fd8468;
  }
`;

export const BodyParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 10px;
  margin: 10px auto 20px auto;
`;

export const ButtonSubmit = styled.button`
  color: #fff;
  padding: 5px 15px;
  background-color: #000;
  border: none;
  font-size: 1.2em;
  margin: 5px auto;
  border-radius: 5px;
`;
