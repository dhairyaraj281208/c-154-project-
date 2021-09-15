AFRAME.registerComponent("walls", {
  init: function () {

    //x position array
    px = [22.86, -17.35, -12.81, 0.44, -30.18,
      -25.89, 15.61, 29.68, 11.95, -15.40,
      -14.09, 34.76, 2.29, 21.77, 1.57,
      34.72, 12.04, -10.90, 6.48, 15.66];

    //z position array
    pz = [54.56, -4.71, 14.91, 56.74, 41.13,
      50.76, 57.84, 7.02, -5.24, -26.82,
      27.59, -35.78, 34.52, 31.32, -9.22,
      26.72, 48.90, 27.24, 9.94, 54.29 ];

    for (var i = 0; i < 20; i++) {

      var wall1 = document.createElement("a-box");
      var wall2 = document.createElement("a-box");
      var wall3 = document.createElement("a-box");
      var wall4 = document.createElement("a-box");



      posX = px[i];
      posY = 2.5;
      posZ = pz[i];

      var scale = { x: 0.2, y: 0.2, z: 0.2 };

      wall1.setAttribute("id", "wall1" + i);
      wall2.setAttribute("id", "wall2" + i);
      wall3.setAttribute("id", "wall3" + i);
      wall4.setAttribute("id", "wall4" + i);

      wall1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      wall2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
      wall3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
      wall4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

      wall1.setAttribute("scale", scale);
      wall2.setAttribute("scale", scale);
      wall3.setAttribute("scale", scale);
      wall4.setAttribute("scale", scale);

      wall1.setAttribute(
        "gltf-model",
        "./models/soldier/scene.gltf"
      );

      wall2.setAttribute(
        "gltf-model",
        "./models/soldier/scene.gltf"
      );

      wall3.setAttribute(
        "gltf-model",
        "./models/soldier/scene.gltf"
      );

      wall4.setAttribute(
        "gltf-model",
        "./models/soldier/scene.gltf"
      );

  
      wall3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      wall4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      wall1.setAttribute("static-body", {});
      wall2.setAttribute("static-body", {});
      wall3.setAttribute("static-body", {});
      wall4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");

      sceneEl.appendChild(wall1);
      sceneEl.appendChild(wall2);
      sceneEl.appendChild(wall3);
      sceneEl.appendChild(wall4);

    }
  },
});

