import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ToastAndroid } from 'react-native';
import { Font, ImagePicker } from 'expo'
import PageHeaderNotif from '../common/pageHeaderNotif'
import RadioButton from 'radio-button-react-native';
import { uploadIdProofEvent, getdownloadIdProofEvent, deletedownloadIdProofEvent } from '../../actions/apiData';
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
            imgFrontUrl:'',
            imgBackUrl:'',
            imgFrontType:'',
            imgBackType:'',
            imgFrontData:{},
            imgBackData:{},
            btnText:'UPLOAD FILE',
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

        /*const { downloadIdProofEvent } = this.props;
        downloadIdProofEvent();*/
    }

    componentDidMount(){
        const { getdownloadIdProofEvent } = this.props;
        getdownloadIdProofEvent();
        /*let downloadedImageArray = this.props.downloadIdProofEvent;
        console.log('downloaded data....CDM....',downloadedImageArray);
        if(downloadedImageArray.length !== 0) {
            console.log('Abcdef....');
            if (downloadedImageArray.length === 1) {
                console.log('Hello1');
                if (downloadedImageArray[0].type === 'front') {
                    console.log('Hello2',downloadedImageArray[0].idType);
                    this.setState({
                        imgFrontType: downloadedImageArray[0].type,
                        imgFrontLoaded: true,
                        imgFrontUrl: downloadedImageArray[0].url,
                        value: downloadedImageArray[0].idType
                    }, (() => {
                        console.log('Hello3');
                    }))
                }
            }
            else{
                console.log('Abcdefghi......');
                if (downloadedImageArray[0].type === 'front'){
                    this.setState({
                        value: downloadedImageArray[0].idType,
                        imgFrontLoaded: true,
                        imgFrontUrl: downloadedImageArray[0].url,
                        imgFrontType: downloadedImageArray[0].type,
                        imgBackLoaded: true,
                        imgBackUrl: downloadedImageArray[1].url,
                        imgBackType: downloadedImageArray[1].type
                    })
                }
                else {
                    this.setState({
                        value: downloadedImageArray[0].idType,
                        imgBackLoaded: true,
                        imgBackUrl: downloadedImageArray[0].url,
                        imgBackType: downloadedImageArray[0].type,
                        imgFrontLoaded: true,
                        imgFrontUrl: downloadedImageArray[1].url,
                        imgFrontType: downloadedImageArray[1].type
                    })
                }
            }
        }
        else{
            ToastAndroid.showWithGravity('No ID Submitted yet.', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }*/
    }

    componentWillReceiveProps(nextProps){
        console.log('Data------------------------->>>>>>>>>>>>>>>>>>>>',nextProps.downloadIdProofEvent.length);
        if(nextProps.downloadIdProofEvent.length !== 0){
            //console.log('Data--------------Found----------->>>>>>>>>>>>>>>>>>>>');
            let downloadedImageArray = nextProps.downloadIdProofEvent;
            //console.log('downloaded data...CWRP.....',downloadedImageArray);
            if(downloadedImageArray.length !== 0) {
                //console.log('Abcdef....');
                if (downloadedImageArray.length === 1) {
                    //console.log('Hello1');
                    if (downloadedImageArray[0].type === 'front') {
                        //console.log('Hello2',downloadedImageArray[0].idType);
                        this.setState({
                            imgFrontType: downloadedImageArray[0].type,
                            imgFrontLoaded: true,
                            imgFrontUrl: downloadedImageArray[0].url,
                            value: downloadedImageArray[0].idType,
                            btnText: 'DELETE'
                        }, (() => {
                            console.log('Hello3');
                        }))
                    }
                }
                else{
                    //console.log('Abcdefghi......');
                    if (downloadedImageArray[0].type === 'front'){
                        this.setState({
                            value: downloadedImageArray[0].idType,
                            imgFrontLoaded: true,
                            imgFrontUrl: downloadedImageArray[0].url,
                            imgFrontType: downloadedImageArray[0].type,
                            imgBackLoaded: true,
                            imgBackUrl: downloadedImageArray[1].url,
                            imgBackType: downloadedImageArray[1].type,
                            btnText: 'DELETE'
                        })
                    }
                    else {
                        this.setState({
                            value: downloadedImageArray[0].idType,
                            imgBackLoaded: true,
                            imgBackUrl: downloadedImageArray[0].url,
                            imgBackType: downloadedImageArray[0].type,
                            imgFrontLoaded: true,
                            imgFrontUrl: downloadedImageArray[1].url,
                            imgFrontType: downloadedImageArray[1].type,
                            btnText: 'DELETE'
                        })
                    }
                }
            }
            else{
                ToastAndroid.showWithGravity('No ID Submitted yet.', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        }
    }

    handleOnPress(value){
        console.log('value is******',value);
        this.setState({
            value:value,
            /*imgFrontLoaded:false,
            imgBackLoaded:false,
            imgFrontUrl:'',
            imgBackUrl:'',
            imgFrontType:'',
            imgBackType:'',
            imgData:{},
            btnText:'UPLOAD FILE'*/
        })
    }

    pickImage = async (type) => {
        if(this.state.value === ''){
            ToastAndroid.showWithGravity('Please select a type of ID proof', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
        else{
            console.log('type=====',type);
            let result, resultFront,resultBack;
            /*result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
            });*/

            if(type === 'front'){
                /*resultFront = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });*/
                resultFront = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });
                this.setState({
                    imgFrontLoaded:true,
                    imgFrontUrl:resultFront.uri,
                    imgFrontData:resultFront,
                    imgFrontType:type,
                    // btnText:'DELETE'
                })
            }
            else{
                /*resultBack = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });*/
                resultBack = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });
                this.setState({
                    imgBackLoaded:true,
                    imgBackUrl:resultBack.uri,
                    imgBackData:resultBack,
                    imgBackType:type,
                    // btnText:'DELETE'
                })
            }
            /*let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
            });*/

            //console.log(resultFront);
            if(type === 'front'){
                if(resultFront.cancelled){
                    this.setState({
                        imgFrontLoaded:false,
                        imgBackLoaded:false,
                        imgFrontUrl:'',
                        imgBackUrl:'',
                        imgFrontType:'',
                        imgBackType:'',
                        imgFrontData:{},
                        imgBackData:{},
                    })
                }
            }
            else{
                if(resultBack.cancelled){
                    this.setState({
                        imgFrontLoaded:false,
                        imgBackLoaded:false,
                        imgFrontUrl:'',
                        imgBackUrl:'',
                        imgFrontType:'',
                        imgBackType:'',
                        imgFrontData:{},
                        imgBackData:{},
                    })
                }
            }



            /*if(type === 'front'){
                this.setState({
                    imgFrontLoaded:true,
                    imgFrontUrl:result.uri,
                    imgFrontData:result,
                    imgFrontType:type,
                    btnText:'DELETE'
                })
            }
            else{
                this.setState({
                    imgBackLoaded:true,
                    imgBackUrl:result.uri,
                    imgBackData:result,
                    imgBackType:type,
                    btnText:'DELETE'
                })
            }*/

            /*if(result.cancelled){
                this.setState({
                    imgFrontLoaded:false,
                    imgBackLoaded:false,
                    imgFrontUrl:'',
                    imgBackUrl:'',
                    imgFrontType:'',
                    imgBackType:'',
                    imgFrontData:{},
                    imgBackData:{},
                })
            }*/

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
        if((this.state.value === ''|| this.state.imgFrontType === '')
            ||(this.state.value === ''|| this.state.imgBackType === '')){
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
            if(this.state.imgBackType !== ''){
                uploadObj.append('type',this.state.imgBackType);
            }
            else{
                uploadObj.append('type',this.state.imgFrontType);
            }
            /*let uploadObj = {
                id:this.state.value,
                type:this.state.imgtype,
                file:this.state.imgUrl
            }*/


            //console.log('upload obj is----',uploadObj);

            let header = {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFkMDQxNTRkYTA2YTZiOTZhMTNlODEiLCJzdWIiOiJhYmhpc2hlay5qYWluQGhpbHRpLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTEyMDM2NTMxLCJleHAiOjE1MTQxOTY1MzF9.yjfM45pq_GjbNyFkbeFq3WM8zip8z1tpvHsQ0a-gKpY'
            }

            /*let options = {
                method: 'POST',
                body: uploadObj,
                headers: header
            }*/

            /*if(this.state.imgFrontType !== ''){

            }*/
            const { uploadIdProofEvent } = this.props;
            return uploadIdProofEvent({payload:uploadObj,headers:header})
            //return fetch('http://13.68.114.98:9000/api/user-ids/upload',options);
        }
    };

    handleImagePicked = async () => {
        if(this.state.btnText === 'DELETE'){
            console.log('delete clicked');
            const { deletedownloadIdProofEvent } = this.props;
            deletedownloadIdProofEvent();
            this.setState({
                value:'',
                imgFrontLoaded:false,
                imgBackLoaded:false,
                imgFrontUrl:'',
                imgBackUrl:'',
                imgFrontType:'',
                imgBackType:'',
                imgData:{},
                btnText:'UPLOAD FILE'
            })
        }
        else{
            let uploadResponse, result, resultFront, resultBack, uploadFrontResponse, uploadBackResponse;
            this.setState({btnText:'DELETE'});
            if(this.state.imgFrontLoaded === true && this.state.imgBackLoaded === true){
                //console.log('both images picked---');
                resultFront  = this.state.imgFrontData;
                resultBack = this.state.imgBackData;
                //console.log('resultBack^^^^^^',resultBack);
                try {
                    if (!resultFront.cancelled && !resultBack.cancelled) {
                        //console.log('both images not cancelled---');
                        uploadFrontResponse = await this.uploadImage(resultFront.uri);
                        //console.log('both images not cancelled-11111--');
                        uploadBackResponse = await this.uploadImage(resultBack.uri);
                        //console.log('both images not cancelled-22222--');
                    }
                } catch (e) {
                    console.log('Front--',{ uploadFrontResponse });
                    console.log({ e });
                    console.log('Back--',{ uploadBackResponse });
                    console.log({ e });
                    alert('Upload failed, sorry :(');
                } finally {
                    //this.setState({ uploading: false });
                    // console.log('upload complete--!!')
                }
            }
            else if(this.state.imgFrontLoaded === true && this.state.imgBackLoaded === false){
                //console.log('front image---');
                result = this.state.imgFrontData;
                try {
                    if (!result.cancelled) {
                        uploadResponse = await this.uploadImage(result.uri);
                    }
                } catch (e) {
                    console.log('Front--',{ uploadResponse });
                    console.log({ e });
                    alert('Upload failed, sorry :(');
                } finally {
                    //this.setState({ uploading: false });
                    // console.log('upload complete--!!')
                }
            }
            else{
                result = this.state.imgBackData;
                try {
                    if (!result.cancelled) {
                        uploadResponse = await this.uploadImage(result.uri);
                    }
                } catch (e) {
                    console.log('Back--',{ uploadResponse });
                    console.log({ e });
                    alert('Upload failed, sorry :(');
                } finally {
                    //this.setState({ uploading: false });
                    // console.log('upload complete--!!')
                }
            }
        }
        //console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    };

    render(){
        //console.log('props*******%%%%%%*****submit id------',this.props,this.props.downloadIdProofEvent);

        /*if(downloadedImageArray.length>0 && downloadedImageArray.length<3){
            downloadedImageArray.map((downloadedImg) => {
                if(downloadedImg.type === 'front'){
                    this.setState({
                        imgFrontLoaded:true,
                        imgFrontUrl: downloadedImg.url,
                        value: downloadedImg.idType
                    },() => {console.log('this.state1---value--*****',this.state)})
                }
                else{
                    this.setState({
                        imgBackLoaded:true,
                        imgBackUrl: downloadedImg.url,
                        value: downloadedImg.idType
                    },() => {console.log('this.state2-----*****',this.state)})
                }
            })

        }
        let imageFrontUrl = `uri:'${this.state.imgFrontUrl}'`;
        let imageBackUrl = `uri:${this.state.imgBackUrl}`;*/
        //console.log('url+++++',imageUrl);
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='Submit Your ID'/>
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
                                                    {this.state.imgFrontLoaded?
                                                        <Image
                                                            style={{width:'100%',height:'100%'}}
                                                            source={{isStatic:true, uri:this.state.imgFrontUrl}}
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
                                                            style={{width:'100%',height:'100%'}}
                                                            source={{isStatic:true, uri:this.state.imgBackUrl}}
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
                                        <Text style={{color:'#dd2127',fontFamily:'hilti-roman',fontSize:13}}>{this.state.btnText}</Text>

                                    </TouchableOpacity>
                                </View>

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
        uploadIdProofEvent: state.event.uploadIdProofEvent,
        downloadIdProofEvent: state.event.downloadIdProofEvent

    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                uploadIdProofEvent,
                getdownloadIdProofEvent,
                deletedownloadIdProofEvent
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitId);