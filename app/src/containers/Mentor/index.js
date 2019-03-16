import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class Mentor extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    const {
      mentor: { news }
    } = this.props;

    return (
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  mentor: state.mentor
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mentor);
