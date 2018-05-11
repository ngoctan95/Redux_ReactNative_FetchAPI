import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    paddingTop:15,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity:0.5,
    shadowColor:'grey',
    shadowOffset: {width:0, height:1},
    shadowOpacity:0.5,
    elevation:1,
    position:'relative'
  },
  containerCard:{
    borderWidth:2,
    borderRadius:2,
    borderColor:'grey',
    padding:5,
    margin:5,
    borderBottomWidth:2,
    alignItems:'flex-start',
    justifyContent:'space-around',
    alignContent:'center',
    elevation:1
  },
  containerCardSection:{
    alignContent:'flex-start',
    borderBottomWidth:1,
    borderWidth:2,
    padding:5,
    backgroundColor:'#FFF',
    justifyContent:'center',
    flexDirection:'column',
    borderColor:'grey',
    position:'relative'
  },
  firstSection:{
    justifyContent:'space-around',
    flexDirection:'column',
    paddingLeft:5
  },
  headerText:{
      fontSize:20,
      justifyContent:'center',
      fontWeight:'bold'
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navButton:{
      alignItems:'flex-start'
  },
  textButton:{
      alignSelf:'center',
      color:'#007aff',
      fontSize:16
  },
  buttonStyle:{
      flex:1,
      alignSelf:'stretch',
      padding:10,
      borderWidth:2,
      borderRadius:3,
      borderColor:'#007aff'
  },
  styleContainerInput:{
    flex:1,
    flexDirection:'row'
  },
  labelInput:{
    flex:1,
    fontSize:18,
    paddingLeft:15,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    textAlign:'center'
  },
  styleInput:{
    color:'#000',
    padding:10,
    flex:2,
    lineHeight:23,
    fontSize:18
  },
  textError:{
    color:'red',
    fontSize: 15,
    alignSelf:'center'
  },
  spinner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  }
});