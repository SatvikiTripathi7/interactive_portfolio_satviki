import './style.css';
import { initThree } from './threeScene';


const api = initThree();
const setTheme = api && api.setTheme ? api.setTheme : () => {};

const savedTheme = localStorage.getItem('theme') || 'dark';
// apply body class for light theme
if (savedTheme === 'light') document.body.classList.add('light');
setTheme(savedTheme);

const toggle = document.getElementById('theme-toggle');
if (toggle) {
	toggle.checked = savedTheme === 'light';
	toggle.addEventListener('change', (e) => {
		const theme = e.target.checked ? 'light' : 'dark';
		document.body.classList.toggle('light', theme === 'light');
		localStorage.setItem('theme', theme);
		setTheme(theme);
	});
}
