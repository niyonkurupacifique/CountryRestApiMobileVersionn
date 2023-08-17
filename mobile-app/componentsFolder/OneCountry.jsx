import React, { useEffect, useState } from "react";
import { Text,View,Image } from "react-native";
import { ActivityIndicator } from "react-native";
const OneCountry=({route})=>{
    const{name}=route.params
    const[CountryState,setCountryState]=useState([])
    const[newdata,setNewdata]=useState("")
    const[loading,setLoading]=useState(false)
    const getOneCountry=async()=>{
        setLoading(true)
    const result=await fetch(`https://restcountries.com/v3.1/name/${name}`)
   const result2=await result.json()
    setCountryState(result2)
    setLoading(false)
    }
  const getName=()=>{
  const  res= CountryState&&CountryState.map((item)=>item.name.nativeName)
  const  array=Object.values(res)
  const newdata=array.find((item)=>item.common)
  return newdata
  }

  useEffect(()=>{
   getOneCountry()
  },[])
  


 return(

     <View style={{ justifyContent:'center',alignItems:'center',height:'100%',width:'100%',paddingHorizontal:'12%'}}>
         {loading && <ActivityIndicator size="large" color="#0000ff" />}
            <View style={{ flexDirection:'column' ,justifyContent:'center',alignItems:'center',paddingTop:"10%"}}>
        <View >
        {
         CountryState&&CountryState.map((item)=>{
           return(
            <>
            <Image style={{ padding:'50%',width:'100%',height:200,justifyContent:'center',alignItems:'center'}} key={item} source={{uri:item.flags.png}}></Image>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>{
               item.name.common
            }</Text>
            <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Native name:</Text>{
             Object.values(item.name.nativeName)&&Object.values(item.name.nativeName).find(dataa=>dataa.common).common
            }</Text>
             <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Popolation:</Text>{
               item.population
            }</Text>
             <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Region:</Text>{
               item.region
            }</Text>
             <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Sub-region:</Text>{
               item.subregion
            }</Text>
             <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Capital:</Text>{
               item.capital
            }</Text>
             <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Top level domain:</Text>{
               item.tld
            }</Text>
             <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Currencies:</Text>{
               Object.values(item.currencies).find(itemm=>itemm.name).name
            }</Text>
             <Text style={{textAlign:'center'}}><Text style={{fontWeight:'bold'}}>Languages:</Text>{
               Object.values(item.languages)&& Object.values(item.languages).map((item)=>{
                return (<Text>{item}  </Text>)
                
               })
            }</Text>
             <Text style={{textAlign:'center',paddingTop:'5%',fontWeight:'bold',textDecorationStyle:'solid',textDecorationLine:'underline'}}>
               BORDER COUNTRIES
            </Text>
            <Text style={{textAlign:'center'}}>{
              item.borders&&item.borders.map((item)=>{
              return <Text>        {item}</Text>
              })
            }</Text>
            </>
            
            )
           
           
              })
             
              }
        </View>
        <View>
        {
    
        
        }
        </View>

         
           </View>
        </View>
    )
}
export default OneCountry
















