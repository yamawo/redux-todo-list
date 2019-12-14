import * as React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import mapValues from 'lodash/mapValues';
import ListItem from './ListItem';

class ListItemsContainer extends React.Component {
    renderListItems = () => {
        const { activeBoardData } = this.props
        const mappedList = mapValues(activeBoardData.listItems, list => list.name);
        const mappedKeys = Object.keys(mappedList)

        return mappedKeys.map((id, i) => {
            return <ListItem id={id} key={i} name={mappedList[id]} />
        })
    }

    render() {
        return (
            <div>
                <ListItemsWrapper>
                    {this.renderListItems()}
                </ListItemsWrapper>
            </div>
        )
    }
}

const ListItemsWrapper = styled.div`
    display: flex;
`;

const mapStateToProps = ({ activeBoardData }) => {
    return { activeBoardData }
}

export default connect(mapStateToProps)(ListItemsContainer);