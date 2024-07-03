import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import App from './App';
import {name as appName} from './app.json';

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
