import React,{useRef,useEffect} from 'react';

import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Animated,
    StyleProp,
    TextStyle,
    ViewStyle
} from 'react-native';

const width = Dimensions.get('window').width;

interface DisplayCounterProps{
    indexImage:number,
    primaryColor: string;
    secondaryColor: string;
}

const DisplayCounter: React.FC<DisplayCounterProps> = ({primaryColor,secondaryColor,indexImage}) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const marginLeftAnim = useRef(new Animated.Value(10)).current; 

    useEffect(() => {

        fadeAnim.setValue(0)
        marginLeftAnim.setValue(10);

        Animated.parallel([
            Animated.timing(
            fadeAnim,{
                toValue: 1,
                duration: 500,
                useNativeDriver:true
            }),

            Animated.timing(
                marginLeftAnim,{
                toValue: 0,
                duration: 500,
                useNativeDriver:true
            }),
        ]).start();

    }, [indexImage])

    return (

        <View style={styles.indicator}>
            <View style={[
                    {borderColor:primaryColor},
                    styles.outerCircle
                ]}>
                
                <View style={[
                    {backgroundColor:secondaryColor},
                    styles.innerCircle
                ]}>
                    <Animated.Text style={[
                        {
                            opacity: fadeAnim,
                            transform:[{
                                translateX:marginLeftAnim
                            }]
                        },
                        {color:primaryColor},
                        styles.textIndex]}>
                            {indexImage+1}
                    </Animated.Text>
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({

    indicator: {
        width,
        top: 20,
        left:15,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    outerCircle:{
        width: 45,
        height: 45,
        borderWidth:2,
        marginHorizontal: 4,
        alignItems:'center',
        borderRadius: 100 / 2,
        justifyContent: 'center',
    },

    innerCircle:{
        width: 35,
        height: 35,
        alignItems:'center',
        borderRadius: 100 / 2,
        justifyContent: 'center',
    },

    textIndex:{
        fontSize: 20
    }

});

export default DisplayCounter;