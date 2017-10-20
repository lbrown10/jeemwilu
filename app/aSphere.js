var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 400 / 400, 0.1, 10);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 400);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(3, 10, 15, 0);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);


camera.position.z = 10;
var render = function () {
    requestAnimationFrame(render);

    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();