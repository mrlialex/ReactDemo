import { Component } from 'react';

export default function asyncComponentFn(importComponent) {

  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };

      this.unmount = false;

    }

    componentWillUnmount() {
      this.unmount = true;
    }

    async componentDidUnmount() {
      const {default: component} = await importComponent()

      if(this.unmount) return;

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}