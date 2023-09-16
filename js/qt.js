function Zt(t) {
  var e = this,
    i = this;
  // this.functions = [];
  // this.keys = [];
  // this.images = [];
  // this.spheres = [];
  // this.font = "Arial";
  // this.imageData = void 0;
  // this.imageDataData = void 0;
  // this.lastLoop = performance.now();
  // this.calculateFPS = !0;
  // this.fps = -1;
  // this.deltaTime = 1;
  // var n = ["left", "middle", "right"];
  this.contextMenuDisabled = !1;
  this.disableScrollOnMobile = !1;
  // this.eventFunctions = {
  //   mousedown: "undefined" !== typeof OnMouseDown,
  //   mouseup: "undefined" !== typeof OnMouseUp,
  //   mousemove: "undefined" !== typeof OnMouseMove,
  //   contextmenu: "undefined" !== typeof OnContextMenu,
  //   touchstart: "undefined" !== typeof OnTouchStart,
  //   touchend: "undefined" !== typeof OnTouchEnd,
  //   touchmove: "undefined" !== typeof OnTouchMove
  // };
  // this.audioContext = new(window.AudioContext || window.webkitAudioContext);
  this.createCanvas = function (t) {
    var e = document.createElement("canvas");
    document.body.appendChild(e);
    return e;
  };
  this.setSize = function (t, e) {
    i.canvas ? (i.canvas.width = i.width = t, i.canvas.height = i.height = e, window.width = this.width, window.height = this.height) : console.error("There is no canvas!")
  };
  this.fillPageWithCanvas = function () {
    i.canvas.style.position = "fixed", i.canvas.style.top = "0px", i.canvas.style.left = "0px", i.setSize(2 * window.innerWidth, 2 * window.innerHeight), i.disableScrollOnMobile = !0, i.contextMenuDisabled = !0, this.updateSizeOnResize = !0
  };
  // this.requestFullscreen = function () {
  //   i.canvas.requestFullscreen ? i.canvas.requestFullscreen() : i.canvas.mozRequestFullScreen ? i.canvas.mozRequestFullScreen() : i.canvas.webkitRequestFullscreen ? i.canvas.webkitRequestFullscreen() : i.canvas.msRequestFullscreen && i.canvas.msRequestFullscreen()
  // };
  // this.exitFullscreen = function () {
  //   document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
  // };
  // this.lockPointer = function () {
  //   i.canvas.requestPointerLock = i.canvas.requestPointerLock || i.canvas.mozRequestPointerLock, i.canvas.requestPointerLock()
  // };
  // this.unlockPointer = function () {
  //   document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock, document.exitPointerLock()
  // };
  // this.disableContextMenu = function () {
  //   i.contextMenuDisabled = !0
  // };
  // this.enableContextMenu = function () {
  //   i.contextMenuDisabled = !1
  // };
  // this.key = function (t) {
  //   return i.keys[t]
  // };
  // this.update = function () {
  //   if (i.calculateFPS) {
  //     var t = performance.now();
  //     i.fps = 1e3 / (t - i.lastLoop), i.deltaTime = 60 / i.fps, i.lastLoop = t, i.globalFunctions && (window.fps = i.fps, window.deltaTime = i.deltaTime)
  //   }
  //   i.mouse.movementX = 0, i.mouse.movementY = 0, i.mouse.lastX = i.mouse.x, i.mouse.lastY = i.mouse.y
  // };
  // this.clearScreen = function () {
  //   i.ctx.clearRect(0, 0, i.width, i.height)
  // };
  this.background = function (t) {
    i.ctx.fillStyle = t, i.ctx.fillRect(0, 0, i.width, i.height)
  };
  this.circle = function (t, e, n, s, a, o) {
    i.ctx.beginPath(), i.ctx.arc(t, e, n, 0, 2 * Math.PI), i.ctx.fillStyle = s, a && (i.ctx.strokeStyle = a), o && (i.ctx.lineWidth = o), i.ctx.fill(), a && i.ctx.stroke()
  };
  // this.ring = function (t, e, n, s, a) {
  //   i.ctx.beginPath(), i.ctx.arc(t, e, n, 0, 2 * Math.PI), i.ctx.strokeStyle = s, a && (i.ctx.lineWidth = a), i.ctx.stroke()
  // };
  // this.ellipse = function (t, e, n, s, a) {
  //   var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
  //     c = arguments.length > 6 ? arguments[6] : void 0,
  //     r = arguments.length > 7 ? arguments[7] : void 0;
  //   i.ctx.beginPath(), i.ctx.ellipse(t, e, n, s, o, 0, 2 * Math.PI), i.ctx.fillStyle = a, c && (i.ctx.strokeStyle = c), r && (i.ctx.lineWidth = r), i.ctx.fill(), c && i.ctx.stroke()
  // };
  // this.rectangle = function (t, e, n, s, a, o, c) {
  //   i.ctx.fillStyle = a, c && (i.ctx.lineWidth = c), o ? (i.ctx.beginPath(), i.ctx.strokeStyle = o, i.ctx.rect(t, e, n, s), i.ctx.fill(), i.ctx.stroke()) : i.ctx.fillRect(t, e, n, s)
  // };
  // this.triangle = function (t, e, n, s, a, o, c, r, l) {
  //   i.ctx.beginPath(), i.ctx.moveTo(t, e), i.ctx.lineTo(n, s), i.ctx.lineTo(a, o), i.ctx.closePath(), i.ctx.fillStyle = c, l && (i.ctx.lineWidth = l), i.ctx.fill(), r && (i.ctx.strokeStyle = r, i.ctx.stroke())
  // };
  // this.setLineCap = function (t) {
  //   i.ctx.lineCap = t
  // };
  // this.resetLineCap = function () {
  //   i.ctx.lineCap = "butt"
  // };
  // this.line = function (t, e, n, s, a, o) {
  //   i.ctx.beginPath(), i.ctx.moveTo(t, e), i.ctx.lineTo(n, s), o && (i.ctx.strokeStyle = o), a && (i.ctx.lineWidth = a), i.ctx.stroke()
  // };
  // this.picture = function (t, e, n, s, a) {
  //   var o = i.images[t];
  //   if (o) o.complete && i.ctx.drawImage(o, e, n, s, a);
  //   else {
  //     var c = new Image;
  //     c.src = t, c.onload = function () {
  //       i.ctx.drawImage(c, e, n, s, a)
  //     }, i.images[t] = c
  //   }
  // };
  // this.setFont = function (t) {
  //   i.font = t
  // };
  // this.setTextAlign = function (t) {
  //   i.ctx.textAlign = t
  // };
  // this.setTextXAlign = function (t) {
  //   i.ctx.textAlign = t
  // };
  // this.setTextYAlign = function (t) {
  //   i.ctx.textBaseline = t
  // };
  // this.resetTextXAlign = function () {
  //   i.ctx.textAlign = "left"
  // };
  // this.resetTextYAlign = function () {
  //   i.ctx.textBaseline = "alphabetic"
  // };
  // this.text = function (t, e, n, s, a, o, c) {
  //   i.ctx.beginPath(), i.ctx.font = s + "px " + i.font, i.ctx.fillStyle = a, c && (i.ctx.lineWidth = c), i.ctx.fillText(t, e, n), o && (i.ctx.strokeStyle = o, i.ctx.strokeText(t, e, n))
  // };
  // this.getPixelData = function () {
  //   i.imageData = i.ctx.getImageData(0, 0, i.width, i.height), i.imageDataData = i.imageData.data
  // };
  // this.updatePixel = function (t, e, n, s, a) {
  //   var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 255,
  //     c = 4 * (t + e * i.width);
  //   i.imageDataData[c] = n, i.imageDataData[c + 1] = s, i.imageDataData[c + 2] = a, i.imageDataData[c + 3] = o
  // };
  // this.updatePixelIndex = function (t, e, n, s) {
  //   var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 255,
  //     o = 4 * t;
  //   i.imageDataData[o] = e, i.imageDataData[o + 1] = n, i.imageDataData[o + 2] = s, i.imageDataData[o + 3] = a
  // };
  // this.getPixel = function (t, e) {
  //   var n = 4 * (t + e * i.width);
  //   return [i.imageDataData[n], i.imageDataData[n + 1], i.imageDataData[n + 2], i.imageDataData[n + 3]]
  // };
  // this.getPixelIndex = function (t) {
  //   var e = 4 * t;
  //   return [i.imageDataData[e], i.imageDataData[e + 1], i.imageDataData[e + 2], i.imageDataData[e + 3]]
  // };
  // this.renderPixelData = function () {
  //   i.ctx.putImageData(i.imageData, 0, 0)
  // };
  // this.save = function () {
  //   i.ctx.save()
  // };
  // this.restore = function () {
  //   i.ctx.restore()
  // };
  // this.rotate = function (t) {
  //   i.ctx.rotate(t)
  // };
  // this.translate = function (t, e) {
  //   i.ctx.translate(t, e)
  // };
  // this.beginPath = function () {
  //   i.ctx.beginPath()
  // };
  // this.closePath = function () {
  //   i.ctx.closePath()
  // };
  // this.moveTo = function (t, e) {
  //   i.ctx.moveTo(t, e)
  // };
  // this.lineTo = function (t, e) {
  //   i.ctx.lineTo(t, e)
  // };
  // this.fill = function () {
  //   i.ctx.fill()
  // };
  // this.stroke = function () {
  //   i.ctx.stroke()
  // };
  // this.fillStyle = function (t) {
  //   i.ctx.fillStyle = t
  // };
  // this.strokeStyle = function (t) {
  //   i.ctx.strokeStyle = t
  // };
  // this.setLineWidth = function (t) {
  //   i.ctx.lineWidth = t
  // };
  // this.drawSphere = function (t, e, n, s) {
  //   var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
  //       x: 0,
  //       y: 0,
  //       z: 1
  //     },
  //     o = (t + e) * n * (s[0] + 1) * (s[1] + 1) * (s[2] + 1) * (a.x + 1) * (a.y + 1) * (a.z + 1);
  //   if (i.spheres[o]) i.spheres[o].imageData ? i.ctx.putImageData(i.spheres[o].imageData, t - n, e - n) : i.spheres[o].image && i.ctx.drawImage(i.spheres[o].image, t - n, e - n);
  //   else {
  //     for (var c = i.ctx.createImageData(2 * n, 2 * n), r = 0; r < 2 * n; r++)
  //       for (var l = 0; l < 2 * n; l++) {
  //         var d = {
  //             origin: {
  //               x: l,
  //               y: r,
  //               z: 0
  //             },
  //             direction: {
  //               x: 0,
  //               y: 0,
  //               z: 1
  //             }
  //           },
  //           u = {
  //             position: {
  //               x: n,
  //               y: n,
  //               z: 2 * n
  //             }
  //           },
  //           h = {
  //             x: d.origin.x - u.position.x,
  //             y: d.origin.y - u.position.y,
  //             z: d.origin.z - u.position.z
  //           },
  //           _ = i.dot3D(d.direction, h),
  //           m = i.getLength(h.x, h.y, h.z),
  //           f = _ * _ - (m * m - n * n);
  //         if (f >= 0) {
  //           var p = -_ - Math.sqrt(f);
  //           if (p > 0) {
  //             var g = {
  //                 x: d.origin.x + d.direction.x * p,
  //                 y: d.origin.y + d.direction.y * p,
  //                 z: d.origin.z + d.direction.z * p
  //               },
  //               v = i.normalize3DVector({
  //                 x: u.position.x - g.x,
  //                 y: u.position.y - g.y,
  //                 z: u.position.z - g.z
  //               }),
  //               y = i.dot3D(a, v),
  //               x = 4 * (l + r * n * 2);
  //             c.data[x] = s[0] * y, c.data[x + 1] = s[1] * y, c.data[x + 2] = s[2] * y, c.data[x + 3] = 255
  //           }
  //         }
  //       }
  //     window.createImageBitmap ? (i.spheres[o] = {
  //       imageData: void 0,
  //       image: void 0
  //     }, createImageBitmap(c).then(function (s) {
  //       i.ctx.drawImage(s, t - n, e - n), i.spheres[o] = {
  //         imageData: void 0,
  //         image: s
  //       }
  //     })) : (i.ctx.putImageData(c, t - n, e - n), i.spheres[o] = {
  //       imageData: c,
  //       image: void 0
  //     })
  //   }
  // };
  // this.createSound = function (t) {
  //   var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
  //     i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
  //     n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
  //     s = new Audio(t);
  //   return s.loop = n, s.currentTime = i, s.volume = e, {
  //     volume: e,
  //     startTime: i,
  //     audio: s
  //   }
  // };
  // this.playSound = function (t) {
  //   t.audio.currentTime = t.startTime, t.audio.volume = t.volume, t.audio.play()
  // };
  // this.stopSound = function (t) {
  //   t.audio.stop()
  // };
  // this.pauseSound = function (t) {
  //   t.audio.pause()
  // };
  // this.backgroundMusic = function (t) {
  //   var e = new Audio(t);
  //   return e.loop = !0, e.play(), e
  // };
  // this.fadeOutSound = function (t) {
  //   var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
  //     i = t.volume,
  //     n = 0,
  //     s = setInterval(function () {
  //       t.audio.volume = i / (20 * e) * (20 * e - n), n++, n > 20 * e && (t.audio.pause(), clearInterval(s))
  //     }, 50)
  // };
  // this.playTone = function () {
  //   var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 440,
  //     e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
  //     n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
  //     s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "sine",
  //     a = i.audioContext.createOscillator(),
  //     o = i.audioContext.createGain();
  //   o.gain.value = n, o.connect(i.audioContext.destination), a.type = s, a.frequency.value = t, a.connect(o), a.start(), setTimeout(function () {
  //     a.stop()
  //   }, 1e3 * e)
  // };
  // this.DegToRad = Math.PI / 180, this.RadToDeg = 180 / Math.PI, this.PI = Math.PI, this.TWO_PI = 2 * Math.PI, this.TAU = this.TWO_PI, this.getDistanceSqr = function (t, e, i, n) {
  //   var s = t - i,
  //     a = e - n;
  //   return s * s + a * a
  // };
  // this.getDistanceSqr3D = function (t, e, i, n, s, a) {
  //   var o = t - i,
  //     c = e - n,
  //     r = s - a;
  //   return o * o + c * c + r * r
  // };
  // this.getDistance = function (t, e, n, s) {
  //   return Math.sqrt(i.getDistanceSqr(t, e, n, s))
  // };
  // this.getDistance3D = function (t, e, n, s, a, o) {
  //   return Math.sqrt(i.getDistanceSqr3D(t, e, n, s, a, o))
  // };
  // this.getAngle = function (t, e, i, n) {
  //   return Math.atan2(n - e, i - t)
  // };
  // this.normalize = function (t, e) {
  //   var i = Math.sqrt(t * t + e * e);
  //   return {
  //     x: t / i,
  //     y: e / i
  //   }
  // };
  // this.normalize3D = function (t, e, i) {
  //   var n = Math.sqrt(t * t + e * e + i * i);
  //   return {
  //     x: t / n,
  //     y: e / n,
  //     z: i / n
  //   }
  // };
  // this.normalize3DVector = function (t) {
  //   var e = Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
  //   return {
  //     x: t.x / e,
  //     y: t.y / e,
  //     z: t.z / e
  //   }
  // };
  // this.lengthVector = function (t) {
  //   return Math.sqrt(t.x * t.x + t.y * t.y)
  // };
  // this.length3DVector = function (t) {
  //   return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z)
  // };
  // this.getLength = function () {
  //   for (var t = 0, e = 0; e < arguments.length; e++) {
  //     var i = arguments[e];
  //     t += i * i
  //   }
  //   return Math.sqrt(t)
  // };
  // this.dot = function (t, e) {
  //   return t.x * e.x + t.y * e.y
  // };
  // this.dot3D = function (t, e) {
  //   return t.x * e.x + t.y * e.y + t.z * e.z
  // };
  // this.crossProduct3D = function (t, e) {
  //   return {
  //     x: t.y * e.z - t.z * e.y,
  //     y: t.z * e.x - t.x * e.z,
  //     z: t.x * e.y - t.y * e.x
  //   }
  // };
  // this.rectanglesIntersect = function (t, e, i, n, s, a, o, c) {
  //   return t + i > s && t < s + o && e + n > a && e < a + c
  // };
  // this.circlesIntersect = function (t, e, n, s, a, o) {
  //   return i.getDistance(t, e, s, a) < n + o
  // };
  // this.circleRectangleIntersect = function (t, e, i, n, s, a, o) {
  //   var c = Math.abs(t - (n + a / 2)),
  //     r = Math.abs(e - (s + o / 2));
  //   if (c > a / 2 + i) return !1;
  //   if (r > o / 2 + i) return !1;
  //   if (c <= a / 2) return !0;
  //   if (r <= o / 2) return !0;
  //   var l = c - a / 2,
  //     d = r - o / 2,
  //     u = l * l + d * d;
  //   return u <= i * i
  // };
  // this.random = function (t) {
  //   return Math.random() * t
  // };
  // this.randomInt = function (t) {
  //   return Math.random() * t >> 0
  // };
  // this.randomArray = function (t) {
  //   return t[Math.random() * t.length >> 0]
  // };
  // this.randomColor = function (t) {
  //   if (t) {
  //     var e = 256 / t,
  //       i = Math.ceil((256 * Math.random() >> 0) / e) * e,
  //       n = Math.ceil((256 * Math.random() >> 0) / e) * e,
  //       s = Math.ceil((256 * Math.random() >> 0) / e) * e;
  //     return "rgb(" + i + "," + n + "," + s + ")"
  //   }
  //   return "rgb(" + (256 * Math.random() >> 0) + "," + (256 * Math.random() >> 0) + "," + (256 * Math.random() >> 0) + ")"
  // };
  // this.create2DArray = function (t, e) {
  //   for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {
  //       return 0
  //     }, n = new Array(t), s = 0; s < t; s++) {
  //     n[s] = new Array(e);
  //     for (var a = 0; a < e; a++) n[s][a] = i(s, a)
  //   }
  //   return n
  // };
  // this.canvasToURL = function () {
  //   return i.canvas.toDataURL()
  // };
  this.canvasToImage = function () {
    var t = new Image;
    return t.src = i.canvas.toDataURL(), t
  };
  // this.saveToFile = function () {
  //   var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "canvas.png",
  //     e = document.createElement("a");
  //   e.download = t, e.href = i.canvas.toDataURL(), e.click()
  // };
  // this.setCookie = function (t, e) {
  //   var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 36500,
  //     n = new Date;
  //   n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
  //   var s = "expires=" + n.toUTCString();
  //   document.cookie = t + "=" + e + ";" + s + ";path=/"
  // };
  // this.getCookie = function (t) {
  //   if (0 == t.length) return !1;
  //   for (var e = t + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
  //     var s = i[n],
  //       a = s.indexOf(e);
  //     if (a > 0) return s.substr(a + e.length)
  //   }
  //   return !1
  // };
  // this.deleteCookie = function (t) {
  //   document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"
  // };
  // navigator.getBattery && navigator.getBattery().then(function (t) {
  //   t.addEventListener("levelchange", function () {
  //     i.batteryLevel = 100 * t.level
  //   }), i.batteryLevel = 100 * t.level
  // });
  // this.getBatteryLevel = function () {
  //   return i.batteryLevel
  // };
  // this.functions = [{
  //   func: this.createCanvas,
  //   name: "createCanvas"
  // }, {
  //   func: this.setSize,
  //   name: "setSize"
  // }, {
  //   func: this.fillPageWithCanvas,
  //   name: "fillPageWithCanvas"
  // }, {
  //   func: this.requestFullscreen,
  //   name: "requestFullscreen"
  // }, {
  //   func: this.exitFullscreen,
  //   name: "exitFullscreen"
  // }, {
  //   func: this.lockPointer,
  //   name: "lockPointer"
  // }, {
  //   func: this.unlockPointer,
  //   name: "unlockPointer"
  // }, {
  //   func: this.disableContextMenu,
  //   name: "disableContextMenu"
  // }, {
  //   func: this.enableContextMenu,
  //   name: "enableContextMenu"
  // }, {
  //   func: this.key,
  //   name: "key"
  // }, {
  //   func: this.update,
  //   name: "update"
  // }, {
  //   func: this.clearScreen,
  //   name: "clearScreen"
  // }, {
  //   func: this.background,
  //   name: "background"
  // }, {
  //   func: this.circle,
  //   name: "circle"
  // }, {
  //   func: this.ring,
  //   name: "ring"
  // }, {
  //   func: this.ellipse,
  //   name: "ellipse"
  // }, {
  //   func: this.rectangle,
  //   name: "rectangle"
  // }, {
  //   func: this.triangle,
  //   name: "triangle"
  // }, {
  //   func: this.picture,
  //   name: "picture"
  // }, {
  //   func: this.setLineCap,
  //   name: "setLineCap"
  // }, {
  //   func: this.resetLineCap,
  //   name: "resetLineCap"
  // }, {
  //   func: this.line,
  //   name: "line"
  // }, {
  //   func: this.setFont,
  //   name: "setFont"
  // }, {
  //   func: this.setTextAlign,
  //   name: "setTextAlign"
  // }, {
  //   func: this.setTextXAlign,
  //   name: "setTextXAlign"
  // }, {
  //   func: this.setTextYAlign,
  //   name: "setTextYAlign"
  // }, {
  //   func: this.resetTextXAlign,
  //   name: "resetTextXAlign"
  // }, {
  //   func: this.resetTextYAlign,
  //   name: "resetTextYAlign"
  // }, {
  //   func: this.text,
  //   name: "text"
  // }, {
  //   func: this.getPixelData,
  //   name: "getPixelData"
  // }, {
  //   func: this.updatePixel,
  //   name: "updatePixel"
  // }, {
  //   func: this.updatePixelIndex,
  //   name: "updatePixelIndex"
  // }, {
  //   func: this.getPixel,
  //   name: "getPixel"
  // }, {
  //   func: this.getPixelIndex,
  //   name: "getPixelIndex"
  // }, {
  //   func: this.renderPixelData,
  //   name: "renderPixelData"
  // }, {
  //   func: this.save,
  //   name: "save"
  // }, {
  //   func: this.restore,
  //   name: "restore"
  // }, {
  //   func: this.rotate,
  //   name: "rotate"
  // }, {
  //   func: this.translate,
  //   name: "translate"
  // }, {
  //   func: this.beginPath,
  //   name: "beginPath"
  // }, {
  //   func: this.closePath,
  //   name: "closePath"
  // }, {
  //   func: this.moveTo,
  //   name: "moveTo"
  // }, {
  //   func: this.lineTo,
  //   name: "lineTo"
  // }, {
  //   func: this.fill,
  //   name: "fill"
  // }, {
  //   func: this.stroke,
  //   name: "stroke"
  // }, {
  //   func: this.fillStyle,
  //   name: "fillStyle"
  // }, {
  //   func: this.strokeStyle,
  //   name: "strokeStyle"
  // }, {
  //   func: this.setLineWidth,
  //   name: "setLineWidth"
  // }, {
  //   func: this.drawSphere,
  //   name: "drawSphere"
  // }, {
  //   func: this.createSound,
  //   name: "createSound"
  // }, {
  //   func: this.playSound,
  //   name: "playSound"
  // }, {
  //   func: this.stopSound,
  //   name: "stopSound"
  // }, {
  //   func: this.pauseSound,
  //   name: "pauseSound"
  // }, {
  //   func: this.fadeOutSound,
  //   name: "fadeOutSound"
  // }, {
  //   func: this.playTone,
  //   name: "playTone"
  // }, {
  //   func: this.getDistanceSqr,
  //   name: "getDistanceSqr"
  // }, {
  //   func: this.getDistance,
  //   name: "getDistance"
  // }, {
  //   func: this.getDistanceSqr3D,
  //   name: "getDistanceSqr3D"
  // }, {
  //   func: this.getDistance3D,
  //   name: "getDistance3D"
  // }, {
  //   func: this.getAngle,
  //   name: "getAngle"
  // }, {
  //   func: this.normalize,
  //   name: "normalize"
  // }, {
  //   func: this.normalize3D,
  //   name: "normalize3D"
  // }, {
  //   func: this.normalize3D,
  //   name: "normalize3DVector"
  // }, {
  //   func: this.getLength,
  //   name: "getLength"
  // }, {
  //   func: this.dot,
  //   name: "dot"
  // }, {
  //   func: this.dot3D,
  //   name: "dot3D"
  // }, {
  //   func: this.crossProduct3D,
  //   name: "crossProduct3D"
  // }, {
  //   func: this.lengthVector,
  //   name: "lengthVector"
  // }, {
  //   func: this.length3DVector,
  //   name: "length3DVector"
  // }, {
  //   func: this.rectanglesIntersect,
  //   name: "rectanglesIntersect"
  // }, {
  //   func: this.circlesIntersect,
  //   name: "circlesIntersect"
  // }, {
  //   func: this.circleRectangleIntersect,
  //   name: "circleRectangleIntersect"
  // }, {
  //   func: this.random,
  //   name: "random"
  // }, {
  //   func: this.randomInt,
  //   name: "randomInt"
  // }, {
  //   func: this.randomArray,
  //   name: "randomArray"
  // }, {
  //   func: this.randomColor,
  //   name: "randomColor"
  // }, {
  //   func: this.create2DArray,
  //   name: "create2DArray"
  // }, {
  //   func: this.canvasToURL,
  //   name: "canvasToURL"
  // }, {
  //   func: this.canvasToImage,
  //   name: "canvasToImage"
  // }, {
  //   func: this.saveToFile,
  //   name: "saveToFile"
  // }, {
  //   func: this.setCookie,
  //   name: "setCookie"
  // }, {
  //   func: this.getCookie,
  //   name: "getCookie"
  // }, {
  //   func: this.deleteCookie,
  //   name: "deleteCookie"
  // }, {
  //   func: this.getBatteryLevel,
  //   name: "getBatteryLevel"
  // }], this.variables = [{
  //   variable: this.RadToDeg,
  //   name: "RadToDeg"
  // }, {
  //   variable: this.DegToRad,
  //   name: "DegToRad"
  // }, {
  //   variable: this.PI,
  //   name: "PI"
  // }, {
  //   variable: this.TWO_PI,
  //   name: "TWO_PI"
  // }, {
  //   variable: this.TAU,
  //   name: "TAU"
  // }];
  // this.makeFunctionsGlobal = function () {
  //   this.globalFunctions = !0, this.functions.forEach(function (t) {
  //     window[t.name] = t.func
  //   }), this.variables.forEach(function (t) {
  //     window[t.name] = t.variable
  //   }), window.fps = this.fps, window.deltaTime = this.deltaTime
  // };
  this.settings = t;
  if ("undefined" === typeof this.settings) {
    this.canvas = this.createCanvas();
    this.fillPageWithCanvas();
    // this.makeFunctionsGlobal();
  } else {
    if ("undefined" !== typeof this.settings.canvas) {
      this.canvas = this.settings.canvas;
    } else {
      this.canvas = this.createCanvas();
      if("undefined" === typeof this.settings.width && "undefined" === typeof this.settings.height) {
        this.fillPageWithCanvas()
      }
      // if("undefined" === typeof this.settings.globalFunctions || "undefined" !== typeof this.settings.globalFunctions && this.settings.globalFunctions){
      //   this.makeFunctionsGlobal()
      // }
    }
    "undefined" !== typeof this.settings.width && (this.width = this.settings.width, this.canvas.width = window.width = this.width), "undefined" !== typeof this.settings.height && (this.height = this.settings.height, this.canvas.height = window.height = this.height), "undefined" !== typeof this.settings.updateSizeOnResize && (this.updateSizeOnResize = this.settings.updateSizeOnResize)
  };
  // document.addEventListener("keydown", function (t) {
  //   e.keys[t.key] = e.keys[t.keyCode] = !0
  // });
  // document.addEventListener("keyup", function (t) {
  //   e.keys[t.key] = e.keys[t.keyCode] = !1
  // });
  if (this.canvas) {
    this.ctx = this.canvas.getContext("2d");
    this.updateSizeOnResize && window.addEventListener("resize", function () {
      e.setSize(window.innerWidth, window.innerHeight)
    });
    // this.mouse = {
    //   x: 0,
    //   y: 0,
    //   lastX: 0,
    //   lastY: 0,
    //   movementX: 0,
    //   movementY: 0,
    //   left: !1,
    //   middle: !1,
    //   right: !1,
    //   down: !1
    // };
    // this.touches = [];
    // this.globalFunctions && (window.mouse = this.mouse, window.touches = this.touches);
    // this.canvas.addEventListener("mousemove", function (t) {
    //   var i = e.canvas.getBoundingClientRect();
    //   e.mouse.x = (t.clientX - i.left) / (i.width / e.width), e.mouse.y = (t.clientY - i.top) / (i.height / e.height), e.mouse.movementX = t.movementX, e.mouse.movementY = t.movementY, e.eventFunctions["mousemove"] && OnMouseMove(t)
    // });
    // this.canvas.addEventListener("mousedown", function (t) {
    //   var i = t.button;
    //   i < 3 && (e.mouse[n[i]] = !0), e.audioContext || (e.audioContext = new(window.AudioContext || window.webkitAudioContext)), e.eventFunctions["mousedown"] && OnMouseDown(t)
    // });
    // this.canvas.addEventListener("mouseup", function (t) {
    //   var i = t.button;
    //   i < 3 && (e.mouse[n[i]] = !1), e.eventFunctions["mouseup"] && OnMouseUp(t)
    // });
    // this.canvas.addEventListener("contextmenu", function (t) {
    //   return e.eventFunctions["contextmenu"] && OnContextMenu(t), !e.contextMenuDisabled || (t.preventDefault(), !1)
    // });
    // this.updateTouches = function () {
    //   var t = this.canvas.getBoundingClientRect();
    //   this.touches = [];
    //   for (var e = 0; e < event.touches.length; e++) {
    //     var i = event.touches[e],
    //       n = (i.pageX - t.left) / (t.width / this.width),
    //       s = (i.pageY - t.top) / (t.height / this.height);
    //     this.touches[e] = {
    //       x: n,
    //       y: s,
    //       id: i.identifier,
    //       force: i.force
    //     }
    //   }
    //   this.globalFunctions && (window.touches = this.touches)
    // };
    // this.canvas.addEventListener("touchmove", function (t) {
    //   e.disableScrollOnMobile && t.preventDefault(), e.updateTouches(), e.mouse.x = e.touches[0].x, e.mouse.y = e.touches[0].y, e.eventFunctions["touchmove"] && OnTouchMove(t)
    // });
    // this.canvas.addEventListener("touchend", function (t) {
    //   e.disableScrollOnMobile && t.preventDefault(), e.touches = [], e.globalFunctions && (window.touches = e.touches), e.mouse.left = !1, e.eventFunctions["touchend"] && OnTouchEnd(t)
    // });
    // this.canvas.addEventListener("touchstart", function (t) {
    //   e.disableScrollOnMobile && t.preventDefault(), e.updateTouches(), e.mouse.x = e.touches[0].x, e.mouse.y = e.touches[0].y, e.mouse.left = !0, e.audioContext || (e.audioContext = new(window.AudioContext || window.webkitAudioContext)), e.eventFunctions["touchstart"] && OnTouchStart(t)
    // })
  }
}
// var Qt = Zt;
// export default Qt;
// export default Zt;