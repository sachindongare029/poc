import React, { Component } from 'react';
import {
  ReactiveBase,
  ReactiveList,
  SelectedFilters,
  MultiDropdownList
} from '@appbaseio/reactivesearch';
import './App.css';
import IsRtv from './IsRtv';
import IsVirtual from './IsVirtual';
import IsRtvVirtual from './IsRtvVirtual';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVirtualActive: 'Not_Active',
      isRtvActive: 'Not_Active'
    };
    this.handleIsVirtualChange = this.handleIsVirtualChange.bind(this);
    this.handleIsRtvChange = this.handleIsRtvChange.bind(this);
  }
  handleIsVirtualChange(value) {
    this.setState({
      isVirtualActive: value
    });
  }
  handleIsRtvChange(value) {
    this.setState({
      isRtvActive: value
    });
  }
  render() {
    let { isVirtualActive, isRtvActive } = this.state;
    var andQuery = ['Name'];
    if (isVirtualActive === 'Active' && isRtvActive === 'Not_Active') {
      andQuery.push('Virtual');
    } else if (isVirtualActive === 'Not_Active' && isRtvActive === 'Active') {
      andQuery.push('Rtv');
    } else if (isRtvActive === 'Active' && isVirtualActive === 'Active') {
      andQuery.push('RtvVirtual');
    } else {
      andQuery.push('Virtual');
    }
    return (
      <ReactiveBase
        app='virtual-poc-2'
        credentials='q63UOt9th:5f6b4c18-8789-491d-a855-996217271038'
      >
        <div className='row'>
          <div className='col'>
            <MultiDropdownList
              className='multi-name'
              title='Name'
              componentId='Name'
              dataField='name.keyword'
              size={100}
            />
            <IsVirtual
              data={'isVirtual'}
              callback={this.handleIsVirtualChange}
            />
            <IsRtv data={'isRTV'} callback={this.handleIsRtvChange} />
            <IsRtvVirtual />
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
