
import React from 'react';
import { Container, Form, Header, Title, Left, Icon, Button, Input, Item, Label, Right, Body, Content,Text, Card, CardItem } from "native-base";

const util = require('util');

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        console.log("this.props.navigation.state = " + util.inspect(this.props.navigation.state, false, null));
        var {params} = this.props.navigation.state;
        return (
          <Container>
            <Header>
              <Body>
                <Title> Home </Title>
              </Body>
              
            </Header>
            
          </Container>
        );
    }
}