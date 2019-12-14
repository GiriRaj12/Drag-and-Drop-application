import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    border : 1px solid grey;
    margin:5px;
    border-radius : 2px;
    padding:10px;
    background-color:white;
`;

export default class Task extends React.Component{
    render(){
        return(
            <Draggable draggableId= {this.props.data.id} index={this.props.index}>
                {(provided)=>(
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref = {provided.innerRef}
                >
                    {this.props.data.content}
                </Container>
                )}
             </Draggable>
        );
    }
}