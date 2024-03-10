import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux-toolkit/store/store.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <App />  
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
