import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import Header from './components/header.jsx';
import AppRoutes from './routes';

const Main = () => {
  const [contentMargin, setContentMargin] = useState(0);

  return (
    <StrictMode>
      <BrowserRouter>
        <div style={{ marginLeft: contentMargin, transition: 'margin 0.3s' }}>
        <Header setContentMargin={setContentMargin} />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);