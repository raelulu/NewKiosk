import React from 'react';
import MenuSummary from './MenuSummary';
import { Fragment } from 'react';
import MenuList from '../admin/MenuList';

const Coffee = () => {
  return (
    <Fragment>
      <MenuSummary />
      <MenuList />
    </Fragment>
  );
};

export default Coffee;
