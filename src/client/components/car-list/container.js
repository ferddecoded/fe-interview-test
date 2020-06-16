import { connect } from 'react-redux';
import CarList from './index.js';
import { SortMethods } from '../../store/actions.js';
import { sortHelper } from '../../utils/sort';
import { addToCart } from '../../store/actions';

const sortMethodMap = {
  [SortMethods.AVAILABILITY]: 'availability',
  [SortMethods.NAME]: 'name',
};

const mapStateToProps = (state, { limit }) => {
  return {
    cars: sortSelector(state, state.sortMethod.sortMethod, limit),
    sortMethod: state.sortMethod.sortMethod
  }
};

const sortSelector = (state, sortMethod, limit) => {
  // const sort = function(a, b) {
  //   const mappedSortMethod = sortMethodMap[sortMethod];
  //   return (a[mappedSortMethod] > b[mappedSortMethod]) ? 1 : -1;
  // }
  const cars = [...state.cars];
  return cars.sort(sortHelper(sortMethod)).slice(0, limit);
};


const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
