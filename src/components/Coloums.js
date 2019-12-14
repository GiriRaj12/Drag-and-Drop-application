import React from 'react';
import {Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'
import Task from './Task'

const Container = styled.div`
    text-align:center;
    border-radius: 2px;
    border: 1px solid gray; 
    margin:8px;
    padding:10px;
    width: 240px;
`;

const Title = styled.h3`
    padding:8px;
`;

const TaskList = styled.div`
    padding:8px;
`;

export default class Coloum extends React.Component{
    render(){
        return (
            <Container>
            <Title>{this.props.coloum.title}</Title>
            <Droppable droppableId={this.props.coloum.id}>
               {(provided)=>( 
                 <TaskList
                    ref = {provided.innerRef}
                    {...provided.droppableProps}
                 >
                    {this.props.tasks.map( (task, index) => 
                    <Task key={task.id} data={task} index = {index}></Task>
                    )}
                {provided.placeholder}
               </TaskList>
               )}
            </Droppable>
            </Container>
        )
    }
}
