import React from 'react';
import initialData from './data/data';
import Coloums from './components/Coloums';
import '@atlaskit/css-reset'
import {DragDropContext} from 'react-beautiful-dnd';

class App extends React.Component{
    state = initialData;
  
    onDragEnd = result => {
      const {destination, source, dragglableId } = result;

      if(!destination){
        return;
      }
      if(destination.droppableId === source.droppableId && destination.index === source.index){
        return;
      }
      const coloum = this.state.coloums[source.droppableId];
      const newTaskId = Array.from(coloum.taskIds);
      newTaskId.splice(source.index,1);
      newTaskId.splice(destination.index,0,dragglableId);

      const newColoum = {
        ...coloum,
        taskIds:newTaskId,
      }
      const newState ={
        ...this.state,
        [newColoum.id]:newColoum,
      }
      this.setState(newState);
    };
  render(){
    return(
    <DragDropContext onDragEnd ={this.onDragEnd}>
    { this.state.coloumOrder.map(coloumId => {
      const coloum = this.state.coloums[coloumId];
      
      const tasks = coloum.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Coloums key={coloum.id} coloum={coloum} tasks={tasks}/>
    })}
   </DragDropContext>);  
  }
}

export default App;

