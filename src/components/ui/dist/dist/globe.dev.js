"use client";
"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.genRandomNumbers = exports.hexToRgb = exports.World = exports.WebGLRendererConfig = exports.Globe = void 0;

var react_1 = require("react");

var three_1 = require("three");

var three_globe_1 = require("three-globe");

var fiber_1 = require("@react-three/fiber");

var drei_1 = require("@react-three/drei");

var globe_json_1 = require("@/data/globe.json");

fiber_1.extend({
  ThreeGlobe: three_globe_1["default"]
});
var RING_PROPAGATION_SPEED = 3;
var aspect = 1.2;
var cameraZ = 300;
var numbersOfRings = [0];

function Globe(_a) {
  var globeConfig = _a.globeConfig,
      data = _a.data;

  var _b = react_1.useState(null),
      globeData = _b[0],
      setGlobeData = _b[1];

  var globeRef = react_1.useRef(null);

  var defaultProps = __assign({
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3
  }, globeConfig);

  react_1.useEffect(function () {
    if (globeRef.current) {
      _buildData();

      _buildMaterial();
    }
  }, [globeRef.current]);

  var _buildMaterial = function _buildMaterial() {
    if (!globeRef.current) return;
    var globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new three_1.Color(globeConfig.globeColor);
    globeMaterial.emissive = new three_1.Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  var _buildData = function _buildData() {
    var arcs = data;
    var points = [];

    var _loop_1 = function _loop_1(i) {
      var arc = arcs[i];
      var rgb = hexToRgb(arc.color);
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: function color(t) {
          return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + (1 - t) + ")";
        },
        lat: arc.startLat,
        lng: arc.startLng
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: function color(t) {
          return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + (1 - t) + ")";
        },
        lat: arc.endLat,
        lng: arc.endLng
      });
    };

    for (var i = 0; i < arcs.length; i++) {
      _loop_1(i);
    } // remove duplicates for same lat and lng


    var filteredPoints = points.filter(function (v, i, a) {
      return a.findIndex(function (v2) {
        return ["lat", "lng"].every(function (k) {
          return v2[k] === v[k];
        });
      }) === i;
    });
    setGlobeData(filteredPoints);
  };

  react_1.useEffect(function () {
    if (globeRef.current && globeData) {
      globeRef.current.hexPolygonsData(globe_json_1["default"].features).hexPolygonResolution(3).hexPolygonMargin(0.7).showAtmosphere(defaultProps.showAtmosphere).atmosphereColor(defaultProps.atmosphereColor).atmosphereAltitude(defaultProps.atmosphereAltitude).hexPolygonColor(function (e) {
        return defaultProps.polygonColor;
      });
      startAnimation();
    }
  }, [globeData]);

  var startAnimation = function startAnimation() {
    if (!globeRef.current || !globeData) return;
    globeRef.current.arcsData(data).arcStartLat(function (d) {
      return d.startLat * 1;
    }).arcStartLng(function (d) {
      return d.startLng * 1;
    }).arcEndLat(function (d) {
      return d.endLat * 1;
    }).arcEndLng(function (d) {
      return d.endLng * 1;
    }).arcColor(function (e) {
      return e.color;
    }).arcAltitude(function (e) {
      return e.arcAlt * 1;
    }).arcStroke(function (e) {
      return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
    }).arcDashLength(defaultProps.arcLength).arcDashInitialGap(function (e) {
      return e.order * 1;
    }).arcDashGap(15).arcDashAnimateTime(function (e) {
      return defaultProps.arcTime;
    });
    globeRef.current.pointsData(data).pointColor(function (e) {
      return e.color;
    }).pointsMerge(true).pointAltitude(0.0).pointRadius(2);
    globeRef.current.ringsData([]).ringColor(function (e) {
      return function (t) {
        return e.color(t);
      };
    }).ringMaxRadius(defaultProps.maxRings).ringPropagationSpeed(RING_PROPAGATION_SPEED).ringRepeatPeriod(defaultProps.arcTime * defaultProps.arcLength / defaultProps.rings);
  };

  react_1.useEffect(function () {
    if (!globeRef.current || !globeData) return;
    var interval = setInterval(function () {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(0, data.length, Math.floor(data.length * 4 / 5));
      globeRef.current.ringsData(globeData.filter(function (d, i) {
        return numbersOfRings.includes(i);
      }));
    }, 2000);
    return function () {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);
  return React.createElement(React.Fragment, null, React.createElement("threeGlobe", {
    ref: globeRef
  }));
}

exports.Globe = Globe;

function WebGLRendererConfig() {
  var _a = fiber_1.useThree(),
      gl = _a.gl,
      size = _a.size;

  react_1.useEffect(function () {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);
  return null;
}

exports.WebGLRendererConfig = WebGLRendererConfig;

function World(props) {
  var globeConfig = props.globeConfig;
  var scene = new three_1.Scene();
  scene.fog = new three_1.Fog(0xffffff, 400, 2000);
  return React.createElement(fiber_1.Canvas, {
    scene: scene,
    camera: new three_1.PerspectiveCamera(50, aspect, 180, 1800)
  }, React.createElement(WebGLRendererConfig, null), React.createElement("ambientLight", {
    color: globeConfig.ambientLight,
    intensity: 0.6
  }), React.createElement("directionalLight", {
    color: globeConfig.directionalLeftLight,
    position: new three_1.Vector3(-400, 100, 400)
  }), React.createElement("directionalLight", {
    color: globeConfig.directionalTopLight,
    position: new three_1.Vector3(-200, 500, 200)
  }), React.createElement("pointLight", {
    color: globeConfig.pointLight,
    position: new three_1.Vector3(-200, 500, 200),
    intensity: 0.8
  }), React.createElement(Globe, __assign({}, props)), React.createElement(drei_1.OrbitControls, {
    enablePan: false,
    enableZoom: false,
    minDistance: cameraZ,
    maxDistance: cameraZ,
    autoRotateSpeed: 1,
    autoRotate: true,
    minPolarAngle: Math.PI / 3.5,
    maxPolarAngle: Math.PI - Math.PI / 3
  }));
}

exports.World = World;

function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

exports.hexToRgb = hexToRgb;

function genRandomNumbers(min, max, count) {
  var arr = [];

  while (arr.length < count) {
    var r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

exports.genRandomNumbers = genRandomNumbers;