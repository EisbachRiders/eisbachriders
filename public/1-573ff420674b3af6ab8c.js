;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    164: function(e, t, a) {
      'use strict'
      var o = a(7),
        i = a.n(o),
        n = a(0),
        r = a.n(n),
        s = a(161),
        l = a(367),
        c = a.n(l),
        d = a(299),
        h = a.n(d),
        u = a(335)
      t.a = function(e) {
        return (function(t) {
          function a(e) {
            var a
            return (
              ((a = t.call(this, e) || this).muiPageContext = null),
              (a.muiPageContext = Object(u.a)()),
              a
            )
          }
          i()(a, t)
          var o = a.prototype
          return (
            (o.componentDidMount = function() {
              var e = document.querySelector('#jss-server-side')
              e && e.parentNode && e.parentNode.removeChild(e)
            }),
            (o.render = function() {
              return r.a.createElement(
                h.a,
                { generateClassName: this.muiPageContext.generateClassName },
                r.a.createElement(
                  s.MuiThemeProvider,
                  {
                    theme: this.muiPageContext.theme,
                    sheetsManager: this.muiPageContext.sheetsManager,
                  },
                  r.a.createElement(c.a, null),
                  r.a.createElement(e, this.props)
                )
              )
            }),
            a
          )
        })(r.a.Component)
      }
    },
    177: function(e, t, a) {
      'use strict'
      var o = a(0),
        i = a.n(o),
        n = a(7),
        r = a.n(n),
        s = a(4),
        l = a.n(s),
        c = a(178),
        d = a(224),
        h = a(166),
        u = a(164),
        p = a(161),
        m = a(393),
        f = a.n(m),
        g = a(396),
        y = a.n(g),
        b = a(183),
        _ = a.n(b),
        w = a(215),
        v = a.n(w),
        E = a(195),
        T = a.n(E),
        S = a(210),
        P = a.n(S),
        R = a(213),
        C = a.n(R),
        k = a(214),
        A = a.n(k),
        I = function(e) {
          var t = e.links,
            a = e.linkLabels,
            o = e.classes
          return i.a.createElement(
            'div',
            { className: o.list },
            i.a.createElement(
              T.a,
              { component: 'nav' },
              i.a.createElement(
                c.Link,
                { to: '/' },
                i.a.createElement(
                  P.a,
                  { button: !0, divider: !0, dense: !0 },
                  i.a.createElement(C.a, {
                    disableTypography: !0,
                    className: o.text,
                    primary: 'home',
                  }),
                  i.a.createElement(A.a, { className: o.icon })
                )
              ),
              t.map(function(e, t) {
                return i.a.createElement(
                  c.Link,
                  { to: e },
                  i.a.createElement(
                    P.a,
                    {
                      button: !0,
                      divider: !0,
                      dense: !0,
                      href: '#' + a[t],
                      key: 'menuItem_' + e,
                    },
                    i.a.createElement(C.a, {
                      disableTypography: !0,
                      className: o.text,
                      primary: a[t],
                    }),
                    i.a.createElement(A.a, { className: o.icon })
                  )
                )
              }),
              i.a.createElement(
                Button,
                {
                  'aria-label': 'facebook',
                  className: o.button,
                  href: 'https://www.facebook.com/EisbachRiders/',
                  target: '_blank',
                  rel: 'noopener',
                  disableFocusRipple: !0,
                  disableRipple: !0,
                },
                i.a.createElement(
                  P.a,
                  { button: !0, divider: !0, dense: !0 },
                  i.a.createElement(C.a, {
                    disableTypography: !0,
                    className: o.text,
                    primary: i.a.createElement(FacebookIcon, {
                      className: o.iconSocial,
                    }),
                  }),
                  i.a.createElement(A.a, { className: o.icon })
                )
              ),
              i.a.createElement(
                Button,
                {
                  'aria-label': 'instagram',
                  className: o.button,
                  href: 'https://www.instagram.com/eisbachriders/',
                  target: '_blank',
                  rel: 'noopener',
                  disableFocusRipple: !0,
                  disableRipple: !0,
                },
                i.a.createElement(
                  P.a,
                  { button: !0, divider: !0, dense: !0 },
                  i.a.createElement(C.a, {
                    disableTypography: !0,
                    className: o.text,
                    primary: i.a.createElement(InstagramIcon, {
                      className: o.iconSocial,
                    }),
                  }),
                  i.a.createElement(A.a, { className: o.icon })
                )
              )
            )
          )
        }
      I.propTypes = { classes: l.a.object.isRequired }
      var O = Object(u.a)(
          Object(p.withStyles)(function(e) {
            return {
              list: { width: 200 },
              text: {
                textTransform: 'uppercase',
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 30,
                paddingRight: 30,
              },
              link: { color: e.status.greyDk },
              icon: { color: e.status.grey, marginRight: 15 },
              button: { width: '100%', padding: 0 },
              iconSocial: { width: 18, height: 18, fill: e.status.black },
            }
          })(I)
        ),
        x = (a(33), a(198)),
        G = a.n(x)
      var D = function(e) {
          return i.a.createElement(
            G.a,
            Object.assign({}, e, { viewBox: '0 0 256.000000 256.000000' }),
            i.a.createElement(
              'g',
              {
                transform:
                  'translate(0.000000,256.000000) scale(0.100000,-0.100000)',
                fill: 'currentColor',
                stroke: 'none',
              },
              i.a.createElement('path', {
                d:
                  'M120 1336 c0 -617 2 -745 14 -755 10 -8 99 -9 330 -5 l316 7 0 26 c0\n14 -7 51 -15 81 -8 30 -20 82 -25 115 -19 103 -8 95 -129 95 l-108 0 -6 98\nc-4 53 -7 118 -7 145 l0 47 260 0 260 0 0 155 0 156 -260 -3 -260 -3 0 131 0\n131 188 6 c103 4 240 7 305 7 l117 0 0 155 0 155 -490 0 -490 0 0 -744z',
              }),
              i.a.createElement('path', {
                d:
                  'M1370 2072 c0 -5 20 -52 44 -105 24 -52 52 -120 62 -151 l18 -57 165\n3 c190 3 235 -6 281 -58 27 -31 50 -88 50 -125 0 -9 -8 -40 -17 -69 -13 -41\n-25 -58 -57 -79 -38 -25 -47 -26 -194 -30 l-154 -3 6 -37 c3 -20 6 -91 6 -159\nl0 -123 90 3 91 3 129 -250 128 -250 190 0 c105 0 194 3 197 7 4 4 -29 71 -73\n150 -111 201 -129 233 -175 318 -22 41 -44 79 -48 84 -5 6 12 21 40 37 103 59\n186 188 202 314 36 270 -77 462 -326 556 -56 22 -77 23 -357 27 -183 2 -298 0\n-298 -6z',
              }),
              i.a.createElement('path', {
                d:
                  'M1268 1978 c-95 -189 -151 -398 -167 -626 -17 -241 18 -510 88 -679\n35 -83 72 -153 82 -153 4 0 19 13 32 30 l26 30 21 -30 c12 -17 25 -30 30 -30\n25 0 103 179 138 315 24 94 26 115 26 355 1 284 -7 339 -83 580 -35 114 -117\n291 -136 297 -6 2 -32 -38 -57 -89z',
              }),
              i.a.createElement('path', {
                d:
                  'M783 902 c-9 -5 -10 -18 -4 -42 4 -19 21 -90 37 -157 l28 -123 52 0\nc29 0 55 4 58 8 3 5 -12 78 -33 163 l-38 154 -44 3 c-24 1 -50 -1 -56 -6z',
              }),
              i.a.createElement('path', {
                d:
                  'M945 900 c-3 -5 1 -35 8 -67 8 -32 25 -102 38 -155 l23 -98 53 0 c28\n0 54 4 57 9 3 4 1 23 -5 42 -5 19 -16 65 -25 103 -8 38 -21 93 -30 123 l-15\n53 -49 0 c-27 0 -52 -4 -55 -10z',
              })
            )
          )
        },
        N = (function(e) {
          function t() {
            for (
              var t, a = arguments.length, o = new Array(a), i = 0;
              i < a;
              i++
            )
              o[i] = arguments[i]
            return (
              ((t = e.call.apply(e, [this].concat(o)) || this).state = {
                language: 'en',
              }),
              (t.handleLanguageChange = function() {
                var e = 'en' === t.state.language ? 'de' : 'en'
                d.a.changeLanguage(e), t.setState({ language: e })
              }),
              t
            )
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.isHomepage,
                a = e.classes,
                o = e.t,
                n = this.state.language,
                r = [o('header.shop'), o('header.contact')]
              return i.a.createElement(
                'div',
                { className: a.root },
                i.a.createElement(
                  f.a,
                  {
                    position: 'static',
                    className: t ? a.appbar : a.appbarDarkTheme,
                  },
                  i.a.createElement(
                    y.a,
                    { className: a.toolbar },
                    i.a.createElement(
                      c.Link,
                      { to: '/', className: a.logoButton },
                      i.a.createElement(D, { className: a.logo })
                    ),
                    i.a.createElement(
                      _.a,
                      { xsDown: !0 },
                      i.a.createElement(
                        'div',
                        null,
                        ['/shop/', 'contact'].map(function(e, t) {
                          return i.a.createElement(
                            c.Link,
                            { key: 'link_' + e, to: e },
                            i.a.createElement(
                              v.a,
                              { className: a.button },
                              r[t]
                            )
                          )
                        }),
                        i.a.createElement(
                          v.a,
                          {
                            className: a.button,
                            onClick: this.handleLanguageChange,
                          },
                          'en' === n ? 'de' : 'en'
                        )
                      )
                    ),
                    i.a.createElement(
                      _.a,
                      { xsUp: !0 },
                      i.a.createElement(O, null)
                    )
                  )
                )
              )
            }),
            t
          )
        })(o.Component)
      N.propTypes = { classes: l.a.object.isRequired, isHomepage: l.a.bool }
      var M = Object(h.b)()(
          Object(u.a)(
            Object(p.withStyles)(function(e) {
              var t
              return {
                grow: { flexGrow: 1 },
                appbar: { boxShadow: 'none', backgroundColor: 'transparent' },
                appbarDarkTheme: {
                  boxShadow: 'none',
                  backgroundColor: e.palette.primary.main,
                },
                toolbar: ((t = { paddingLeft: 15, paddingRight: 15 }),
                (t[e.breakpoints.up('sm')] = {
                  paddingLeft: 60,
                  paddingRight: 60,
                  justifyContent: 'space-between',
                }),
                t),
                containerXS: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexBasis: '100%',
                },
                logo: { marginTop: 5, fontSize: 48, color: e.status.black },
                button: {
                  color: e.palette.common.black,
                  fontSize: 18,
                  fontWeight: 700,
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
        U = (a(254), a(216), a(165)),
        L = a.n(U),
        W = a(419),
        H = a.n(W),
        F = a(413),
        z = a.n(F),
        B = a(185),
        Y = a.n(B),
        j = a(152),
        q = a.n(j),
        V = a(405),
        J = a.n(V),
        X = a(407),
        K = a.n(X),
        Q = a(408),
        Z = a.n(Q),
        $ = a(257),
        ee = a.n($),
        te = a(409),
        ae = a.n(te),
        oe = a(410),
        ie = a.n(oe),
        ne = a(217),
        re = a.n(ne),
        se = a(256),
        le = a.n(se),
        ce = a(406),
        de = a.n(ce),
        he = { success: J.a, warning: de.a, error: K.a, info: Z.a }
      function ue(e) {
        var t = e.classes,
          a = e.className,
          o = e.message,
          n = e.onClose,
          r = e.variant,
          s = Y()(e, ['classes', 'className', 'message', 'onClose', 'variant']),
          l = he[r]
        return i.a.createElement(
          le.a,
          Object.assign(
            {
              className: q()(t[r], a),
              'aria-describedby': 'client-snackbar',
              message: i.a.createElement(
                'span',
                { id: 'client-snackbar', className: t.message },
                i.a.createElement(l, { className: q()(t.icon, t.iconVariant) }),
                o
              ),
              action: [
                i.a.createElement(
                  re.a,
                  {
                    key: 'close',
                    'aria-label': 'Close',
                    color: 'inherit',
                    className: t.close,
                    onClick: n,
                  },
                  i.a.createElement(ee.a, { className: t.icon })
                ),
              ],
            },
            s
          )
        )
      }
      ue.propTypes = {
        classes: l.a.object.isRequired,
        className: l.a.string,
        message: l.a.node,
        onClose: l.a.func,
        variant: l.a.oneOf(['success', 'warning', 'error', 'info']).isRequired,
      }
      var pe = Object(u.a)(
          Object(p.withStyles)(function(e) {
            return {
              success: { backgroundColor: ae.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.dark },
              warning: { backgroundColor: ie.a[700] },
              icon: { fontSize: 20 },
              iconVariant: { opacity: 0.9, marginRight: e.spacing.unit },
              message: { display: 'flex', alignItems: 'center' },
            }
          })(ue)
        ),
        me = a(200),
        fe = (function(e) {
          function t() {
            for (
              var t, a = arguments.length, o = new Array(a), i = 0;
              i < a;
              i++
            )
              o[i] = arguments[i]
            return (
              ((t = e.call.apply(e, [this].concat(o)) || this).state = {
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
              (t.handleChange = function(e) {
                return function(a) {
                  if (
                    (!1 === t.state.isTouched && t.setState({ isTouched: !0 }),
                    'emailAddress' === e)
                  ) {
                    ;/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                      a.target.value
                    )
                      ? t.setState({
                          isEmailValid: !0,
                          emailAddress: a.target.value,
                        })
                      : t.setState({
                          isEmailValid: !1,
                          emailAddress: a.target.value,
                        })
                  }
                  'name' === e &&
                    (a.target.value.length > 500
                      ? t.setState({ isNameValid: !1 })
                      : t.setState({ isNameValid: !0, name: a.target.value })),
                    'message' === e &&
                      (a.target.value.length > 1e3
                        ? t.setState({ isMessageValid: !1 })
                        : t.setState({
                            isMessageValid: !0,
                            message: a.target.value,
                          }))
                }
              }),
              (t.handleClick = function() {
                t.setState({ isSnackbarOpen: !0 })
              }),
              (t.handleClose = function(e, a) {
                'clickaway' !== a && t.setState({ isSnackbarOpen: !1 })
              }),
              (t.handleSubmit = function() {
                t.state.isEmailValid &&
                t.state.isMessageValid &&
                t.state.isNameValid &&
                t.state.isTouched
                  ? fetch(
                      'https://eisbach-riders.prod.with-datafire.io/contact',
                      {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          message: t.state.message,
                          emailAddress: t.state.emailAddress,
                          name: t.state.name,
                        }),
                      }
                    )
                      .then(function(e) {
                        200 === e.status
                          ? t.setState({
                              isSnackbarOpen: !0,
                              notification: 'success',
                            })
                          : t.setState({
                              isSnackbarOpen: !0,
                              notification: 'error',
                            })
                      })
                      .catch(function(e) {
                        t.setState({
                          isSnackbarOpen: !0,
                          notification: 'error',
                        })
                      })
                  : t.setState({ isSnackbarOpen: !0, notification: 'warning' })
              }),
              t
            )
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.classes,
                a = e.t,
                o = this.state,
                n = o.emailAddress,
                r = o.name,
                s = o.message,
                l = o.isNameValid,
                d = o.isEmailValid,
                h = o.isMessageValid,
                u = o.isSnackbarOpen,
                p = o.notification
              return i.a.createElement(
                'div',
                { className: t.root, id: 'contact' },
                i.a.createElement(
                  z.a,
                  {
                    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                    open: u,
                    autoHideDuration: 6e3,
                    onClose: this.handleClose,
                  },
                  i.a.createElement(pe, {
                    onClose: this.handleClose,
                    variant: p,
                    message:
                      'success' === p
                        ? 'Your email has been sent successfully'
                        : 'warning' === p
                        ? 'Please check the form has been filled out correctly'
                        : 'An error has occured.',
                  })
                ),
                i.a.createElement(
                  'div',
                  { className: t.container },
                  i.a.createElement(
                    'div',
                    { className: t.flexItem },
                    i.a.createElement(
                      'form',
                      { noValidate: !0, autoComplete: 'off' },
                      i.a.createElement(
                        L.a,
                        { className: t.textHeading },
                        a('footer.message')
                      ),
                      i.a.createElement(
                        'div',
                        { className: t.inputContainer },
                        i.a.createElement(H.a, {
                          id: 'name',
                          name: 'name',
                          type: 'text',
                          className: t.textField,
                          InputProps: {
                            className: l ? t.input : t.inputError,
                            disableUnderline: !0,
                            classes: { input: t.textArea },
                          },
                          value: r,
                          placeholder: a('common.name'),
                          onChange: this.handleChange('name'),
                          margin: 'normal',
                          required: !0,
                        }),
                        i.a.createElement(H.a, {
                          id: 'emailAddress',
                          name: 'emailAddress',
                          type: 'email',
                          className: t.textField,
                          InputProps: {
                            className: d ? t.input : t.inputError,
                            disableUnderline: !0,
                            classes: { input: t.textArea },
                          },
                          value: n,
                          placeholder: a('common.email'),
                          onChange: this.handleChange('emailAddress'),
                          margin: 'normal',
                          required: !0,
                        })
                      ),
                      i.a.createElement(H.a, {
                        id: 'message',
                        name: 'message',
                        type: 'text',
                        InputProps: {
                          className: h ? t.input : t.inputError,
                          disableUnderline: !0,
                          classes: { input: t.textArea },
                        },
                        value: s,
                        placeholder: a('footer.message'),
                        onChange: this.handleChange('message'),
                        margin: 'normal',
                        fullWidth: !0,
                        multiline: !0,
                        rows: '4',
                        required: !0,
                      }),
                      i.a.createElement(
                        v.a,
                        {
                          variant: 'contained',
                          className: t.buttonSend,
                          fullWidth: !0,
                          onClick: this.handleSubmit,
                        },
                        a('footer.send')
                      )
                    )
                  ),
                  i.a.createElement(
                    'div',
                    { className: t.flexItem },
                    i.a.createElement(
                      L.a,
                      { className: t.textHeading },
                      a('footer.questions') + '?'
                    ),
                    i.a.createElement(
                      L.a,
                      { className: t.text },
                      a('footer.questionsMessage')
                    ),
                    i.a.createElement(
                      L.a,
                      { className: t.text },
                      a('footer.getInTouch')
                    ),
                    i.a.createElement(
                      'div',
                      { className: t.iconContainer },
                      i.a.createElement(
                        v.a,
                        {
                          variant: 'outlined',
                          'aria-label': 'facebook',
                          className: t.button,
                          href:
                            'hhttps://www.facebook.com/EisbachRiders-262685337908914/',
                          target: '_blank',
                          rel: 'noopener',
                          disableFocusRipple: !0,
                          disableRipple: !0,
                        },
                        i.a.createElement(me.c, { className: t.icon })
                      ),
                      i.a.createElement(
                        v.a,
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
                        i.a.createElement(me.e, { className: t.icon })
                      )
                    )
                  )
                ),
                i.a.createElement(
                  'div',
                  { className: t.legal },
                  i.a.createElement(
                    L.a,
                    {
                      variant: 'body2',
                      align: 'center',
                      className: t.copyright,
                    },
                    '© Eisbach Riders |',
                    ' ',
                    i.a.createElement(
                      c.Link,
                      { to: '/legal/', className: t.link },
                      a('footer.imprint')
                    ),
                    '|',
                    ' ',
                    i.a.createElement(
                      c.Link,
                      { to: '/privacy/', className: t.link },
                      a('footer.privacy')
                    )
                  )
                )
              )
            }),
            t
          )
        })(o.Component)
      fe.propTypes = { classes: l.a.object.isRequired }
      var ge = Object(h.b)()(
          Object(u.a)(
            Object(p.withStyles)(function(e) {
              var t, a, o, i, n
              return {
                root: { backgroundColor: e.status.black, width: '100%' },
                legal: { backgroundColor: e.status.black },
                copyright: {
                  fontSize: 12,
                  textTransform: 'capitalize',
                  color: e.palette.common.white,
                  paddingTop: 15,
                  paddingBottom: 15,
                },
                container: ((t = {
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  padding: 15,
                }),
                (t[e.breakpoints.up('sm')] = {
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 60,
                  paddingRight: 60,
                }),
                (t[e.breakpoints.up('md')] = {
                  paddingTop: 45,
                  paddingBottom: 45,
                  paddingLeft: 170,
                  paddingRight: 170,
                }),
                t),
                flexItem: ((a = { flexBasis: '100%', paddingTop: 15 }),
                (a[e.breakpoints.up('md')] = {
                  flexBasis: '45%',
                  paddingTop: 0,
                }),
                a),
                text: ((o = {
                  color: e.palette.common.white,
                  fontSize: 12,
                  lineHeight: 1.5,
                }),
                (o[e.breakpoints.up('sm')] = { lineHeight: 2 }),
                o),
                divider: { borderTop: '1px solid ' + e.status.greyDk },
                textHeading: ((i = {
                  color: e.palette.common.white,
                  letterSpacing: 3,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  paddingBottom: 15,
                  paddingTop: 15,
                  textAlign: 'center',
                }),
                (i[e.breakpoints.up('md')] = {
                  textAlign: 'left',
                  paddingTop: 0,
                }),
                i),
                textField: { margin: 0, width: '48%' },
                input: {
                  fontSize: 12,
                  color: e.palette.common.white,
                  border: '1px solid',
                },
                inputError: {
                  fontSize: 12,
                  border: '1px solid ' + e.palette.error.main,
                },
                button: ((n = {
                  borderColor: e.status.white,
                  borderRadius: 0,
                  minWidth: 0,
                  padding: 8,
                  marginRight: 30,
                }),
                (n[e.breakpoints.up('sm')] = { marginRight: 15 }),
                n),
                icon: { width: 18, height: 18, fill: e.palette.common.white },
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
                  textDecoration: 'none',
                  cursor: 'pointer',
                  paddingLeft: 5,
                  paddingRight: 5,
                },
                textArea: { paddingLeft: 20 },
                inputLabel: {
                  fontSize: 12,
                  paddingLeft: 20,
                  color: e.palette.common.white,
                },
              }
            })(fe)
          )
        ),
        ye = a(464),
        be = a(465),
        _e = function(e) {
          var t = e.title,
            a = e.description,
            o = e.image,
            n = e.pathname,
            r = e.article,
            s = e.language
          return i.a.createElement(c.StaticQuery, {
            query: ve,
            render: function(e) {
              var l = e.site.siteMetadata,
                c = l.defaultTitle,
                d = l.defaultDescription,
                h = l.siteUrl,
                u = l.defaultImage,
                p = {
                  title: t || c,
                  description: a || d,
                  image: '' + h + (o || u),
                  url: '' + h + (n || '/'),
                }
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  be.Helmet,
                  { title: p.title, htmlAttributes: { lang: s } },
                  i.a.createElement('meta', {
                    name: 'description',
                    content: p.description,
                  }),
                  i.a.createElement('meta', {
                    name: 'image',
                    content: p.image,
                  }),
                  p.url &&
                    i.a.createElement('meta', {
                      property: 'og:url',
                      content: p.url,
                    }),
                  !r
                    ? null
                    : i.a.createElement('meta', {
                        property: 'og:type',
                        content: 'article',
                      }),
                  p.title &&
                    i.a.createElement('meta', {
                      property: 'og:title',
                      content: p.title,
                    }),
                  p.description &&
                    i.a.createElement('meta', {
                      property: 'og:description',
                      content: p.description,
                    }),
                  p.image &&
                    i.a.createElement('meta', {
                      property: 'og:image',
                      content: p.image,
                    }),
                  i.a.createElement('meta', {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                  })
                )
              )
            },
            data: ye,
          })
        },
        we = _e
      ;(_e.propTypes = {
        title: l.a.string,
        description: l.a.string,
        image: l.a.string,
        pathname: l.a.string,
        article: l.a.bool,
        language: l.a.string,
      }),
        (_e.defaultProps = {
          title: null,
          description: null,
          image: null,
          pathname: null,
          article: !1,
        })
      var ve = '3092550258'
      t.a = function(e) {
        e.isHomepage
        var t = e.handleLanguageChange,
          a = e.handlePageChange,
          n = e.activePage,
          r = e.language,
          s = e.children
        return i.a.createElement(
          o.Fragment,
          null,
          i.a.createElement(we, { language: r }),
          i.a.createElement(M, {
            isHomepage: !0,
            handleLanguageChange: t,
            handlePageChange: a,
            activePage: n,
            language: r,
          }),
          s,
          i.a.createElement(ge, null)
        )
      }
    },
    178: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return m
        }),
        a.d(t, 'StaticQueryContext', function() {
          return u
        }),
        a.d(t, 'StaticQuery', function() {
          return p
        })
      var o = a(0),
        i = a.n(o),
        n = a(4),
        r = a.n(n),
        s = a(169),
        l = a.n(s)
      a.d(t, 'Link', function() {
        return l.a
      }),
        a.d(t, 'withPrefix', function() {
          return s.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return s.navigate
        }),
        a.d(t, 'push', function() {
          return s.push
        }),
        a.d(t, 'replace', function() {
          return s.replace
        }),
        a.d(t, 'navigateTo', function() {
          return s.navigateTo
        })
      var c = a(223),
        d = a.n(c)
      a.d(t, 'PageRenderer', function() {
        return d.a
      })
      var h = a(50)
      a.d(t, 'parsePath', function() {
        return h.a
      })
      var u = i.a.createContext({}),
        p = function(e) {
          return i.a.createElement(u.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : i.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function m() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: r.a.object,
        query: r.a.string.isRequired,
        render: r.a.func,
        children: r.a.func,
      }
    },
    200: function(e, t, a) {
      'use strict'
      a.d(t, 'e', function() {
        return s
      }),
        a.d(t, 'c', function() {
          return l
        }),
        a.d(t, 'b', function() {
          return c
        }),
        a.d(t, 'a', function() {
          return d
        }),
        a.d(t, 'f', function() {
          return h
        }),
        a.d(t, 'd', function() {
          return u
        })
      a(33)
      var o = a(0),
        i = a.n(o),
        n = a(198),
        r = a.n(n)
      function s(e) {
        return i.a.createElement(
          r.a,
          Object.assign({}, e, { viewBox: '0 0 448 512' }),
          i.a.createElement('path', {
            d:
              'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
          })
        )
      }
      function l(e) {
        return i.a.createElement(
          r.a,
          Object.assign({}, e, { viewBox: '0 0 96.124 96.123' }),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d:
                'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z',
            })
          ),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null),
          i.a.createElement('g', null)
        )
      }
      function c(e) {
        return i.a.createElement(
          r.a,
          Object.assign({}, e, { viewBox: '0 0 302.8 120.1' }),
          i.a.createElement('path', {
            id: 'e',
            d:
              'M38.8,26.2c-21.1,0-38.8,9-38.8,36c0,21.4,11.8,34.9,39.3,34.9c32.3,0,34.4-21.3,34.4-21.3H58 c0,0-3.4,11.5-19.7,11.5c-13.3,0-22.9-9-22.9-21.6h59.9v-7.9C75.3,45.4,67.4,26.2,38.8,26.2L38.8,26.2z M38.2,36.3 c12.7,0,21.3,7.8,21.3,19.4H15.8C15.8,43.4,27.1,36.3,38.2,36.3z',
          }),
          i.a.createElement('path', {
            id: 'b',
            d:
              'M76.3,0v83.6C76.3,88.3,76,95,76,95h14.9c0,0,0.5-4.8,0.5-9.2c0,0,7.4,11.5,27.5,11.5c21.1,0,35.5-14.7,35.5-35.7 c0-19.6-13.2-35.3-35.5-35.3c-20.9,0-27.3,11.3-27.3,11.3V0L76.3,0z M115.1,36.8c14.4,0,23.5,10.7,23.5,24.9 c0,15.3-10.5,25.4-23.4,25.4c-15.3,0-23.6-12-23.6-25.2C91.6,49.5,99,36.8,115.1,36.8z',
          }),
          i.a.createElement('path', {
            id: 'a',
            d:
              'M192.5,26.2c-31.8,0-33.9,17.4-33.9,20.2h15.8c0,0,0.8-10.2,16.9-10.2c10.5,0,18.6,4.8,18.6,14v3.3h-18.6 c-24.6,0-37.7,7.2-37.7,21.8c0,14.4,12,22.2,28.3,22.2c22.2,0,29.3-12.3,29.3-12.3c0,4.9,0.4,9.7,0.4,9.7h14.1c0,0-0.5-6-0.5-9.8 V52.3C225.3,30.8,207.9,26.2,192.5,26.2L192.5,26.2z M210,63.3v4.4c0,5.7-3.5,19.9-24.2,19.9c-11.3,0-16.2-5.7-16.2-12.2 C169.6,63.4,186,63.3,210,63.3L210,63.3z',
          }),
          i.a.createElement('path', {
            id: 'y',
            d:
              'M217.8,28.9h17.8l25.6,51.2l25.5-51.2h16.1l-46.5,91.2h-16.9l13.4-25.4L217.8,28.9z',
          })
        )
      }
      function d(e) {
        return i.a.createElement(
          r.a,
          Object.assign({}, e, {
            viewBox: '-352.037 -291.281 800.073 678.559',
          }),
          i.a.createElement(
            'filter',
            { id: 'filter3174', colorInterpolationFilters: 'sRGB' },
            i.a.createElement('feGaussianBlur', {
              id: 'feGaussianBlur3176',
              stdDeviation: '1.71',
            })
          ),
          i.a.createElement(
            'g',
            { id: 'layer2', display: 'none' },
            i.a.createElement(
              'g',
              {
                id: 'rect3745',
                display: 'inline',
                opacity: '0.9',
                filter: 'url(#filter3174)',
                enableBackground: 'new    ',
              },
              i.a.createElement('path', {
                fill: '#000',
                d:
                  'M11,7h74c3.313,0,6,2.687,6,6v73c0,3.313-2.687,6-6,6H11c-3.313,0-6-2.687-6-6V13 C5,9.687,7.687,7,11,7z',
              })
            )
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              id: 'path3673',
              'inkscapeconnector-curvature': '0',
              fill: '#000',
              d:
                'M261.789,134.426 c-16.679-22.826-34.57-41.397-34.57-83.872v-141c0-59.759,4.331-114.619-40.186-155.732c-35.041-33.34-93.25-45.103-137.767-45.103 c-87.066,0-184.192,32.13-204.56,138.599c-2.156,11.309,6.146,17.229,13.672,18.893l88.655,9.493 c8.302-0.417,14.297-8.491,15.904-16.623c7.602-36.688,38.654-54.313,73.545-54.313c18.817,0,40.186,6.808,51.324,23.507 c12.822,18.589,11.101,44.138,11.101,65.602v11.819C45.882-88.441-23.483-84.545-73.144-63.006 c-57.281,24.546-97.505,74.491-97.505,147.903c0,94.082,59.854,141.114,136.916,141.114c65.035,0,100.626-15.186,150.796-65.791 c16.643,23.865,22.089,35.363,52.441,60.345c6.807,3.594,15.583,3.252,21.614-2.155l0.021-0.02l0.207,0.227 c18.268-16.074,51.438-44.592,70.141-60.098C268.956,152.448,267.632,142.633,261.789,134.426z M81.794,93.767 c-14.522,25.53-37.652,41.15-63.352,41.15c-35.042,0-55.618-26.476-55.618-65.641c0-77.1,69.933-91.094,136.065-91.094v19.535 h0.019C98.908,32.986,99.76,62.354,81.794,93.767z',
            }),
            i.a.createElement(
              'g',
              {
                id: 'g3717',
                transform:
                  'matrix(4.0940394,0,0,4.0940394,105.99043,-56.114346)',
              },
              i.a.createElement('path', {
                id: 'path3719',
                'inkscapeconnector-curvature': '0',
                fill: '#000',
                d:
                  'M64.762,84.122c-21.39,15.782-52.41,24.179-79.125,24.179 c-37.427,0-71.14-13.834-96.65-36.865c-2.001-1.811-0.215-4.284,2.189-2.878c27.527,16.018,61.562,25.66,96.714,25.66 c23.716,0,49.781-4.917,73.764-15.096C65.272,77.592,68.304,81.512,64.762,84.122L64.762,84.122z',
              }),
              i.a.createElement('path', {
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
      function h(e) {
        return i.a.createElement(
          r.a,
          Object.assign({}, e, { viewBox: '0 0 512 512' }),
          i.a.createElement('path', {
            d:
              'M495.487,381.376c-114.617,0.044-191.828-40.025-211.837-109.907c-14.51-50.677,5.895-121.064,58.993-123.655 c57.287,3.776,58.599,67.743,56.683,117.647c-0.707,18.569-1.131,29.775,2.686,37.991c4.361,9.352,14.072,13.86,24.839,11.538 c24.871-5.438,71.035-59.757,71.361-122.848c0.479-94.231-76.146-160.736-186.363-161.731c-0.881-0.006-1.741-0.011-2.631-0.011 C157.349,30.401,2.947,148.965,0,376.977v87.918c0,9.225,7.479,16.704,16.704,16.704h478.592c9.226,0,16.704-7.479,16.704-16.704 v-66.834C512,388.916,504.633,381.372,495.487,381.376z M160.407,448.193c-47.302-81.079-30.474-176.417,29.141-239.361 c-42.78,82.395-20.719,187.048,50.753,239.361H160.407z',
          })
        )
      }
      function u(e) {
        return i.a.createElement(
          r.a,
          Object.assign({}, e, { viewBox: '0 0 484.42 484.4' }),
          i.a.createElement('path', {
            d:
              'M384.789,365.354c-0.692-5.075-1.52-9.932-2.466-14.578c-6.469-31.544-21.299-60.817-42.937-84.667 c6.452,28.411-11.2,46.561-11.419,46.502c3.125-34.128-8.259-68.021-31.366-93.324c-9.325-10.195-18.834-20.642-28.546-31.341 c-33.834-37.203-61.316-74.913-85.859-106.718c0.592,15.717-4.729,35.851-25.76,60.471c0.237-0.026,9.003-17.094,12.246-45.616 c2.129-18.706-3.885-37.421-16.485-51.407C121.675,10.859,91.693-8.744,53.231,3.833C13.2,16.736,1.308,59.69,15.901,119.013 c4.054,16.503,14.358,30.784,28.733,39.846c32.616,20.54,56.703,18.386,56.484,18.641c-31.535,8.461-54.102,0.835-69.169-11.208 c19.998,47.135,53.68,98.772,97.783,147.216c16.013,17.643,32.921,33.519,50.235,47.607c27.955,22.752,65.943,29.264,99.86,17.044 l0,0c-0.1-0.213-10.726,23.909-44.592,21.349c2.939,1.714,5.862,3.378,8.766,4.992c18.784,10.388,39.848,16.266,61.282,16.992 c15.811,0.541,33.749-1.494,52.262-8.546c0.726,0.152-43.224,30.032-9.899,69.854c0.052-17.348,34.745-54.289,47.803-68.41 c0.389-0.389-18.226,39.348,32.651,70.03c-21.536-26.408-10.051-43.968-2.399-57.049c-31.84-13.547-64.541-30.784-95.299-50.852 c-59.441-38.478-110.165-87.943-142.512-129.074c-16.435-20.405-28.225-38.807-36.518-51.551 c-8.091-12.914-12.128-20.65-12.146-20.633c0.017-0.017,5.608,6.68,15.456,18.208c9.662,11.648,24.322,27.533,42.228,46.012 c35.826,36.984,87.26,82.235,144.977,119.412c29.83,19.526,61.062,37.093,91.399,51.796c4.696-14.687,11.672-33.401,41.232-38.039 c-47.887-12.12-69.271,22.389-69.373,22.811c3.328-19.035,16.959-67.244,29.982-77.715 C393.235,316.244,384.3,364.856,384.789,365.354z',
          })
        )
      }
    },
    223: function(e, t, a) {
      var o
      e.exports = ((o = a(272)) && o.default) || o
    },
    224: function(e, t, a) {
      'use strict'
      var o = a(519),
        i = a(273),
        n = a.n(i),
        r = a(166),
        s = a(297),
        l = a(298)
      o.a
        .use(n.a)
        .use(r.a)
        .init({
          lng: 'en',
          fallbackLng: 'en',
          resources: { en: { translation: s }, de: { translation: l } },
          keySeparator: '.',
          interpolation: { escapeValue: !1 },
        }),
        (t.a = o.a)
    },
    272: function(e, t, a) {
      'use strict'
      a.r(t)
      a(33)
      var o = a(0),
        i = a.n(o),
        n = a(4),
        r = a.n(n),
        s = a(69),
        l = a(2),
        c = function(e) {
          var t = e.location,
            a = l.default.getResourcesForPathnameSync(t.pathname)
          return i.a.createElement(
            s.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          )
        }
      ;(c.propTypes = {
        location: r.a.shape({ pathname: r.a.string.isRequired }).isRequired,
      }),
        (t.default = c)
    },
    297: function(e) {
      e.exports = {
        tracking: {
          message: 'By using our website, you agree with the use of cookies.',
          accept: 'accept',
          decline: 'decline',
          privacyLink: 'more information',
        },
        header: { shop: 'shop', contact: 'contact' },
        footer: {
          message: 'send us a message',
          'your message': 'your message',
          send: 'send',
          questions: 'any questons',
          questionsMessage:
            'If you have any question about our products, fullfillment or what is the best time to go surfing in Munich, drop us a message. We are happy to help!',
          getInTouch:
            'You can also get in touch with us via Facebook or Instagram.',
          imprint: 'imprint',
          privacy: 'privacy',
        },
        hero: { subtitle: 'Surf Equipment from Munich' },
        feature: {
          featuredProduct: 'featured product',
          surfConditions: 'response',
          surfDetail1: 'stiffness',
          surfDetail2: 'weight',
          experience: 'experience',
          beginner: 'beginner',
          intermediate: 'intermediate',
          pro: 'pro',
          more: 'more info',
          highlight: 'High performance',
          text:
            'The New Eisbach Riders Double Tab FCS 1 Fiberglass Fin With A Honeycomb Core Is Extra Lightweight And Provides An Immediate Response During The Turns. With a moderate flex it is ideal for making fast changes of direction. The Fin Design Is Suited For Any Waves As Well As For River Surfing.',
        },
        newProduct: {
          imgAlt: 'surfer',
          logo: 'logo',
          more: 'more info',
          text:
            'We are so excited to be able to bring you this premium, eco-friendly surf wax! Ride waves with confidence and a clear conscience! Bee Swell Eco-Friendly surf wax is made with 100% pure beeswax that has been ethically sourced by natural beekeepers. Proceeds help to provide pollinator habitat and resources for honeybee rescues.',
        },
        about: {
          sectionTitle1: 'about',
          sectionTitle2: ' Eisbach Riders',
          message:
            'Eisbach Riders is a young local surf brand from Munich and offers equipment for surfing. Whether you are in the sea, in the river or on the city wave. We, Michael and Robin, are passionate surfers ourselves and value quality products at comparable prices. Packed in sustainable and environmentally friendly packaging, we will ship as fast as possible so that you can jump right back into the water with a smile on your face.',
        },
        products: {
          sectionTitle: 'essential surf equipment',
          features: 'features',
        },
        common: {
          name: 'name',
          email: 'email address',
          close: 'close',
          cancel: 'cancel',
          scrollRight: 'scroll right',
          scrollLeft: 'scroll left',
        },
        newsletter: {
          sectionTitle: "Let's stay in touch!",
          message:
            'Sign up for our monthly newsletter to be the first to hear about the latest products and ongoings at Eisbach Riders.',
          success: 'Success! Thanks for joining.',
          signUp: 'Sign Up',
          subscribe: 'Subscribe to List',
          legal1:
            'You can unsubscribe at any time by clicking the link in the footer of our emails. We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.',
          legal2: "Learn more about Mailchimp's privacy practives here.",
          newsletter: 'Newsletter',
        },
        instagram: { sectionTitle: 'Instagram' },
        stores: { sectionTitle: 'More Stores' },
        imprint: {
          credits: 'photo credits',
          imprint: 'imprint',
          terms: 'General Terms and Conditions',
          title1: '1) Scope of Application',
          terms1_1:
            "1.1 These General Terms and Conditions of the company Eisbach Riders, Robin Eisenhardt & Michael Schmidt GbR (hereinafter referred to as Seller') shall apply to all contracts concluded between a consumer or a trader (hereinafter referred to as 'Client') and the Seller relating to all goods and/or services presented in the Seller's online shop. The inclusion of the Client’s own conditions is herewith objected to, unless other terms have been stipulated.",
          terms1_2:
            '1.2 A consumer pursuant to these Terms and Conditions is any natural person concluding a legal transaction for a purpose attributed neither to a mainly commercial nor a self-employed occupational activity. A trader pursuant to these Terms and Conditions is any natural or legal person or partnership with legal capacity acting in the performance of a commercial or self-employed occupational activity when concluding a legal transaction.',
          terms1_3:
            '1.3 Digital content in the sense of these General Terms and Conditions are all data not on a tangible medium which are produced in digital form and are supplied by the Seller by granting certain usage rights precisely defined in these General Terms and Conditions.',
          title2: '2) Conclusion of the Contract',
          terms2_1:
            '2.1 The product descriptions in the Seller’s online shop do not constitute binding offers on the part of the Seller, but merely serve the purpose of submitting a binding offer by the Client.',
          terms2_2:
            "2.2 The Client may submit the offer via the online order form integrated into the Seller's online shop. In doing so, after having placed the selected goods and/or services in the virtual basket and passed through the ordering process, and by clicking the button finalizing the order process, the Client submits a legally binding offer of contract with regard to the goods and/or services contained in the shopping cart.",
          terms2_3:
            '2.3 The Seller may accept the Client’s offer within five days, - by transferring a written order confirmation or an order confirmation in written form (fax or e-mail); insofar receipt of order confirmation by the Client is decisive, or - by delivering ordered goods to the Client; insofar receipt of goods by the customer is decisive, or - by requesting the Client to pay after he placed his order. Provided that several of the aforementioned alternatives apply, the contract shall be concluded at the time when one of the aforementioned alternatives firstly occurs. Should the Seller not accept the Client’s offer within the aforementioned period of time, this shall be deemed as rejecting the offer with the effect that the Client is no longer bound by his statement of intent.',
          terms2_4:
            "2.4 When submitting an offer via the Seller's online order form, the text of the contract is stored by the Seller after the contract has been concluded and transmitted to the Client in text form (e.g. e-mail, fax or letter) after the order has been sent. The seller shall not make the contract text accessible beyond this.",
          terms2_5:
            '2.5 Prior to submitting a binding order via the Seller’s online order form, the Client may recognize input errors by reading attentively the information displayed on the screen. The enlargement function of the browser to enlarge the display on the screen may be an effective method for better recognizing input errors. The Client can correct all the data entered via the usual keyboard and mouse function during the electronic ordering process, until he clicks the button finalizing the ordering process.',
          terms2_6:
            '2.6 The German language is exclusively available for the conclusion of the contract.',
          terms2_7:
            '2.7 Order processing and contacting usually takes place via e-mail and automated order processing. It is the Client’s responsibility to ensure that the e-mail address he provides for the order processing is accurate so that e-mails sent by the Seller can be received at this address. Particularly, it is the Client`s responsibility, if SPAM filters ares used, to ensure that all e-mails sent by the Seller or by third parties commissioned by the Seller with the order processing can be delivered.',
          title3: '3) Right to Cancel',
          terms3_1: '3.1 Consumers are entitled to the right to cancel.',
          terms3_2:
            '3.2 Detailed informations about the right to cancel are provided in the Seller’s instruction on cancellation.',
          title4: '4) Prices and Payment Conditions',
          terms4_1:
            '4.1 Unless otherwise stated in the Seller’s product description, prices indicated are total prices including the statutory sales tax. Delivery costs, where appropriate, will be indicated separately in the respective   product description',
          terms4_2:
            '4.2 Payment can be made using one of the methods mentioned in the Seller’s online shop.',
          terms4_3:
            '4.3 If prepayment by bank transfer has been agreed upon, payment is due immediately after conclusion of the contract, unless the parties have arranged a later maturity date',
          terms4_4:
            '4.4 When payments are made using a payment method offered by PayPal, handling of payments takes place via the payment service provider PayPal ((Europe) S.a. r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (hereinafter called “PayPal”) subject to the PayPal terms of use which can be viewed at:   https://www.paypal.com/de/webapps/mpp/ua/useragreement-full. In case the client has no PayPal account, the conditions applicable for payments without PayPal account will be effective. They can be viewed at:   https://www.paypal.com/de/webapps/mpp/ua/privacywax-full',
          title5: '5) Shipment and Delivery Conditions',
          terms5_1:
            '5.1 Goods are generally delivered on dispatch route and to the delivery address indicated by the Client, unless agreed otherwise. During the processing of the transaction, the delivery address indicated in the Seller’s order processing is decisive. However, in case the Client selects the payment method PayPal, the delivery address deposited with PayPal at the date of payment shall be decisive.',
          terms5_2:
            "5.2 Should the assigned transport company return the goods to the Seller, because delivery to the Client was not possible, the Client bears the costs for the unsuccessful dispatch. This shall not apply, if the Client exercises his right to cancel effectively, if the delivery cannot be made due to circumstances beyond the Client's control or if he has been temporarily impeded to receive the offered service, unless the Seller has notified the Client about the service for a reasonable time in advance.",
          terms5_3:
            '5.3 Personal collection is not possible for logistical reasons.',
          title6: '6) Reservation of Proprietary Rights',
          terms6_1:
            'If the Seller provides advance deliveries, he retains title of ownership to the delivered goods, until the purchase price owed has been paid in full.',
          title7: '7) Warranty',
          terms7_1:
            '7.1 Should the object of purchase be deficient, statutory provisions shall apply.',
          terms7_2:
            "7.2 Deviating hereof regarding used goods: Claims for defects are excluded if the defect does not occur until one year after delivery of the goods. Defects that occur within one year of delivery of the goods can be asserted within the statutory limitation period. The shortening of the limitation period does not apply, - for a product, which was not used, in accordance with its usual application, for building construction and which was the cause of the building's defectiveness, -for claims for damages and reimbursement of expenses on the part of the   Client, and - if the Seller has fraudulently concealed the defect.",
          terms7_3:
            '7.3 The Client is asked to notify any obvious transport damages to the forwarding agent and to inform the Seller accordingly. Should the Client fail to comply therewith, this shall not affect his statutory or contractual claims for defects.',
          title8: '8) Applicable Law',
          terms8_1:
            'The law of the Federal Republic of Germany shall apply to all legal relationships between the parties under exclusion of the laws governing the international purchase of movable goods. For consumers, this choice of law only applies to the extent that the granted protection is not withdrawn by mandatory provisions of the law of the country, in which the consumer has his habitual residence.',
          title9: '9) Alternative dispute resolution',
          terms9_1:
            '9.1 The EU Commission provides on its website the following link to the ODR platform: https://ec.europa.eu/consumers/odr. This platform shall be a point of entry for out-of-court resolutions of disputes arising from online sales and service contracts concluded between consumers and traders.',
          terms9_2:
            '9.2 The Seller is neither obliged nor prepared to attend a dispute settlement procedure before an alternative dispute resolution entity.',
          title10: 'Instructions for cancellation & Cancellation form',
          terms10_1:
            'Consumers, i.e. any individual acting for purposes which are wholly or mainly outside those individual’s trade, business, craft or profession, are entitled to cancel any contract on the following conditions:',
          title11: 'A. Instructions for cancellation',
          terms11_1: 'Right to cancel',
          terms11_2:
            'You have the right to cancel this contract within 1 month without giving any reason. The cancellation period will expire after 1 month from the day on which you acquire, or a third party other than the carrier and indicated by you acquires, physical possession of the goods. To exercise the right to cancel, you must inform us Eisbach Riders, Robin Eisenhardt & Michael Schmidt GbR, Lothstr. 72, 80797 München, Deutschland, Tel.: 017669019542, E-Mail: business@eisbach-riders.com) of your decision to cancel this contract by a clear statement (e.g. a letter sent by post, fax or e-mail). You may use the attached model cancellation form, but it is not obligatory. To meet the cancellation deadline, it is sufficient for you to send your communication concerning your exercise of the right to cancel before the cancellation period has expired.',
          terms11_3: 'Effects of cancellation',
          terms11_4:
            'If you cancel this contract, we will reimburse to you all payments received from you, including the costs of delivery (except for the supplementary costs arising if you choose a type of delivery other than the least expensive type of standard delivery offered by us) without undue delay and not later than fourteen days after the day on which we are informed about your decision to cancel this contract. We may make a deduction from the reimbursement for loss in value of any goods supplied, if the loss is the result of unnecessary handling by you. We will make the reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise. In any event, you will not incur any fees as a result of the reimbursement. We may withhold reimbursement until we have received the goods back or you have supplied evidence of having sent back the goods,whichever is the earliest. You shall send back the goods or hand them over to us without undue delay and in any event not later than fourteen days from the day on which you communicate your cancellation from this contract to us. The deadline is met if you send back the goods before the period of 14 days has expired. You will bear the direct cost of returning the goods. You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods',
          terms11_5: 'General information',
          terms11_6:
            '1) Please prevent damage to and contamination of the goods. Please return the goods, if possible, in the original packaging with all accessories and all packaging components. If necessary, please use protective outer packaging. If you are no longer in possession of the original packaging, please use suitable packaging providing adequate protection against potential transport damage. 2) Please do not return the goods freight forward. 3) Please note that the above general information in section 1 and 2 is not a precondition for effectively exercising your right to cancel.',
          title12: 'B. Cancellation form',
          terms12_1:
            'If you wish to cancel this contract, please complete and submit this form.',
          terms12_2:
            'I/We (*) hereby give notice that I/We (*) cancel my/our (*) contract of sale of the following goods (*)or the supply of the following service (*), _______________________________________________________ _______________________________________________________. Ordered on (*) ____________ / received on (*) __________________  ________________________________________________________  Name of consumer(s) ________________________________________________________  Address of consumer(s) ________________________________________________________ Signature of consumer(s) (only if this form is notified on paper)  _________________________  Date (*) Delete as appropriate',
        },
        privacy: {
          privacy: 'Data Protection Declaration',
          title1:
            '1) Information on the Collection of Personal Data and Contact Details of the Controller',
          terms1_1:
            '1.1 We are pleased that you are visiting our website and thank you for your interest. In the following pages, we inform you about the handling of your personal data when using our website. Personal data is all data    with which you can be personally identified.',
          terms1_2:
            '1.2 The controller in charge of data processing on this website, within the meaning of the General Data Protection Regulation (GDPR), is Eisbach Riders, Robin Eisenhardt & Michael Schmidt GbR, Lothstr. 72, 80797 München, Deutschland, Tel.: 017669019542, E-Mail: business@eisbach-riders.com. The controller in charge of the processing of personal data is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data.',
          terms1_3:
            '1.3 This website uses SSL or TLS encryption for security reasons and to protect the transmission of personal data and other confidential content (e.g. orders or inquiries to the controller). You can recognize an   encrypted connection by the character string https:// and the lock symbol in your browser line.',
          title2: '2) Data Collection When You Visit Our Website',
          terms2_1:
            "When using our website for information only, i.e. if you do not register or otherwise provide us with information, we only collect data that your browser transmits to our server (so-called 'server log files'). When you visit our website, we collect the following data that is technically necessary for us to display the website to you:",
          terms2_list1: '- Our visited website',
          terms2_list2: '- Date and time at the moment of access',
          terms2_list3: '- Amount of data sent in bytes',
          terms2_list4: '- Source/reference from which you came to the page',
          terms2_list5: '- Browser used',
          terms2_list6: '- Operating system used',
          terms2_list7: '- IP address used (if applicable: in anonymized form)',
          terms2_2:
            ' Data processing is carried out in accordance with Art. 6 (1) point f GDPR on the basis of our legitimate interest in improving the stability and functionality of our website. The data will not be passed on or used in any other way. However, we reserve the right to check the server log files subsequently, if there are any concrete indications of illegal use.',
          title3: '3) Cookies',
          terms3_1:
            'In order to make your visit to our website attractive and to enable the use of certain functions, we use so-called cookies on various pages. i.e. after closing your browser (so-called session cookies). Other cookies remain on your terminal and enable us or our partner companies (third-party cookies) to recognize your browser on your next visit (persistent cookies). If cookies are set, they collect and process specific user information such as browser and location data as well as IP address values according to individual requirements. Persistent cookies are automatically deleted after a specified period, which may vary depending on the cookie.',
          terms3_2:
            'In some cases, cookies are used to simplify the ordering process by saving settings (e.g. remembering the content of a virtual shopping basket for a later visit to the website). If personal data are also processed by individual cookies set by us, the processing is carried out in accordance with Art. 6 (1) point b GDPR either for the execution of the contract or in accordance with Art. 6 (1) point f GDPR to safeguard our legitimate interests in the best possible functionality of the website and a customer-friendly and effective design of the page visit.',
          terms3_3:
            'We work together with advertising partners who help us to make our website more interesting for you. For this purpose, cookies from partner companies are also stored on your hard drive when you visit our website (third-party cookies). You will be informed individually and separately about the use of such cookies and the scope of the information collected in each case within the following sections.',
          terms3_4:
            'Please note that you can set your browser in such a way that you are informed about the setting of cookies and you can decide individually about their acceptance or exclude the acceptance of cookies for certain cases or generally. Each browser differs in the way it manages the cookie settings. This is described in the help menu of each browser, which explains how you can change your cookie settings. You will find these for the respective browsers under the following links:',
          terms3_5:
            'Please note that the functionality of our website may be limited if cookies are not accepted.',
          title4: '4) Contacting Us',
          terms4_1:
            'When you contact us (e.g. via contact form or e-mail), personal data is collected. Which data is collected in the case of a contact form can be seen from the respective contact form. These data are stored and used exclusively for the purpose of responding to your request or for establishing contact and for the associated technical administration. The legal basis for processing data is our legitimate interest in responding to your request in accordance with Art. 6 (1) point f GDPR. If your contact is aimed at concluding a contract, the additional legal basis for the processing is Art. 6 (1) point b GDPR. Your data will be deleted after final processing of your enquiry; this is the case if it can be inferred from the circumstances that the facts in question have been finally clarified, provided that there are no legal storage obligations to the contrary.',
          title5:
            '5) Data Processing When Opening a Customer Account and for Contract Processing',
          terms5_1:
            'Pursuant to Art. 6 (1) point b GDPR, personal data will continue to be collected and processed if you provide them to us for the execution of a contract or when opening a customer account. Which data is collected can be seen from the respective input forms. It is possible to delete your customer account at any time. This can be done by sending a message to the above-mentioned address of the controller. We store and use the data provided by you for contract processing. After complete processing of the contract or deletion of your customer account, your data will be blocked in consideration of tax and commercial retention periods and deleted after expiry of these periods, unless you have expressly consented to further use of your data or a legally permitted further use of data has been reserved by our site, about which we will inform you accordingly below.',
          title6: '6) Use of Your Data for Direct Advertising',
          terms6_1:
            ' 6.1 If you subscribe to our e-mail newsletter, we will send you regular information about our offers. The only mandatory information for sending the newsletter is your e-mail address. The indication of additional possible data is voluntary and is used to be able to address you personally. We use the so-called double opt-in procedure for sending the newsletter. This means that we will not send you an e-mail newsletter, unless you have expressly confirmed to us that you agree to the sending of the newsletter. We will then send you a confirmation e-mail asking you to confirm that you wish to receive future newsletters by clicking on an appropriate link. By activating the confirmation link, you give us your consent to the use of your personal data in accordance with Art. 6 (1) point a GDPR. When you register for the newsletter, we store your IP address entered by the Internet Service Provider (ISP) as well as the date and time of registration so that we can trace any possible misuse of your e-mail address at a later time. The data collected by us when you register for the newsletter will be used exclusively for the purpose of advertising by means of the newsletter. You can unsubscribe from the newsletter at any time via the link provided in the newsletter or by sending a message to the responsible person named above. After your cancellation, your e-mail address will immediately be deleted from our newsletter distribution list, unless you have expressly consented to further use of your data or we reserve the right to use data in excess thereof, which is permitted by law and about which we inform you in this declaration.',
          terms6_2:
            "6.2 Our e-mail newsletters are sent via the technical service provider, The Rocket Science Group, LLC d/b/a MailChimp, 675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA (https://mailchimp.com), to whom we pass on the data you provided when registering for the newsletter. This disclosure is made in accordance with Art. 6 (1) point f GDPR and serves our legitimate interest in the use of an effective, secure and user-friendly newsletter system. Please note that your data is usually transferred to a MailChimp server in the USA and stored there. MailChimp uses this information to send and statistically evaluate the newsletter on our behalf. For evaluation purposes, the e-mails sent contain so-called web beacons or tracking pixels, which represent single-pixel image files stored on our website. This allows us to determine whether a newsletter message has been opened and which links have been clicked on. In addition, technical information is recorded (e.g. time of retrieval, IP address, browser type and operating system). The data are collected exclusively in a pseudonymized format and are not linked with other personal data from you. A direct personal relationship is excluded. This data is used exclusively for statistical analysis of newsletter campaigns. The results of these analyses can be used to better adapt future newsletters to the interests of the recipients. If you wish to object to the data analysis for statistical evaluation purposes, you must unsubscribe from the newsletter. Furthermore, MailChimp can use this data according to Art. 6 (1) point f GDPR even on the basis of its own legitimate interest in the demand-oriented design and optimization of the service as well as for market research purposes, for example to determine from which countries recipients come. However, MailChimp does not use the data of our newsletter recipients to address those recipients or pass that data on to third parties. To protect your data in the USA, we have concluded a data processing agreement ('Data-Processing-Agreement') with MailChimp on the basis of the standard contractual clauses of the European Commission to enable the transmission of your personal data to MailChimp. If you are interested in viewing this data processing agreement, you can do so at the following Internet link: https://mailchimp.com/legal/forms/data-processing-agreement/ MailChimp is also certified under the US-European data protection agreement 'Privacy Shield' and thus undertakes to comply with EU data protection regulations. The data protection regulations of MailChimp can be viewed at: https://mailchimp.com/legal/privacy/",
          title7: '7) Processing of Data for the Purpose of Order Handling',
          terms7_1:
            '7.1 The personal data collected by us will be passed on to the transport company commissioned with the delivery within the scope of contract processing, insofar as this is necessary for the delivery of the goods. We will pass on your payment data to the commissioned credit institution within the framework of payment processing, if this is necessary for payment handling. If payment service providers are used, we explicitly inform you of this below. The legal basis for the transfer of data is Art. 6 (1) point b GDPR.',
          terms7_2:
            "7.2 Use of Special Service Providers for Order Processing and Handling - Billbee Orders are processed by the service provider 'Billbee' (Billbee GmbH, Paulinenstrasse 54, 32756 Detmold). Name, address and, if applicable, other personal data will be passed on to Billbee exclusively for processing the online order in accordance with Art. 6 (1) point b GDPR. Your data will only be passed on if this is actually necessary for processing the order. Details regarding Billbee's privacy policy and Billbee's privacy policy can be found on Billbee's website at: https://www.billbee.io/datenschutz/",
          terms7_3:
            "7.3 Use of Payment Service Providers - Paypal When you pay via PayPal, credit card via PayPal, direct debit via PayPal or - if offered - 'purchase on account' or 'payment by instalments' via PayPal, we transmit your payment data to PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (hereinafter 'PayPal'). The transfer takes place in accordance with Art. 6 (1) point b GDPR and only insofar as this is necessary for payment processing. PayPal reserves the right to carry out credit checks for the payment methods credit card via PayPal, direct debit via PayPal or, if offered, 'purchase on account' or 'payment by installments' via PayPal. For this purpose, your payment data may be passed on to credit agencies on the basis of PayPal's legitimate interest in determining your solvency pursuant to Art. 6 (1) point f GDPR. PayPal uses the result of the credit assessment in relation to the statistical probability of non-payment for the purpose of deciding on the provision of the respective payment method. The credit report can contain probability values (so-called score values). If score values are included in the result of the credit report, they are based on recognized scientific, mathematical-statistical methods. The calculation of the score values includes, but is not limited to, address data. For further information on data protection law, including the credit agencies used, please refer to PayPal's data protection declaration at: https://www.paypal.com/uk/webapps/mpp/ua/privacy-full. You can object to this processing of your data at any time by sending a message to PayPal. However, PayPal may still be entitled to process your personal data if this is necessary for contractual payment processing.",
          title8: '8) Web Analysis Services',
          terms8_1:
            "Google (Universal) Analytics This website uses Google Analytics, a web analysis service of Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ('Google'). Google Analytics uses so-called cookies, which are text files stored on your computer, to help the website analyze how users use the site. The information generated by the cookies about your use of this website (including the shortened IP address) is generally transmitted to a Google server in the USA and stored there. This website uses Google Analytics exclusively with the extension '_anonymizeIp()', which ensures an anonymization of the IP address by shortening it and excludes a direct personal relationship. As a result of the extension, your IP address will previously be shortened by Google within member states of the European Union or in other signatory states to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. In these exceptional cases, processing is carried out in accordance with Art. 6 (1) point f GDPR, on the basis of our legitimate interest in the statistical analysis of user behavior for optimization and marketing purposes. On our behalf, Google will use this information to evaluate your use of the website, to compile reports on website activity and to provide us with other services relating to website and internet use. The IP address transmitted by your browser in the context of Google Analytics is not merged with other Google data. You may refuse the use of cookies by selecting the appropriate settings on your browser. However, we should point out that in that case you might not be able to use the full functionality of this website. You may permanently prevent Google from collecting data generated by cookies regarding the use of the website (including your IP address) and to process them. You can download and install the browser plugin available under the following link: https://tools.google.com/dlpage/gaoptout?hl=en. As an alternative to the browser plug-in or for browsers on mobile devices, please click on the following link in order to set an opt-out cookie which disables Google Analytics to collect data on this website in the future (this opt-out cookie only functions for this browser and this domain. If you delete your cookies on this browser, you must click again on this link):",
          terms8_2: 'Google Analytics has been disabled',
          terms8_3: 'Disable Google Analytics',
          terms8_4:
            "Google LLC, based in the United States, is certified for the US-European data protection agreement 'Privacy Shield', which guarantees compliance with the data protection level applicable in the EU. More information on how Google Analytics handles user data can be found in Google's privacy policy at: https://support.google.com/analytics/answer/6004245?hl=en",
          title9: '9) Tools and Miscellaneous',
          terms9_1:
            "Google Maps Our website uses Google Maps (AP’I) of Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ('Google'). Google Maps is a web service for displaying interactive (country) maps in order to display geographical information visually. Using this service will show you our location and will make it easier for you to find us. When you access the sub-pages that contain the Google Maps map, information about your use of our website (such as your IP address) is transmitted to and stored by Google on servers in the United States. This is regardless of whether Google provides a user account that you are logged in with or whether no user account exists. If you are logged in to Google, your information will be directly associated with your account. If you do not wish to be associated with your profile on Google, you must log out before activating the button. Google saves your data (even for users who are not logged in) as usage profiles and evaluates them. Such an evaluation takes place according to Art. 6 (1) point f GDPR, on the basis of the legitimate interests of Google in the insertion of personalized advertising, market research and/or demand-oriented design of its website. You have the right to object to the creation of these user profiles. If you want to do so, you must contact Google to exercise this right. Google LLC, based in the United States, is certified for the US-European data protection agreement 'Privacy Shield', which guarantees compliance with the data protection level applicable in the EU. If you do not agree to the future transmission of your data to Google in the context of using Google Maps, you may completely deactivate the Google Maps web service by switching off the JavaScript application in your browser. In this case, Google Maps as well as the map display on this website cannot be used. The Google terms of use can be found at: https://policies.google.com/terms?hl=en. The additional terms of use can be found at: https://www.google.com/intl/en-US_US/help/terms_maps.html. You can find detailed information on data protection in connection with the use of Google Maps on Google's website ('Google Privacy Policy') at: https://policies.google.com/privacy?hl=en.",
          title10: '10) Rights of the Data Subject',
          terms10_1:
            '10.1 The applicable data protection law grants you the following comprehensive rights of data subjects (rights of information and intervention) vis-à-vis the data controller with regard to the processing of your personal data:',
          terms10_list1:
            '- Right of access by the data subject pursuant to Art. 15 GDPR',
          terms10_list2: '- Right to rectification pursuant to Art. 16 GDPR',
          terms10_list3:
            '- Right to erase (“right to be forgotten”) pursuant to Art. 17 GDPR',
          terms10_list4:
            '- Right to restriction of processing pursuant to Art. 18 GDPR',
          terms10_list5: '- Right to be informed pursuant to Art. 19 GDPR',
          terms10_list6: '- Right to data portability pursuant to Art. 20 GDPR',
          terms10_list7:
            '- Right to withdraw a given consent pursuant to Art. 7 (3) GDPR',
          terms10_list8:
            '- Right to lodge a complaint pursuant to Art. 77 GDPR',
          title10_2: '10.2 RIGHT TO OBJECT',
          terms10_2:
            'IF, WITHIN THE FRAMEWORK OF A CONSIDERATION OF INTERESTS, WE PROCESS YOUR PERSONAL DATA ON THE BASIS OF OUR PREDOMINANT LEGITIMATE INTEREST, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THIS PROCESSING WITH EFFECT FOR THE FUTURE ON THE GROUNDS THAT ARISE FROM YOUR PARTICULAR SITUATION. IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA CONCERNED. HOWEVER, WE RESERVE THE RIGHT TO FURTHER PROCESSING IF WE CAN PROVE COMPELLING REASONS WORTHY OF PROTECTION FOR PROCESSING WHICH OUTWEIGH YOUR INTERESTS, FUNDAMENTAL RIGHTS AND FREEDOMS, OR IF THE PROCESSING SERVES TO ASSERT, EXERCISE OR DEFEND LEGAL CLAIMS. IF WE PROCESS YOUR PERSONAL DATA FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA WHICH ARE USED FOR DIRECT MARKETING PURPOSES. YOU MAY EXERCISE THE OBJECTION AS DESCRIBED ABOVE. IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA CONCERNED FOR DIRECT ADVERTISING PURPOSES.',
          title11: '11) Duration of Storage of Personal Data',
          terms11_1:
            'The duration of the storage of personal data is determined by the respective legal retention period (e.g. commercial and tax retention periods). After expiry of this period, the corresponding data will be routinely deleted, provided they are no longer necessary for the performance or initiation of the contract and/or there is no longer any legitimate interest on our part in further storage.',
        },
      }
    },
    298: function(e) {
      e.exports = {
        tracking: {
          message:
            'Wir verwenden Cookies, um sicherzustellen, dass wir dir die beste Erfahrung auf unserer Website bieten. Wenn du weitersurfst, werten wir dies als Zustimmung.',
          accept: 'akzeptieren',
          decline: 'Verhindern',
          privacyLink: 'Mehr erfahren',
        },
        header: { shop: 'shop', contact: 'Kontakt' },
        footer: {
          message: 'Schreib uns',
          'your message': 'Deine Nachricht',
          send: 'Senden',
          questions: 'Fragen',
          questionsMessage:
            'Wenn Du Fragen zu unseren Produkten, Versand oder einfach wissen möchtest, wann und wo Du in München surfen gehen solltest, schreib uns einfach.  Wir freuen uns von Dir zu hören!',
          getInTouch: 'Du kannst uns auch auf Facebook oder Instagram folgen.',
          imprint: 'Impressum',
          privacy: 'Datenschutz',
        },
        hero: { subtitle: 'Surf Equipment und Zubehör aus München' },
        feature: {
          featuredProduct: 'vorgestelltes Produkt',
          surfConditions: 'Surfbedingungen',
          surfDetail1: 'kniehoch',
          surfDetail2: 'Hüftkopf hoch',
          experience: 'Erfahrung',
          beginner: 'Anfänger',
          intermediate: 'mittlere',
          pro: 'Profi',
          more: 'Mehr Info',
          highlight: 'Hochleistung',
          text:
            'The New Eisbach Riders Double Tab FCS 1 Fiberglass Fin With A Honeycomb Core Is Extra Lightweight And Provides An Immediate Response During The Turns. With a moderate flex it is ideal for making fast changes of direction. The Fin Design Is Suited For Any Waves As Well As For River Surfing.',
        },
        newProduct: {
          imgAlt: 'surfer',
          logo: 'logo',
          more: 'Mehr Info',
          text:
            'We are so excited to be able to bring you this premium, eco-friendly surf wax! Ride waves with confidence and a clear conscience! Bee Swell Eco-Friendly surf wax is made with 100% pure beeswax that has been ethically sourced by natural beekeepers. Proceeds help to provide pollinator habitat and resources for honeybee rescues.',
        },
        about: {
          sectionTitle1: 'Über',
          sectionTitle2: ' Eisbach Riders',
          message:
            'Eisbach Riders ist eine junge lokale Surf-Marke aus München und bietet Equipment rund ums Surfen an, egal ob du im Meer, im Fluss oder auf der Citywave unterwegs bist. Wir, Michael und Robin, sind selbst surfbegeistert und legen großen Wert auf Qualität. Eingepackt in einer nachhaltigen und umweltfreundlichen Verpackung schicken wir deine Bestellung schnellstmöglich los, damit du dich gleich wieder in die Fluten stürzen kannst.',
        },
        products: {
          sectionTitle: 'essential surf equipment',
          features: 'features',
        },
        common: {
          name: 'Name',
          email: 'E-Mail',
          close: 'Schließen',
          cancel: 'Abbrechen',
          scrollRight: 'Scroll rechts',
          scrollLeft: 'Scroll links',
        },
        newsletter: {
          sectionTitle: 'Bleib auf dem Laufenden!',
          message:
            'Trag Dich in unseren monatlichen Newsletter ein und erfahre als Erster über Neuigkeiten von Eisbach Riders.',
          success: 'Es hat geklappt! Vielen Dank.',
          signUp: 'Trag dich ein',
          subscribe: 'Trag dich ein',
          legal1:
            'Du kannst Dich jederzeit wieder austragen indem Du den Link am Ende der eMails klickst. Wir nutzen Mailchimp als Marketing Plattform. Mit dem Klick auf Eintragen, akzeptierst Du, dass Deine Daten an Mailchimp weitergeleitet werden.',
          legal2: 'Mehr Infos über den Mailchimp Datenschutz.',
          newsletter: 'Newsletter',
        },
        instagram: { sectionTitle: 'Instagram' },
        stores: { sectionTitle: 'More Stores' },
        imprint: {
          credits: 'photo credits',
          imprint: 'imprint',
          terms: 'General Terms and Conditions',
          title1: '1) Scope of Application',
          terms1_1:
            "1.1 These General Terms and Conditions of the company Eisbach Riders, Robin Eisenhardt & Michael Schmidt GbR (hereinafter referred to as Seller') shall apply to all contracts concluded between a consumer or a trader (hereinafter referred to as 'Client') and the Seller relating to all goods and/or services presented in the Seller's online shop. The inclusion of the Client’s own conditions is herewith objected to, unless other terms have been stipulated.",
          terms1_2:
            '1.2 A consumer pursuant to these Terms and Conditions is any natural person concluding a legal transaction for a purpose attributed neither to a mainly commercial nor a self-employed occupational activity. A trader pursuant to these Terms and Conditions is any natural or legal person or partnership with legal capacity acting in the performance of a commercial or self-employed occupational activity when concluding a legal transaction.',
          terms1_3:
            '1.3 Digital content in the sense of these General Terms and Conditions are all data not on a tangible medium which are produced in digital form and are supplied by the Seller by granting certain usage rights precisely defined in these General Terms and Conditions.',
          title2: '2) Conclusion of the Contract',
          terms2_1:
            '2.1 The product descriptions in the Seller’s online shop do not constitute binding offers on the part of the Seller, but merely serve the purpose of submitting a binding offer by the Client.',
          terms2_2:
            "2.2 The Client may submit the offer via the online order form integrated into the Seller's online shop. In doing so, after having placed the selected goods and/or services in the virtual basket and passed through the ordering process, and by clicking the button finalizing the order process, the Client submits a legally binding offer of contract with regard to the goods and/or services contained in the shopping cart.",
          terms2_3:
            '2.3 The Seller may accept the Client’s offer within five days, - by transferring a written order confirmation or an order confirmation in written form (fax or e-mail); insofar receipt of order confirmation by the Client is decisive, or - by delivering ordered goods to the Client; insofar receipt of goods by the customer is decisive, or - by requesting the Client to pay after he placed his order. Provided that several of the aforementioned alternatives apply, the contract shall be concluded at the time when one of the aforementioned alternatives firstly occurs. Should the Seller not accept the Client’s offer within the aforementioned period of time, this shall be deemed as rejecting the offer with the effect that the Client is no longer bound by his statement of intent.',
          terms2_4:
            "2.4 When submitting an offer via the Seller's online order form, the text of the contract is stored by the Seller after the contract has been concluded and transmitted to the Client in text form (e.g. e-mail, fax or letter) after the order has been sent. The seller shall not make the contract text accessible beyond this.",
          terms2_5:
            '2.5 Prior to submitting a binding order via the Seller’s online order form, the Client may recognize input errors by reading attentively the information displayed on the screen. The enlargement function of the browser to enlarge the display on the screen may be an effective method for better recognizing input errors. The Client can correct all the data entered via the usual keyboard and mouse function during the electronic ordering process, until he clicks the button finalizing the ordering process.',
          terms2_6:
            '2.6 The German language is exclusively available for the conclusion of the contract.',
          terms2_7:
            '2.7 Order processing and contacting usually takes place via e-mail and automated order processing. It is the Client’s responsibility to ensure that the e-mail address he provides for the order processing is accurate so that e-mails sent by the Seller can be received at this address. Particularly, it is the Client`s responsibility, if SPAM filters ares used, to ensure that all e-mails sent by the Seller or by third parties commissioned by the Seller with the order processing can be delivered.',
          title3: '3) Right to Cancel',
          terms3_1: '3.1 Consumers are entitled to the right to cancel.',
          terms3_2:
            '3.2 Detailed informations about the right to cancel are provided in the Seller’s instruction on cancellation.',
          title4: '4) Prices and Payment Conditions',
          terms4_1:
            '4.1 Unless otherwise stated in the Seller’s product description, prices indicated are total prices including the statutory sales tax. Delivery costs, where appropriate, will be indicated separately in the respective   product description',
          terms4_2:
            '4.2 Payment can be made using one of the methods mentioned in the Seller’s online shop.',
          terms4_3:
            '4.3 If prepayment by bank transfer has been agreed upon, payment is due immediately after conclusion of the contract, unless the parties have arranged a later maturity date',
          terms4_4:
            '4.4 When payments are made using a payment method offered by PayPal, handling of payments takes place via the payment service provider PayPal ((Europe) S.a. r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (hereinafter called “PayPal”) subject to the PayPal terms of use which can be viewed at:   https://www.paypal.com/de/webapps/mpp/ua/useragreement-full. In case the client has no PayPal account, the conditions applicable for payments without PayPal account will be effective. They can be viewed at:   https://www.paypal.com/de/webapps/mpp/ua/privacywax-full',
          title5: '5) Shipment and Delivery Conditions',
          terms5_1:
            '5.1 Goods are generally delivered on dispatch route and to the delivery address indicated by the Client, unless agreed otherwise. During the processing of the transaction, the delivery address indicated in the Seller’s order processing is decisive. However, in case the Client selects the payment method PayPal, the delivery address deposited with PayPal at the date of payment shall be decisive.',
          terms5_2:
            "5.2 Should the assigned transport company return the goods to the Seller, because delivery to the Client was not possible, the Client bears the costs for the unsuccessful dispatch. This shall not apply, if the Client exercises his right to cancel effectively, if the delivery cannot be made due to circumstances beyond the Client's control or if he has been temporarily impeded to receive the offered service, unless the Seller has notified the Client about the service for a reasonable time in advance.",
          terms5_3:
            '5.3 Personal collection is not possible for logistical reasons.',
          title6: '6) Reservation of Proprietary Rights',
          terms6_1:
            'If the Seller provides advance deliveries, he retains title of ownership to the delivered goods, until the purchase price owed has been paid in full.',
          title7: '7) Warranty',
          terms7_1:
            '7.1 Should the object of purchase be deficient, statutory provisions shall apply.',
          terms7_2:
            "7.2 Deviating hereof regarding used goods: Claims for defects are excluded if the defect does not occur until one year after delivery of the goods. Defects that occur within one year of delivery of the goods can be asserted within the statutory limitation period. The shortening of the limitation period does not apply, - for a product, which was not used, in accordance with its usual application, for building construction and which was the cause of the building's defectiveness, -for claims for damages and reimbursement of expenses on the part of the   Client, and - if the Seller has fraudulently concealed the defect.",
          terms7_3:
            '7.3 The Client is asked to notify any obvious transport damages to the forwarding agent and to inform the Seller accordingly. Should the Client fail to comply therewith, this shall not affect his statutory or contractual claims for defects.',
          title8: '8) Applicable Law',
          terms8_1:
            'The law of the Federal Republic of Germany shall apply to all legal relationships between the parties under exclusion of the laws governing the international purchase of movable goods. For consumers, this choice of law only applies to the extent that the granted protection is not withdrawn by mandatory provisions of the law of the country, in which the consumer has his habitual residence.',
          title9: '9) Alternative dispute resolution',
          terms9_1:
            '9.1 The EU Commission provides on its website the following link to the ODR platform: https://ec.europa.eu/consumers/odr. This platform shall be a point of entry for out-of-court resolutions of disputes arising from online sales and service contracts concluded between consumers and traders.',
          terms9_2:
            '9.2 The Seller is neither obliged nor prepared to attend a dispute settlement procedure before an alternative dispute resolution entity.',
          title10: 'Instructions for cancellation & Cancellation form',
          terms10_1:
            'Consumers, i.e. any individual acting for purposes which are wholly or mainly outside those individual’s trade, business, craft or profession, are entitled to cancel any contract on the following conditions:',
          title11: 'A. Instructions for cancellation',
          terms11_1: 'Right to cancel',
          terms11_2:
            'You have the right to cancel this contract within 1 month without giving any reason. The cancellation period will expire after 1 month from the day on which you acquire, or a third party other than the carrier and indicated by you acquires, physical possession of the goods. To exercise the right to cancel, you must inform us Eisbach Riders, Robin Eisenhardt & Michael Schmidt GbR, Lothstr. 72, 80797 München, Deutschland, Tel.: 017669019542, E-Mail: business@eisbach-riders.com) of your decision to cancel this contract by a clear statement (e.g. a letter sent by post, fax or e-mail). You may use the attached model cancellation form, but it is not obligatory. To meet the cancellation deadline, it is sufficient for you to send your communication concerning your exercise of the right to cancel before the cancellation period has expired.',
          terms11_3: 'Effects of cancellation',
          terms11_4:
            'If you cancel this contract, we will reimburse to you all payments received from you, including the costs of delivery (except for the supplementary costs arising if you choose a type of delivery other than the least expensive type of standard delivery offered by us) without undue delay and not later than fourteen days after the day on which we are informed about your decision to cancel this contract. We may make a deduction from the reimbursement for loss in value of any goods supplied, if the loss is the result of unnecessary handling by you. We will make the reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise. In any event, you will not incur any fees as a result of the reimbursement. We may withhold reimbursement until we have received the goods back or you have supplied evidence of having sent back the goods,whichever is the earliest. You shall send back the goods or hand them over to us without undue delay and in any event not later than fourteen days from the day on which you communicate your cancellation from this contract to us. The deadline is met if you send back the goods before the period of 14 days has expired. You will bear the direct cost of returning the goods. You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods',
          terms11_5: 'General information',
          terms11_6:
            '1) Please prevent damage to and contamination of the goods. Please return the goods, if possible, in the original packaging with all accessories and all packaging components. If necessary, please use protective outer packaging. If you are no longer in possession of the original packaging, please use suitable packaging providing adequate protection against potential transport damage. 2) Please do not return the goods freight forward. 3) Please note that the above general information in section 1 and 2 is not a precondition for effectively exercising your right to cancel.',
          title12: 'B. Cancellation form',
          terms12_1:
            'If you wish to cancel this contract, please complete and submit this form.',
          terms12_2:
            'I/We (*) hereby give notice that I/We (*) cancel my/our (*) contract of sale of the following goods (*)or the supply of the following service (*), _______________________________________________________ _______________________________________________________. Ordered on (*) ____________ / received on (*) __________________  ________________________________________________________  Name of consumer(s) ________________________________________________________  Address of consumer(s) ________________________________________________________ Signature of consumer(s) (only if this form is notified on paper)  _________________________  Date (*) Delete as appropriate',
        },
        privacy: {
          privacy: 'Data Protection Declaration',
          title1:
            '1) Information on the Collection of Personal Data and Contact Details of the Controller',
          terms1_1:
            '1.1 We are pleased that you are visiting our website and thank you for your interest. In the following pages, we inform you about the handling of your personal data when using our website. Personal data is all data    with which you can be personally identified.',
          terms1_2:
            '1.2 The controller in charge of data processing on this website, within the meaning of the General Data Protection Regulation (GDPR), is Eisbach Riders, Robin Eisenhardt & Michael Schmidt GbR, Lothstr. 72, 80797 München, Deutschland, Tel.: 017669019542, E-Mail: business@eisbach-riders.com. The controller in charge of the processing of personal data is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data.',
          terms1_3:
            '1.3 This website uses SSL or TLS encryption for security reasons and to protect the transmission of personal data and other confidential content (e.g. orders or inquiries to the controller). You can recognize an   encrypted connection by the character string https:// and the lock symbol in your browser line.',
          title2: '2) Data Collection When You Visit Our Website',
          terms2_1:
            "When using our website for information only, i.e. if you do not register or otherwise provide us with information, we only collect data that your browser transmits to our server (so-called 'server log files'). When you visit our website, we collect the following data that is technically necessary for us to display the website to you:",
          terms2_list1: '- Our visited website',
          terms2_list2: '- Date and time at the moment of access',
          terms2_list3: '- Amount of data sent in bytes',
          terms2_list4: '- Source/reference from which you came to the page',
          terms2_list5: '- Browser used',
          terms2_list6: '- Operating system used',
          terms2_list7: '- IP address used (if applicable: in anonymized form)',
          terms2_2:
            ' Data processing is carried out in accordance with Art. 6 (1) point f GDPR on the basis of our legitimate interest in improving the stability and functionality of our website. The data will not be passed on or used in any other way. However, we reserve the right to check the server log files subsequently, if there are any concrete indications of illegal use.',
          title3: '3) Cookies',
          terms3_1:
            'In order to make your visit to our website attractive and to enable the use of certain functions, we use so-called cookies on various pages. i.e. after closing your browser (so-called session cookies). Other cookies remain on your terminal and enable us or our partner companies (third-party cookies) to recognize your browser on your next visit (persistent cookies). If cookies are set, they collect and process specific user information such as browser and location data as well as IP address values according to individual requirements. Persistent cookies are automatically deleted after a specified period, which may vary depending on the cookie.',
          terms3_2:
            'In some cases, cookies are used to simplify the ordering process by saving settings (e.g. remembering the content of a virtual shopping basket for a later visit to the website). If personal data are also processed by individual cookies set by us, the processing is carried out in accordance with Art. 6 (1) point b GDPR either for the execution of the contract or in accordance with Art. 6 (1) point f GDPR to safeguard our legitimate interests in the best possible functionality of the website and a customer-friendly and effective design of the page visit.',
          terms3_3:
            'We work together with advertising partners who help us to make our website more interesting for you. For this purpose, cookies from partner companies are also stored on your hard drive when you visit our website (third-party cookies). You will be informed individually and separately about the use of such cookies and the scope of the information collected in each case within the following sections.',
          terms3_4:
            'Please note that you can set your browser in such a way that you are informed about the setting of cookies and you can decide individually about their acceptance or exclude the acceptance of cookies for certain cases or generally. Each browser differs in the way it manages the cookie settings. This is described in the help menu of each browser, which explains how you can change your cookie settings. You will find these for the respective browsers under the following links:',
          terms3_5:
            'Please note that the functionality of our website may be limited if cookies are not accepted.',
          title4: '4) Contacting Us',
          terms4_1:
            'When you contact us (e.g. via contact form or e-mail), personal data is collected. Which data is collected in the case of a contact form can be seen from the respective contact form. These data are stored and used exclusively for the purpose of responding to your request or for establishing contact and for the associated technical administration. The legal basis for processing data is our legitimate interest in responding to your request in accordance with Art. 6 (1) point f GDPR. If your contact is aimed at concluding a contract, the additional legal basis for the processing is Art. 6 (1) point b GDPR. Your data will be deleted after final processing of your enquiry; this is the case if it can be inferred from the circumstances that the facts in question have been finally clarified, provided that there are no legal storage obligations to the contrary.',
          title5:
            '5) Data Processing When Opening a Customer Account and for Contract Processing',
          terms5_1:
            'Pursuant to Art. 6 (1) point b GDPR, personal data will continue to be collected and processed if you provide them to us for the execution of a contract or when opening a customer account. Which data is collected can be seen from the respective input forms. It is possible to delete your customer account at any time. This can be done by sending a message to the above-mentioned address of the controller. We store and use the data provided by you for contract processing. After complete processing of the contract or deletion of your customer account, your data will be blocked in consideration of tax and commercial retention periods and deleted after expiry of these periods, unless you have expressly consented to further use of your data or a legally permitted further use of data has been reserved by our site, about which we will inform you accordingly below.',
          title6: '6) Use of Your Data for Direct Advertising',
          terms6_1:
            ' 6.1 If you subscribe to our e-mail newsletter, we will send you regular information about our offers. The only mandatory information for sending the newsletter is your e-mail address. The indication of additional possible data is voluntary and is used to be able to address you personally. We use the so-called double opt-in procedure for sending the newsletter. This means that we will not send you an e-mail newsletter, unless you have expressly confirmed to us that you agree to the sending of the newsletter. We will then send you a confirmation e-mail asking you to confirm that you wish to receive future newsletters by clicking on an appropriate link. By activating the confirmation link, you give us your consent to the use of your personal data in accordance with Art. 6 (1) point a GDPR. When you register for the newsletter, we store your IP address entered by the Internet Service Provider (ISP) as well as the date and time of registration so that we can trace any possible misuse of your e-mail address at a later time. The data collected by us when you register for the newsletter will be used exclusively for the purpose of advertising by means of the newsletter. You can unsubscribe from the newsletter at any time via the link provided in the newsletter or by sending a message to the responsible person named above. After your cancellation, your e-mail address will immediately be deleted from our newsletter distribution list, unless you have expressly consented to further use of your data or we reserve the right to use data in excess thereof, which is permitted by law and about which we inform you in this declaration.',
          terms6_2:
            "6.2 Our e-mail newsletters are sent via the technical service provider, The Rocket Science Group, LLC d/b/a MailChimp, 675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA (https://mailchimp.com), to whom we pass on the data you provided when registering for the newsletter. This disclosure is made in accordance with Art. 6 (1) point f GDPR and serves our legitimate interest in the use of an effective, secure and user-friendly newsletter system. Please note that your data is usually transferred to a MailChimp server in the USA and stored there. MailChimp uses this information to send and statistically evaluate the newsletter on our behalf. For evaluation purposes, the e-mails sent contain so-called web beacons or tracking pixels, which represent single-pixel image files stored on our website. This allows us to determine whether a newsletter message has been opened and which links have been clicked on. In addition, technical information is recorded (e.g. time of retrieval, IP address, browser type and operating system). The data are collected exclusively in a pseudonymized format and are not linked with other personal data from you. A direct personal relationship is excluded. This data is used exclusively for statistical analysis of newsletter campaigns. The results of these analyses can be used to better adapt future newsletters to the interests of the recipients. If you wish to object to the data analysis for statistical evaluation purposes, you must unsubscribe from the newsletter. Furthermore, MailChimp can use this data according to Art. 6 (1) point f GDPR even on the basis of its own legitimate interest in the demand-oriented design and optimization of the service as well as for market research purposes, for example to determine from which countries recipients come. However, MailChimp does not use the data of our newsletter recipients to address those recipients or pass that data on to third parties. To protect your data in the USA, we have concluded a data processing agreement ('Data-Processing-Agreement') with MailChimp on the basis of the standard contractual clauses of the European Commission to enable the transmission of your personal data to MailChimp. If you are interested in viewing this data processing agreement, you can do so at the following Internet link: https://mailchimp.com/legal/forms/data-processing-agreement/ MailChimp is also certified under the US-European data protection agreement 'Privacy Shield' and thus undertakes to comply with EU data protection regulations. The data protection regulations of MailChimp can be viewed at: https://mailchimp.com/legal/privacy/",
          title7: '7) Processing of Data for the Purpose of Order Handling',
          terms7_1:
            '7.1 The personal data collected by us will be passed on to the transport company commissioned with the delivery within the scope of contract processing, insofar as this is necessary for the delivery of the goods. We will pass on your payment data to the commissioned credit institution within the framework of payment processing, if this is necessary for payment handling. If payment service providers are used, we explicitly inform you of this below. The legal basis for the transfer of data is Art. 6 (1) point b GDPR.',
          terms7_2:
            "7.2 Use of Special Service Providers for Order Processing and Handling - Billbee Orders are processed by the service provider 'Billbee' (Billbee GmbH, Paulinenstrasse 54, 32756 Detmold). Name, address and, if applicable, other personal data will be passed on to Billbee exclusively for processing the online order in accordance with Art. 6 (1) point b GDPR. Your data will only be passed on if this is actually necessary for processing the order. Details regarding Billbee's privacy policy and Billbee's privacy policy can be found on Billbee's website at: https://www.billbee.io/datenschutz/",
          terms7_3:
            "7.3 Use of Payment Service Providers - Paypal When you pay via PayPal, credit card via PayPal, direct debit via PayPal or - if offered - 'purchase on account' or 'payment by instalments' via PayPal, we transmit your payment data to PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (hereinafter 'PayPal'). The transfer takes place in accordance with Art. 6 (1) point b GDPR and only insofar as this is necessary for payment processing. PayPal reserves the right to carry out credit checks for the payment methods credit card via PayPal, direct debit via PayPal or, if offered, 'purchase on account' or 'payment by installments' via PayPal. For this purpose, your payment data may be passed on to credit agencies on the basis of PayPal's legitimate interest in determining your solvency pursuant to Art. 6 (1) point f GDPR. PayPal uses the result of the credit assessment in relation to the statistical probability of non-payment for the purpose of deciding on the provision of the respective payment method. The credit report can contain probability values (so-called score values). If score values are included in the result of the credit report, they are based on recognized scientific, mathematical-statistical methods. The calculation of the score values includes, but is not limited to, address data. For further information on data protection law, including the credit agencies used, please refer to PayPal's data protection declaration at: https://www.paypal.com/uk/webapps/mpp/ua/privacy-full. You can object to this processing of your data at any time by sending a message to PayPal. However, PayPal may still be entitled to process your personal data if this is necessary for contractual payment processing.",
          title8: '8) Web Analysis Services',
          terms8_1:
            "Google (Universal) Analytics This website uses Google Analytics, a web analysis service of Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ('Google'). Google Analytics uses so-called cookies, which are text files stored on your computer, to help the website analyze how users use the site. The information generated by the cookies about your use of this website (including the shortened IP address) is generally transmitted to a Google server in the USA and stored there. This website uses Google Analytics exclusively with the extension '_anonymizeIp()', which ensures an anonymization of the IP address by shortening it and excludes a direct personal relationship. As a result of the extension, your IP address will previously be shortened by Google within member states of the European Union or in other signatory states to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. In these exceptional cases, processing is carried out in accordance with Art. 6 (1) point f GDPR, on the basis of our legitimate interest in the statistical analysis of user behavior for optimization and marketing purposes. On our behalf, Google will use this information to evaluate your use of the website, to compile reports on website activity and to provide us with other services relating to website and internet use. The IP address transmitted by your browser in the context of Google Analytics is not merged with other Google data. You may refuse the use of cookies by selecting the appropriate settings on your browser. However, we should point out that in that case you might not be able to use the full functionality of this website. You may permanently prevent Google from collecting data generated by cookies regarding the use of the website (including your IP address) and to process them. You can download and install the browser plugin available under the following link: https://tools.google.com/dlpage/gaoptout?hl=en. As an alternative to the browser plug-in or for browsers on mobile devices, please click on the following link in order to set an opt-out cookie which disables Google Analytics to collect data on this website in the future (this opt-out cookie only functions for this browser and this domain. If you delete your cookies on this browser, you must click again on this link):",
          terms8_2: 'Google Analytics has been disabled',
          terms8_3: 'Disable Google Analytics',
          terms8_4:
            "Google LLC, based in the United States, is certified for the US-European data protection agreement 'Privacy Shield', which guarantees compliance with the data protection level applicable in the EU. More information on how Google Analytics handles user data can be found in Google's privacy policy at: https://support.google.com/analytics/answer/6004245?hl=en",
          title9: '9) Tools and Miscellaneous',
          terms9_1:
            "Google Maps Our website uses Google Maps (AP’I) of Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ('Google'). Google Maps is a web service for displaying interactive (country) maps in order to display geographical information visually. Using this service will show you our location and will make it easier for you to find us. When you access the sub-pages that contain the Google Maps map, information about your use of our website (such as your IP address) is transmitted to and stored by Google on servers in the United States. This is regardless of whether Google provides a user account that you are logged in with or whether no user account exists. If you are logged in to Google, your information will be directly associated with your account. If you do not wish to be associated with your profile on Google, you must log out before activating the button. Google saves your data (even for users who are not logged in) as usage profiles and evaluates them. Such an evaluation takes place according to Art. 6 (1) point f GDPR, on the basis of the legitimate interests of Google in the insertion of personalized advertising, market research and/or demand-oriented design of its website. You have the right to object to the creation of these user profiles. If you want to do so, you must contact Google to exercise this right. Google LLC, based in the United States, is certified for the US-European data protection agreement 'Privacy Shield', which guarantees compliance with the data protection level applicable in the EU. If you do not agree to the future transmission of your data to Google in the context of using Google Maps, you may completely deactivate the Google Maps web service by switching off the JavaScript application in your browser. In this case, Google Maps as well as the map display on this website cannot be used. The Google terms of use can be found at: https://policies.google.com/terms?hl=en. The additional terms of use can be found at: https://www.google.com/intl/en-US_US/help/terms_maps.html. You can find detailed information on data protection in connection with the use of Google Maps on Google's website ('Google Privacy Policy') at: https://policies.google.com/privacy?hl=en.",
          title10: '10) Rights of the Data Subject',
          terms10_1:
            '10.1 The applicable data protection law grants you the following comprehensive rights of data subjects (rights of information and intervention) vis-à-vis the data controller with regard to the processing of your personal data:',
          terms10_list1:
            '- Right of access by the data subject pursuant to Art. 15 GDPR',
          terms10_list2: '- Right to rectification pursuant to Art. 16 GDPR',
          terms10_list3:
            '- Right to erase (“right to be forgotten”) pursuant to Art. 17 GDPR',
          terms10_list4:
            '- Right to restriction of processing pursuant to Art. 18 GDPR',
          terms10_list5: '- Right to be informed pursuant to Art. 19 GDPR',
          terms10_list6: '- Right to data portability pursuant to Art. 20 GDPR',
          terms10_list7:
            '- Right to withdraw a given consent pursuant to Art. 7 (3) GDPR',
          terms10_list8:
            '- Right to lodge a complaint pursuant to Art. 77 GDPR',
          title10_2: '10.2 RIGHT TO OBJECT',
          terms10_2:
            'IF, WITHIN THE FRAMEWORK OF A CONSIDERATION OF INTERESTS, WE PROCESS YOUR PERSONAL DATA ON THE BASIS OF OUR PREDOMINANT LEGITIMATE INTEREST, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THIS PROCESSING WITH EFFECT FOR THE FUTURE ON THE GROUNDS THAT ARISE FROM YOUR PARTICULAR SITUATION. IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA CONCERNED. HOWEVER, WE RESERVE THE RIGHT TO FURTHER PROCESSING IF WE CAN PROVE COMPELLING REASONS WORTHY OF PROTECTION FOR PROCESSING WHICH OUTWEIGH YOUR INTERESTS, FUNDAMENTAL RIGHTS AND FREEDOMS, OR IF THE PROCESSING SERVES TO ASSERT, EXERCISE OR DEFEND LEGAL CLAIMS. IF WE PROCESS YOUR PERSONAL DATA FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA WHICH ARE USED FOR DIRECT MARKETING PURPOSES. YOU MAY EXERCISE THE OBJECTION AS DESCRIBED ABOVE. IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA CONCERNED FOR DIRECT ADVERTISING PURPOSES.',
          title11: '11) Duration of Storage of Personal Data',
          terms11_1:
            'The duration of the storage of personal data is determined by the respective legal retention period (e.g. commercial and tax retention periods). After expiry of this period, the corresponding data will be routinely deleted, provided they are no longer necessary for the performance or initiation of the contract and/or there is no longer any legitimate interest on our part in further storage.',
        },
      }
    },
    335: function(e, t, a) {
      'use strict'
      ;(function(e, o) {
        a.d(t, 'a', function() {
          return l
        })
        a(85), a(57), a(88), a(336)
        var i = a(188),
          n = a(161),
          r = a(342)
        function s() {
          return {
            theme: r.a,
            sheetsManager: new Map(),
            sheetsRegistry: new i.SheetsRegistry(),
            generateClassName: Object(n.createGenerateClassName)(),
          }
        }
        function l() {
          return e.browser
            ? (o.__INIT_MATERIAL_UI__ || (o.__INIT_MATERIAL_UI__ = s()),
              o.__INIT_MATERIAL_UI__)
            : s()
        }
      }.call(this, a(201), a(73)))
    },
    342: function(e, t, a) {
      'use strict'
      var o = a(161)
      a(343)
      a(344)
      var i = {
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
          greyBlue: '#f3f8fc',
        },
        n = Object(o.createMuiTheme)({
          palette: {
            type: 'light',
            primary: { light: i.ocean, main: i.ocean, dark: i.teal },
            secondary: { light: i.teal, main: i.teal, dark: i.teal },
            error: { main: i.red },
          },
          status: i,
          typography: {
            useNextVariants: !0,
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
          },
          overrides: {
            MuiTypography: {
              colorPrimary: { color: i.greyDk },
              colorSecondary: { color: i.grey },
              colorTextSecondary: { color: i.white },
            },
            MuiButton: {
              root: { padding: '9px 27px', borderRadius: 0 },
              contained: { boxShadow: 'none' },
            },
          },
        })
      t.a = n
    },
    343: function(e, t, a) {},
    464: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              defaultTitle: 'Eisbach Riders',
              defaultDescription: 'Eisbach Riders - Surf Accessories',
              siteUrl: 'https://www.eisbach-riders.com',
              defaultImage: 'src/assets/logos/icon-192.png',
            },
          },
        },
      }
    },
  },
])
//# sourceMappingURL=1-573ff420674b3af6ab8c.js.map
