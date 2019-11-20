$(function() {
    "use strict";
    $(document).ready(function() {
        myFss();
    });
    $(window).resize(function() {
        myFss();
    });
});

function myFss(){
    var windowH = $(window).height();
    var windowW = $(window).width();
    var container = document.getElementById('fss-wrapper');
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('#004870', '#13fcfc');
    var geometry = new FSS.Plane(windowW, windowH, 12, 10);
    var material = new FSS.Material('#555555', '#FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();

    function initialise() {
        scene.add(mesh);
        scene.add(light);
        container.appendChild(renderer.element);
        window.addEventListener('resize', resize);
    }

    function resize() {
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    function animate() {
        now = Date.now() - start;
        light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
        renderer.render(scene);
        requestAnimationFrame(animate);
    }

    initialise();
    resize();
    animate();
}