(function(d) {
    "function" === typeof define && define.amd ? define(["jquery"], d) : d(jQuery)
})(function(d) {
    function n(a) {
        return a
    }
    function p(a) {
        a = a.replace(k, " ");
        try {
            return decodeURIComponent(a)
        } catch(c) {
            return unescape(a)
        }
    }
    function l(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e.json ? JSON.parse(a) : a
        } catch(c) {}
    }
    var k = /\+/g,
    e = d.cookie = function(a, c, b) {
        if (void 0 !== c) {
            b = d.extend({},
            e.defaults, b);
            if ("number" === typeof b.expires) {
                var g = b.expires,
                f = b.expires = new Date;
                f.setDate(f.getDate() + g)
            }
            c = e.json ? JSON.stringify(c) : String(c);
            return document.cookie = [e.raw ? a: encodeURIComponent(a), "=", e.raw ? c: encodeURIComponent(c), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path: "", b.domain ? "; domain=" + b.domain: "", b.secure ? "; secure": ""].join("")
        }
        c = e.raw ? n: p;
        b = document.cookie.split("; ");
        for (var g = a ? void 0 : {},
        f = 0, k = b.length; f < k; f++) {
            var h = b[f].split("="),
            m = c(h.shift()),
            h = c(h.join("="));
            if (a && a === m) {
                g = l(h);
                break
            }
            a || (g[m] = l(h))
        }
        return g
    };
    e.defaults = {};
    d.removeCookie = function(a, c) {
        return void 0 !== d.cookie(a) ? (d.cookie(a, "", d.extend({},
        c, {
            expires: -1
        })), !0) : !1
    }
}); (function(e) {
    var v = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4E3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {}
    };
    e.fn.bxSlider = function(q) {
        if (0 == this.length) return this;
        if (1 < this.length) return this.each(function() {
            e(this).bxSlider(q)
        }),
        this;
        var a = {},
        c = this,
        r = e(window).width(),
        n = e(window).height(),
        f = function() {
            a.settings = e.extend({},
            v, q);
            a.settings.slideWidth = parseInt(a.settings.slideWidth);
            a.children = c.children(a.settings.slideSelector);
            a.children.length < a.settings.minSlides && (a.settings.minSlides = a.children.length);
            a.children.length < a.settings.maxSlides && (a.settings.maxSlides = a.children.length);
            a.settings.randomStart && (a.settings.startSlide = Math.floor(Math.random() * a.children.length));
            a.active = {
                index: a.settings.startSlide
            };
            a.carousel = 1 < a.settings.minSlides || 1 < a.settings.maxSlides;
            a.carousel && (a.settings.preloadImages = "all");
            a.minThreshold = a.settings.minSlides * a.settings.slideWidth + (a.settings.minSlides - 1) * a.settings.slideMargin;
            a.maxThreshold = a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin;
            a.working = !1;
            a.controls = {};
            a.interval = null;
            a.animProp = "vertical" == a.settings.mode ? "top": "left";
            var b;
            if (b = a.settings.useCSS) if (b = "fade" != a.settings.mode) a: {
                b = document.createElement("div");
                var d = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                p;
                for (p in d) if (void 0 !== b.style[d[p]]) {
                    a.cssPrefix = d[p].replace("Perspective", "").toLowerCase();
                    a.animProp = "-" + a.cssPrefix + "-transform";
                    b = !0;
                    break a
                }
                b = !1
            }
            a.usingCSS = b;
            "vertical" == a.settings.mode && (a.settings.maxSlides = a.settings.minSlides);
            c.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
            a.viewport = c.parent();
            a.loader = e('<div class="bx-loading" />');
            a.viewport.prepend(a.loader);
            c.css({
                width: "horizontal" == a.settings.mode ? 215 * a.children.length + "%": "auto",
                position: "relative"
            });
            a.usingCSS && a.settings.easing ? c.css("-" + a.cssPrefix + "-transition-timing-function", a.settings.easing) : a.settings.easing || (a.settings.easing = "swing");
            l();
            a.viewport.css({
                width: "100%",
                overflow: "hidden",
                position: "relative"
            });
            a.viewport.parent().css({
                maxWidth: t()
            });
            a.children.css({
                "float": "horizontal" == a.settings.mode ? "left": "none",
                listStyle: "none",
                position: "relative"
            });
            a.children.width(s());
            "horizontal" == a.settings.mode && 0 < a.settings.slideMargin && a.children.css("marginRight", a.settings.slideMargin);
            "vertical" == a.settings.mode && 0 < a.settings.slideMargin && a.children.css("marginBottom", a.settings.slideMargin);
            "fade" == a.settings.mode && (a.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none"
            }), a.children.eq(a.settings.startSlide).css({
                zIndex: 50,
                display: "block"
            }));
            a.controls.el = e('<div class="bx-controls" />');
            a.settings.captions && G();
            a.settings.infiniteLoop && ("fade" != a.settings.mode && !a.settings.ticker) && (b = "vertical" == a.settings.mode ? a.settings.minSlides: a.settings.maxSlides, p = a.children.slice(0, b).clone().addClass("bx-clone"), b = a.children.slice( - b).clone().addClass("bx-clone"), c.append(p).prepend(b));
            a.active.last = a.settings.startSlide == k() - 1;
            a.settings.video && c.fitVids();
            p = a.children.eq(a.settings.startSlide);
            "all" == a.settings.preloadImages && (p = c.children());
            a.settings.ticker ? a.settings.pager = !1 : (a.settings.pager && (a.settings.pagerCustom ? a.pagerEl = e(a.settings.pagerCustom) : (a.pagerEl = e('<div class="bx-pager" />'), a.settings.pagerSelector ? e(a.settings.pagerSelector).html(a.pagerEl) : a.controls.el.addClass("bx-has-pager").append(a.pagerEl), A()), a.pagerEl.delegate("a", "click", H)), a.settings.controls && (a.controls.next = e('<a class="bx-next" href="">' + a.settings.nextText + "</a>"), a.controls.prev = e('<a class="bx-prev" href="">' + a.settings.prevText + "</a>"), a.controls.next.bind("click", I), a.controls.prev.bind("click", J), a.settings.nextSelector && e(a.settings.nextSelector).append(a.controls.next), a.settings.prevSelector && e(a.settings.prevSelector).append(a.controls.prev), a.settings.nextSelector || a.settings.prevSelector || (a.controls.directionEl = e('<div class="bx-controls-direction" />'), a.controls.directionEl.append(a.controls.prev).append(a.controls.next), a.controls.el.addClass("bx-has-controls-direction").append(a.controls.directionEl))), a.settings.auto && a.settings.autoControls && (a.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + a.settings.startText + "</a></div>"), a.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + a.settings.stopText + "</a></div>"), a.controls.autoEl = e('<div class="bx-controls-auto" />'), a.controls.autoEl.delegate(".bx-start", "click", K), a.controls.autoEl.delegate(".bx-stop", "click", L), a.settings.autoControlsCombine ? a.controls.autoEl.append(a.controls.start) : a.controls.autoEl.append(a.controls.start).append(a.controls.stop), a.settings.autoControlsSelector ? e(a.settings.autoControlsSelector).html(a.controls.autoEl) : a.controls.el.addClass("bx-has-controls-auto").append(a.controls.autoEl), w(a.settings.autoStart ? "stop": "start")), (a.settings.controls || a.settings.autoControls || a.settings.pager) && a.viewport.after(a.controls.el));
            p.imagesLoaded(x)
        },
        x = function() {
            a.loader.remove();
            B();
            "vertical" == a.settings.mode && (a.settings.adaptiveHeight = !0);
            a.viewport.height(m());
            c.redrawSlider();
            a.settings.onSliderLoad(a.active.index);
            a.initialized = !0;
            e(window).bind("resize", C);
            a.settings.auto && a.settings.autoStart && M();
            a.settings.ticker && N();
            a.settings.pager && y(a.settings.startSlide);
            a.settings.controls && D();
            a.settings.touchEnabled && !a.settings.ticker && (a.touch = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            },
            a.viewport.bind("touchstart", O))
        },
        m = function() {
            var b = 0,
            d = e();
            if ("vertical" == a.settings.mode || a.settings.adaptiveHeight) if (a.carousel) {
                var c = 1 == a.settings.moveSlides ? a.active.index: a.active.index * g(),
                d = a.children.eq(c);
                for (i = 1; i <= a.settings.maxSlides - 1; i++) d = c + i >= a.children.length ? d.add(a.children.eq(i - 1)) : d.add(a.children.eq(c + i))
            } else d = a.children.eq(a.active.index);
            else d = a.children;
            "vertical" == a.settings.mode ? (d.each(function(a) {
                b += e(this).outerHeight()
            }), 0 < a.settings.slideMargin && (b += a.settings.slideMargin * (a.settings.minSlides - 1))) : b = Math.max.apply(Math, d.map(function() {
                return e(this).outerHeight(!1)
            }).get());
            return b
        },
        t = function() {
            var b = "100%";
            0 < a.settings.slideWidth && (b = "horizontal" == a.settings.mode ? a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin: a.settings.slideWidth);
            return b
        },
        s = function() {
            var b = a.settings.slideWidth,
            d = a.viewport.width();
            0 == a.settings.slideWidth || a.settings.slideWidth > d && !a.carousel || "vertical" == a.settings.mode ? b = d: 1 < a.settings.maxSlides && "horizontal" == a.settings.mode && !(d > a.maxThreshold) && d < a.minThreshold && (b = (d - a.settings.slideMargin * (a.settings.minSlides - 1)) / a.settings.minSlides);
            return b
        },
        l = function() {
            var b = 1;
            "horizontal" == a.settings.mode && 0 < a.settings.slideWidth ? a.viewport.width() < a.minThreshold ? b = a.settings.minSlides: a.viewport.width() > a.maxThreshold ? b = a.settings.maxSlides: (b = a.children.first().width(), b = Math.floor(a.viewport.width() / b)) : "vertical" == a.settings.mode && (b = a.settings.minSlides);
            return b
        },
        k = function() {
            var b = 0;
            if (0 < a.settings.moveSlides) if (a.settings.infiniteLoop) b = a.children.length / g();
            else for (var d = 0,
            c = 0; d < a.children.length;)++b,
            d = c + l(),
            c += a.settings.moveSlides <= l() ? a.settings.moveSlides: l();
            else b = Math.ceil(a.children.length / l());
            return b
        },
        g = function() {
            return 0 < a.settings.moveSlides && a.settings.moveSlides <= l() ? a.settings.moveSlides: l()
        },
        B = function() {
            if (a.children.length > a.settings.maxSlides && a.active.last && !a.settings.infiniteLoop) if ("horizontal" == a.settings.mode) {
                var b = a.children.last(),
                d = b.position();
                h( - (d.left - (a.viewport.width() - b.width())), "reset", 0)
            } else "vertical" == a.settings.mode && (d = a.children.eq(a.children.length - a.settings.minSlides).position(), h( - d.top, "reset", 0));
            else d = a.children.eq(a.active.index * g()).position(),
            a.active.index == k() - 1 && (a.active.last = !0),
            void 0 != d && ("horizontal" == a.settings.mode ? h( - d.left, "reset", 0) : "vertical" == a.settings.mode && h( - d.top, "reset", 0))
        },
        h = function(b, d, e, k) {
            if (a.usingCSS) b = "vertical" == a.settings.mode ? "translate3d(0, " + b + "px, 0)": "translate3d(" + b + "px, 0, 0)",
            c.css("-" + a.cssPrefix + "-transition-duration", e / 1E3 + "s"),
            "slide" == d ? (c.css(a.animProp, b), c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                z()
            })) : "reset" == d ? c.css(a.animProp, b) : "ticker" == d && (c.css("-" + a.cssPrefix + "-transition-timing-function", "linear"), c.css(a.animProp, b), c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                h(k.resetValue, "reset", 0);
                u()
            }));
            else {
                var g = {};
                g[a.animProp] = b;
                "slide" == d ? c.animate(g, e, a.settings.easing,
                function() {
                    z()
                }) : "reset" == d ? c.css(a.animProp, b) : "ticker" == d && c.animate(g, speed, "linear",
                function() {
                    h(k.resetValue, "reset", 0);
                    u()
                })
            }
        },
        A = function() {
            for (var b = "",
            d = k(), c = 0; c < d; c++) {
                var g = "";
                a.settings.buildPager && e.isFunction(a.settings.buildPager) ? (g = a.settings.buildPager(c), a.pagerEl.addClass("bx-custom-pager")) : (g = c + 1, a.pagerEl.addClass("bx-default-pager"));
                b += '<div class="bx-pager-item"><a href="javascript:void(0)" data-slide-index="' + c + '" class="bx-pager-link">' + g + "</a></div>"
            }
            a.pagerEl.html(b)
        },
        G = function() {
            a.children.each(function(a) {
                a = e(this).find("img:first").attr("title");
                void 0 != a && e(this).append('<div class="bx-caption"><span>' + a + "</span></div>")
            })
        },
        I = function(b) {
            a.settings.auto && c.stopAuto();
            c.goToNextSlide();
            b.preventDefault()
        },
        J = function(b) {
            a.settings.auto && c.stopAuto();
            c.goToPrevSlide();
            b.preventDefault()
        },
        K = function(a) {
            c.startAuto();
            a.preventDefault()
        },
        L = function(a) {
            c.stopAuto();
            a.preventDefault()
        },
        H = function(b) {
            a.settings.auto && c.stopAuto();
            var d = e(b.currentTarget),
            d = parseInt(d.attr("data-slide-index"));
            d != a.active.index && c.goToSlide(d);
            b.preventDefault()
        },
        y = function(b) {
            "short" == a.settings.pagerType ? a.pagerEl.html(b + 1 + a.settings.pagerShortSeparator + a.children.length) : (a.pagerEl.find("a").removeClass("active"), a.pagerEl.each(function(a, c) {
                e(c).find("a").eq(b).addClass("active")
            }))
        },
        z = function() {
            if (a.settings.infiniteLoop) {
                var b = "";
                0 == a.active.index ? b = a.children.eq(0).position() : a.active.index == k() - 1 && a.carousel ? b = a.children.eq((k() - 1) * g()).position() : a.active.index == a.children.length - 1 && (b = a.children.eq(a.children.length - 1).position());
                "horizontal" == a.settings.mode ? h( - b.left, "reset", 0) : "vertical" == a.settings.mode && h( - b.top, "reset", 0)
            }
            a.working = !1;
            a.settings.onSlideAfter(a.children.eq(a.active.index), a.oldIndex, a.active.index)
        },
        w = function(b) {
            a.settings.autoControlsCombine ? a.controls.autoEl.html(a.controls[b]) : (a.controls.autoEl.find("a").removeClass("active"), a.controls.autoEl.find("a:not(.bx-" + b + ")").addClass("active"))
        },
        D = function() {
            1 == k() ? (a.controls.prev.addClass("disabled"), a.controls.next.addClass("disabled")) : !a.settings.infiniteLoop && a.settings.hideControlOnEnd && (0 == a.active.index ? (a.controls.prev.addClass("disabled"), a.controls.next.removeClass("disabled")) : a.active.index == k() - 1 ? (a.controls.next.addClass("disabled"), a.controls.prev.removeClass("disabled")) : (a.controls.prev.removeClass("disabled"), a.controls.next.removeClass("disabled")))
        },
        M = function() {
            0 < a.settings.autoDelay ? setTimeout(c.startAuto, a.settings.autoDelay) : c.startAuto();
            a.settings.autoHover && c.hover(function() {
                a.interval && (c.stopAuto(!0), a.autoPaused = !0)
            },
            function() {
                a.autoPaused && (c.startAuto(!0), a.autoPaused = null)
            })
        },
        N = function() {
            var b = 0;
            "next" == a.settings.autoDirection ? c.append(a.children.clone().addClass("bx-clone")) : (c.prepend(a.children.clone().addClass("bx-clone")), b = a.children.first().position(), b = "horizontal" == a.settings.mode ? -b.left: -b.top);
            h(b, "reset", 0);
            a.settings.pager = !1;
            a.settings.controls = !1;
            a.settings.autoControls = !1;
            a.settings.tickerHover && !a.usingCSS && a.viewport.hover(function() {
                c.stop()
            },
            function() {
                var b = 0;
                a.children.each(function(c) {
                    b += "horizontal" == a.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                });
                var g = a.settings.speed / b * (b - Math.abs(parseInt(c.css("horizontal" == a.settings.mode ? "left": "top"))));
                u(g)
            });
            u()
        },
        u = function(b) {
            speed = b ? b: a.settings.speed;
            b = {
                left: 0,
                top: 0
            };
            var d = {
                left: 0,
                top: 0
            };
            "next" == a.settings.autoDirection ? b = c.find(".bx-clone").first().position() : d = a.children.first().position();
            h("horizontal" == a.settings.mode ? -b.left: -b.top, "ticker", speed, {
                resetValue: "horizontal" == a.settings.mode ? -d.left: -d.top
            })
        },
        O = function(b) {
            a.working ? b.preventDefault() : (a.touch.originalPos = c.position(), b = b.originalEvent, a.touch.start.x = b.changedTouches[0].pageX, a.touch.start.y = b.changedTouches[0].pageY, a.viewport.bind("touchmove", E), a.viewport.bind("touchend", F))
        },
        E = function(b) {
            var c = b.originalEvent,
            e = Math.abs(c.changedTouches[0].pageX - a.touch.start.x),
            g = Math.abs(c.changedTouches[0].pageY - a.touch.start.y);
            3 * e > g && a.settings.preventDefaultSwipeX ? b.preventDefault() : 3 * g > e && a.settings.preventDefaultSwipeY && b.preventDefault();
            "fade" != a.settings.mode && a.settings.oneToOneTouch && (b = 0, "horizontal" == a.settings.mode ? (c = c.changedTouches[0].pageX - a.touch.start.x, b = a.touch.originalPos.left + c) : (c = c.changedTouches[0].pageY - a.touch.start.y, b = a.touch.originalPos.top + c), h(b, "reset", 0))
        },
        F = function(b) {
            a.viewport.unbind("touchmove", E);
            var d = b.originalEvent;
            b = 0;
            a.touch.end.x = d.changedTouches[0].pageX;
            a.touch.end.y = d.changedTouches[0].pageY;
            "fade" == a.settings.mode ? (d = Math.abs(a.touch.start.x - a.touch.end.x), d >= a.settings.swipeThreshold && (a.touch.start.x > a.touch.end.x ? c.goToNextSlide() : c.goToPrevSlide(), c.stopAuto())) : ("horizontal" == a.settings.mode ? (d = a.touch.end.x - a.touch.start.x, b = a.touch.originalPos.left) : (d = a.touch.end.y - a.touch.start.y, b = a.touch.originalPos.top), !a.settings.infiniteLoop && (0 == a.active.index && 0 < d || a.active.last && 0 > d) ? h(b, "reset", 200) : Math.abs(d) >= a.settings.swipeThreshold ? (0 > d ? c.goToNextSlide() : c.goToPrevSlide(), c.stopAuto()) : h(b, "reset", 200));
            a.viewport.unbind("touchend", F)
        },
        C = function(a) {
            a = e(window).width();
            var d = e(window).height();
            if (r != a || n != d) r = a,
            n = d,
            c.redrawSlider()
        };
        c.goToSlide = function(b, d) {
            if (!a.working && a.active.index != b) {
                a.working = !0;
                a.oldIndex = a.active.index;
                0 > b ? a.active.index = k() - 1 : b >= k() ? a.active.index = 0 : a.active.index = b;
                a.settings.onSlideBefore(a.children.eq(a.active.index), a.oldIndex, a.active.index);
                if ("next" == d) a.settings.onSlideNext(a.children.eq(a.active.index), a.oldIndex, a.active.index);
                else if ("prev" == d) a.settings.onSlidePrev(a.children.eq(a.active.index), a.oldIndex, a.active.index);
                a.active.last = a.active.index >= k() - 1;
                a.settings.pager && y(a.active.index);
                a.settings.controls && D();
                if ("fade" == a.settings.mode) a.settings.adaptiveHeight && a.viewport.height() != m() && a.viewport.animate({
                    height: m()
                },
                a.settings.adaptiveHeightSpeed),
                a.children.filter(":visible").fadeOut(a.settings.speed).css({
                    zIndex: 0
                }),
                a.children.eq(a.active.index).css("zIndex", 51).fadeIn(a.settings.speed,
                function() {
                    e(this).css("zIndex", 50);
                    z()
                });
                else {
                    a.settings.adaptiveHeight && a.viewport.height() != m() && a.viewport.animate({
                        height: m()
                    },
                    a.settings.adaptiveHeightSpeed);
                    var l = 0,
                    f = {
                        left: 0,
                        top: 0
                    };
                    if (!a.settings.infiniteLoop && a.carousel && a.active.last) if ("horizontal" == a.settings.mode) var n = a.children.eq(a.children.length - 1),
                    f = n.position(),
                    l = a.viewport.width() - n.width();
                    else f = a.children.eq(a.children.length - a.settings.minSlides).position();
                    else a.carousel && a.active.last && "prev" == d ? (f = 1 == a.settings.moveSlides ? a.settings.maxSlides - g() : (k() - 1) * g() - (a.children.length - a.settings.maxSlides), n = c.children(".bx-clone").eq(f), f = n.position()) : "next" == d && 0 == a.active.index ? (f = c.find("> .bx-clone").eq(a.settings.maxSlides).position(), a.active.last = !1) : 0 <= b && (f = b * g(), f = a.children.eq(f).position());
                    "undefined" !== typeof f && h("horizontal" == a.settings.mode ? -(f.left - l) : -f.top, "slide", a.settings.speed)
                }
            }
        };
        c.goToNextSlide = function() {
            if (a.settings.infiniteLoop || !a.active.last) {
                var b = parseInt(a.active.index) + 1;
                c.goToSlide(b, "next")
            }
        };
        c.goToPrevSlide = function() {
            if (a.settings.infiniteLoop || 0 != a.active.index) {
                var b = parseInt(a.active.index) - 1;
                c.goToSlide(b, "prev")
            }
        };
        c.startAuto = function(b) {
            a.interval || (a.interval = setInterval(function() {
                "next" == a.settings.autoDirection ? c.goToNextSlide() : c.goToPrevSlide()
            },
            a.settings.pause), a.settings.autoControls && !0 != b && w("stop"))
        };
        c.stopAuto = function(b) {
            a.interval && (clearInterval(a.interval), a.interval = null, a.settings.autoControls && !0 != b && w("start"))
        };
        c.getCurrentSlide = function() {
            return a.active.index
        };
        c.getSlideCount = function() {
            return a.children.length
        };
        c.redrawSlider = function() {
            a.children.add(c.find(".bx-clone")).width(s());
            a.viewport.css("height", m());
            a.settings.ticker || B();
            a.active.last && (a.active.index = k() - 1);
            a.active.index >= k() && (a.active.last = !0);
            a.settings.pager && !a.settings.pagerCustom && (A(), y(a.active.index))
        };
        c.destroySlider = function() {
            a.initialized && (a.initialized = !1, e(".bx-clone", this).remove(), a.children.removeAttr("style"), this.removeAttr("style").unwrap().unwrap(), a.controls.el && a.controls.el.remove(), a.controls.next && a.controls.next.remove(), a.controls.prev && a.controls.prev.remove(), a.pagerEl && a.pagerEl.remove(), e(".bx-caption", this).remove(), a.controls.autoEl && a.controls.autoEl.remove(), clearInterval(a.interval), e(window).unbind("resize", C))
        };
        c.reloadSlider = function(a) {
            void 0 != a && (q = a);
            c.destroySlider();
            f()
        };
        f();
        return this
    }
})(jQuery); (function(e, v) {
    var q = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    e.fn.imagesLoaded = function(a) {
        function c() {
            var c = e(s),
            g = e(l);
            f && (l.length ? f.reject(m, c, g) : f.resolve(m));
            e.isFunction(a) && a.call(n, m, c, g)
        }
        function r(a, g) {
            a.src === q || -1 !== e.inArray(a, t) || (t.push(a), g ? l.push(a) : s.push(a), e.data(a, "imagesLoaded", {
                isBroken: g,
                src: a.src
            }), x && f.notifyWith(e(a), [g, m, e(s), e(l)]), m.length === t.length && (setTimeout(c), m.unbind(".imagesLoaded")))
        }
        var n = this,
        f = e.isFunction(e.Deferred) ? e.Deferred() : 0,
        x = e.isFunction(f.notify),
        m = n.find("img").add(n.filter("img")),
        t = [],
        s = [],
        l = [];
        e.isPlainObject(a) && e.each(a,
        function(c, e) {
            if ("callback" === c) a = e;
            else if (f) f[c](e)
        });
        m.length ? m.bind("load.imagesLoaded error.imagesLoaded",
        function(a) {
            r(a.target, "error" === a.type)
        }).each(function(a, c) {
            var f = c.src,
            h = e.data(c, "imagesLoaded");
            if (h && h.src === f) r(c, h.isBroken);
            else if (c.complete && c.naturalWidth !== v) r(c, 0 === c.naturalWidth || 0 === c.naturalHeight);
            else if (c.readyState || c.complete) c.src = q,
            c.src = f
        }) : c();
        return f ? f.promise(n) : n
    }
})(jQuery); (function(b, f, k, g) {
    var e = b(f);
    b.fn.lazyload = function(a) {
        function c() {
            var a = 0;
            h.each(function() {
                var c = b(this);
                if (! (d.skip_invisible && !c.is(":visible") || b.abovethetop(this, d) || b.leftofbegin(this, d))) if (!b.belowthefold(this, d) && !b.rightoffold(this, d)) c.trigger("appear"),
                a = 0;
                else if (++a > d.failure_limit) return ! 1
            })
        }
        var h = this,
        d = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: f,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null
        };
        a && (g !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), g !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), b.extend(d, a));
        a = d.container === g || d.container === f ? e: b(d.container);
        0 === d.event.indexOf("scroll") && a.bind(d.event,
        function(b) {
            return c()
        });
        this.each(function() {
            var a = this,
            c = b(a);
            a.loaded = !1;
            c.one("appear",
            function() {
                this.loaded || (d.appear && d.appear.call(a, h.length, d), b("<img />").bind("load",
                function() {
                    c.hide().attr("src", c.data(d.data_attribute))[d.effect](d.effect_speed);
                    a.loaded = !0;
                    var e = b.grep(h,
                    function(a) {
                        return ! a.loaded
                    });
                    h = b(e);
                    d.load && d.load.call(a, h.length, d)
                }).attr("src", c.data(d.data_attribute)))
            });
            0 !== d.event.indexOf("scroll") && c.bind(d.event,
            function(b) {
                a.loaded || c.trigger("appear")
            })
        });
        e.bind("resize",
        function(a) {
            c()
        });
        /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && e.bind("pageshow",
        function(a) {
            a.originalEvent.persisted && h.each(function() {
                b(this).trigger("appear")
            })
        });
        b(f).load(function() {
            c()
        });
        return this
    };
    b.belowthefold = function(a, c) {
        return (c.container === g || c.container === f ? e.height() + e.scrollTop() : b(c.container).offset().top + b(c.container).height()) <= b(a).offset().top - c.threshold
    };
    b.rightoffold = function(a, c) {
        return (c.container === g || c.container === f ? e.width() + e.scrollLeft() : b(c.container).offset().left + b(c.container).width()) <= b(a).offset().left - c.threshold
    };
    b.abovethetop = function(a, c) {
        return (c.container === g || c.container === f ? e.scrollTop() : b(c.container).offset().top) >= b(a).offset().top + c.threshold + b(a).height()
    };
    b.leftofbegin = function(a, c) {
        return (c.container === g || c.container === f ? e.scrollLeft() : b(c.container).offset().left) >= b(a).offset().left + c.threshold + b(a).width()
    };
    b.inviewport = function(a, c) {
        return ! b.rightoffold(a, c) && !b.leftofbegin(a, c) && !b.belowthefold(a, c) && !b.abovethetop(a, c)
    };
    b.extend(b.expr[":"], {
        "below-the-fold": function(a) {
            return b.belowthefold(a, {
                threshold: 0
            })
        },
        "above-the-top": function(a) {
            return ! b.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-screen": function(a) {
            return b.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-screen": function(a) {
            return ! b.rightoffold(a, {
                threshold: 0
            })
        },
        "in-viewport": function(a) {
            return b.inviewport(a, {
                threshold: 0
            })
        },
        "above-the-fold": function(a) {
            return ! b.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-fold": function(a) {
            return b.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-fold": function(a) {
            return ! b.rightoffold(a, {
                threshold: 0
            })
        }
    })
})(jQuery, window, document);
var $window, lnks1, kf, kfs, kf_cookie_name;
$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
    cg_nav_js();
    txtSlides();
    top_buy_cart();
    has_checkd_login_status();
    set_member_info_html();
    kfToggle();
    gotop();
    two_demension();
    morefriendlinks();
    lnks1 = $("#lnks1");
    $window = $(window);
    $window.scroll(function() {
        lazyload_lnks1()
    });
    qdimg_wbiao_cn = qdimg_wbiao_cn.replace(/http:\/\/qd/ig, document.location.protocol + ("https:" == document.location.protocol ? "//qd2": "//qd"))
});
jQuery.fn.scrollTo = function(a, b) {
    $("html,body").stop().animate({
        scrollTop: a
    },
    b);
    return this
};
function lazyload_lnks1() {
    if ("undefined" != typeof lnks1 && "undefined" != typeof lnks1.position() && "undefined" != typeof lnks1.position().top && isNaN(parseInt(lnks1.data("loaded"))) && $window.scrollTop() + $window.height() >= lnks1.position().top) {
        lnks1.html('<a href="http://netadreg.gzaic.gov.cn/ntmm/WebSear/WebLogoPub.aspx?logo=440106106022011072001823" rel="nofollow" target="_blank"><img alt="????????????" src="' + qdimg_wbiao_cn + 'flinks/gzaic.gif" /></a><a href="http://www.ccredit.cn/eca/eca_c.aspx?id=231" rel="nofollow" target="_blank"><img src="' + qdimg_wbiao_cn + 'flinks/eca01.jpg" alt="wangzhou weiquan biaozhun" border="0"></a><a href="http://huodong.ebrun.com/2011b2c/new/bdlist" target="_blank" rel="nofollow" title="2011???????????????????????????TOP100"><img src="' + qdimg_wbiao_cn + 'flinks/top100.gif" /></a>  <a href="http://www.etao.com/" target="_blank" rel="nofollow" title="??????"><img src="' + qdimg_wbiao_cn + 'flinks/etao.jpg" height="35" /></a>  <a target="_blank" rel="nofollow" href="http://union.tenpay.com/cgi-bin/trust_mch/ShowTrustMchInfo.cgi?uin=1211552601&uin_type=1"><img src="' + qdimg_wbiao_cn + 'flinks/tenpay.jpg" border="0"></a>  <span id="KXYZ"></span><a id="___szfw_logo___" href="https://search.szfw.org/cert/l/CX20130124002185002221" target="_blank"><img src="' + qdimg_wbiao_cn + 'flinks/cert.png" style="height:35px;"></a>');
        $("#kx_verify>img").height(35);
        var a = document.createElement("script");
        a.src = document.location.protocol + "//kxlogo.knet.cn/seallogo.dll?sn=e13100844010042768drcq000000&size=0";
        document.body.appendChild(a);
        lnks1.data("loaded", 1)
    }
}
/*function cg_nav_js() {
    var a = $("#gMenu");
    if (a[0]) {
        var b = a.is(":visible"),
        d;
        b || $("#pop_menu").hover(function() {
            clearTimeout(d);
            0 < navigator.userAgent.indexOf("MSIE 6.0") ? a.attr("style", "display:inline;") : a.slideDown("fast")
        },
        function() {
            d = setTimeout(function() {
                a.slideUp("fast")
            },
            300)
        });
        a.find("dl").hover(function() {
            $(this).addClass("curr");
            $(this).find("#subMenu").show();
            $(".hotBrd").find("img.lazy").lazyload({
                effect: "fadeIn",
                event: "sporty"
            }).trigger("sporty").end();
            var a = $(this).find("#subMenu").height();
            a < $(this).offset().top - 152 ? (a = $(this).offset().top - a, $(this).find("#subMenu").offset({
                top: a + 60
            })) : $(this).find("#subMenu").offset({
                top: 138
            });
            clearTimeout(d)
        },
        function() {
            $(this).removeClass("curr");
            $(this).find("#subMenu").hide();
            b || (d = setTimeout(function() {
                a.hide()
            },
            300))
        })
    }
}*/
function txtSlides() {
    $(".slides03").bxSlider({
        controls: !1,
        mode: "fade",
        autoDelay: 1E3,
        auto: !0,
        autoStart: !0
    })
}
function render() {
    var a = $("input:text"),
    b = $("input:submit, input:button");
    dealText(a);
    btnHover(b)
}
var cart_goods = function() {
    var a = cart_wbiao_cn.replace(/http:/ig, document.location.protocol);
    $.ajax({
        type: "get",
        url: a + "common/settleup/?" + Math.random(),
        dataType: "jsonp",
        success: function(a, d, c) {
            if (0 < a.length) {
                var e = "",
                f = 0,
                g = 0;
                $.each(a,
                function(a, b) {
                    e += '<div class="cart_goods"><div class="img fl"><a href="' + www_wbiao_cn + b.brand_urlname + "-g" + b.goods_id + '.html"target="_blank"><img src="' + b.goods_img + '"width="50"height="50"alt="' + b.goods_name + '"></a></div><div class="name fl"><a href="' + www_wbiao_cn + b.brand_urlname + "-g" + b.goods_id + '.html"target="_blank">' + b.goods_name + '</a></div><div class="detail fr"><span class="price"><strong>???' + parseInt(b.goods_price) + "</strong>&nbsp;&times;&nbsp;" + b.goods_number + '</span><br><a class="delete"data="' + b.cart_id + '"name="RemoveGoods"href="javascript:void(0);">??????</a></div></div>';
                    f += parseInt(b.goods_number);
                    g += b.goods_price * b.goods_number
                });
                e += '<div class="total fr">???<b>' + f + "</b>???????????????<strong>???" + g.toFixed(2) + '</strong><br><a href="' + cart_wbiao_cn + '"id="payfor">??????????????????</a></div>';
                $("#settleup").html(e);
                $(".delete").click(function() {
                    var a = $(this).attr("data");
                    delete_cart_goods(a)
                });
                $("#cart_goods_count").text(f)
            } else $("#settleup").html('<center style="padding-top:8px;">????????????????????????????????????????????????</center>'),
            $("#cart_goods_count").text("0")
        },
        error: function() {
            $("#settleup").html("<center>??????????????????????????????????????????</center>")
        }
    })
};
function top_buy_cart() {
    $("#clearing").mouseenter(function() {
        $(this).attr("style", "background-color:#fff;border-left:1px solid #e7e5e5;border-right:1px solid #e7e5e5;padding:0 4px;");
        0 == $("#settleup").length && $(this).append('<div id="settleup"><center><img src="' + qdimg_wbiao_cn + 'common/4.0/loading.gif" />????????????????????????...</center></div>');
        if (0 == $("#settleup").find(".cart_goods").length) {
            var a = $.cookie("CART_GOODS");
            "" == a && null == a ? $("#settleup").html('<center style="padding-top:8px;">????????????????????????????????????????????????</center>') : cart_goods()
        }
    }).mouseleave(function() {
        $("#settleup").remove();
        $(this).removeAttr("style")
    });
    0 < window.location.href.indexOf("cart.") && $(".delete").click(function() {
        var a = $(this).attr("data");
        delete_cart_goods(a)
    })
}
var delete_cart_goods = function(a) {
    var b = cart_wbiao_cn.replace(/http:/ig, document.location.protocol);
    $.ajax({
        type: "get",
        url: b + "common/delete/?" + Math.random(),
        data: {
            cart_id: a
        },
        dataType: "jsonp",
        success: function(b) {
            if (1 == b.errors) $("#goods_number_" + a).val(old_goods_number),
            alert(b.message);
            else if (0 == b.total) window.location.href = cart_wbiao_cn;
            else {
                if (0 < window.location.href.indexOf("cart.")) for (x in $("#goods_total").html(b.total.goods_amount), $("#f_goods_total").html(b.total.formated_goods_amount), $("#order_total").html(b.total.order_amount), $("#bonus_detail").html("- ???" + b.total.bonus_money), $("#goods_list_" + a).remove(), $("#goods_line_" + a).remove(), $("#f_goods_discount").html((0 < b.total.discount_money ? b.total.discount_note: "") + "- ???" + b.total.discount_money), b.total.is_can_use_bonus ? $("#f_bonus_div").show() : $("#f_bonus_div").hide(), b.lianbao) {
                    var c = $("#product_list ul.lb_ul");
                    0 == b.lianbao[x] ? (c.eq(4 * x).remove(), c.eq(4 * x + 1).remove(), c.eq(4 * x + 2).remove(), c.eq(4 * x + 3).remove()) : (c.eq(4 * x + 1).children().eq(2).html(b.lianbao[x]), c.eq(4 * x + 3).children().eq(2).html(b.lianbao[x]))
                }
                0 < $("#settleup").find(".cart_goods").length && (b = $.cookie("CART_GOODS"), "" == b && null == b ? $("#settleup").html('<center style="padding-top:8px;">????????????????????????????????????????????????</center>') : cart_goods())
            }
            $.removeCookie("CART_GOODS", {
                path: "/"
            })
        },
        error: function() {}
    })
};
function addCookie(a, b, d) {
    a = a + "=" + escape(b);
    b = new Date;
    d *= 36E5;
    b.setTime(b.getTime() + d);
    a += "; expires=" + b.toGMTString() + ";path=/;domain=" + wb_domain;
    document.cookie = a
}
function getCookie(a) {
    for (var b = document.cookie.split("; "), d = 0; d < b.length; d++) {
        var c = b[d].split("=");
        if (c[0] == a) return unescape(c[1])
    }
}
function getQueryString(a) {
    a = RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i");
    a = window.location.search.substr(1).match(a);
    return null != a ? unescape(a[2]) : null
}
function has_checkd_login_status() {
    var a = $.cookie("has_checkd_login_status");
    1 != parseInt(a) && (user_wbiao_cn = user_wbiao_cn.replace(/http:/ig, document.location.protocol), $.ajax({
        type: "get",
        cache: !1,
        url: user_wbiao_cn + "index/get_member_info/",
        dataType: "jsonp"
    }));
    set_member_info_html()
}
function set_member_info_html() {
    var a = $.cookie("_uid");
    0 < parseInt(a) ? (a = $.cookie("cps_qqcaibei_show_usermsg"), "undefined" != a && "undefined" != typeof a && "" != a && "null" != a ? $("#member_info").html(decodeURIComponent(a) + ' <a href="' + user_wbiao_cn + 'index/logout" title="??????" rel="nofollow">??????</a>') : $("#member_info").html('?????????<a href="' + user_wbiao_cn + '" title="????????????????????????" rel="nofollow">' + decodeURIComponent($.cookie("_uname")) + '</a>???????????????????????????<a href="' + user_wbiao_cn + 'index/logout" title="??????" rel="nofollow">??????</a>'), a = $.cookie("cps_qqcaibei_show_HeadShow"), "undefined" != a && ("undefined" != typeof a && "" != a) && ($.cookie("cps_qqcaibei_show_JifenUrl"), $("#member_info2").html('<div id="top-bar2"><div class="context">' + _selfdecodeURIComponent(a) + ' | <a href="http://cb.qq.com/my/my_jifen_source.html" target="_blank">??????????????????</a></div></div>'))) : $("#member_info").html('<a href="' + user_wbiao_cn + "index/login?" + Math.random() + "\" onclick=\"_gaq.push(['_trackEvent','users','register_link','header links']);\" class=\"f12\">??????</a> <a href=\"" + user_wbiao_cn + "index/register?" + Math.random() + '" class="f12">??????<i class="red">(??????50???)</i></a>')
}
function _selfdecodeURIComponent(a) {
    a = decodeURIComponent(a);
    return a = a.replace(/\+/g, " ")
}
function dealText(a) {
    a.each(function() {
        var a = $(this),
        d = a.attr("tip");
        a.val() !== d && a.removeClass("c999").addClass("c000 bold");
        a.focus(function() {
            a.removeClass("c999").addClass("c000 bold");
            this.value == d ? this.value = "": a.removeClass("c999").addClass("c000 bold")
        });
        a.blur(function() {
            a.removeClass("c000 bold").addClass("c999");
            "" == this.value && d ? this.value = d: a.removeClass("c999").addClass("c000 bold")
        })
    })
}
function btnHover(a) {
    a.hover(function() {
        var a = $(this).attr("class"),
        a = a.substr(a.lastIndexOf("btn"), 6);
        $(this).removeClass(a).addClass(a + "Hover")
    },
    function() {
        var a = $(this).attr("class"),
        a = a.substr(a.lastIndexOf("btn"), 6);
        $(this).removeClass(a + "Hover").addClass(a)
    })
}
function filterCss(a) {
    $(a).each(function() {
        var a = $(this).attr("class");
        return a.substr(a.lastIndexOf("c"), 4)
    })
}
function tabs(a, b, d) {
    var c = $(a),
    e = $(d);
    e.each(function() {
        $(this).children().eq(0).show()
    });
    c.each(function() {
        $(this).children().eq(0).addClass(b)
    });
    c.children().hover(function() {
        $(this).addClass(b).siblings().removeClass(b);
        var a = c.children().index(this);
        e.children().eq(a).show().siblings().hide()
    })
}
function tabsTime(a, b, d, c) {
    function e() {
        k < g.children().length - 1 ? k++:k = 0;
        f.children().eq(k).trigger("mouseover");
        l = window.setTimeout(e, c)
    }
    var f = $(a),
    g = $(d),
    k = 0,
    l;
    g.each(function() {
        $(this).children().eq(k).show()
    });
    f.each(function() {
        $(this).children().eq(k).addClass(b)
    });
    l = window.setTimeout(e, c);
    f.children().hover(function() {
        window.clearTimeout(l);
        $(this).addClass(b).siblings().removeClass(b);
        k = f.children().index(this);
        g.children().eq(k).show().siblings().hide()
    },
    function() {
        l = window.setTimeout(e, c)
    });
    g.children().hover(function() {
        window.clearTimeout(l)
    },
    function() {
        l = window.setTimeout(e, c)
    })
}
function tabsClick(a, b, d) {
    var c = $(a),
    e = $(d);
    e.each(function() {
        $(this).children().eq(0).show()
    });
    c.each(function() {
        $(this).children().eq(0).addClass(b)
    });
    c.children().click(function() {
        $(this).addClass(b).siblings().removeClass(b);
        var a = c.children().index(this);
        e.children().eq(a).show().siblings().hide()
    })
}
function addCookie(a, b, d) {
    a = a + "=" + escape(b);
    b = new Date;
    d *= 36E5;
    b.setTime(b.getTime() + d);
    a += "; expires=" + b.toGMTString() + ";path=/;domain=" + wb_domain;
    document.cookie = a
}
function footer_links() {
    $("#footer_links").append('<a href="http://netadreg.gzaic.gov.cn/ntmm/WebSear/WebLogoPub.aspx?logo=440106106022011072001823" rel="nofollow" target="_blank"><img alt="????????????" src="http://theme.wbiao.cn/images/gzaic.gif" /></a><a href="http://www.ccredit.cn/eca/eca_c.aspx?id=231" rel="nofollow" target="_blank"><img src="http://theme.wbiao.cn/images/eca01.jpg" alt="wangzhou weiquan biaozhun" border="0"></a><a href="http://huodong.ebrun.com/2011b2c/new/bdlist" target="_blank" rel="nofollow" title="2011???????????????????????????TOP100"><img src="http://theme.wbiao.cn/images/top100.gif" /></a>  <a href="http://www.etao.com/" target="_blank" rel="nofollow" title="??????"><img src="http://theme.wbiao.cn/images/etao.jpg" height="35" /></a>  <a target="_blank" rel="nofollow" href="http://union.tenpay.com/cgi-bin/trust_mch/ShowTrustMchInfo.cgi?uin=1211552601&uin_type=1"><img src="http://theme.wbiao.cn/images/tenpay.jpg" border="0"></a>  <a style="display:inline-block;" kx_type="?????????" rel="nofollow" target="_blank" tabindex="-1" id="kx_verify" href="https://ss.knet.cn/verifyseal.dll?sn=e12090344010035445000000&amp;ct=df&amp;a=1&amp;pa=423879"> <img  width="108" height="35" alt="????????????" oncontextmenu="return false;" style="border:none;" src="http://theme.wbiao.cn/images/kexin.jpg"> </a><a id="___szfw_logo___" href="https://search.szfw.org/cert/l/CX20130124002185002221" target="_blank"><img src="http://theme.wbiao.cn/images//cert.png" style="height:35px;"></a>')
}
function suggestData() {
    $.ajax({
        type: "get",
        url: www_wbiao_cn + "subscribe/suggest2/",
        data: {
            title: $("#title").val(),
            flag: $("input[name='flag']:checked").val(),
            fd_content: $("#fd_content").val(),
            come_from: $("#come_from").val(),
            visitor: $("#visitor").val()
        },
        dataType: "jsonp",
        success: function(a) {
            $("#suggest").find("ul").html(a);
            $('<div class="return">' + a + "</div>").replaceAll("#suggest ul")
        },
        error: function() {
            alert("?????????????????????????????????")
        }
    })
}
function showme(a) {
    a = $(a);
    "0" == a.attr("rel") && (a.append('<script>$("#suggest").Validform({btnSubmit:"#sbtSuggest",beforeSubmit:function(){suggestData();}});\x3c/script><ul><li><span>???????????????</span><input type="text"name="title"id="title"datatype="*"nullmsg="??????????????????"/></li><li><span>???????????????</span><input type="radio"name="flag"id="fun"value="1"datatype="*"nullmsg="??????????????????"><label for="fun">????????????</label><input type="radio"name="flag"id="error"value="2"><label for="error">????????????</label><input type="radio"name="flag"id="other"value="3"><label for="other">??????</label></li><li><span>???????????????</span><textarea name="fd_content"id="fd_content"datatype="*"nullmsg="??????????????????"></textarea></li><li><span>&nbsp;</span><input type="button"id="sbtSuggest"/><a href="javascript:void(0)"onclick="javascript:showme(\'#suggest\')"id="cancel">??????</a></li></ul><div class="retract"onclick="javascript:showme(\'#suggest\')"><b>???</b>??????</div><div class="ad"><a href="http://www.wbiao.cn/article-7210.html"target="_blank"rel="nofollow">??????????????????????????????</a></div>'), a.attr("rel", "1"));
    "block" == a.css("display") ? (a.css("display", "none"), $("input[type='text'],textarea").val(""), $("input[type='radio']").removeAttr("checked")) : "none" == a.css("display") && a.css("display", "block")
}
function gotop() {
    $(window).scroll(function() {
        h = $(window).height();
        t = $(document).scrollTop();
        t > h ? $(".c__gotop").show() : $(".c__gotop").hide()
    });
    $(".c__gotop").click(function() {
        $("body").scrollTo(0, 500);
        return ! 1
    })
}
function two_demension() {
    $(".c__dimension, .i__weixin").mouseenter(function() {
        $(this).after('<div class="qrcode"><img src="' + qdimg_wbiao_cn + 'common/4.0/qrcode.jpg" alt="????????????????????????" /></div>')
    }).mouseleave(function() {
        $(".qrcode").remove()
    })
}
function ntalker() {
    var a = parseInt($.cookie("_uid"));
    $.cookie("_uname_for_ntalker");
    var b = parseInt($("#goods_id").val()),
    d = parseInt($("span#order_id").text()),
    c = $("span#total_price").attr("data");
    isNaN(a);
    if (isNaN(b) || 0 > b) b = "";
    if (isNaN(d) || 0 > d) d = "";
    "undefined" == typeof c && (c = "");
    NTKF_PARAM = {
        siteid: "kf_9988",
        settingid: "kf_9988_1341905703263",
        uid: "",
        uname: "",
        itemid: b,
        orderid: d,
        orderprice: c
    }
}
function kfToggle() {
    kf_cookie_name = "kf";
    kf = $("#kf");
    kfs = $("#kfs");
    kf.find("a.close").click(function() {
        kf.hide();
        kfs.show()
    });
    $("#kfs").find("a.show").click(function() {
        kf.show();
        kfs.hide()
    });
    kf.show();
    kfs.hide();
    $("#kf").find("span").hover(function() {
        var a = $(this).attr("class") + "",
        a = a.substr(a.lastIndexOf("kf_btn"), 8);
        $(this).removeClass(a).addClass(a + "Hover")
    },
    function() {
        var a = $(this).attr("class") + "",
        a = a.substr(a.lastIndexOf("kf_btn"), 8);
        $(this).removeClass(a + "Hover").addClass(a)
    })
}
function AddFavorite(a, b) {
    try {
        window.external.addFavorite(a, b)
    } catch(d) {
        try {
            window.sidebar.addPanel(b, a, "")
        } catch(c) {
            alert("??????????????????????????????Ctrl+D????????????")
        }
    }
}
function checkSearchForm() {
    var a = $.trim($("#w").val()),
    b = $.trim($("#w").attr("title"));
    if ("" == a || a == b) return $("#w").val($("#w").attr("title")),
    !1;
    postLog(a);
    return ! 0
}
function postLog(a) {
    $.ajax({
        type: "get",
        dataType: "jsonp",
        endcoding: "utf-8",
        url: "http://115.29.162.74:8002/log/",
        data: {
            q: a
        }
    })
}
function browserRedirect() {
    var a = navigator.userAgent.toLowerCase(),
    b = a.match(/ucweb/i),
    a = a.match(/ucbrowser/i);
    if ("ucweb" == b || "ucbrowser" == a) location.href = "/ucweb.php?url=" + encodeURIComponent(location.href)
}
function morefriendlinks() {
    $("#more_fl").click(function() {
        "??????&gt;&gt;" == $(this).html() ? ($("#lnks2").css("height", "auto"), $(this).html("??????&lt;&lt;")) : ($("#lnks2").css("height", "20px"), $(this).html("??????&gt;&gt;"));
        return ! 1
    })
}
function addToCartT(a, b, d, c) {
    void 0 == b && (b = 1);
    $.post(www_wbiao_cn + "/cart/add/", {
        goods_id: a,
        goods_number: b,
        act_id: c,
        is_ajax: "1"
    },
    function(a) {
        $("#page_top_shippingcart").html(a.goods_count);
        0 != a.errors ? alert(a.message) : 1 == d ? top.location.href = cart_wbiao_cn: 2 == d ? ($("#clt_msg").html("<span class='sc'>" + a.message + "<a href='" + cart_wbiao_cn + "' class='settle'>???????????????</a></span>"), $("#clt_msg").animate({
            top: "-58px",
            height: "74px"
        },
        200), setTimeout("jump(cart_wbiao_cn)", 3E3)) : 3 == d ? (a = parseInt(getQueryString("pop_fast_track")), top.location.href = cart_wbiao_cn + "/order" + (1 == a ? "?pop_fast_track=1": "")) : "function" == typeof eval(d) && d()
    },
    "json")
}
function jump(a) {
    a = a + "?" + Math.round(1E4 * Math.random());
    location.href = a
}
function padLeftStr(a, b, d) {
    a += "";
    d = 3 == arguments.length ? d: "0";
    return a.length >= b ? a: padLeftStr(d + a, b, d)
}
function pagination(a, b, d) {
    var c = "";
    if (a && 1 < a.length) {
        c += '<div id="page_nav">';
        c = b != a[0] ? c + ('<a class="pre" href="javascript:void(0);" alt="' + (b - 1) + '">?????????</a>') : c + '<span class="pre">?????????</span>';
        2 < a[0] && (c += '<a href="javascript:void(0);" alt="1">1</a><span>&hellip;</span>');
        for (var e in a) c = b == a[e] ? c + ('<span class="cur">' + a[e] + "</span>") : c + ('<a href="javascript:void(0);" alt="' + a[e] + '">' + a[e] + "</a>");
        2 <= d - a[a.length - 1] && (c += "<span>&hellip;</span>", c += '<a href="javascript:void(0);" alt="' + d + '">' + d + "</a>");
        c = b != a[a.length - 1] ? c + ('<a class="next" href="javascript:void(0);" alt="' + (b + 1) + '">?????????</a>') : c + '<span class="next">?????????</span>';
        c += "</div>"
    }
    return c
};