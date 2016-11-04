import React from 'react';

const propTypes = {
  sendBark: React.PropTypes.func,
};

class BarkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.sendBark(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="body"
            value={this.state.body}
            placeholder="bark!"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="BARK" />
        </form>
      </div>
    );
  }
}

BarkForm.propTypes = propTypes;

export default BarkForm;
