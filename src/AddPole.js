import React from 'react';
import { Container, Form, Header, Title, Left, Icon, Button, Input, Item, Label, Picker, Right, Body, Content,Text, Card, CardItem } from "native-base";
import {View,} from 'react-native';
const util = require('util');

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'AddPole',
    };
    constructor(props) {
      super(props);
      this.state = {
        selected2: undefined
      };
    }
    onValueChange2(value: string) {
      this.setState({
        selected2: value
      });
    }
    

    render() {
        console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
        var {params} = this.props.navigation.state;

        return(
          <Container>
            <Header>
              <Body>
                <Title> Adicionar Poste </Title>
              </Body>
              
            </Header>
            
            <Content padder>
              <Form>
                <Item fixedLabel>
                  <Label>Codigo</Label>
                  <Input />
                </Item>
                <Item fixedLabel>
                  <Label>Nome</Label>
                  <Input />
                </Item>
                
                <Item regular>
                  <Input placeholder='Regular Textbox' />
                </Item>

                <Item picker>
                  <Picker mode="dropdown" iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Tipo 1" value="key0" />
                    <Picker.Item label="Tipo 2" value="key1" />
                    <Picker.Item label="Tipo 3" value="key2" />
                  </Picker>
                </Item>

                                <Item picker>
                  <Picker mode="dropdown" iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Projeto A" value="key0" />
                    <Picker.Item label="Projeto B" value="key1" />
                    <Picker.Item label="Projeto C" value="key2" />
                  </Picker>
                </Item>

                <Item picker>
                  <Picker mode="dropdown" iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="RJ" value="key0" />
                    <Picker.Item label="SC" value="key1" />
                    <Picker.Item label="TO" value="key2" />
                  </Picker>
                </Item>


                <Item fixedLabel>
                  <Label>Numero</Label>
                  <Input />
                </Item>
              </Form>
                          
              <Button full primary
                style={{ marginTop: 10 }}
                //onPress={() => navigation.navigate("Home")}>
                onPress={() => navigate("Home", {name: "hoang", email: "sunlight4d@gmail.com"})}
              >
                <Text> Adicionar Poste </Text>
              </Button>
            
            </Content>
          </Container>
        );
    }
}