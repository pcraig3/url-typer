import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <div class="logo">GC Articles</div>
        <div class="menu">Menu items</div>
      </header>
      <main>
      <h1>
        Request a site: step 1 of 2
        </h1>
        <h2>Tell us about your site</h2>
        <form>
          <div class="question">
            <label for="title">
              English title of your site
            </label>
            <span>This title will appear at the top of your site. You can change this later.</span>
            <input type="text" id="title" value={value} onChange={onChange}></input>

          </div>
          
          <div class="question">
            <label for="time">
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
