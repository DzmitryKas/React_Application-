import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.scss';

const ToDoInput = ({ value, onChange, onClick }) => (
  <div className="input">    
    <input
      placeholder=" Добавить покупку"
      className="input__block"
      onChange={onChange}
      value={value}
    />
    <button className="input__btn" onClick={onClick}>Добавить</button>
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default ToDoInput;