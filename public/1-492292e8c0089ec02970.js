;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    163: function(e, a, t) {
      'use strict'
      var n = t(7),
        r = t.n(n),
        i = t(0),
        c = t.n(i),
        l = t(159),
        o = t(427),
        s = t.n(o),
        d = t(358),
        u = t.n(d),
        m = t(394)
      a.a = function(e) {
        return (function(a) {
          function t(e) {
            var t
            return (
              ((t = a.call(this, e) || this).muiPageContext = null),
              (t.muiPageContext = Object(m.a)()),
              t
            )
          }
          r()(t, a)
          var n = t.prototype
          return (
            (n.componentDidMount = function() {
              var e = document.querySelector('#jss-server-side')
              e && e.parentNode && e.parentNode.removeChild(e)
            }),
            (n.render = function() {
              return c.a.createElement(
                u.a,
                { generateClassName: this.muiPageContext.generateClassName },
                c.a.createElement(
                  l.MuiThemeProvider,
                  {
                    theme: this.muiPageContext.theme,
                    sheetsManager: this.muiPageContext.sheetsManager,
                  },
                  c.a.createElement(s.a, null),
                  c.a.createElement(e, this.props)
                )
              )
            }),
            t
          )
        })(c.a.Component)
      }
    },
    209: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'graphql', function() {
          return g
        }),
        t.d(a, 'StaticQueryContext', function() {
          return m
        }),
        t.d(a, 'StaticQuery', function() {
          return p
        })
      var n = t(0),
        r = t.n(n),
        i = t(4),
        c = t.n(i),
        l = t(169),
        o = t.n(l)
      t.d(a, 'Link', function() {
        return o.a
      }),
        t.d(a, 'withPrefix', function() {
          return l.withPrefix
        }),
        t.d(a, 'navigate', function() {
          return l.navigate
        }),
        t.d(a, 'push', function() {
          return l.push
        }),
        t.d(a, 'replace', function() {
          return l.replace
        }),
        t.d(a, 'navigateTo', function() {
          return l.navigateTo
        })
      var s = t(236),
        d = t.n(s)
      t.d(a, 'PageRenderer', function() {
        return d.a
      })
      var u = t(50)
      t.d(a, 'parsePath', function() {
        return u.a
      })
      var m = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(m.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function g() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: c.a.object,
        query: c.a.string.isRequired,
        render: c.a.func,
        children: c.a.func,
      }
    },
    219: function(e, a, t) {
      'use strict'
      t.d(a, 'd', function() {
        return l
      }),
        t.d(a, 'c', function() {
          return o
        }),
        t.d(a, 'b', function() {
          return s
        }),
        t.d(a, 'a', function() {
          return d
        })
      t(33)
      var n = t(0),
        r = t.n(n),
        i = t(174),
        c = t.n(i)
      function l(e) {
        return r.a.createElement(
          c.a,
          Object.assign({}, e, { viewBox: '0 0 448 512' }),
          r.a.createElement('path', {
            d:
              'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
          })
        )
      }
      function o(e) {
        return r.a.createElement(
          c.a,
          Object.assign({}, e, { viewBox: '0 0 96.124 96.123' }),
          r.a.createElement(
            'g',
            null,
            r.a.createElement('path', {
              d:
                'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z',
            })
          ),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null),
          r.a.createElement('g', null)
        )
      }
      function s(e) {
        return r.a.createElement(
          c.a,
          Object.assign({}, e, { viewBox: '0 0 302.8 120.1' }),
          r.a.createElement('path', {
            id: 'e',
            d:
              'M38.8,26.2c-21.1,0-38.8,9-38.8,36c0,21.4,11.8,34.9,39.3,34.9c32.3,0,34.4-21.3,34.4-21.3H58 c0,0-3.4,11.5-19.7,11.5c-13.3,0-22.9-9-22.9-21.6h59.9v-7.9C75.3,45.4,67.4,26.2,38.8,26.2L38.8,26.2z M38.2,36.3 c12.7,0,21.3,7.8,21.3,19.4H15.8C15.8,43.4,27.1,36.3,38.2,36.3z',
          }),
          r.a.createElement('path', {
            id: 'b',
            d:
              'M76.3,0v83.6C76.3,88.3,76,95,76,95h14.9c0,0,0.5-4.8,0.5-9.2c0,0,7.4,11.5,27.5,11.5c21.1,0,35.5-14.7,35.5-35.7 c0-19.6-13.2-35.3-35.5-35.3c-20.9,0-27.3,11.3-27.3,11.3V0L76.3,0z M115.1,36.8c14.4,0,23.5,10.7,23.5,24.9 c0,15.3-10.5,25.4-23.4,25.4c-15.3,0-23.6-12-23.6-25.2C91.6,49.5,99,36.8,115.1,36.8z',
          }),
          r.a.createElement('path', {
            id: 'a',
            d:
              'M192.5,26.2c-31.8,0-33.9,17.4-33.9,20.2h15.8c0,0,0.8-10.2,16.9-10.2c10.5,0,18.6,4.8,18.6,14v3.3h-18.6 c-24.6,0-37.7,7.2-37.7,21.8c0,14.4,12,22.2,28.3,22.2c22.2,0,29.3-12.3,29.3-12.3c0,4.9,0.4,9.7,0.4,9.7h14.1c0,0-0.5-6-0.5-9.8 V52.3C225.3,30.8,207.9,26.2,192.5,26.2L192.5,26.2z M210,63.3v4.4c0,5.7-3.5,19.9-24.2,19.9c-11.3,0-16.2-5.7-16.2-12.2 C169.6,63.4,186,63.3,210,63.3L210,63.3z',
          }),
          r.a.createElement('path', {
            id: 'y',
            d:
              'M217.8,28.9h17.8l25.6,51.2l25.5-51.2h16.1l-46.5,91.2h-16.9l13.4-25.4L217.8,28.9z',
          })
        )
      }
      function d(e) {
        return r.a.createElement(
          c.a,
          Object.assign({}, e, {
            viewBox: '-352.037 -291.281 800.073 678.559',
          }),
          r.a.createElement(
            'filter',
            { id: 'filter3174', colorInterpolationFilters: 'sRGB' },
            r.a.createElement('feGaussianBlur', {
              id: 'feGaussianBlur3176',
              stdDeviation: '1.71',
            })
          ),
          r.a.createElement(
            'g',
            { id: 'layer2', display: 'none' },
            r.a.createElement(
              'g',
              {
                id: 'rect3745',
                display: 'inline',
                opacity: '0.9',
                filter: 'url(#filter3174)',
                enableBackground: 'new    ',
              },
              r.a.createElement('path', {
                fill: '#000',
                d:
                  'M11,7h74c3.313,0,6,2.687,6,6v73c0,3.313-2.687,6-6,6H11c-3.313,0-6-2.687-6-6V13 C5,9.687,7.687,7,11,7z',
              })
            )
          ),
          r.a.createElement(
            'g',
            null,
            r.a.createElement('path', {
              id: 'path3673',
              'inkscapeconnector-curvature': '0',
              fill: '#000',
              d:
                'M261.789,134.426 c-16.679-22.826-34.57-41.397-34.57-83.872v-141c0-59.759,4.331-114.619-40.186-155.732c-35.041-33.34-93.25-45.103-137.767-45.103 c-87.066,0-184.192,32.13-204.56,138.599c-2.156,11.309,6.146,17.229,13.672,18.893l88.655,9.493 c8.302-0.417,14.297-8.491,15.904-16.623c7.602-36.688,38.654-54.313,73.545-54.313c18.817,0,40.186,6.808,51.324,23.507 c12.822,18.589,11.101,44.138,11.101,65.602v11.819C45.882-88.441-23.483-84.545-73.144-63.006 c-57.281,24.546-97.505,74.491-97.505,147.903c0,94.082,59.854,141.114,136.916,141.114c65.035,0,100.626-15.186,150.796-65.791 c16.643,23.865,22.089,35.363,52.441,60.345c6.807,3.594,15.583,3.252,21.614-2.155l0.021-0.02l0.207,0.227 c18.268-16.074,51.438-44.592,70.141-60.098C268.956,152.448,267.632,142.633,261.789,134.426z M81.794,93.767 c-14.522,25.53-37.652,41.15-63.352,41.15c-35.042,0-55.618-26.476-55.618-65.641c0-77.1,69.933-91.094,136.065-91.094v19.535 h0.019C98.908,32.986,99.76,62.354,81.794,93.767z',
            }),
            r.a.createElement(
              'g',
              {
                id: 'g3717',
                transform:
                  'matrix(4.0940394,0,0,4.0940394,105.99043,-56.114346)',
              },
              r.a.createElement('path', {
                id: 'path3719',
                'inkscapeconnector-curvature': '0',
                fill: '#000',
                d:
                  'M64.762,84.122c-21.39,15.782-52.41,24.179-79.125,24.179 c-37.427,0-71.14-13.834-96.65-36.865c-2.001-1.811-0.215-4.284,2.189-2.878c27.527,16.018,61.562,25.66,96.714,25.66 c23.716,0,49.781-4.917,73.764-15.096C65.272,77.592,68.304,81.512,64.762,84.122L64.762,84.122z',
              }),
              r.a.createElement('path', {
                id: 'path3721',
                'inkscapeconnector-curvature': '0',
                fill: '#000',
                d:
                  'M73.663,73.956c-2.734-3.499-18.091-1.658-24.978-0.826 c-2.095,0.243-2.417-1.575-0.535-2.909c12.246-8.601,32.313-6.112,34.647-3.237c2.352,2.915-0.614,23.03-12.093,32.626 c-1.766,1.481-3.443,0.701-2.663-1.253C70.623,91.9,76.407,77.461,73.663,73.956z',
              })
            )
          )
        )
      }
    },
    227: function(e, a, t) {
      'use strict'
      var n = t(0),
        r = t.n(n),
        i = t(7),
        c = t.n(i),
        l = t(4),
        o = t.n(l),
        s = t(209),
        d = t(167),
        u = t(163),
        m = t(159),
        p = t(430),
        g = t.n(p),
        h = t(433),
        f = t.n(h),
        b = t(197),
        E = t.n(b),
        y = t(173),
        v = t.n(y),
        C = t(181),
        k = t.n(C),
        x = t(429),
        w = t.n(x),
        N = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          return (
            c()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.language,
                t = e.activePage,
                i = e.handlePageChange,
                c = e.handleLanguageChange,
                l = e.classes,
                o = e.t,
                d = [
                  o('header.about'),
                  o('header.products'),
                  o('header.contact'),
                ]
              return r.a.createElement(
                'div',
                { className: l.root },
                r.a.createElement(
                  g.a,
                  {
                    position: 'static',
                    className:
                      '/legal' === t || '/privacy' === t
                        ? l.appbarDarkTheme
                        : l.appbar,
                  },
                  r.a.createElement(
                    f.a,
                    { className: l.toolbar },
                    r.a.createElement(
                      E.a,
                      { xsDown: !0 },
                      r.a.createElement(
                        s.Link,
                        { to: '/' },
                        r.a.createElement(
                          v.a,
                          {
                            className: l.logoButton,
                            'aria-label': 'home',
                            onClick: function() {
                              return i('/')
                            },
                          },
                          r.a.createElement('img', {
                            alt: '',
                            src: w.a,
                            className: l.logo,
                          })
                        )
                      ),
                      r.a.createElement(
                        'div',
                        null,
                        '/legal' !== t &&
                          '/privacy' !== t &&
                          r.a.createElement(
                            n.Fragment,
                            null,
                            ['/About/', '/Products/', 'contact'].map(function(
                              e,
                              a
                            ) {
                              return r.a.createElement(
                                k.a,
                                {
                                  className: l.button,
                                  key: 'link_' + e,
                                  href: '#' + d[a],
                                },
                                d[a]
                              )
                            })
                          ),
                        r.a.createElement(
                          k.a,
                          { className: l.button, onClick: c },
                          a
                        )
                      )
                    )
                  )
                )
              )
            }),
            a
          )
        })(n.Component)
      N.propTypes = { classes: o.a.object.isRequired }
      var S = Object(d.b)()(
          Object(u.a)(
            Object(m.withStyles)(function(e) {
              var a
              return {
                grow: { flexGrow: 1 },
                appbar: { boxShadow: 'none', backgroundColor: 'transparent' },
                appbarDarkTheme: {
                  boxShadow: 'none',
                  backgroundColor: e.palette.primary.main,
                },
                toolbar: ((a = { paddingLeft: 0, paddingRight: 0 }),
                (a[e.breakpoints.up('sm')] = {
                  paddingLeft: 60,
                  paddingRight: 60,
                  justifyContent: 'space-between',
                }),
                a),
                containerXS: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexBasis: '100%',
                },
                logo: { marginTop: 5, width: 40 },
                button: {
                  color: e.palette.common.white,
                  fontSize: 18,
                  textShadow: '1px 1px 1px black',
                  letterSpacing: 1.5,
                  '&:hover': { color: e.palette.secondary.main },
                },
                logoButton: { marginRight: 15 },
                menuIcon: { color: e.palette.common.black },
                mobileButton: {
                  flexBasis: '50%',
                  background: e.palette.common.black,
                  borderRadius: 0,
                  height: 57,
                  boxShadow: 'none',
                },
                primary: { backgroundColor: e.palette.primary.main },
              }
            })(N)
          )
        ),
        T = (t(456), t(201), t(162)),
        z = t.n(T),
        R = t(266),
        M = t.n(R),
        j = t(265),
        O = t.n(j),
        A = (t(33), t(186)),
        P = t.n(A),
        L = t(150),
        V = t.n(L),
        _ = t(458),
        I = t.n(_),
        q = t(466),
        B = t.n(q),
        F = t(467),
        H = t.n(F),
        D = t(218),
        G = t.n(D),
        U = t(468),
        W = t.n(U),
        J = t(469),
        Q = t.n(J),
        $ = t(264),
        X = t.n($),
        Y = t(465),
        K = t.n(Y),
        Z = { success: I.a, warning: K.a, error: B.a, info: H.a }
      function ee(e) {
        var a = e.classes,
          t = e.className,
          n = e.message,
          i = e.onClose,
          c = e.variant,
          l = P()(e, ['classes', 'className', 'message', 'onClose', 'variant']),
          o = Z[c]
        return r.a.createElement(
          X.a,
          Object.assign(
            {
              className: V()(a[c], t),
              'aria-describedby': 'client-snackbar',
              message: r.a.createElement(
                'span',
                { id: 'client-snackbar', className: a.message },
                r.a.createElement(o, { className: V()(a.icon, a.iconVariant) }),
                n
              ),
              action: [
                r.a.createElement(
                  v.a,
                  {
                    key: 'close',
                    'aria-label': 'Close',
                    color: 'inherit',
                    className: a.close,
                    onClick: i,
                  },
                  r.a.createElement(G.a, { className: a.icon })
                ),
              ],
            },
            l
          )
        )
      }
      ee.propTypes = {
        classes: o.a.object.isRequired,
        className: o.a.string,
        message: o.a.node,
        onClose: o.a.func,
        variant: o.a.oneOf(['success', 'warning', 'error', 'info']).isRequired,
      }
      var ae = Object(u.a)(
          Object(m.withStyles)(function(e) {
            return {
              success: { backgroundColor: W.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.dark },
              warning: { backgroundColor: Q.a[700] },
              icon: { fontSize: 20 },
              iconVariant: { opacity: 0.9, marginRight: e.spacing.unit },
              message: { display: 'flex', alignItems: 'center' },
            }
          })(ee)
        ),
        te = t(219),
        ne = (function(e) {
          function a() {
            for (
              var a, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r]
            return (
              ((a = e.call.apply(e, [this].concat(n)) || this).state = {
                emailAddress: '',
                name: '',
                message: '',
                isEmailValid: !0,
                isNameValid: !0,
                isMessageValid: !0,
                isTouched: !1,
                isSnackbarOpen: !1,
                notification: 'success',
              }),
              (a.handleChange = function(e) {
                return function(t) {
                  if (
                    (!1 === a.state.isTouched && a.setState({ isTouched: !0 }),
                    'emailAddress' === e)
                  ) {
                    ;/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                      t.target.value
                    )
                      ? a.setState({
                          isEmailValid: !0,
                          emailAddress: t.target.value,
                        })
                      : a.setState({
                          isEmailValid: !1,
                          emailAddress: t.target.value,
                        })
                  }
                  'name' === e &&
                    (t.target.value.length > 500
                      ? a.setState({ isNameValid: !1 })
                      : a.setState({ isNameValid: !0, name: t.target.value })),
                    'message' === e &&
                      (t.target.value.length > 1e3
                        ? a.setState({ isMessageValid: !1 })
                        : a.setState({
                            isMessageValid: !0,
                            message: t.target.value,
                          }))
                }
              }),
              (a.handleClick = function() {
                a.setState({ isSnackbarOpen: !0 })
              }),
              (a.handleClose = function(e, t) {
                'clickaway' !== t && a.setState({ isSnackbarOpen: !1 })
              }),
              (a.handleSubmit = function() {
                a.state.isEmailValid &&
                a.state.isMessageValid &&
                a.state.isNameValid &&
                a.state.isTouched
                  ? fetch(
                      'https://eisbach-riders.prod.with-datafire.io/contact',
                      {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          message: a.state.message,
                          emailAddress: a.state.emailAddress,
                          name: a.state.name,
                        }),
                      }
                    )
                      .then(function(e) {
                        200 === e.status
                          ? a.setState({
                              isSnackbarOpen: !0,
                              notification: 'success',
                            })
                          : a.setState({
                              isSnackbarOpen: !0,
                              notification: 'error',
                            })
                      })
                      .catch(function(e) {
                        a.setState({
                          isSnackbarOpen: !0,
                          notification: 'error',
                        })
                      })
                  : a.setState({ isSnackbarOpen: !0, notification: 'warning' })
              }),
              a
            )
          }
          return (
            c()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.handlePageChange,
                t = e.classes,
                n = e.t,
                i = this.state,
                c = i.emailAddress,
                l = i.name,
                o = i.message,
                d = i.isNameValid,
                u = i.isEmailValid,
                m = i.isMessageValid,
                p = i.isSnackbarOpen,
                g = i.notification
              return r.a.createElement(
                'div',
                { className: t.root, id: 'contact' },
                r.a.createElement(
                  O.a,
                  {
                    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                    open: p,
                    autoHideDuration: 6e3,
                    onClose: this.handleClose,
                  },
                  r.a.createElement(ae, {
                    onClose: this.handleClose,
                    variant: g,
                    message:
                      'success' === g
                        ? 'Your email has been sent successfully'
                        : 'warning' === g
                        ? 'Please check the form has been filled out correctly'
                        : 'An error has occured.',
                  })
                ),
                r.a.createElement(
                  'div',
                  { className: t.container },
                  r.a.createElement(
                    'div',
                    { className: t.flexItem },
                    r.a.createElement(
                      'form',
                      { noValidate: !0, autoComplete: 'off' },
                      r.a.createElement(
                        z.a,
                        { className: t.textHeading },
                        n('footer.message')
                      ),
                      r.a.createElement(
                        'div',
                        { className: t.inputContainer },
                        r.a.createElement(M.a, {
                          id: 'name',
                          name: 'name',
                          type: 'text',
                          className: t.textField,
                          InputProps: {
                            className: d ? t.input : t.inputError,
                            disableUnderline: !0,
                            classes: { input: t.textArea },
                          },
                          value: l,
                          placeholder: n('common.name'),
                          onChange: this.handleChange('name'),
                          margin: 'normal',
                          required: !0,
                        }),
                        r.a.createElement(M.a, {
                          id: 'emailAddress',
                          name: 'emailAddress',
                          type: 'email',
                          className: t.textField,
                          InputProps: {
                            className: u ? t.input : t.inputError,
                            disableUnderline: !0,
                            classes: { input: t.textArea },
                          },
                          value: c,
                          placeholder: n('common.email'),
                          onChange: this.handleChange('emailAddress'),
                          margin: 'normal',
                          required: !0,
                        })
                      ),
                      r.a.createElement(M.a, {
                        id: 'message',
                        name: 'message',
                        type: 'text',
                        InputProps: {
                          className: m ? t.input : t.inputError,
                          disableUnderline: !0,
                          classes: { input: t.textArea },
                        },
                        value: o,
                        placeholder: n('footer.message'),
                        onChange: this.handleChange('message'),
                        margin: 'normal',
                        fullWidth: !0,
                        multiline: !0,
                        rows: '4',
                        required: !0,
                      }),
                      r.a.createElement(
                        k.a,
                        {
                          variant: 'contained',
                          className: t.buttonSend,
                          fullWidth: !0,
                          onClick: this.handleSubmit,
                        },
                        n('footer.send')
                      )
                    )
                  ),
                  r.a.createElement(
                    'div',
                    { className: t.flexItem },
                    r.a.createElement(
                      z.a,
                      { className: t.textHeading },
                      n('footer.questions') + '?'
                    ),
                    r.a.createElement(
                      z.a,
                      { className: t.text },
                      n('footer.questionsMessage')
                    ),
                    r.a.createElement(
                      z.a,
                      { className: t.text },
                      n('footer.getInTouch')
                    ),
                    r.a.createElement(
                      'div',
                      { className: t.iconContainer },
                      r.a.createElement(
                        k.a,
                        {
                          variant: 'outlined',
                          'aria-label': 'linkedin',
                          className: t.button,
                          href: 'https://www.facebook.com/EisbachRiders/',
                          target: '_blank',
                          rel: 'noopener',
                          disableFocusRipple: !0,
                          disableRipple: !0,
                        },
                        r.a.createElement(te.c, { className: t.icon })
                      ),
                      r.a.createElement(
                        k.a,
                        {
                          variant: 'outlined',
                          'aria-label': 'instagram',
                          className: t.button,
                          href: 'https://www.instagram.com/eisbachriders/',
                          target: '_blank',
                          rel: 'noopener',
                          disableFocusRipple: !0,
                          disableRipple: !0,
                        },
                        r.a.createElement(te.d, { className: t.icon })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  'div',
                  { className: t.legal },
                  r.a.createElement(
                    z.a,
                    {
                      variant: 'body2',
                      align: 'center',
                      className: t.copyright,
                    },
                    '© Eisbach Riders |',
                    ' ',
                    r.a.createElement(
                      s.Link,
                      { to: '/legal/', className: t.link },
                      r.a.createElement(
                        'button',
                        {
                          className: t.link,
                          onClick: function() {
                            return a('/legal')
                          },
                        },
                        n('footer.imprint')
                      )
                    ),
                    '|',
                    ' ',
                    r.a.createElement(
                      s.Link,
                      { to: '/privacy/', className: t.link },
                      r.a.createElement(
                        'button',
                        {
                          className: t.link,
                          onClick: function() {
                            return a('/privacy')
                          },
                        },
                        n('footer.privacy')
                      )
                    )
                  )
                )
              )
            }),
            a
          )
        })(n.Component)
      ne.propTypes = { classes: o.a.object.isRequired }
      var re = Object(d.b)()(
        Object(u.a)(
          Object(m.withStyles)(function(e) {
            var a, t, n, r, i
            return {
              root: { backgroundColor: e.status.grey, width: '100%' },
              legal: { backgroundColor: e.palette.common.black },
              copyright: {
                fontSize: 12,
                textTransform: 'capitalize',
                color: e.palette.common.white,
                paddingTop: 15,
                paddingBottom: 15,
              },
              container: ((a = {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: 15,
              }),
              (a[e.breakpoints.up('sm')] = {
                paddingTop: 30,
                paddingBottom: 30,
                paddingLeft: 60,
                paddingRight: 60,
              }),
              (a[e.breakpoints.up('md')] = {
                paddingTop: 45,
                paddingBottom: 45,
                paddingLeft: 170,
                paddingRight: 170,
              }),
              a),
              flexItem: ((t = { flexBasis: '100%', paddingTop: 15 }),
              (t[e.breakpoints.up('md')] = { flexBasis: '45%', paddingTop: 0 }),
              t),
              text: ((n = { fontSize: 12, lineHeight: 1.5 }),
              (n[e.breakpoints.up('sm')] = { lineHeight: 2 }),
              n),
              divider: { borderTop: '1px solid ' + e.status.greyDk },
              textHeading: ((r = {
                letterSpacing: 3,
                fontSize: 12,
                textTransform: 'uppercase',
                paddingBottom: 15,
                paddingTop: 15,
                textAlign: 'center',
              }),
              (r[e.breakpoints.up('md')] = {
                textAlign: 'left',
                paddingTop: 0,
              }),
              r),
              textField: { margin: 0, width: '48%' },
              input: { fontSize: 12, border: '1px solid' },
              inputError: {
                fontSize: 12,
                border: '1px solid ' + e.palette.error.main,
              },
              button: ((i = {
                borderColor: e.status.black,
                borderRadius: 0,
                minWidth: 0,
                padding: 8,
                marginRight: 30,
              }),
              (i[e.breakpoints.up('sm')] = { marginRight: 15 }),
              i),
              icon: { width: 18, height: 18, fill: e.status.black },
              iconContainer: {
                display: 'flex',
                justifyContent: 'flex-end',
                paddingTop: 15,
              },
              buttonSend: {
                borderRadius: 0,
                boxShadow: 'none',
                marginTop: 15,
                backgroundColor: e.palette.secondary.main,
                color: e.palette.common.black,
                opacity: 0.8,
              },
              inputContainer: {
                display: 'flex',
                justifyContent: 'space-between',
              },
              link: {
                color: e.palette.common.white,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              },
              textArea: { paddingLeft: 20 },
            }
          })(ne)
        )
      )
      a.a = function(e) {
        var a = e.handleLanguageChange,
          t = e.handlePageChange,
          i = e.activePage,
          c = e.language,
          l = e.children
        return r.a.createElement(
          n.Fragment,
          null,
          r.a.createElement(S, {
            handleLanguageChange: a,
            handlePageChange: t,
            activePage: i,
            language: c,
          }),
          l,
          r.a.createElement(re, null)
        )
      }
    },
    236: function(e, a, t) {
      var n
      e.exports = ((n = t(357)) && n.default) || n
    },
    357: function(e, a, t) {
      'use strict'
      t.r(a)
      t(33)
      var n = t(0),
        r = t.n(n),
        i = t(4),
        c = t.n(i),
        l = t(69),
        o = t(2),
        s = function(e) {
          var a = e.location,
            t = o.default.getResourcesForPathnameSync(a.pathname)
          return r.a.createElement(
            l.a,
            Object.assign({ location: a, pageResources: t }, t.json)
          )
        }
      ;(s.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (a.default = s)
    },
    394: function(e, a, t) {
      'use strict'
      ;(function(e, n) {
        t.d(a, 'a', function() {
          return o
        })
        t(85), t(56), t(88), t(395)
        var r = t(190),
          i = t(159),
          c = t(401)
        function l() {
          return {
            theme: c.a,
            sheetsManager: new Map(),
            sheetsRegistry: new r.SheetsRegistry(),
            generateClassName: Object(i.createGenerateClassName)(),
          }
        }
        function o() {
          return e.browser
            ? (n.__INIT_MATERIAL_UI__ || (n.__INIT_MATERIAL_UI__ = l()),
              n.__INIT_MATERIAL_UI__)
            : l()
        }
      }.call(this, t(188), t(73)))
    },
    401: function(e, a, t) {
      'use strict'
      var n = t(159)
      t(402)
      t(403), t(404)
      var r = {
          white: '#ffffff',
          black: '#0b0c10',
          blue: '#1f2833',
          greyLt: '#F7F5F5',
          grey: '#c5c6c7',
          greyDk: '#404040',
          teal: '#16d57d',
          ocean: '#233d54',
          tealDk: '#45a29e',
          green: '#00942b',
          yellow: '#fcf166',
          red: '#FF0012',
        },
        i = Object(n.createMuiTheme)({
          palette: {
            primary: { light: r.ocean, main: r.ocean, dark: r.teal },
            secondary: { light: r.teal, main: r.teal, dark: r.teal },
            error: { main: r.red },
          },
          status: r,
          typography: {
            useNextVariants: !0,
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
          },
          overrides: {
            MuiTypography: {
              colorPrimary: { color: r.greyDk },
              colorSecondary: { color: r.grey },
              colorTextSecondary: { color: r.white },
            },
            MuiButton: {
              root: { padding: '9px 27px', borderRadius: 0 },
              contained: { boxShadow: 'none' },
            },
          },
        })
      a.a = i
    },
    402: function(e, a, t) {},
    429: function(e, a, t) {
      e.exports =
        t.p + 'static/logoWhite_small-81064cc9a2e5f7a5abccff06a5c90963.png'
    },
  },
])
//# sourceMappingURL=1-492292e8c0089ec02970.js.map
