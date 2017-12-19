import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Font } from 'expo'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFlag } from '../../actions/apiData'
import PageHeaderNotif from '../common/pageHeaderNotif'

class EmergencyContactNo extends Component {
    constructor(){
        super();

        this.state = {
            fontLoaded:false
        }
    }

    async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true
        })


    }

    componentDidMount() {
        const { getFlag } = this.props;
        getFlag('emergencyContact');
    }

    render(){

        let display,imgSrc ;
        console.log("props in emergency contact no. is:",this.props.staticsContact);
        if(this.props.staticsContact){
            display= this.props.staticsContact.display;
        }
        if(!display) {
            imgSrc = require('../../assets/images/expCornerMainImg/exp_corner_mdpi.png');
        }

        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='EMERGENCY CONTACT NO.' navigation={this.props.navigation}/>

                            {
                                !display ?

                                    <ImageBackground
                                        style={{height:183}}
                                        source={imgSrc}
                                    >
                                    <Text style={{position:'absolute',marginTop:40,marginLeft:20,width:240.5,fontSize:14,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                        Emergency contacts will be available after 1 Jan, therefore, please write in to Annual kick off Email ID
                                    </Text>
                                    </ImageBackground>

                                    :

                                    <View style={{marginTop:20,marginLeft:20}}>
                                        <Text style={{color:'#000000',fontSize:13,fontFamily:'hilti-roman',marginTop:4}}>
                                            If you need any urgent help, you may reach to the following team members
                                            and we would be happy to assist.
                                        </Text>

                                        <Text style={{color:'#dd2127',fontSize:11,fontFamily:'hilti-roman',marginTop:12}}>
                                            For Ticket (Train/Flight) Related Query :
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-bold',marginTop:4}}>
                                            Gurpreet Singh | TravelDesk
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>
                                            M: + 91 8285148204 | E: travel.desk@hilti.com
                                        </Text>

                                        <View style={{height:0.5,backgroundColor:'#000000',marginTop:5}}/>

                                        <Text style={{color:'#dd2127',fontSize:11,fontFamily:'hilti-roman',marginTop:5}}>
                                            For Airport/Railway Station/ Delhi/NCR Shuttles :
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-bold',marginTop:4}}>
                                            Akash Singh Tomar | Sr. Executive - Administration
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>
                                            M: +91 9582381609 | E Akash.Tomar@hilti.com
                                        </Text>

                                        <View style={{height:0.5,backgroundColor:'#000000',marginTop:5}}/>

                                        <Text style={{color:'#dd2127',fontSize:11,fontFamily:'hilti-roman',marginTop:5}}>
                                            For App Related Query :
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-bold',marginTop:4}}>
                                            Ashish Nautiyal | Asst Manager - IT
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>
                                            M: +91 7838069479 | E: Ashish.Nautiyal@hilti.com
                                        </Text>

                                        <View style={{height:0.5,backgroundColor:'#000000',marginTop:5}}/>

                                        <Text style={{color:'#dd2127',fontSize:11,fontFamily:'hilti-roman',marginTop:5}}>
                                            For Any Other Emergency :
                                        </Text>

                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-bold',marginTop:4}}>
                                            Tanya Manchanda | Kick off Event -Champion
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>
                                            E: Tanya.Manchanda@hilti.com
                                        </Text>

                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-bold',marginTop:7}}>
                                            Pramod Kumar Singh | Manager-IT
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>
                                            M: +91 9958893301 | E: PramodKumar.Singh@hilti.com
                                        </Text>

                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-bold',marginTop:7}}>
                                            Amol Oberoi | Head– Digital Marketing
                                        </Text>
                                        <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>
                                            M: +91 7290075839 | E: Amol.Oberoi@hilti.com
                                        </Text>
                                    </View>
                            }


                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
});


function mapStateToProps (state) {
    return {
        staticsContact:state.event.staticsContact
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getFlag
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContactNo)
