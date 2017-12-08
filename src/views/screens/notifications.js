import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView ,Dimensions} from 'react-native';
import PageHeaderNotif from '../common/pageHeaderNotif'
import { Font } from 'expo'
import {BoxShadow} from 'react-native-shadow';

class Notifications extends Component {
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

    render(){
        var {height, width} = Dimensions.get('window');
        const shadowOpt = {
            width:width-16,
            height:256,
            color:"#000",
            borderBottom:1,
            radius:1,
            opacity:0.2,
            x:0,
            y:2,
            style:{marginVertical:1}
        }
        let notifArray = [{
            "_id": "5a2926ad2ce3d227681781a9",
            "code": "89351",
            "body": "Hiiiii",
            "data": {
                "url": "asdadas"
            },
            "title": "Welcome !!!",
            "nid": "3bb23a30-db42-11e7-92f0-dbbf04f4ca5a",
            "read": false,
            "timestamp": "2017-12-07T11:31:57.395Z",
            "__v": 0
            },
            {
                "_id": "5a2926ad2ce3d227681781a9",
                "code": "89351",
                "body": "Hiiiii",
                "data": {
                    "url": "asdadas"
                },
                "title": "Welcome !!!",
                "nid": "3bb23a30-db42-11e7-92f0-dbbf04f4ca5a",
                "read": false,
                "timestamp": "2017-12-07T11:31:57.395Z",
                "__v": 0
            }
        ]
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='NOTIFICATIONS' navigation={this.props.navigation}/>
                            <ScrollView contentContainerStyle={{justifyContent:'center',alignItems:'center'}}>
                                {notifArray.map((notification,index) => {
                                    return(
                                        <BoxShadow setting={shadowOpt} key={index}>
                                            <View
                                                style={{position:"relative",
                                                    width: width-16,
                                                    height: 256,
                                                    backgroundColor: "#fff",
                                                    borderRadius:1,
                                                    overflow:"hidden",
                                                    justifyContent:'flex-start'
                                                }}
                                            >
                                                <Text style={{alignSelf:'flex-start',marginTop:16,flex:0.1,fontSize:14,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                    {notification.title}
                                                </Text>
                                                <Image
                                                    style={{flex:0.7}}
                                                    source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISERMWFRUXFxgWFxUXFxYWGBcaGBcYFxUXFhYZHiggGBolGxgZIjEiJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy0mICUrLy4tLSs2LS0tLS0tKy0tLS0tLS8tLy0tLS0tLy0tLS0tLS0uLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xABKEAACAQIDAwcJBQUGBQQDAAABAhEAAwQSIQUxQQYTIlFhcYEHIzJSkZKhscEUFULR0hZTVIKyYnKTosLwM0Oj4fEkg5TTRGNz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADQRAAIBAgQCBwcEAwEAAAAAAAABAgMRBBIhMUFRE1JhcZGh8AUUFTKBsdEiQpLBU6LhM//aAAwDAQACEQMRAD8A0LMeuiT11ymu08aLNp7rAkIJIESdQNJ76N2LRi5SUVux3mPXRPbVSPLm3Gb7Pey+tC5fbMUW+XNtpy4e80b4CmO+DpWfSw5nb8LxfU+35LbJontqq/tov8LiOv0R7d/aPbXhOXVsmFsXieoBSe3QGnSw5j4Ziup9vyW2T10Seuqt+2Q/hcT7lB5Zru+y4j3B+dOlhzI+G4rqea/JaZPXRJ66hdg8oUxTXFW26FACc8cSRGh7KmaupJq6OWrRnSlkmrM7Jok9dcoqTM7Jok9dcooDuY9dEnrrlFAdzHrok9dcprtPH27Fq5eumEtqWY93AdpOg7TQFF8sXKfmbAwltvOXh04Oq2txH8x07g1YjNSHKDa9zF4i5iLnpOZjeFG5VHYBAqOoDs0TXKKA7NE1yigOzRNcooAooooAooooDs0TXKKA7NcoooDs0TXKKAKKKKA+sZqI5Wn/ANHiP7v+oVJ5q8XraupV1DKd6kSD3g1EldWNaNRU6kZvg0/BkJsjlRgLey7NjEAX2Wc2HjX/AIjEHUZdAQd9O9i8sNmC1iFt2lwhZYiB5w5WA9AHdPH1q9/cmF/h7X+Gv5UfcmF/h7X+Gv5VioTXI9OeLwks11PV33XO+23kSFvlngBesMcQsLYuIxh9GLWCB6P9lvZUPsa9sjDX7mJs49s7hwQyyvTYOYHNg7wONOPuTC/w9r/DX8qPuTC/w9r/AA1/KpcJPe3mUjicNFOMc6TVn8uvkJ7O8o04PEPeuWhigW5lAjQwCrkkSd5zcRTLkz5QXuYlWx727dtbb5WVGHSYpodTwBqR+5ML/D2v8Nfyo+5ML/D2v8NfyqMlTTU096wNpJU3r3adxCckLyvjMe6GVZyynrBuOQfYat80zwmBtWpNq2iTvyqFnqmKcZq0hHKrM4MbXjXqucVZWS17EkKTRNJzRNXOUUmiaTzUTQCk0TSc0TQCk1kHln5TZnXA2j0Uh70cW/AngNT2kdVaHyu2+uCwty+0FvRtqfxOfRHdxPYDXzdib7XHZ3JZmJZmO8kmST40AnRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQH1TmpDH4sWrb3CCQiliBvMV6zUy23bZ8PeRRLMjADrJGlQ9jSkoupFS2urio2gwdEuWimckKcysJCloMajQH2V5XawIACnnC/N83pIYasSfVC9KeojrFR9ux5201u3dTKTma4xYZCplQGdtSY3DhvrqWLouDFZekxyNb0kWiRlg+uDDHsJHAVneR2OlR7NufHXTd6Pv8AC5L4vFZMsKWZmyqojqJJJOgAAOtGDxecHolSrFWUwYI7RoRBB8aRxl1gBCllJIcKekAQdV69Y7daQ2PaKi4IKoXJRWMsFIEydTq2Y6knXwq93c5skeivx9etu2/AlM1Gaks1GarGArmozUlmozUArmozUlmozUArmozUlmozUArmomks1VLylcpPsuFKoYvXpROtV/G/gDA7SOqgM78qHKX7ViebtmbNklVjczfjf2iB2DtqmUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUV7W2TuBPcKA+nM1I4vFC2j3GmFBYxvgdVGemW2gWsXlUEkowAGpJjcBxqHsaUoqVSKezaHdjFsxg2nQRvbJHd0WJrxhdpo6M4kKsyT1AZgw7CuopnjbTC2y2y5Z4SSzNlDGGfsgSfYKRNq5beYW4HtlMoUqoKAm2G1MAgss91Uu0dMaVKabvrw4bb73+/AfptPVQ1u4uf0CcvSMFgNGOUkA74ribUJcpzNzMApI83oGJAJ6fYd3VUfh7sNbFnnh0hnR1fIq8ek40jhlPwp5ZB+0XWgwbdoAxoSGuyAeyR7aJtlqlOnG/6eF1e/O21+Xa/wChW1tMt6Nm4RmK5vNx0WKk6vMSDwpXDbQR2uIJzIYIPzHWJBHhUNgLgXRhiAeccwEu5dbjEbliCCKfYfZ1wh7qiHS5cKg6c4hIzIO/eD1gUUmTUoU02tuT9b9653F12qhAaGg2zd3D0REjfv1r0u0kNtbgkqxVQI1BZgkEcCGMHupLD7MAtJmV5OBuaFWBFwlcqED8W/TfpTnaFs2+b5m2xS6+Ga4oHoXLdy23ORvClVhuohT11GaRZ4ejmUb8efBP8etT0LlxmZbVi5dyGHK5AFMA5ZdhLQQYHWKe4DCNdti6kZCCdTBEEhgRvBBBBB3EGmn3m9lb1o86me891Ltq21wsLj85lkKwBElekNwkU62VtS+bEXs2bNcHTADZecYJOUAHoxqN9WUtTCrRioXXNa89N+Xhtszowrdg8RXpcIfWHhJrwzdZ0p5s6y10OV4QFGmpPaewGl2ymSC3EHwyKCzuQACSYAAA1J1NZLyi+z4m+150a5+FAznKqjcMqgb9SdTqTV68pTvYw1u2dGuuQRI9BQDHixHsrPLVsELJ1KqY7wCa4sTOomkme17Mw+HnFzlG77Ti3LKCFw9kD+6fzpO9jbJ9LD2T3pP1pw9tRuFM3shmCwNTFYwjJ8Wd1acILSKt3CDXMKxg4W0T1KHB/wArUg9jZ+42Sp7LriPBpq17JFi2zIywANDKgTpObMNTBHxqwYTHomtsEA9XNkH/AC13LDyt8zPDnj6bf/lHwMwOy9ntue6v89tvmoryeT2EO7FMO9FPyatYO3Tu1nutn/TXRyhvKRChh22l+gq3RTW0zP3nDveivo2jJv2cwn8W3+Gv667+zuD/AIpvcX9da6OU97937LafVTXnHctLtm21w2gQsaG0q8Y3x9KhwqL9/kXjVw7dlR/2Zkv7PYL+Kf3E/VR9wYH+Jue6n6q0RPK+P4VT4L+mnFjyrl/RwIPb0B81rO8uv5G8YU3tQX8jMxsLA/v7vst/nXr7jwH7+7/060fF+VhrcZ8CEkSMwAzDrU5dR2infJzlvjNoM6YTD4UMi5iLkjSQN6qdZPGNxqUpvafkVnKjD5qK/kZb9ybP/fXv+nR9ybP/AHt722/yrU73KvaKFkezhFdSVK5CdVJBgjeNN9NrnLXHrvtYP3W/TV+iqdd+Bn7xh/8ACvFma/cuz/3t73rX6a6Nj7O/eXvft/pq/nyk4oFVNnDSWCiAd5MCehuqQt8uMZPSw1g9oywf8s1Vwn134F41qDelKP8AIzIbJ2d614/+5b/TXRgdmj8Lnvuj6LWoJ5RLm77Lac+qr2p9hApK/wCU9kID7PKzxOT6LVNeuzfThh14maLhtnTHNeJutH0pEnAjdYXxe4f9Vabf8pjRK4EHr1Sf6dai8T5UXABOCyg7iQoBjfBya0Ub652VnPLp0MV4FD+14dfQs2wes6/1GvD7TbgyjsEAfCrZifKS7+jh0Hgp/wBNQ9zlzcJnm091fyq+RPiYOtJftS8DV89eLt6BME9g1NJZ6M9dJ5a31PFnaStJhgozSzCAMs5pM8INcXaS9GVdVYgKzLCknd2rPaBXBsPEtYugWWlrl0AERJ5xjEdR692tecRZu3la1bs3S7aFTbcZNdSxIgR8Y0rPM7Hf0NNyslpez12XP1poK3MeAxVVZyvpZROWdYJJGscBrXpMchyQZzzGnUCSDO46Gkvs12wzrdtXVzOWU827BgYOhUHUbo36Ui+zsRbNq5csXVBuXGgW2YgMpiQoJBP1pmZCw8Xpbho+f6W/v4bPUk89SWEbza95+lRuEwd64CyWrhAMao66wDuYA8akEtsihXUq0kwd+u6tEcMk07M9vfy16VzxEDrpjibvSHd9alUPRBBXuLAVJBHvfbWPlXgXZ46/73VJXyAupEHSQZ+VMFUAi3MzBzdQn47qholOxKYDZPOrIcTxBB08aWxGJGCRpIJBzmOrKVCx1k/OpLZr2bS5RcntOlUHlttQXMSbdtpQNDHgWFsGPD5k1KjqS5tlc5abTvY9LZaM1vnIUCMwJWY7QANOOtUxbrgDW23CM3SEdY4Vc2xKWjaZ0ZxmYwscCOsimeE2dh75ylrquelomctO9oUEIJHEnfXNiKV2epgMSoKzKyjO5gsFnTUmPCJp1b2dctulxmBymSBOvXVss8mEJlbtwx12lH0rxjeTTx0edfsAUfOs4U2tTpq14zVrkcqKt3MwUqdVLbgTEgyNDpoe8VMWLFwrNu2CvWrafBai/uvHAZVw7ntJSfHpa0+5OvjMLeHOYfJbuSrMTMkKWXQNoeieHXXWpX4HjTpOPEmeQ1kXRiDdUZlvMkdQUD/vUnicHh+fe3cZrcAZAoMMCXnq1Gms0ywmNNtnKKBnZnbvMdtOsbi890FlBgaErMTvE+FaGJI7LwdjM1u2WuBRJZ1ggmIWeI3nfSu1thrfw2ItBRma2wA7Y0+NNLG0CjwoEGJhd53T8qd4PbBF0gxEj4ioYTadyKwPJXDPhMPiFtIrleauQoAdboyrmA4hyjeBrKBcW6pylbZ0kKCN28Eb/wDxW1bExeTDYq23/KZ3A7Bda4sfy5apN/ZT85cy8nrbjM0P9oK5hJhonSRrXPVo5mrHoYXGOmpKaumUrbu07l/mrbOG5pcgIAG8qNe2AKsnkt25hMDiMXzzhBcZFVmlhkVrkjMJ6QJTfwB6qsq8hMLfsKXwT4S7O6y3OQBvDZ3hge6ahNp+S/m7ZOE565ckDLdS0oIJ1IZW4dvCatCEo6lK1aFRJLREX5QOVVtsaz4R1e0BJbpkM7Dp5QI0039ZNVnEcq7ghbloagHoseO7Q1b7Hk32gVKsy2xr0Vghs2+T9O2mN7yYY+40XASEa2gbMD5tyQXAn8BAJHENprWupyO3Ap/28mLiz0XV4IMaHSY7e3jV65NYzPh0Z7alpaTLiekdYmqntDkpdwzWhegB2ZHAIOVrbhWE7tQVYHt13VYOSCi6qzdvKqMFZSRoAAWgBYAAnjNEQU+5tEOxZhvO47vbUhs3aZDqC7ZJ3EyBWlLsTZg/Cp7CCR4iNacg7JW4tm5s7D2ncKbSuyedV/Ra3lneQRBgjqrGpRzHbh8a6TM5xlgHU3IAG7WN85h/uaS+92e2llgGRPRzAEjx7jWh465gbK3mu7Mw+W3BhSczAxqMywePumq/c5V7LgFdloJMCSu/3ay6FxVmzreLhN51D7FYUqJgAans7opSy2Hg89hxcafSDFdO0Ded+vdUltXaWHZgiYK2hYTIO72LUdb2jYUZWw6ll0J6/h1VooW2ZzSxClvE0nPS+BuecT+8PbOlMM9AuVseeX7EY650YYzJ4dkD60DaN/1j7B+VVMbfvQPR045dT38KcjlRc9VfjU3ILMNoX/WPuj8q794X+s+6PyqsjlXc9RPj+dd/au56ifH86m6BZfvC/wBZ90flUJtG+zXWLmTA+VNf2sueonx/OuPizd86wAJ0gdlAN8S/SHh86dFqj8YYZe76munFEDUjsiDUEkpebzQ/v/6ab4dukO4f1Gm73HIymeuI0muW5Qoeo6/Oq3RfJLkTW1sYLVst+I6L39fhvqgWSQ43HzjekJ3299XDaPNXyGW4pWOjBGoPHxqrYuyFvFVMw43a+laY1sjMS2o5i2Rc5vV/RFwA+jwtgn21K8lccjW2Fvm7l0N0pe6JXgRm6W7TdGhqI2oWCoFiZbQqrer6wMVXNqZhdS6jBXCBcyEcPSIyiFEnqrCpUUNzrw9CVXRGpHGXIPQ0B1CPcPwGtOrVy8RosT13Gn4g1k45S49RAxDR3J+mvT8qsef+e3sT9NZrEQZ0S9n1Ut16+hpz4fGHdfYeNo/O1ULt6xiV5o37zuhYgDzejG3cgwlsE6Txqp2NrbWcZkvlVO6RbE6a/hnfNe8Ne2g9xTibwZUkhWgdIjLMBROhNaqonwZyToZd2iWFu3wzex6Va0uYHpbhpDael21E4TaN1nuAtbhWIAH/AJqR+2tpu4cOw9tXMWPr1pc6mG3Dgfzr1zK87GoOn4Wptdx7Zl3buqnNnGlryCBqVHxoQS+xh5zGpMxbuq3flU/WpnHWNpFmFu7bVZaIRZAk5RLTOka1FbMCjE7RCnQuR7yWE+ZnxqsHAXWd2G24BZmyxfMSSYEMN26ockjRU5S2NC2BhsYtlRi7itdlpKxEZjl3KOEcKT2zh8eVuDDuikqnNkxo2c85mlTpkiO2apeI24uDt5ftb4u60BUBupJkkku05REburtquY7yhXrim2iXLcxLjEXHIAM6AgVHSRJWHqWvY0r7DtSf+OsR/Y/RVg2VbvLaUYhg1zXMyiAdTHAaxHCsNw23sY650uYgprrzjRpv/FXbnK1gpRsXdXMi2yQ90kZrvO3nEfiCBba8ZncKnMivRyZ45eKRevAmfPXD3SdaS5IuoS6Q4Ks+7KQ2ZuGp1AneBUXtfbXOuHGpN65iHndNxhltjsVFA6pJqx8mMOjWA65Vn1bQBBGh1zamRvpdMhwaJ826YX1hlV3ZXYSisQGKiTKgiSsa6UwwuLd3RFuasQoloGvWZ3VoN3Zy7vvhhFvmgP8A00KkRAEaSOO/tomhlfIzrFNJVw6XrdvMblsuDn6DQhIXSSYPYadbVxmHe3lTC2FaQA4uXGKQNebBkH1eFSKchMKiun3pbhjJOVMx149OKZvyHwalWG07ZymfQXXfppcqrlqaqCy6lcx5sySN8rGrTBmRM7p+VMLCWulIB6R1JbsqZ2lsTDWmdhjbbZo6IXXT+Y1G2dg28onEKCdYjdJmPSo2VUbsvWejPTXPRnqTIdZ6M9Nc9GegHWejPTXPRzlAOs9TOAPmV72+lVzPUvs+5CL/ADfOpQJfbuzFtILhctJAAPbrrUILgkaU82vtO5cW2DvUtuG/RY0/3vqN5xpGmvdUMtEtF4/If01U+WW0+ZsZF9O4CAeoRqSeHV7aseKeFJJgAST/AC1QNq4m7fUgkQTMRqANwndXFnUXqz3Vh5zV4rYq4x2VYKmREkbtd2tWXkbic2fN0IuWyWLR6Suo6XCoe7glICaNwgNB39og0gmDa0txUkZ4ENI1UypBBykz21aFWN73M62EqOOWxbuU+NBQG3czgXChaZ/ADGaq6G6K9Od5IyxBO/WNa8YK9cNnmbltjD5wRx0ykmTpoBu0p6wMLA0CgbhG7XXjWWJqpnX7Nw7incZO1esDdzPbtECGYCeMcaLwmmRcoyuu9SCPCsqTVzfFJ5XYumHxypeIcdH0F0JggCTpumY8B11JhVcSBE9kfMVXMHtFC3OI0Zh0l0JB01gkdQB7hU1s6494kW2mN8qoA8S0TXq3XA+WytPVFdfZl61evFELqzZgRE9oI767dxdwRNtx/Kfyq5Jsm/MyvvW/1V7u7Ivncisf/wCtof6qF0+wpZ2i+YdFvdNP9l4xnxFtVBBldToBGpJNTF3Y20D6FnD97YlPkBUdj+SO1rylD9lVTEgXlnQyNfCqNs1ja+tiQwWIbLiL1k5s959QQJ5sgg69eRfaKqLobJm4XUCBGcnfu3HsqZwPk62gHm5csFYYFftCxJUgabt8eylNn+T3HW0Kk4ZoOg55dRrMmOBj21zThJ6o9LD1aUU02teLI7amy2w5t3Lz5DfXMjG4sgaSAY6OhB066ixs9rmlm4jkZi2V3Y6tIJyqeFXXFeT3EXraG61ssqkKvPoUXXcCwJjdWhcmtjWsHh7dm3kEKC5DJLvHSYmddfhFTCm2+XeUrYiMErWb7CgeTrk4zWLovKwVbmVAQyiIBYiQJEmq1y85PReuLbyKQ65VzKoy82snWI6U1t2JxTBSbaqzcAbttR4mT8qzp9hbbLO4xFlC7FiEvqo1On4ZMCBrwArZxdkjijWinKTW/AznB8nmZHJdA6kDJmUgqRo2YGN+lWHYxexaFoi2YJM86o3md1WS3yd2uWXnr9m4oOoa+rEDjEgeyR8iFb3JvHzotgjrOJUfDIao+kjsdFP3aov1afX/AIVS9gEAnD5UbrFy2fmxqHxGx7juDcVAeJRlM/yg6Huq9XuSGNcQyWP/AJVv/wCqow+TvGhgycwuu84hD8lFYONQ9CNXDc0VHEYOwBlg5okRwHA67zxivScmryWrd9kU27nokETHWRwmrjiuQuPj0cMT1m8NOOmmo4xuqFxPk92iQAz2SBMA4gECd8A6Dwq8ISy2dznrVqee6aaIJsEDuEwTHdwFSFnZVsAc7ox1jMFgcNDRc5DY9NzWRHq3wPrUdf5HYsklubY9ZuqT7TWsYPicdSqv2lvz0c5TbPXM9bnmjrnKOcprnoz0A6z0c5TXPRnoB1zlS+Afza+P9VV7PUzs9/Nr3H+qpQFca2i954xwWkBMjX/N9a5jmELJjU9vAVHY7GJaUuW0G7Q6k7h7aiRaO5YeUmN9G0Owt7ug+vsqtBJRu8T3aU7xFws2Y6kwT7tN7bbo3nTv7O+vCnLNI++owVOFhDayCTGXm8un0/330li0LW7KneQGbwECfaaWa7bkkqdDvO7TjFAZ3lgPFuru4Dvq6m9CjpKzVxO0GXcYr2+OIGbKu+GgsJ0ncpHVTHF4/Dp/xb4P9lDPh0J+MVE3uU1hAVsW33zJIXXdP4j8q3UJVNonnyxFOg/1VFbktSwYe6zwXS1BI9IuWidY6W+K9XMGDww8dRJnx6W+qfc5XYokkMAOAiY8TrXn9rsX+8HsFXWFqc0cz9rYflLyLHfwKfu7J979VDYC10YtWtVBM5t5Gv4qrn7W4v1x7ooHK3FeuPdFW6CrzKfEsJ1H5Fi+wW/3Vj2P+qupgLWWeZs5sxH44iAQfS6yarv7XYr1190UftdivWX3RU9BV5kfEcH1H5Fh+wW/3Nj2P+qhcFa6c2LOiSpGf0pAg9LqJqv/ALX4r1l9wUfthi/WX3RToKvMh+0MH1H5D29gUCJCnOD0t2UjhHGaVs4uwoh8LmPWHZfhFRv7YYv1l90VK2sW11VuC7cAOhAKgqw3qTl8e41boJve3mV9/oL5E19Ee2vYd7V3zItkAZBzjmSTExuJG/Wtf5D8n7L7PwrXEUk2wSSBrJJ+VZps3CZ//wAi/PVKEfFavOzuUdyzYt2EAKogQMQcxAESYaJrSnSlHc5cTi4VLZfXgZFj8CM5ZV6JLHcSAJkUvhOT5ZmRl1XqAI9o0NWYbA0gYrEKIjQoN27cKU2bsXmrqFcRcYu62zzmUr5xguY9ZBM61aEJL5jKvWpSd4X+pBWOSoOqrMb4Ex3xXg7Ea1mzJ0QQsmBqQSNN+4HsrYcDyRe2uVbkgksZE6mJI6pis+21m+0XGulVFsuumgVEZlDntJG6Iiorq0e00wM2534LV9xXjg+wez/vSN3Z00re5X2VMW7Rb+1oAe4Nmj4U2blqeFkD+aPkorlVCt2Hpz9o4Raasc4XBM5W3dLFJ4kkLpEgbhTFtj3OCn2Und5Y3juVR4ufrTS7ylvtvye7PzJrWNGot2jkqY/DyVlF+Qtd2Y40KkeFInAN1Ugdu34gPA6gqj6Ui21Lx/5h+FaKnPmc0sVSeyZf89HOU3z1zPW55w55yjPTbPRnoBzno5ym2ejPQDnnKmtnP5te5v6qrmeprZ1zza+P9VSgLY+4IWddTu7hVJ5R7RS5dVAGyIesavGp7hu9tT3KnaXNWlIgsSwUHuEnwqji9JByDtgH299RIvDc0u4d3h/TUVbbzVskAkMSpO9dIJHfT83QQCDIgbv7pqNsHzFvvPZXh6pH3d05JP1scfgN+o+dVjlhiGOJuW8xyKQAs6DoidOuZqzIZZB1n6GqbyjecViT/wDtuewMQPhXdhIq9zwvbNR5Er8SOoooruPngooooAooooAooooAooooAqe5LNJvW+BTOO9CPoTUDU9yTYK19idRaIA68zKCfAfOhMdyx7JukMKswaqrswCQasAxC9Y9tWIa1FMVecRlXN16gR1b99Buk9fX6PVqDvr3g8NdxDi1hymY72aSqjh0V1YnWAPVPVUrc5Jixewlu7dOIe5eViSMoVbSO75ba6BS2Qazu360Fizci9oYu4WF8MbQUFbjLlOadw9YRx7KzDl+STtDL68+AuEN8Qa3XNWOcotj3LeKv27xUre+0OmU70e5nAaRoRLVjWWz5M7MI01OHFox2ilcVZKOyHepI9hpKtDjCiiigCiiigL3noz0hmrmagHGejPTfNRmoBxnoz03zUZqAcZ6l8Bc82vj/VUBmpXE43LaVBvaZ7s31qUCL5TY4uyspgAsF7oX50ngL+hLanKdfCkca4lJEiW08Fpa6ylVyqFMPJHHQb/j7aiTsWgruxasFbKKATrv/wAtNLJ8xb7zTk3d3+/w1HWbnmU1G815Ek5XfafYQlGForZL8DvCGbtsf2hVG2lczXrrdbufaxNXHZ93zqHq1+tUYmu3DK1zxPas82Vd/wDRyiiiuo8gKKKKAKKKKAKKKKAKKKKAK927hUypIPWNK8UUBNbJ28bci4guA8TIZe4jeOyp3al880t20q5Dxhp19E79OI8O2qRVr5O3M+GuWm1idOz0xHbIrOotLo68LUvLIy0cgg1uxiMY1xiilFa2vRcMGXIQ53L0zoKvO1cabNhMaqNcchS5JllRhmOVtywY3CDxms75K4sfYsfbWQpuWSJ1MM4GvbpUrifKUbDPhxhlZbZa0CbnpBCVkjJxArSMkoq5SpTcptRLZsHlwr3FsXSDddA6qqwcpEjMxOXMV1gRUZy4lsZhLxhVE2yGdJbPK6AEk76b4fb3Ni26YO2uYKFgkRm3AHLu13bqrHKXlK2MtYfFMgtm3eKqoYtmyw0zA40qaxZGG0qplX5aYTJiSfWE+I0P0qAq7eUC1IRx1/Aj8wKpNVg7xTIxEctRoKKKKsYhRRRQFwooooAooooAooooDzduBQWO4a1FW8SWGY8Z8NdBRRQDfGP6PefkKVS50R3MPhRRUS2Lw+YsLX93h/TTFbnml7zRRXDY97O7hhL8Fj1Ix/ymqtRRXVS2PLxjbaCiiitTiCiiigCiiigCiiigCiiigCiiigCpjkziclwj1h8RqKKKhq6LQdpJondivk+1JwPNx3LeWPgaiNqAtfvRxuXD/mY0UVktYo75aSm1yNKx+IH2ayey2fdGb6VRdtKFRLS+jZi3HWzKGZ/p4UUVersY4VXmxxt25zmEU/2AfYAfoapNFFRT2Ixfz37AooorQ5QooooD/9k='}}
                                                />
                                                <View style={{justifyContent:'center',alignItems:'flex-start',flex:0.2}}>
                                                    <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000'}}>
                                                        {notification.body}
                                                    </Text>
                                                </View>
                                            </View>
                                        </BoxShadow>
                                    );
                                })}
                            </ScrollView>
                        </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
});

export default Notifications;