/**
 * Theme JavaScript entry point
 * ES6 code compiled to ES5 with esbuild
 */

// Import Bootstrap 5
import * as bootstrap from 'bootstrap';

// Make Bootstrap available globally
window.bootstrap = bootstrap;

// Import your CSS/SCSS files here
import '../css/theme.scss';

// Import other JavaScript modules
// import './components/example.js';

console.log('Theme loaded');
