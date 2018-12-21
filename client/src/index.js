import { render } from 'react-dom';
import 'normalize.css';

import './config/globals';
import './styles/main.scss';
import AppRouter from './router/router';

render(AppRouter, document.getElementById('app'));
