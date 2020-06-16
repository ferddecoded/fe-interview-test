import { SortMethods } from '../store/actions';

const sortMethodMap = {
  [SortMethods.AVAILABILITY]: 'availability',
  [SortMethods.NAME]: 'name',
};

export const sortHelper = (sortType) => function(a, b) {
    const mappedSortMethod = sortMethodMap[sortType];
    return (a[mappedSortMethod] > b[mappedSortMethod]) ? 1 : -1;
  }