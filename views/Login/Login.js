import React from 'react';
import{
    Image,
    StatusBar,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            username:"admin",
            password:"pasword123456"
        }
    }

    componentDidMount(){
        this._getLogin("Revel Soft");

    }

    _getLogin(param = 'Hello'){
        Alert.alert("function","_getLogin : "+param)
    }

    render(){

        return(
            <ScrollView style={{backgroundColor: "#010001", }} >
                <StatusBar hidden={true} />
                <View style={{ padding: 36, }}> 
                    <Image resizeMode="contain" 
                    source={require('../../images/logo.png')}
                    style={{width: 200, height: 200, marginTop: 54, marginBottom:24, alignSelf: 'center', }}
                    >
                    </Image>
                    <View style={[ styles.row_underline, { marginBottom: 16, }]}>
                        <Icon name="email-outline" style={styles.login_icon}/>
                        <TextInput placeholder="Email address"
                            placeholderTextColor="#ADADAD"
                            underlineColorAndroid="transparent"
                            style={{ color: '#fff' , flex: 1, fontSize: 16, paddingLeft: 12, }}
                            onChangeText={(val) => {
                                this.setState({

                                    username:val

                                })

                            }
                        }
                            value={this.state.username}
                        />
                    </View>
                    <View style={[ styles.row_underline, { marginBottom: 24, }]}>
                        <Icon name="lock-outline" style={styles.login_icon}/>
                        <TextInput placeholder="Password"
                            placeholderTextColor="#ADADAD"
                            underlineColorAndroid="transparent"
                            style={{ color: '#fff' , flex: 1, fontSize: 16, paddingLeft: 12, }}
                            secureTextEntry={true}
                            onChangeText={(val) => {
                                this.setState({

                                   password:val
                                    
                                })

                            }
                        }
                        value={this.state.password}
                        />
                    </View>
                    <TouchableOpacity  style={{ flex: 1, backgroundColor: '#25aae1', borderRadius: 2, padding: 10, }}
                    onPress ={() =>{    this._getLogin();    }}
                    >
        <Text style={{alignSelf: "center", fontSize: 16, color: '#fff', }}>{this.state.username}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

// ตอนกำหนดค่า
const styles = StyleSheet.create({
    	row_underline: {
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: '#b6b6b6',
        },
        login_icon:{
            alignSelf: 'center',
            fontSize: 20,
            color: '#ADADAD',
        },
    });
