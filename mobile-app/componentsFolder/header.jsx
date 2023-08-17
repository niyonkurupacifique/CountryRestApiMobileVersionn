import React from "react";
import { Component,useState } from "react";
import { Text,View,Image,TextInput} from "react-native";
import searchIcon from './pictures/Vector.png'
import {Picker} from '@react-native-picker/picker';
const Header=({onSearch,onSelectedRegion,selectedRegionState})=>{
    const [selectedValue, setSelectedValue] = useState("option1");
return(
    <View >
    <View  style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:'5%',paddingTop:'3%'}}>
      <Text style={{fontWeight:'bold'}}>Where in the world?</Text> 
      <Text>Dark mode</Text> 
    </View>
    <View  style={{flexDirection:'row',paddingHorizontal:'5%',paddingTop:'5%'}}>
        <View style={{flexDirection:'row',paddingHorizontal:'5%', borderWidth:0.5,width:'100%',shadowColor:'white',shadowOpacity:3,elevation:9,borderTopLeftRadius:6,borderBottomLeftRadius:6,borderTopRightRadius:6,borderBottomRightRadius:6}}>
      <Image style={{width:15,height:15,marginTop:14}} source={searchIcon}></Image> 
      <TextInput onChangeText={onSearch} placeholder="Search for a country" style={{marginLeft:'10%',paddingVertical:'3%'}}>
   
      </TextInput>
      </View>
    </View>
    <View>
      <View style={{marginLeft:'5%',marginTop:'5%'}}>
      <Picker selectedValue={selectedRegionState}  onValueChange={onSelectedRegion} style={{width:'55%'}}>
  <Picker.Item label="filter by region" value="" />
  <Picker.Item label="Africa" value="Africa" />
  <Picker.Item label="America" value="Americas" />
  <Picker.Item label="Asia" value="Asia" />
  <Picker.Item label="Europe" value="Europe" />
  <Picker.Item label="Oceania" value="Oceania" />
  
</Picker>
      </View>
    </View>
</View>
)
}
 export default Header