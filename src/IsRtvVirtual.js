import React, { Component } from 'react';
import { MultiDropdownList } from '@appbaseio/reactivesearch';

class IsRtvVirtual extends Component {
  render() {
    return (
      <div className='rtv-virtual'>
        <MultiDropdownList
          className='form-field'
          title='RtvVirtual'
          componentId='RtvVirtual'
          dataField='isRtvVirtual'
          size={100}
          showCount={false}
          showSearch={true}
          sortBy='asc'
          renderListItem={label => (
            <div>{label !== 'NULL' ? label : 'None'}</div>
          )}
        />
      </div>
    );
  }
}


export default IsRtvVirtual;