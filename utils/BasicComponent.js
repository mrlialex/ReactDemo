import React from 'react';
import {is} from 'immutable';

class BasicComponent extends React.Component {

  constructor(props, context, updater) {
    super(props, context, updater);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    const thisState = this.state || {};
     nextProps = nextProps || {};
     nextState = nextState || {};

    if ( (Object.keys(thisProps).length !== Object.keys(nextProps).length) || 
      (Object.keys(thisState).length !== Object.keys(nextState).length) ) {
        return true;
      }

    for ( const key in thisProps ) {
      if( !is(thisProps[key], nextProps[key]) ) {
        return true;
      }
    }

    for (const key in thisState) {
      if (!is(thisState[key], nextState[key])) {
        return true;
      }
    }

    return false;
  }
}

export default BasicComponent;