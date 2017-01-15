//The Voting component takes the current pair of entries as props.
//Pure(dummy) components

import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return <div className='voting'>
      {this.getPair().map(entry =>
        <button key={entry}
          onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});
