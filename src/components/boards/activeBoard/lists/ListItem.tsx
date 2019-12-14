import * as React from 'react';
import styled from 'styled-components';
import CreateCardContainer from '../cards/CardContainer';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../../../Variables/Constants';
import { connect } from 'react-redux'
import handleDrop from '../../../../actions/handleDrop';
import { fadeIn } from '../../../../Variables/Animation';

const dropSource = {
    drop(props, monitor) {
        const card = monitor.getItem(); 
        props.handleDrop(card.title, card.cardId, card.listId, props.id);
    },
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

@DropTarget(ItemTypes.CARD, dropSource, collect)

class ListItem extends React.Component {
    render() {
        const { name, id, connectDropTarget } = this.props;
        return connectDropTarget(
            <div>
                <ListItemWrapper>
                    <ListItemHeader>{name}</ListItemHeader>
                    <hr />
                    <CreateCardContainer listId={id} />
                </ListItemWrapper>
            </div>
        )
    }
}

const ListItemWrapper = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 20px;
    background-color: rgb(255, 255, 255);
    padding: 5px 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 150ms ease-in-out;
    animation: ${fadeIn} 300ms linear;
`;

const ListItemHeader = styled.h4`
    color: #333;
    letter-spacing: 1.66;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
`;

export default connect(null, { handleDrop })(ListItem);