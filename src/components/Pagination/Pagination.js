import React from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions';
import selectors from '../../redux/selectors';
import styles from './Pagination.module.css';

const Pagination = ({ prev, currentPage, next, maxPage }) => (
  <div className={styles.pagination}>
    <button type="button" onClick={prev}>
      Prev
    </button>
    <span className={styles.pageNumber}>{currentPage}</span>
    <button type="button" onClick={() => next(maxPage)}>
      Next
    </button>
  </div>
);

const mapStateToProps = state => ({
  currentPage: selectors.getCurrentPage(state),
  maxPage: selectors.getMaxPage(state),
});

const mapDispatchToProp = {
  prev: actions.paginationPrev,
  next: actions.paginationNext,
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Pagination);
