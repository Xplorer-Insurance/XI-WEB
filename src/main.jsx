import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{
    colorScheme: 'dark',
    fontFamily: 'Helvetica, sans-serif',
    globalStyles: (theme) => ({
      'body': {
        backgroundColor: theme.colorScheme === 'dark' ? '#0F1621' : theme.white,
        color: '#fff',
        fontFamily: 'Helvetica, sans-serif',
      },
    }),
  }}>
    <Provider store={store}>
      <Notifications />
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </Provider>
    <GlobalStyles />
  </MantineProvider>,
)
