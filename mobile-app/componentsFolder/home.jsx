
import { StatusBar } from 'expo-status-bar';
import { FlatList,TouchableOpacity,Image,Button, RefreshControl, SafeAreaView, ScrollView,StyleSheet, Text, View } from 'react-native';
import Header from './header';
import { ActivityIndicator } from 'react-native';

import { useEffect, useState } from 'react';
 
const Home=({navigation})=>{
 const[countries,setCountries]=useState([])
 const[searchQuerry,setSearchQuerry]=useState("")
 const[selectedRegion,setSelectedRegion]=useState('')
 const[countriesArray,setCountriesArray]=useState([])
 const[searchingStatus,setSearchingStatus]=useState(false)
 const getSearch=(text)=>{
  setSearchQuerry(text)
  setSearchingStatus(true)
 }
 const getSelectedRegion=(itemValue)=>{
 console.log(itemValue)
 setSelectedRegion(itemValue)
 setSearchingStatus(true)
 }
   const getCountries=async()=>{
      const result=await fetch("https://restcountries.com/v3.1/all")
      const newResult=await result.json()
      setCountries(newResult)
    }
    const handleRefreshing=()=>{
      setRefreshing(true)
      Setlist([...list,15])
      setRefreshing(false)
    }
    useEffect(()=>{
     getCountries()
    },[])
    useEffect(()=>{
    const CountriesArray=countries.filter(item=>
     
        {
          const searchQuerryy=item.name.common.toLowerCase().includes(searchQuerry.toLowerCase())
         setSearchingStatus(false)
          if(selectedRegion==="")
          {
            return searchQuerryy
           
          }
          else{
            filterResult=item.region===selectedRegion
            setSearchingStatus(false)
          }
         
        return searchQuerryy &&filterResult
        
        })
  setCountriesArray(CountriesArray)
  console.log(CountriesArray.length)
     
    },[searchQuerry,selectedRegion,countries])
    return (
      <View>
     <Header  onSearch={getSearch} onSelectedRegion={getSelectedRegion} selectedRegionState={selectedRegion} />
     {
      countriesArray.length===0&&<Text style={{textAlign:'center',paddingTop:'40%',fontWeight:'bold',color:'red',fontSize:20,fontStyle:'italic'}}> Country not found</Text>
     }
     {
      searchingStatus&&<ActivityIndicator size="large"></ActivityIndicator> 
      }
       {
      searchingStatus&&<Text style={{textAlign:'center',fontSize:20,fontStyle:'italic'}}>please wait..............</Text> 
      }
     
     <FlatList  data={countriesArray}
     
     renderItem={({item})=>
      
     <TouchableOpacity onPress={()=>{
      navigation.navigate('Profile', {name:item.name.official})
     }}>
     <View style={{justifyContent:'center',alignItems:'center',paddingTop:'12%'}}>
     <Image source={{uri:item.flags.png}} style={{ width:'70%', height:180 }}></Image> 
     <Text style={{fontWeight:'bold',fontSize:20}}>{item.name.common}</Text>
     <Text><Text style={{fontWeight:'bold'}}>Popolation:</Text>{item.population}</Text>
     <Text><Text style={{fontWeight:'bold'}}>Region:</Text>{item.region}</Text>
     <Text><Text style={{fontWeight:'bold'}}>Capital:</Text>{item.capital}</Text>
  
     </View>
     </TouchableOpacity>
     }>
  
     </FlatList>
     </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    warapa:{
     marginTop:'10%',
     flexDirection:'row',
     justifyContent:'space-evenly',
    borderWidth:1,
    padding:'2%',
    borderTopColor:'transparent',
     borderBottomColor:'blue'
  
    
  
     
     
    }
  });
  
export default Home
