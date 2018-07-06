import React, { Component } from 'react';
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onLogin() {
    const { email, password } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if (reg.test(this.state.email) === true){
               Alert.alert('Login success', `Hello there ${email}`);
           }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source={require('./logo.png')} alignSelf="center" />
       
          <Text style={{ marginTop: 50, marginBottom: 5}}>Email</Text>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder={'Input email here'}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text
            value={this.state.email}
            onChangeText={text => this.setState({text})}
            error={this.state.email}/>
       
        <Text style={{ marginTop: 5, marginBottom: 5}}>
          Password
        </Text>
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Input password'}
          secureTextEntry={true}
          style={styles.input}
          underlineColorAndroid="transparent"
          minLength={6}
          maxLength={12}
        />

        <Button
          title={'Sign In'}
          onPress={this.onLogin.bind(this)}
          color="#AA8FDB"
        />
        <View style={{ height: 50 }} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    alignSelf: 'stretch',
    padding: 10,
    borderWidth: 1,
    borderColor: '#341769',
    borderRadius: 3,
    marginBottom: 10,
  },
});
