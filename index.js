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