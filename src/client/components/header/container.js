import { connect } from 'react-redux';

import Header from './index.js';

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);