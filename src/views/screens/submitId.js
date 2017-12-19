import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import { Font, ImagePicker } from 'expo'
import PageHeaderNotif from '../common/pageHeaderNotif'
import RadioButton from 'radio-button-react-native';
import { uploadIdProofEvent, getdownloadIdProofEvent, deletedownloadIdProofEvent } from '../../actions/apiData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-native-modal'
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
            currImgType:'',
            imgFrontType:'',
            imgBackType:'',
            imgFrontData:{},
            imgBackData:{},
            btnText:'UPLOAD FILE',
            errText:'',
            isModalVisible: false
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
        let detail = JSON.parse(this.props.userDetail);
        /*const { deletedownloadIdProofEvent } = this.props;
        deletedownloadIdProofEvent({param:detail.Code});*/
        const { getdownloadIdProofEvent } = this.props;
        getdownloadIdProofEvent({param:detail.Code});
    }

    componentWillReceiveProps(nextProps){
       console.log('Data------------------------->>>>>>>>>>>>>>>>>>>>',nextProps.downloadIdProofEvent.length);
        if(nextProps.downloadIdProofEvent && nextProps.downloadIdProofEvent.length){
            // console.log('h1');
            let downloadedImageArray = nextProps.downloadIdProofEvent || [];
            // console.log('h2');
            if(downloadedImageArray && downloadedImageArray.length !== 0) {
                // console.log('h3');
                let initialDownloadObject = downloadedImageArray[0] || {};
                let secondDownloadObject = downloadedImageArray[1] || {};
                // console.log('h4');
                if (downloadedImageArray.length === 1) {
                    // console.log('h5');
                    if (initialDownloadObject && initialDownloadObject.type === 'front') {
                        // console.log('h6');
                        this.setState({
                            imgFrontType: initialDownloadObject.type,
                            imgFrontLoaded: true,
                            imgFrontUrl: initialDownloadObject.url+'?random_number='+new Date().getTime(),
                            value: initialDownloadObject.idType,
                            btnText: 'DELETE'
                        }, (() => {
                            console.log('Hello3');
                        }))
                    }
                    else{
                        console.log('data found for back img-----');
                    }
                }
                else{
                    //console.log('Abcdefghi......');
                    if (initialDownloadObject && initialDownloadObject.type === 'front'){
                        this.setState({
                            value: initialDownloadObject.idType,
                            imgFrontLoaded: true,
                            imgFrontUrl: initialDownloadObject.url+'?random_number='+new Date().getTime(),
                            imgFrontType: initialDownloadObject.type,
                            imgBackLoaded: true,
                            imgBackUrl: secondDownloadObject.url+'?random_number='+new Date().getTime(),
                            imgBackType: secondDownloadObject.type,
                            btnText: 'DELETE'
                        })
                    }
                    else {
                        this.setState({
                            value: initialDownloadObject.idType,
                            imgBackLoaded: true,
                            imgBackUrl: initialDownloadObject.url+'?random_number='+new Date().getTime(),
                            imgBackType: initialDownloadObject.type,
                            imgFrontLoaded: true,
                            imgFrontUrl: secondDownloadObject.url+'?random_number='+new Date().getTime(),
                            imgFrontType: secondDownloadObject.type,
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
        if(this.state.value !== ''){
            if(this.state.imgFrontType !== ''){
                this.setState({
                    errText:'Please delete the image(s) first.'
                })
            }
            else{
                this.setState({
                    value:value,
                    errText:''
                })
            }
        }
        else{
            this.setState({
                value:value,
                errText:''
            })
        }
        /*if(this.state.errText !== ''){
            this.setState({
                errText:'',
                value:value,
            })
        }else{
            this.setState({
                value:'',

            })
        }*/
    }

    showModal = (typeSelected) => {
        if(this.state.btnText === 'DELETE'|| this.state.value === ''){
            this.setState({
                isModalVisible:false,
                currImgType:'',
                errText:'Either image(s) are present or Type is not selected.'
            })
        }
        else{
            if(typeSelected === 'back' && this.state.imgFrontType === ''){
                this.setState({
                    isModalVisible:false,
                    errText:'Please select the front image first.'
                })
            }
            else{
                this.setState({
                    isModalVisible:true,
                    currImgType:typeSelected,
                    errText:''
                })
            }
        }
        /*if(typeSelected === 'front'){
            this.setState({imgFrontType:'front'})
        }
        else{
            this.setState({imgBackType:'back'})
        }*/

    }

    takePhoto =  async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality:0.5
        });
        console.log('img photo result--->>>>>>',pickerResult);
        if(pickerResult.cancelled === 'true'){
            if(this.state.currImgType === 'front'){
                this.setState({
                    imgFrontType:'',
                    errText:'No picture taken'
                })
            }
            if(this.state.currImgType === 'back'){
                this.setState({
                    imgBackType:'',
                    errText:'No picture taken'
                })
            }
        }
        else{
            if(this.state.currImgType === 'front'){
                this.setState({
                    imgFrontLoaded:true,
                    imgFrontUrl:pickerResult.uri,
                    imgFrontData:pickerResult,
                    imgFrontType:this.state.currImgType,
                    errText:'',
                    isModalVisible:false
                })
            }
            if(this.state.currImgType === 'back'){
                this.setState({
                    imgBackLoaded:true,
                    imgBackUrl:pickerResult.uri,
                    imgBackData:pickerResult,
                    imgBackType:this.state.currImgType,
                    errText:'',
                    isModalVisible:false
                })
            }
        }
        // this.handleImagePicked(pickerResult);
    };

    pickImage = async () => {
        if(this.state.value === ''){
            //ToastAndroid.showWithGravity('Please select a type of ID proof', ToastAndroid.SHORT, ToastAndroid.CENTER);
            this.setState({errText:'Please select a type of ID proof'})
        }
        else{
            let result, resultFront,resultBack;
            /*result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
            });*/

            if(this.state.currImgType === 'front'){
                /*resultFront = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });*/
                resultFront = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });
                if(this.state.errText !== ''){
                    this.setState({
                        imgFrontLoaded:true,
                        imgFrontUrl:resultFront.uri,
                        imgFrontData:resultFront,
                        imgFrontType:this.state.currImgType,
                        errText:'',
                        isModalVisible:false
                        // btnText:'DELETE'
                    })
                }
                else{
                    this.setState({
                        imgFrontLoaded:true,
                        imgFrontUrl:resultFront.uri,
                        imgFrontData:resultFront,
                        imgFrontType:this.state.currImgType,
                        errText:'',
                        isModalVisible:false
                        // btnText:'DELETE'
                    })
                }

            }
            else{
                /*resultBack = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });*/
                if(this.state.imgFrontType!=='front'){
                    this.setState({
                        errText:'First select front image'
                    })
                }
                else{
                resultBack = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                });
                this.setState({
                    imgBackLoaded:true,
                    imgBackUrl:resultBack.uri,
                    imgBackData:resultBack,
                    imgBackType:this.state.currImgType,
                    errText:'',
                    isModalVisible:false
                    // btnText:'DELETE'
                })}
            }
            /*let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
            });*/

            //console.log(resultFront);
            if(this.state.currImgType === 'front'){
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
                        isModalVisible:false
                    })
                }
            }
            else{
                if(this.state.imgFrontType!=='front'){
                    if(resultBack && resultBack.cancelled){
                        this.setState({
                            imgFrontLoaded:false,
                            imgBackLoaded:false,
                            imgFrontUrl:'',
                            imgBackUrl:'',
                            imgFrontType:'',
                            imgBackType:'',
                            imgFrontData:{},
                            imgBackData:{},
                            isModalVisible:false
                        })
                    }
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

    uploadImage = (imageStatus,uri) => {
        console.log('image upload fn called..');
        console.log('states####',this.state.value,this.state.imgFrontType,uri);
        if((this.state.value === ''|| this.state.imgFrontType === '')){
            //ToastAndroid.showWithGravity('Please select the type and images.', ToastAndroid.SHORT, ToastAndroid.CENTER);
            this.setState({
                errText:'Please select the type and images',
                value:'',
                imgBackLoaded:false,
                imgBackType:'',
                imgBackUrl:'',
                imgBackData:{},
                btnText:'UPLOAD FILE'
            })
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
            if(imageStatus === 'front'){
                uploadObj.append('type',this.state.imgFrontType);
            }
            else{
                uploadObj.append('type',this.state.imgBackType);
            }
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
            let detail = JSON.parse(this.props.userDetail);
            const { deletedownloadIdProofEvent } = this.props;
            deletedownloadIdProofEvent({param:detail.Code});
            this.setState({
                value:'',
                imgFrontLoaded:false,
                imgBackLoaded:false,
                imgFrontUrl:'',
                imgBackUrl:'',
                imgFrontType:'',
                imgBackType:'',
                imgFrontData:{},
                imgBackData:{},
                btnText:'UPLOAD FILE',
                errText:'Image(s) deleted.'
            })
        }
        else{
            let uploadResponse, result, resultFront, resultBack, uploadFrontResponse, uploadBackResponse;
            if(this.state.imgFrontLoaded === true && this.state.imgBackLoaded === true){
                //console.log('both images picked---');
                resultFront  = this.state.imgFrontData;
                resultBack = this.state.imgBackData;
                //console.log('resultBack^^^^^^',resultBack);
                try {
                    if (!resultFront.cancelled && !resultBack.cancelled) {
                        //console.log('both images not cancelled---');
                        this.setState({btnText:'LOADING',errText:'Upload in progress.'});
                        uploadFrontResponse = await this.uploadImage('front',resultFront.uri);
                        //console.log('both images not cancelled-11111--');
                        uploadBackResponse = await this.uploadImage('back',resultBack.uri);
                        //console.log('both images not cancelled-22222--');
                        this.setState({btnText:'DELETE',errText:'Image(s) uploaded successfully.'});
                    }
                } catch (e) {
                    console.log('Front--',{ uploadFrontResponse });
                    console.log({ e });
                    console.log('Back--',{ uploadBackResponse });
                    console.log({ e });
                    this.setState({errText:'Upload failed, sorry :('})
                    //alert('Upload failed, sorry :(');
                } finally {
                    //this.setState({ uploading: false });
                    // console.log('upload complete--!!')
                }
            }
            else if(this.state.imgFrontLoaded === true && this.state.imgBackLoaded === false){
                console.log('front image---',this.state.imgFrontData);
                result = this.state.imgFrontData;
                try {
                    console.log('uri got===',result.uri)
                    if (!result.cancelled) {
                        console.log('uri got==2==',result.uri);
                        this.setState({btnText:'LOADING',errText:'Upload in progress.'})
                        uploadResponse = await this.uploadImage('front',result.uri);
                        this.setState({btnText:'DELETE',errText:'Image(s) uploaded successfully.'});
                    }
                } catch (e) {
                    console.log('Front--',{ uploadResponse });
                    console.log({ e });
                    this.setState({errText:'Upload failed, sorry :('})
                    //alert('Upload failed, sorry :(');
                } finally {
                    //this.setState({ uploading: false });
                    // console.log('upload complete--!!')
                }
            }
            else{
                this.setState({
                    errText:'Please select the type and image(s).'
                })
                /*result = this.state.imgBackData;
                try {
                    if (!result.cancelled) {
                        uploadResponse = await this.uploadImage(result.uri);
                        this.setState({btnText:'DELETE'});
                    }
                } catch (e) {
                    console.log('Back--',{ uploadResponse });
                    console.log({ e });
                    this.setState({errText:'Upload failed, sorry :('})
                    //alert('Upload failed, sorry :(');
                } finally {
                    //this.setState({ uploading: false });
                    // console.log('upload complete--!!')
                }*/
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
                            <PageHeaderNotif props={this.props} parentPage='Submit Your ID' navigation={this.props.navigation}/>
                                <Text style={{marginTop:25,marginLeft:20.5,fontSize:12,color:'#dd2127',fontFamily:'hilti-roman'}}>
                                    EXPRESS CHECK-IN
                                </Text>
                                <Text style={{marginTop:11,marginLeft:20.5,marginRight:56,fontSize:9,color:'#000000',opacity:0.8,fontFamily:'hilti-bold'}}>
                                    Please submit your Govt. issued ID latest by 31 Dec, 2017 for hotel check-in.
                                </Text>


                            <View style={{marginTop:22,height:465.5,backgroundColor:'#ffffff'}}>
                                <View style={{marginTop:27.5,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                    <TouchableOpacity style={{flexDirection:'row'}} onPress={this.handleOnPress.bind(this)}>
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
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{marginLeft:10,flexDirection:'row'}} onPress={this.handleOnPress.bind(this)}>
                                        <RadioButton
                                            currentValue={this.state.value}
                                            value={'Adhaar Card'}
                                            outerCircleSize={15}
                                            innerCircleSize={7.5}
                                            innerCircleColor={'#dd2127'}
                                            onPress={this.handleOnPress.bind(this)}>
                                            <Text style={{marginLeft:4,fontSize:10,color:'#000000',fontFamily:'hilti-bold'}}>Adhaar Card</Text>
                                        </RadioButton>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{marginLeft:10,flexDirection:'row'}} onPress={this.handleOnPress.bind(this)}>
                                        <RadioButton
                                            currentValue={this.state.value}
                                            value={'Driving License'}
                                            outerCircleSize={15}
                                            innerCircleSize={7.5}
                                            innerCircleColor={'#dd2127'}
                                            onPress={this.handleOnPress.bind(this)}>
                                            <Text style={{marginLeft:4,fontSize:10,color:'#000000',fontFamily:'hilti-bold'}}>Driving License</Text>
                                        </RadioButton>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{marginLeft:10,flexDirection:'row'}} onPress={this.handleOnPress.bind(this)}>
                                        <RadioButton
                                            currentValue={this.state.value}
                                            value={'Passport'}
                                            outerCircleSize={15}
                                            innerCircleSize={7.5}
                                            innerCircleColor={'#dd2127'}
                                            onPress={this.handleOnPress.bind(this)}>
                                            <Text style={{marginLeft:4,fontSize:10,color:'#000000',fontFamily:'hilti-bold'}}>Passport</Text>
                                        </RadioButton>
                                    </TouchableOpacity>
                                </View>

                                <View style={{marginTop:24.5,height:179.5,justifyContent:'center',alignItems:'center'}}>
                                    <View style={{flexDirection:'row',flex:0.9}}>
                                        <View style={{flex:1,alignItems:'flex-end'}}>
                                            <TouchableOpacity
                                                style={{flex:0.9,borderColor:'black',opacity:0.8,borderWidth:1,width:120,borderStyle:'dashed'}}

                                                onPress={() => this.showModal('front')}
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

                                                onPress={() => this.showModal('back')}
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
                                        {this.state.btnText === 'LOADING'?
                                            <ActivityIndicator color='red' style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}/>:
                                            <Text style={{color:'#dd2127',fontFamily:'hilti-roman',fontSize:13}}>{this.state.btnText}</Text>

                                        }
                                    </TouchableOpacity>
                                </View>

                                <Text style={{flex:0.3,alignSelf:'center',marginTop:5,color:'#000000',opacity:0.6,fontFamily:'hilti-roman',fontSize:9,width:220}}>You will receive your room sharing details upon uploading the ID proof</Text>
                                {
                                    this.state.errText ?
                                        <Text style={{alignSelf:'center',color:'#dd2127',fontFamily:'hilti-roman',fontSize:13}}>{this.state.errText}</Text>:null
                                }

                                <Modal isVisible={this.state.isModalVisible} backdropColor={'#ffffff'} onBackdropPress={() => {this.setState({isModalVisible:false})}} animationIn={'fadeIn'} animationOut={'fadeOut'}>
                                    <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
                                        <TouchableOpacity
                                            style={{width:200,height:50,backgroundColor:'#dd2127',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#dd2127',borderRadius:5}}

                                            onPress={() => {this.takePhoto()}}
                                        >
                                            <Text style={{color:'#ffffff',fontFamily:'hilti-roman',fontSize:13}}>Take a picture</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{width:200,height:50,marginTop:10,backgroundColor:'#dd2127',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#dd2127',borderRadius:5}}

                                            onPress={() => {this.pickImage()}}
                                        >
                                            <Text style={{color:'#ffffff',fontFamily:'hilti-roman',fontSize:13}}>Choose from device</Text>

                                        </TouchableOpacity>
                                    </View>
                                </Modal>
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
        downloadIdProofEvent: state.event.downloadIdProofEvent,
        eventLoginList: state.event.eventLoginList,
        userDetail:state.event.userDetail

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