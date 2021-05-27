
import React, { Component } from 'react';
import {signup } from "./Helper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class SignUpView extends Component {




  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email   : '',
      mobile: '',
      password: '',
    }
  }

  onClickListener = (viewId) => 
  {
    
    var collection ={} 
    collection.name = this.state.name,
    collection.email = this.state.email,
    collection.mobile = this.state.mobile,
    collection.password = this.state.password
    console.warn(collection);
    const myObjStr = JSON.stringify(collection);
    console.log(myObjStr);
    // "{"name":"Sammy","age":6,"favoriteFood":"Tofu"}"
    console.log(JSON.parse(myObjStr));
     // Object {name:"Sammy",age:6,favoriteFood:"Tofu"}
    var url = 'http://192.168.43.4:8000/api/course/create';
    fetch(url,{
    method:'POST',
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body: myObjStr
       
    }).then(response=>response.json())
    .catch(err=>console.log('Error:',err))
    .then(response=>console.log('Success:',response))

    // signup(this.state).then((dd)=>{ console.log(dd)})
    // console.log(JSON.stringify(this.state));
    // Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (

      
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Phone"
              keyboardType="numeric"
              maxLength={10}
              underlineColorAndroid='transparent'
              onChangeText={(mobile) => this.setState({mobile})}/>
        </View>




        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});

