import React, {Component} from 'react';
import {View, FlatList, ListView, Text, TouchableHighlight, LayoutAnimation} from 'react-native';
import CardSection from '../common/CardSection';
import {connect} from 'react-redux';
import * as action from '../../actions/Home/MainActions';
class TaskItem extends Component{
    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }
        render(){
            const {id, createdOn} = this.props.data;
            return(
                <TouchableHighlight
                    onPress={()=>{
                        this.props.selectedIdItem(id);
                        }}>
                    <CardSection>
                        <Text>"Id"+{this.props.data.id}+{this.props.data.createdOn}</Text>
                        {
                            (this.props.data.id===this.props.mainSelectedItemIdReducer)?
                            <Text>{this.props.data.createdOn}</Text>:null
                        }
                    </CardSection>
                </TouchableHighlight>
            )
        }
}
const mapStateToProps=state=>{
    console.log("map state",state);
    return{
        mainSelectedItemIdReducer:state.mainSelectedItemIdReducer
    }
}
export default connect(mapStateToProps,action)(TaskItem);