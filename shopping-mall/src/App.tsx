import { useRoutes } from 'react-router-dom';
import { routes, pages } from './routes'; 

const App = () => {
  console.log('pages: ', pages);
  console.log('routes: ', routes);
  const element = useRoutes(routes);
  return element;
}

export default App