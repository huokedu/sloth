import React from 'react';


class PurposeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      purpose: this.props.purpose,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.togglePurposeForm();
  }

  updateInput(e) {
    this.setState({purpose: e.currentTarget.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.purpose}
          onChange={this.updateInput.bind(this)}/>
        <input type="submit" style={{display: 'none'}} />
      </form>
    );
  }
}

export default PurposeForm;
