import React,{useEffect} from 'react';

import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';


interface CheckBoxProps{
  value:boolean,
  checkboxColor: string
}

const CheckBox: React.FC<CheckBoxProps> = ({value,checkboxColor}) =>{

  return (
    <View style={styles.WrapperCheckBox}>
      <View style={[
        styles.CheckBox,
        {borderColor:checkboxColor}
      ]}>
        {
          value ? <Text style={{color:checkboxColor}}>X</Text> : null
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center"
  },
  LabelCheck: {
    color: '#fff',
    marginLeft: 6
  }
})

export default CheckBox;
