import '../styles/index.scss';
import 'bootstrap';
import 'lightbox2';
import { main } from './main';
import { filter } from './gridshuffle';

main();
window.filter = filter;