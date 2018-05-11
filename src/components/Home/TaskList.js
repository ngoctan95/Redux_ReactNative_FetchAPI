import React, {Component} from 'react';
import {View, FlatList, ListView, Text,ActivityIndicator} from 'react-native';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../../actions/Home/MainActions';
import log from '../../utils/Log';

class TaskList extends Component{
    componentWillMount(){
          this.props.doFetchTasks();
    }
    componentWillReceiveProps (nextProps) {
        //console.log("next prop",nextProps.mainReducer.taskList);
        this.setState=({
            data : nextProps.mainReducer.taskList,
            text:'done'
        })
    }
    _renderSpinner=()=>{
        return (
            
            <ActivityIndicator style={{flex:1}} animating={true}/>
        )
    }
    _renderItem=(taskList)=>{
        return (
            <FlatList
            data={this.props.mainReducer}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) =>
                <TaskItem data={item}/>
            }/>
        )
    }
    render(){
        const spinner = (!this.props.mainReducer.isFetching)?this._renderItem():this._renderSpinner();
        return(
            <View style={{flexDirection:'column'}}>
                {spinner}
            </View>
        )
    }
}
const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
const mapStateToProps=state=>{
    //console.log("map",state.mainReducer)
    return {
        mainReducer : state.mainReducer.taskList,
    }
} 
const mapDispatchToProps=dispatch=> {
    return {
        fetchTaskLists: () => dispatch(doFetchTasks())
    }
  }
export default connect(mapStateToProps,action)(TaskList);