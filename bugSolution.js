```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="/:id" element={<AboutDetails/>}/>
        </Route>
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  let location = useLocation();
  return (
    <div>
      About {location.pathname}
    </div>
  );
}

function AboutDetails() {
  let location = useLocation();
  return <div>About Details {location.pathname}</div>;
}

export default App; 
```