import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { MyButton } from './components/MyButton'
import TableDataProvider from './TableDataProvider';

import { Provider } from 'react-redux'
import { store } from './store'

import './App.css';
import UpButton from './components/UpButton';


const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <UpButton />
            <br />
            <TableDataProvider />
          </header>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
