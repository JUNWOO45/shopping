import { QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';
import { routes, pages } from './routes'; 
import { getClient } from './queryClients';
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
  console.log('pages: ', pages);
  console.log('routes: ', routes);
  const element = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      {element}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    )
}

export default App