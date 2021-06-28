import React from 'react';
import { useState } from 'react';
import Display from './components/Display';
import Editor from './components/Editor';

function App(props) {
  const [formData, setFormData] = useState({})
  const submitData = newData => setFormData(newData)

  return (
    <div className="contanier-fluid">
      <div className="row p-2">
        <div className = "col-6">
          <Editor submit={submitData} />
        </div>
        <div className="col-6">
          <Display data={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
