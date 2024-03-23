import React from 'react';


function componentDidMount() {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' }),

  };
  fetch('http://krispaul17.pythonanywhere.com/api/add_message', requestOptions)
      .then(response => response.json())
      .then(data =>console.log(data));
}

const test = () => {
  componentDidMount()
  return (
    <>
    <h1>Something</h1>
    </>
  );
};

export default test;
