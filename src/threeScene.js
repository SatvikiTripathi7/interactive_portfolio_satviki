import * as THREE from 'three';


export function initThree() {
	// get the canvas and return a safe API if it's not present
	const canvas = document.getElementById('three-canvas');
	if (!canvas) return { setTheme: () => {} };
	const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);


const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));


const geometry = new THREE.BoxGeometry();
let material = new THREE.MeshStandardMaterial({ color: 0xADD8E6 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.z = 3;


function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}


animate();


window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

function setTheme(theme) {
	if (!material) return;
	if (theme === 'light') {
		material.color.setHex(0xADD8E6);
		ambientLight.intensity = 0.7;
		light.intensity = 1;
	} else {
		// darker / cooler color for dark theme
		material.color.setHex(0x2563eb);
		ambientLight.intensity = 0.45;
		light.intensity = 0.9;
	}
}

return { setTheme };
}
