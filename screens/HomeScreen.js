import * as React from 'react'
import dictionary from '../database'
import {TextInput,Text,TouchableOpacity,StyleSheet,Image, View} from 'react-native';
export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            text:"",
            isSearchPressed: false,
            word: "Loading...",
            lexicalCategory : '',
            examples: [],
            definition:"",
            word: "",

        }
    }
    getWord=(text)=>{
	text = text.toLowerCase()
	try{ 
	var word = dictionary[text]["word"] 
	var lexicalCategory = dictionary[text]["lexicalCategory"] 
	var definition = dictionary[text]["definition"]
	this.setState({
	 "word":word,
	 "lexicalCategory":lexicalCategory,
	 "definition": definition
	}) 
   
	
	}
	catch(err){
		this.setState({
		"word":"N/A",
	 	"lexicalCategory":"N/A",
	 	"definition": "N/A",
		'text':'',
		'isSearchPressed':false
		})	 
	}
    }
    render(){
        return(
        <View>
        <TextInput style={styles.inputBox} onChangeText={text=>{
            this.setState({
                text:text,
                isSearchPressed: false,
                word: "Loading...",
                lexicalCategory : '',
                examples: [],
                definition:""

            });
        }} value={this.state.text}        
        />
        <TouchableOpacity onPress={()=>{
            this.setState({isSearchPressed:true});
            this.getWord(this.state.text);
        }} style={styles.searchButton} ><Image style={styles.image}source={require("../assets/search.png")} /></TouchableOpacity>

        <Text>Word: {this.state.word}</Text>
        <Text>Type: {this.state.lexicalCategory}</Text>
        <Text>Definition: {this.state.definition}</Text>
        
        </View>
        );
    }
}
const styles = StyleSheet.create({
    inputBox:{
	borderRadius:16,
	borderWidth:2.5,
	width:"25%",
	alignSelf:'center'
    },
    searchButton:{
	marginTop:5,
        alignSelf:'center',
	width:"25%",
	alignItems:'center',
	backgroundColor:'#00ff00',
	borderRadius:10000000000
    },
    image:{
        width:100,
        height:100
    }
})