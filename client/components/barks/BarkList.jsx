import React from 'react';

const propTypes = {
  barks: React.PropTypes.array,
};

class BarkList extends React.Component {
  render() {
    return (
      <div>
        <h4>
          This could look better...
        </h4>
        {this.props.barks.map((bark) => bark.body).join(` & `)}
      </div>
    );
  }
}

BarkList.propTypes = propTypes;

export default BarkList;
