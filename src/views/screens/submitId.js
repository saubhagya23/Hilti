import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ToastAndroid } from 'react-native';
import { Font, ImagePicker } from 'expo'
import PageHeaderNotif from '../common/pageHeaderNotif'
import RadioButton from 'radio-button-react-native';
import { uploadIdProofEvent } from '../../actions/apiData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon  from 'react-native-vector-icons/FontAwesome'
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class SubmitId extends Component {
    constructor(){
        super();

        this.state = {
            fontLoaded:false,
            value: '',
            imgFrontLoaded:false,
            imgBackLoaded:false,
            imgUrl:'',
            imgtype:'',
            imgData:{}
        }
    }

    async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true,
        })
    }

    handleOnPress(value){
        console.log('value is******',value);
        this.setState({value:value})
    }

    pickImage = async (type) => {
        if(this.state.value === ''){
            ToastAndroid.showWithGravity('Please select a type of ID proof', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
        else{
            console.log('type=====',type);
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
            });

            console.log(result);

            if(type === 'front'){
                this.setState({
                    imgFrontLoaded:true,
                    imgUrl:result.uri,
                    imgData:result,
                    imgtype:type
                })
            }
            else{
                this.setState({
                    imgBackLoaded:true,
                    imgUrl:result.uri,
                    imgData:result,
                    imgtype:type
                })
            }

            //this.handleImagePicked(result);


            /*let uploadObj = {
                id:this.state.value,
                type:type,
                file:result.uri
            }

            console.log('upload obj is----',uploadObj);*/

            /*if (!result.cancelled) {
                this.setState({ imgUrl: result.uri });
            }*/
        }
    };

    uploadImage = (uri) => {
        console.log('image upload fn called..');
        if(this.state.value === ''|| this.state.type === ''){
            ToastAndroid.showWithGravity('Please select the type and images.', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
        else{
            let uriParts = uri.split('.');
            let fileType = uriParts[uriParts.length - 1];

            let uploadObj = new FormData();
            uploadObj.append('file', {
                uri,
                name: `photo.${fileType}`,
                type: `image/${fileType}`,
            });
            uploadObj.append('id',this.state.value);
            uploadObj.append('type',this.state.imgtype);
            /*let uploadObj = {
                id:this.state.value,
                type:this.state.imgtype,
                file:this.state.imgUrl
            }*/


            console.log('upload obj is----',uploadObj);

            let header = {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFkMDQxNTRkYTA2YTZiOTZhMTNlODEiLCJzdWIiOiJhYmhpc2hlay5qYWluQGhpbHRpLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTEyMDM2NTMxLCJleHAiOjE1MTQxOTY1MzF9.yjfM45pq_GjbNyFkbeFq3WM8zip8z1tpvHsQ0a-gKpY'
            }

            let options = {
                method: 'POST',
                body: uploadObj,
                headers: header
            }

            const { uploadIdProofEvent } = this.props;
            return uploadIdProofEvent({payload:uploadObj,headers:header})
            //return fetch('http://13.68.114.98:9000/api/user-ids/upload',options);
        }
    };

    handleImagePicked = async () => {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
        let uploadResponse, uploadResult;
        let result = this.state.imgData;
        try {
            //this.setState({ uploading: true });

            if (!result.cancelled) {
                uploadResponse = await this.uploadImage(result.uri);
                /*uploadResult = await uploadResponse.json();
                this.setState({ imgUrl: uploadResult.location });*/
            }
        } catch (e) {
            console.log({ uploadResponse });
            console.log({ uploadResult });
            console.log({ e });
            alert('Upload failed, sorry :(');
        } finally {
            this.setState({ uploading: false });
        }
    };

    render(){
        let imageUrl = `uri:'${this.state.imgUrl}'`;
        console.log('url+++++',imageUrl);
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='Submit Your ID' navigation={this.props.navigation}/>
                                <Text style={{marginTop:25,marginLeft:20.5,fontSize:12,color:'#dd2127',fontFamily:'hilti-roman'}}>
                                    EXPRESS CHECK-IN
                                </Text>
                                <Text style={{marginTop:11,marginLeft:20.5,marginRight:56,fontSize:9,color:'#000000',opacity:0.8,fontFamily:'hilti-bold'}}>
                                    Please submit your Govt. issued ID latest by 31 Dec, 2017 for hotel check-in.
                                </Text>


                            <View style={{marginTop:22,height:465.5,backgroundColor:'#ffffff'}}>
                                <View style={{marginTop:27.5,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton
                                            currentValue={this.state.value}
                                            value={'Voter ID'}
                                            outerCircleSize={15}
                                            innerCircleSize={7.5}
                                            innerCircleColor={'#dd2127'}
                                            onPress={this.handleOnPress.bind(this)}
                                        >
                                            <Text style={{marginLeft:4,fontSize:10,color:'#000000',fontFamily:'hilti-bold'}}>Voter ID</Text>
                                        </RadioButton>
                                    </View>

                                    <View style={{marginLeft:10,flexDirection:'row'}}>
                                        <RadioButton
                                            currentValue={this.state.value}
                                            value={'Adhaar Card'}
                                            outerCircleSize={15}
                                            innerCircleSize={7.5}
                                            innerCircleColor={'#dd2127'}
                                            onPress={this.handleOnPress.bind(this)}>
                                            <Text style={{marginLeft:4,fontSize:10,color:'#000000',fontFamily:'hilti-bold'}}>Adhaar Card</Text>
                                        </RadioButton>
                                    </View>

                                    <View style={{marginLeft:10,flexDirection:'row'}}>
                                        <RadioButton
                                            currentValue={this.state.value}
                                            value={'Driving License'}
                                            outerCircleSize={15}
                                            innerCircleSize={7.5}
                                            innerCircleColor={'#dd2127'}
                                            onPress={this.handleOnPress.bind(this)}>
                                            <Text style={{marginLeft:4,fontSize:10,color:'#000000',fontFamily:'hilti-bold'}}>Driving License</Text>
                                        </RadioButton>
                                    </View>

                                    <View style={{marginLeft:10,flexDirection:'row'}}>
                                        <RadioButton
                                            currentValue={this.state.value}
                                            value={'Passport'}
                                            outerCircleSize={15}
                                            innerCircleSize={7.5}
                                            innerCircleColor={'#dd2127'}
                                            onPress={this.handleOnPress.bind(this)}>
                                            <Text style={{marginLeft:4,fontSize:10,color:'#000000',fontFamily:'hilti-bold'}}>Passport</Text>
                                        </RadioButton>
                                    </View>
                                </View>

                                <View style={{marginTop:24.5,height:179.5,justifyContent:'center',alignItems:'center'}}>
                                    <View style={{flexDirection:'row',flex:0.9}}>
                                        <View style={{flex:1,alignItems:'flex-end'}}>
                                            <TouchableOpacity
                                                style={{flex:0.9,borderColor:'black',opacity:0.8,borderWidth:1,width:120,borderStyle:'dashed'}}

                                                onPress={() => this.pickImage('front')}
                                            >
                                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                    {/*<Image
                                                        style={{resizeMode:'stretch'}}
                                                        source={{imageUrl}}
                                                    />*/}
                                                    {this.state.imgFrontLoaded?
                                                        <Image
                                                            style={{width:50,height:50}}
                                                            source={{isStatic:true, uri:this.state.imgUrl}}
                                                        />:
                                                        <Image
                                                            style={{resizeMode:'stretch'}}
                                                            source={require('../../assets/images/upload_icon/upload_icon_mdpi.png')}
                                                        />
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{paddingRight:50,fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.6}}>Front</Text>
                                        </View>

                                        <View style={{flex:1,marginLeft:20,alignItems:'flex-start'}}>
                                            <TouchableOpacity
                                                style={{flex:0.9,borderColor:'black',opacity:0.8,borderWidth:1,width:120}}

                                                onPress={() => this.pickImage('back')}
                                            >
                                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                    {this.state.imgBackLoaded?
                                                        <Image
                                                            style={{resizeMode:'stretch'}}
                                                            source={{uri:this.state.imgUrl}}
                                                        />:
                                                        <Image
                                                            style={{resizeMode:'stretch'}}
                                                            source={require('../../assets/images/upload_icon/upload_icon_mdpi.png')}
                                                        />
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{paddingLeft:50,fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.6}}>Back</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        style={{flex:0.1,marginTop:5}}

                                        onPress={() => {this.handleImagePicked()}}
                                    >
                                        <Text style={{color:'#dd2127',fontFamily:'hilti-roman',fontSize:13}}>UPLOAD FILE</Text>

                                    </TouchableOpacity>
                                </View>
                                {/*<View style={{marginTop:24.5,backgroundColor:'lightgreen',flex:0.5,justifyContent:'center',alignItems:'center'}}>
                                    <View style={{flexDirection:'row',flex:0.9}}>
                                        <View style={{flex:1,alignItems:'flex-end'}}>
                                            <TouchableOpacity style={{flex:0.9,borderColor:'black',opacity:0.8,borderWidth:1,width:120,borderStyle:'dashed'}}>
                                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                    {this.state.imgFrontLoaded?
                                                        <Image
                                                            style={{resizeMode:'stretch'}}
                                                            source={{uri:"file:///data/data/host.exp.exponent/cache/ExperienceData/%2540saubhagya%252Fhilti-app/ImagePicker/37e83ca3-0500-447d-9c3f-d938d612a191.jpg"}}
                                                        />:
                                                        <Icon
                                                            style={{color:'#000000',opacity:0.6}}
                                                            name='file-o'
                                                            size={40}
                                                            onPress={() => {this.pickImage('front')}} />
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{paddingRight:50,fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.6}}>Front</Text>
                                        </View>
                                        <View style={{flex:1,marginLeft:20,alignItems:'flex-start'}}>
                                            <TouchableOpacity style={{flex:0.9,borderColor:'black',opacity:0.8,borderWidth:1,width:120}}>
                                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                    {this.state.imgBackLoaded?
                                                        <Image/>:
                                                        <Icon
                                                            style={{color:'#000000',opacity:0.6}}
                                                            name='file-o'
                                                            size={40}
                                                            onPress={() => {this.pickImage('back')}} />
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{paddingLeft:50,fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.6}}>Back</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={{flex:0.1,marginTop:5}}

                                        onPress={() => {this.uploadImage}}
                                    >
                                        <Text style={{color:'#dd2127',fontFamily:'hilti-roman',fontSize:13}}>UPLOAD FILE</Text>

                                    </TouchableOpacity>
                                </View>*/}

                                <Text style={{flex:0.3,alignSelf:'center',marginTop:5,color:'#000000',opacity:0.6,fontFamily:'hilti-roman',fontSize:9,width:220}}>You will receive your room sharing details upon uploading the ID proof</Text>

                            </View>
                        </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f3ee'
    }
})

function mapStateToProps (state) {
    return {
        eventUploadIDProofList: state.event.eventUploadIDProofList
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                uploadIdProofEvent,
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitId);