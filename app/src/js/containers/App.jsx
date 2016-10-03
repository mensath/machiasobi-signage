import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as Actions from "../actions/";
import Telop from "../containers/Telop"
import SignageMaster from "../containers/SignageMaster"

@connect(
  state => ({
    time: state.clock,
    telop: state.telop,
    slide: state.slide
  }),
  dispatch => bindActionCreators(Actions, dispatch)
)
export default class App extends Component {
  static propTypes = {
    syncDate: PropTypes.func.isRequired,
    fetchInitialData: PropTypes.func.isRequired,
    time: PropTypes.shape({
      hour: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired
    })
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchInitialData();
    // this.timer = setInterval(this.props.syncDate, 1000)
  }

  componentDidUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <SignageMaster />
        {/*<Clock {...this.props.time} />*/}
        <Telop />
        {/*<Loadingindicator />*/}
      </div>
    )
  }
}