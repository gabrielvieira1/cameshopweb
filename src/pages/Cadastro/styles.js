import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const Left = styled.div`
  background: linear-gradient(180deg, #fffe84 52.6%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
`;
export const Slogan = styled.h1`
  padding-bottom: 40px;
  margin-left: 100px;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 57px;
  width: 614px;
  height: 112px;
  color: #c27803;
  text-align: left;
`;

export const Titulo = styled.h1`
  padding-top: 30px;
  margin-left: 100px;
  font-family: "Comic Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;
  width: 614px;
  height: 112px;
  color: #d87803;
  text-align: left;
`;

export const Image = styled.img``;

export const Header = styled.header`
  width: 900px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding-left: 700px;
`;

export const LinkMapa = styled.a`
  text-decoration: none;
  padding: 22.5px 25px;
  background: #5b63af;
  border-radius: 40px;
  font-weight: bold;
  font-size: 35px;
  color: #ffffff;
  margin-top: 47px;
  margin-right: 184px;
`;

export const LinkEntrar = styled.a`
  text-decoration: none;
`;

export const LinkSobre = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 35px;
  color: #ffffff;
  &:hover {
    transition: 0.3s;
    color: #5b63af !important;
  }
`;

export const LinkCadastro = styled.button`
  margin-top: 80px;
  width: 326px;
  height: 66px;
  text-decoration: none;
  padding: 3.5px 90px;
  background: #ff2c5f;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  border-style:none;
  color: #ffffff;
  cursor:pointer;
  &:hover {
    transition: 0.5ss;
    background-color: #700a22 !important;
  }
`;

export const LinkGoogle = styled.button`
  width: 445px;
  height: 45px;
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
  border-style:none;
  color: #dcdcdc;
  cursor:pointer;
  background: #2e64fe;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 47px;
  &:hover {
    transition: 0.6ss;
    background-color: #1c1c1c !important;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 15px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 1em;
`;

export const InputDescricao = styled.input`
  width: 100%;
  padding: 15px;
  padding-bottom: 80px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 1em;
`;

export const Fieldset = styled.fieldset`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 11px;
  display: grid;
  border: 0;
`;

export const FieldsetEmail = styled.fieldset`
  width: 100%;
  border: 0;
`;

export const Label = styled.label`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80%;
`;

export const P = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const Icons = styled.div`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 11px;
  display: grid;
  margin-bottom: 10px;
  margin-left: 616px;
`;

export const H1 = styled.h1`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;
`;

export const ImageGit = styled.a``;
