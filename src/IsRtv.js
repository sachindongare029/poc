import React, { Component } from 'react';
import { ToggleButton, MultiDropdownList } from '@appbaseio/reactivesearch';

class IsRtv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleChangeRtv = this.handleChangeRtv.bind(this);
  }
  handleChangeRtv(param) {
    if (param.length) {
      this.props.callback('Active');
    } else {
      this.props.callback('Not_Active');
    }
    this.setState(state => ({
      active: !state.active
    }));
  }
  render() {
    let { active } = this.state;
    let selected;
    if (active) {
      selected = ['0', '3'];
    } else {
      selected = ['0'];
    }
    return (
      <div className='include-rtv'>
        <MultiDropdownList
          className='multi-virtual'
          title='Rtv'
          componentId='Rtv'
          dataField='isRtvVirtual'
          defaultSelected={selected}
          size={100}
          showCount={false}
          showSearch={true}
          sortBy='asc'
          renderListItem={label => (
            <div>{label !== 'NULL' ? label : 'None'}</div>
          )}
          showFilter={false}
        />
        <ToggleButton
          className='checkSelect'
          componentId='toggleRtv'
          dataField={this.props.data}
          onValueChange={e => this.handleChangeRtv(e)}
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
              value: 1
            }
          ]}
          multiSelect={false}
        />
        <h2>Include RTV</h2>
      </div>
    );
  }
}
export default IsRtv;
