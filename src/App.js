import React, { useState } from 'react';
import './App.css';
import UrlPreview from './UrlPreview';

function App() {
  const [value, setValue] = useState('');
  
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <div className="logo">GC Articles</div>
        <div className="menu">Menu items</div>
      </header>
      <main>
      <h1>
        Request a site: step 1 of 2
        </h1>
        <h2>Tell us about your site</h2>
        <form>
          <div className="question">
            <label htmlFor="title">
              English title of your site
            </label>
            <span>This title will appear at the top of your site. You can change this later.</span>
            <input type="text" id="title" value={value} onChange={onChange}></input>
            <UrlPreview value={value} />
          </div>
          
          <div className="question">
            <label htmlFor="time">
              When do you plan to make your site public?
            </label>
            <span>We look for sites that will launch in the next 2 months. Sites that linger for longer than 2 months without being made public reduce our ranking in search engines.</span>
            <input type="text" id="time"></input>
          </div>

          <button>Next</button>
        </form>
      </main>
    </div>
  );
}

export default App;
