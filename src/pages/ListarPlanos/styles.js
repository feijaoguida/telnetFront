import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  overflow-y: scroll;
  position: relative;
  flex: 1 1 0%;
`;

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

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 24px;
  list-style: none;
  width: 100%;
`;

export const ItemList = styled.li`
  background: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  border: 1px solid #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }
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

export const ButtonTrash = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }
`;
