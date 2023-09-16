var Qt = function (t) {
  var e = this;
  var i = this;
  this.contextMenuDisabled = !1;
  this.disableScrollOnMobile = !1;
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
  this.background = function (t) {
    i.ctx.fillStyle = t, i.ctx.fillRect(0, 0, i.width, i.height)
  };
  this.circle = function (t, e, n, s, a, o) {
    i.ctx.beginPath(), i.ctx.arc(t, e, n, 0, 2 * Math.PI), i.ctx.fillStyle = s, a && (i.ctx.strokeStyle = a), o && (i.ctx.lineWidth = o), i.ctx.fill(), a && i.ctx.stroke()
  };
  this.canvasToImage = function () {
    var t = new Image;
    return t.src = i.canvas.toDataURL(), t
  };
  this.settings = t;
  if ("undefined" === typeof this.settings) {
    this.canvas = this.createCanvas();
    this.fillPageWithCanvas();
  } else {
    if ("undefined" !== typeof this.settings.canvas) {
      this.canvas = this.settings.canvas;
    } else {
      this.canvas = this.createCanvas();
      if ("undefined" === typeof this.settings.width && "undefined" === typeof this.settings.height) {
        this.fillPageWithCanvas()
      }
    }
    "undefined" !== typeof this.settings.width && (this.width = this.settings.width, this.canvas.width = window.width = this.width), "undefined" !== typeof this.settings.height && (this.height = this.settings.height, this.canvas.height = window.height = this.height), "undefined" !== typeof this.settings.updateSizeOnResize && (this.updateSizeOnResize = this.settings.updateSizeOnResize)
  };
  if (this.canvas) {
    this.ctx = this.canvas.getContext("2d");
    this.updateSizeOnResize && window.addEventListener("resize", function () {
      e.setSize(window.innerWidth, window.innerHeight)
    });
  }
};
var qt;
var Kt = {
  // data: function () {
  //   return {
  list: [],
  Toa: !1,
  page_info: {
    boom_text: '艺考加油！'
  },
  type_index: 0,
  type_data: [],
  yes_index: 0,
  //   }
  // },
  beforeRouteLeave: function (t, e, i) {
    for (var n = document.getElementsByTagName("canvas"), s = 0; s < n.length; s++) {
      var a = document.getElementsByTagName("canvas")[s],
        o = a.parentElement;
      o.removeChild(a)
    }
    console.log("离开"), i()
  },
  onload: function () {
    var t = this,
      e = 'this.$route.query.mm_token',
      i = 8,
      n = this.$get_free_page_info(e, i);
    console.log(n), n ? (_.$emit("show_more", {
      more: !0
    }), this.page_info = n, console.log(this.page_info.boom_text.split("#")), window.firecrackers_text_arr = this.page_info.boom_text.split("#"), this.created_canvas(), this.created_typed(), this.$nextTick(function () {
      _.$emit("m", t.page_info.mp3)
    })) : this.$get("index/get_page", {
      mm_token: e,
      radio: i
    }).then(function (e) {
      console.log(e);
      var i = e.data.value;
      t.page_info = JSON.parse(i), console.log(t.page_info.boom_text.split("#")), window.firecrackers_text_arr = t.page_info.boom_text.split("#"), t.created_canvas(), t.created_typed(), t.$nextTick(function () {
        _.$emit("m", t.page_info.mp3)
      })
    }).catch(function (t) {
      console.log(t)
    })
  },
  created_typed: function () {
    var t = this;
    setTimeout(function () {
      t.Toa = !0, console.log(t.page_info.top_data.split("#"));
      var e = t.page_info.top_data.split("#");
      t.type_data = [e[t.type_index]]
    }, 3e3)
  },
  complete: function () {
    var t = this;
    setTimeout(function () {
      t.Toa = !1;
      var e = t.page_info.top_data.split("#");
      t.type_index + 1 == e.length ? (console.log("完成"), setTimeout(function () {
        t.yes()
      }, 5e3)) : (t.type_index++, t.type_data = [e[t.type_index]], setTimeout(function () {
        t.Toa = !0
      }, 1e3))
    }, 2e3)
  },
  yes: function () {
    var t = this,
      e = this.page_info.yes_list.split("#")[this.yes_index];
    if (-1 != e.indexOf("站内")) {
      console.log(e.replace("站内", ""));
      var i = 'this.$route.query.mm_token';
      this.$router.replace({
        path: e.replace("站内", ""),
        query: {
          mm_token: i
        }
      })
    } else this.$is_url(e) ? window.location.href = e : $["a"].alert({
      message: e
    }).then(function (e) {
      ++t.yes_index < t.page_info.yes_list.split("#").length ? setTimeout(function (e) {
        t.yes()
      }, 500) : (t.yes_index = 0, console.log("yes完成"), t.$queue_next())
    })
  },
  created_canvas: function () {
    var t = this,
      e = new Qt;
    qt = e;
    window.firecrackers_text_arr = t.page_info.boom_text.split("#");
    window.firecrackers_text_index = 0;
    var i = [],
      n = [],
      s = [],
      a = .1;
    console.log(document.body.clientHeight);
    var o = document.body.clientWidth,
      c = document.body.clientHeight;
    setTimeout(function () {
      setInterval(function () {
        n.push(new h(Math.random() * o, c, Math.random() - .5, -(7 * Math.random() + 5)))
      }, 400), setInterval(function () {
        for (var t = 0; t < 8; t++) n.push(new h(Math.random() * o, c, Math.random() - .5, -(7 * Math.random() + 5)))
      }, 2e4);
      // t.$route.query.mm_token
    }, 2e3), n.push(new h(o / 2, c, 0, -9.5, 10, "gold", !0)), setInterval(function () {
      n.push(new h(o / 2, c, 0, -9.5, 10, "gold", !0))
    }, 3e3);
    for (var r = 0; r < 250; r++) e.circle(Math.random() * o, Math.random() * c, 1, "rgb(200, 200, 200)");
    var l = e.canvasToImage();

    function d() {
      e.ctx.globalCompositeOperation = "source-over", e.background("rgba(0, 0, 0, 0.1)"), e.ctx.drawImage(l, 0, 0), e.ctx.globalCompositeOperation = "lighter";
      for (var t = 0; t < n.length; t++) {
        var a = n[t];
        a.update(), a.render()
      }
      for (t = 0; t < s.length; t++) {
        var o = s[t];
        o.update(), o.render()
      }
      for (t = 0; t < i.length; t++) {
        var c = i[t];
        c.update(), c.render()
      }
      requestAnimationFrame(d)
    }

    function u(t, e, n, s) {
      this.x = t, this.y = e, this.vx = n, this.vy = s, this.ay = .2, this.radius = 4, this.maxHealth = 200, this.health = 200, this.update = function () {
        this.x += this.vx, this.y += this.vy, this.vx *= .95, this.vy *= .95, this.vy += this.ay, this.ay *= .95, this.radius = this.health / this.maxHealth * 4, this.health--, this.health <= 0 && i.splice(i.indexOf(this), 1)
      }, this.render = function () {
        qt.circle(this.x, this.y, this.radius, "rgba(255, 255, 255, " + this.health / this.maxHealth + ")")
      }
    }

    function h(t, e, o, c) {
      var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 5,
        l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "white",
        d = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      this.x = t, this.y = e, this.vx = o, this.vy = c, this.radius = r, this.title = d, this.color = l, this.update = function () {
        if (this.x += this.vx, this.y += this.vy, this.vy += a, this.vy >= 0)
          if (n.splice(n.indexOf(this), 1), this.title) {
            window.firecrackers_text_index >= window.firecrackers_text_arr.length && (window.firecrackers_text_index = 0);
            for (var t = m(window.firecrackers_text_arr[window.firecrackers_text_index++], Math.floor(23 * Math.random() + 13), "Arial"), e = .3, o = 0; o < t.length; o++) {
              var c = t[o],
                r = {
                  x: (c.x - 60) * e + .1 * (Math.random() - .5),
                  y: (c.y - 20) * e + .1 * (Math.random() - .5)
                },
                l = new u(this.x, this.y, r.x, r.y);
              i.push(l)
            }
          } else {
            var d = [256 * Math.random() >> 0, 256 * Math.random() >> 0, 256 * Math.random() >> 0];
            for (o = 0; o < 2 * Math.PI; o += .1) {
              var h = 4 * (Math.random() + .5),
                f = Math.cos(o) * h,
                p = Math.sin(o) * h;
              s.push(new _(this.x, this.y, f, p, Math.random() + 3, d))
            }
          }
      }, this.render = function () {
        qt.circle(this.x, this.y, this.radius, this.color)
      }
    }

    function _(t, e, i, n, o, c) {
      this.x = t, this.y = e, this.vx = i, this.vy = n, this.life = 100, this.color = c, this.radius = o, this.update = function () {
        this.x += this.vx, this.y += this.vy, this.vy += a, this.vx *= .95, this.vy *= .95, this.life--, this.life <= 20 && s.splice(s.indexOf(this), 1)
      }, this.render = function () {
        qt.circle(this.x, this.y, this.life / 100 * 3, "rgba(" + this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ", " + this.life / 100 + ")")
      }
    }

    function m(t, e, i) {
      var n = document.getElementById("newyear");
      n.width = 2160, n.height = 1.3 * e;
      var s = n.getContext("2d");
      s.textBaseline = "middle", s.font = e + "px " + i, s.fillText(t, Math.floor(50 * Math.random() + 15), n.height / 2);
      for (var a = s.getImageData(0, 0, n.width, n.height), o = a.data, c = [], r = function (t, e) {
          return 4 * (t + n.width * e)
        }, l = 50, d = 0; d < o.length; d += 4)
        if (o[d + 3] > l) {
          var u = {
            x: d / 4 % n.width,
            y: d / 4 / n.width >> 0
          };
          (o[r(u.x + 1, u.y) + 3] < l || o[r(u.x - 1, u.y) + 3] < l || o[r(u.x, u.y + 1) + 3] < l || o[r(u.x, u.y - 1) + 3] < l) && c.push({
            x: d / 4 % n.width,
            y: d / 4 / n.width >> 0
          })
        } return c
    }
    e.background("black"), d()
  },
  created: function () {
    var t = this;
    setTimeout(function () {
      t.onload()
    }, 1)
  }
}

Kt.created_canvas();