import { connect } from 'react-redux'

//actions
import { setVisibilityFilter } from '../../store/actions/actions'

import Filter from '../pure/Filter';


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickMethod : () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

//we connect State & dispatch to TodoList's props
const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;