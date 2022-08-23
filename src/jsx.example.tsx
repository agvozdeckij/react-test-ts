import React, {createElement as e, useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  // return (
  //   <h1>Hello react</h1>
  // );
  // return React.createElement('h1', {}, 'Hello from react');
  return e('div', { className: 'container' }, [
    e('h1', { className: 'font-bold',key:1 }, `Test JSX ${count}`),
    e('button', {
      className: 'py-2 px-2 border',
      key: 2,
      onClick:()=> setCount(count + 1)
    }, 'Click Me')
  ])
}

export default App;
