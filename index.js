'use strict';

require('aframe');

var isIntersect = false;

var t = 0;
var speed = 0.01;

function render() {
    t += 0.01;
    requestAnimationFrame(render);

    var camera = document.getElementById('camera');

    if (camera && !isIntersect) {
        var position = camera.getAttribute('position');
        var rotation = camera.getAttribute('rotation');

        position.x += -Math.cos((rotation.y - 90) * Math.PI / 180) * speed;
        position.z += Math.sin((rotation.y - 90) * Math.PI / 180) * speed;
        camera.setAttribute('position', position);
    }
}
/*
 function createMaze() {
 var mazeEl = document.getElementById('maze');
 
 for (var i = 0; i < maze.length; i++) {
 var block = document.createElement('a-box');
 //block.setAttribute('potision', {x: maze[i][0], y: 1, z: maze[i][1]});
 mazeEl.appendChild(block);
 }
 }
 */



AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
    init: function () {
        this.el.addEventListener('raycaster-intersection', function () {
            isIntersect = true;
        });
        this.el.addEventListener('raycaster-intersection-cleared', function () {
            isIntersect = false;
        });
    }
});

render();