import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../../../Variables/Constants';
import { fadeIn } from '../../../../Variables/Animation';
import archiveCard from '../../../../actions/ArchiveCard';

const cardSource = {
    beginDrag({ title, cardId, listId }) {
        return {
            title, cardId, listId
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

@DragSource(ItemTypes.CARD, cardSource, collect)


class Card extends React.Component {
    togglePost = (cardId, listId) => {
        this.props.archiveCard(cardId, listId)
    }

    render () {
        const {
            isDragging,
            connectDragSource,
            title,
            archiveCard,
            cardId,
            listId,
            isArchived,
        } = this.props;

        const cardStyles = {
            opacity: isDragging || isArchived ? 0.35 : 1,
            boxShadow: "0 6px 6px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23)",
            textDecoration: isArchived ? "line-through" : "none",
            backgroundColor: isArchived ? "#DECAFF" : "#caffde",
        };
        
        return connectDragSource (
            <div>
                <CardWrapper style={cardStyles}>
                    <CardTitle>{title}</CardTitle>
                    <ArchiveTask onClick={() => }
                </CardWrapper>
            </div>
        )
    }
}