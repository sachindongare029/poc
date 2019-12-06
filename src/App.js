import React, { Component } from 'react';
import {
  ReactiveBase,
  MultiDropdownList,
  ReactiveList,
  SelectedFilters,
} from '@appbaseio/reactivesearch';
import './App.css';
import IsRtv from './IsRtv';
import IsVirtual from './IsVirtual';
// import IsRtvVirtual from './IsRtvVirtual';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVirtualActive: false
    };
    this.handleIsVirtualChange = this.handleIsVirtualChange.bind(this);
  }
  handleIsVirtualChange(value) {
    this.setState({
      isVirtualActive: value
    });
  }
  render() {
    let { isVirtualActive } = this.state;
    // console.log('isVirtualActive', isVirtualActive);
    var andQuery;
    if (isVirtualActive === 'Active') {
      andQuery = ['nameDropdown', 'Virtual'];
    } else {
      andQuery = ['nameDropdown', 'Rtv', 'Virtual'];
    }
    return (
      <ReactiveBase
        app='virtual-poc-2'
        credentials='q63UOt9th:5f6b4c18-8789-491d-a855-996217271038'
      >
        <div className='row'>
          <div className='col'>
            <MultiDropdownList
              componentId='nameDropdown'
              dataField='name.keyword'
              size={100}
            />
            <IsRtv data={'isRTV'} />
            <IsVirtual callback={this.handleIsVirtualChange} />
          </div>

          <div className='col'>
            <SelectedFilters />
            <ReactiveList
              componentId='SearchResult'
              dataField='name'
              className='result-list-container'
              onData={this.booksReactiveList}
              react={{
                and: andQuery
              }}
            />
          </div>
        </div>
      </ReactiveBase>
    );
  }

  booksReactiveList(data) {
    // console.log("data", data)
    return (
      <div className='flex book-content' key={data._id}>
        <div className='flex column justify-center' style={{ marginLeft: 20 }}>
          <div className='book-header'>{data.name}</div>
        </div>
      </div>
    );
  }
}

export default App;
