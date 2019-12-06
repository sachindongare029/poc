import React, { Component } from 'react';
import { RangeInput, ToggleButton } from '@appbaseio/reactivesearch';
import _ from 'lodash';

class IsVirtual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      clickCount: 0,
      startValue: 0,
      endValue: 0
    };
    this.handleChangeVirtual = this.handleChangeVirtual.bind(this);
  }
  handleChangeVirtual = value => {
    let checkStatus;
    if (_.isEmpty(value)) {
      checkStatus = 'NotActive';
    } else {
      checkStatus = 'Active';
    }
    this.props.callback(checkStatus);
    if (this.state.clickCount < 0) {
      this.setState({
        clickCount: 0,
        startValue: 0,
        endValue: 0
      });
      return;
    }
    this.setState(state => ({
      active: !state.active,
      endValue: state.endValue === 1 ? 0 : 1
    }));
  };
  render() {
    let { active, clickCount, startValue, endValue } = this.state;
    let that = this;
    return (
      <div className='include-virtual'>
        <div className='toggle'>
          <RangeInput
            className='include-virtual-range'
            innerClass={{
              'slider-container': 'diamond-slider-container',
              'input-container': 'diamond-input-container'
            }}
            componentId='Virtual'
            showSlider={false}
            dataField='isVirtual'
            defaultSelected={{
              start: startValue,
              end: endValue
            }}
            range={{
              start: startValue,
              end: endValue
            }}
            rangeLabels={{
              start: 'Start',
              end: 'End'
            }}
          />
          <ToggleButton
            className='checkSelect'
            componentId='IncludeVirtual'
            dataField='isVirtual'
            style={{ height: '30px' }}
            onValueChange={e => this.handleChangeVirtual(e)}
            beforeValueChange={function(value) {
              if (value) {
                clickCount++;
                that.setState({
                  clickCount: clickCount
                });
              } else {
                clickCount--;
                that.setState({
                  clickCount: clickCount
                });
              }

              return new Promise(resolve => {
                resolve();
              });
            }}
            data={[
              {
                label:
                  active === true ? (
                    <i
                      className='fa fa-check'
                      style={{ color: '#808080', fontSize: '1em' }}
                    />
                  ) : (
                    ''
                  ),
                value: true
              }
            ]}
          />
          <h2>Include Virtual</h2>
        </div>
      </div>
    );
  }
}
export default IsVirtual;
