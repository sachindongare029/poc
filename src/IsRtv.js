import React, { Component } from 'react';
import { RangeInput, ToggleButton } from '@appbaseio/reactivesearch';

class IsRtv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      clickCount: 0,
      startValue: 0,
      endValue: 0
    };
    this.handleChangeRtv = this.handleChangeRtv.bind(this);
  }
  handleChangeRtv = value => {
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
      endValue: state.endValue === 1 ? 0 : 1,
    }));
  };
  render() {
    let { active, clickCount, startValue, endValue } = this.state;
    let that = this;
    return (
      <div className='is-rtv'>
        <div className='toggle'>
          <RangeInput
            className='include-virtual-range1'
            innerClass={{
              'slider-container': 'diamond-slider-container1',
              'input-container': 'diamond-input-container1'
            }}
            componentId='Rtv'
            showSlider={false}
            dataField={this.props.data} //[startValue,endValue]
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
            componentId='IncludeRtv'
            dataField={this.props.data}
            style={{ height: '30px' }}
            onValueChange={e => this.handleChangeRtv(e)}
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
                      style={{ color: '#808080', fontSize: '12px' }}
                    />
                  ) : (
                    ''
                  ),
                value: true
              }
            ]}
          />
          <h2>Include RTV</h2>
        </div>
      </div>
    );
  }
}
export default IsRtv;
