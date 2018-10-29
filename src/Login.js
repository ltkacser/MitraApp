import React from 'react';
import { Container, Form, Header, Title, Left, Icon, Button, Input, Item, Label, Right, Body, Content,Text, Card, CardItem } from "native-base";
import {View,} from 'react-native';
const util = require('util');

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
        var {navigate} = this.props.navigation;
        return(
          <Container>
            <Header>
              <Body>
                <Title> MitraApp </Title>
              </Body>
              
            </Header>
            
            <Content padder>

              <Form>
                <Item fixedLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
              
              <Button full primary
                style={{ marginTop: 10 }}
                //onPress={() => navigation.navigate("Home")}>
                onPress={() => navigate("Home", {name: "hoang", email: "sunlight4d@gmail.com"})}
              >
                <Text> LOGIN </Text>
              </Button>
            
            </Content>
          </Container>
        );
    }
}