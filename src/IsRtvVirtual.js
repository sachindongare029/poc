import React, { Component } from 'react';
import { MultiDropdownList } from '@appbaseio/reactivesearch';

class IsRtvVirtual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  render() {
    return (
      <div className='rtv-virtual'>
        <MultiDropdownList
          className='form-field'
          title='RtvVirtual'
          componentId='RtvVirtual'
          dataField='isRtvVirtual'
          defaultSelected={['0', '1', '2', '3']}
          size={100}
          showCount={false}
          showSearch={true}
          sortBy='asc'
          renderListItem={label => (
            <div>{label !== 'NULL' ? label : 'None'}</div>
          )}
          showFilter={false}
        />
      </div>
    );
  }
}


export default IsRtvVirtual;