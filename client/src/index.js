import { render } from 'react-dom';

import AppRouter from './router/router';

import 'normalize.css';
import './styles/main.scss';

render(AppRouter, document.getElementById('app'));
