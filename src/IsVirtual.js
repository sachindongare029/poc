import React, { Component } from 'react';
import { ToggleButton, MultiDropdownList } from '@appbaseio/reactivesearch';

class IsVirtual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleChangeVirtual = this.handleChangeVirtual.bind(this);
  }
  handleChangeVirtual(param) {
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
      selected = ['0', '1', '2'];
    } else {
      selected = ['0'];
    }
    return (
      <div className='include-virtual'>
        <MultiDropdownList
          className='multi-virtual'
          title='RtvVirtual'
          componentId='Virtual'
          dataField='isRtvVirtual'
          defaultSelected={selected}
          size={100}
          showCount={false}
          showSearch={true}
          sortBy='asc'
          renderListItem={label => (
            <div>{label !== 'NULL' ? label : 'None'}</div>
          )}
        />
        <ToggleButton
          className='checkSelect'
          componentId='toggleVirtual'
          dataField={this.props.data}
          onValueChange={e => this.handleChangeVirtual(e)}
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
        <h2>Include Virtual</h2>
      </div>
    );
  }
}
export default IsVirtual;
