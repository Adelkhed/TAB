import React from 'react';
import Tabs from './Tabs';

const tabItems = [
  {
    label: 'Tab 1',
    content: 'Tab 1 content is showing here.',
    callback: () => console.log('Tab 1 clicked'),
  },
  {
    label: 'Tab 2',
    content: 'Tab 2 content is showing here.',
    callback: () => console.log('Tab 2 clicked'),
  },
  {
    label: 'Tab 3',
    content: 'Tab 3 content is showing here.',
    callback: () => console.log('Tab 3 clicked'),
  },
];

function App() {
  return (
    <div className="App">
      <h1>Tabs Component</h1>
      <Tabs items={tabItems} />
    </div>
  );
}

export default App;