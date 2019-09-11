import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Review = props => {
  const { state, setState } = useState({ name: '', age: '' });

  useEffect(() => {
    const { steps } = props;
    const { name, age } = steps;
    setState({ name, age });
  }, [props]);

  const { name, age } = state;
  return (
    <>
      <div style={{ width: '100%' }}>
        <h3>Resumo</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <tr>{age.value}</tr>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
