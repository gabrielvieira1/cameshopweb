import React from "react";
import axios from "axios";
import api from '../../services/api';
import smartphoneImg from "../../assets/Images/smartphoneImg.png";
import { cadastrarProduto } from "../../services/cadastrarProduto";

import {
  InputDescricao,
  FieldsetEmail,
  LinkCadastro,
  Titulo,
  Container,
  Slogan,
  Right,
  Image,
  Input,
  Label,
  Main,
  Form,
  Left,
  Top,
} from "./styles";

export default class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (event) => {
    event.preventDefault();
    cadastrarProduto(this.state);
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <Main>
          <Left>
            <Titulo href="/">CameShop</Titulo>
            <Slogan>Para realizar suas compras com segurança, casdastre-se no nosso sistema.</Slogan>
            <Image src={smartphoneImg} alt="imagem smartphone" width="650" />
          </Left>

          <Right>
            <Top>
              <h1>Cadastre um produto </h1>
            </Top>
            <Form>

              <FieldsetEmail>
              <Label> Título </Label>
                <Input
                  name="name"
                  placeholder="Digite o título do produto"
                  onBlur={this.changeHandler}
                />
                <Label> Descrição </Label>
                <InputDescricao
                  name="description" 
                  placeholder="Digite a descrição do produto"
                  onBlur={this.changeHandler}
                />
                <Label> Preço </Label>
                <Input
                  name="price"
                  placeholder="Informe o preço do produto"
                  onBlur={this.changeHandler}
                />
              </FieldsetEmail>
              <LinkCadastro onClick={this.submitHandler}>
                Cadastrar
              </LinkCadastro>
            </Form>
          </Right>
        </Main>
      </Container>
    );
  }
}
