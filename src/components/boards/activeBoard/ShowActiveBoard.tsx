import * as React from 'react';
import { connect } from 'react-redux';
import SelectActiveBoard from '../../../actions/SelectActiveBoard';
import enableListEditMode from '../../../actions/ToggleListEditMode';
import submitList from '../../../actions/SubmitList';
import ActiveBoardTitle from './ActiveBoardTitle';
import ListWrapper from './lists/ListWrapper';
import CreateNewList from './lists/CreateNewList';
import ListEditingMode from './lists/ListEditingMode';
import ListItemsContainer from './lists/ListItemsContainer';

class ShowActiveBoard extends React.Component {
    
}