;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    147: function(e, a, t) {
      'use strict'
      t.r(a)
      t(77), t(78), t(84)
      var n = t(7),
        i = t.n(n),
        s = t(0),
        r = t.n(s),
        o = t(202),
        l = t.n(o),
        c = t(207),
        m = t.n(c),
        d = t(576),
        p = t(334),
        u = t.n(p),
        g = t(167),
        h = t(355),
        b = t(356)
      d.a
        .use(u.a)
        .use(g.a)
        .init({
          lng: 'en',
          fallbackLng: 'en',
          resources: { en: { translation: h }, de: { translation: b } },
          keySeparator: '.',
          interpolation: { escapeValue: !1 },
        })
      var f = d.a,
        y = t(227),
        k = (t(201), t(4)),
        w = t.n(k),
        v = t(277),
        E = t.n(v),
        x = t(150),
        S = t.n(x),
        C = t(163),
        N = t(278),
        T = t.n(N),
        j = t(159),
        B = t(162),
        z = t.n(B),
        R = t(173),
        O = t.n(R),
        L = t(197),
        D = t.n(L),
        I = t(283),
        M = t.n(I),
        q = t(285),
        A = t.n(q),
        W = t(284),
        F = t.n(W),
        P = t(219),
        V = t(181),
        Y = t.n(V),
        U = t(280),
        _ = t.n(U),
        K = t(282),
        G = t.n(K),
        H = t(281),
        J = t.n(H),
        Q = t(218),
        X = t.n(Q),
        Z = t(274),
        $ = t.n(Z),
        ee = t(536),
        ae = t.n(ee),
        te = t(542),
        ne = t.n(te),
        ie = t(539),
        se = t.n(ie),
        re = t(541),
        oe = t.n(re),
        le = (function(e) {
          function a() {
            for (
              var a, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i]
            return (
              ((a = e.call.apply(e, [this].concat(n)) || this).state = {
                isDialogOpen: !1,
                activeStep: 0,
              }),
              (a.handleDialogOpen = function(e) {
                a.setState({ isDialogOpen: !0 })
              }),
              (a.handleDialogClose = function() {
                a.setState({ isDialogOpen: !1 })
              }),
              (a.handleIndexChange = function(e) {
                a.setState({ activeStep: e })
              }),
              (a.handleNext = function() {
                a.setState(function(e) {
                  return { activeStep: e.activeStep + 1 }
                })
              }),
              (a.handleBack = function() {
                a.setState(function(e) {
                  return { activeStep: e.activeStep - 1 }
                })
              }),
              a
            )
          }
          return (
            i()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.product,
                t = e.classes,
                n = e.t,
                i = this.state,
                o = i.isDialogOpen,
                l = i.activeStep
              return r.a.createElement(
                s.Fragment,
                null,
                r.a.createElement(
                  Y.a,
                  {
                    variant: 'outlined',
                    className: t.more,
                    onClick: this.handleDialogOpen,
                  },
                  n('products.more')
                ),
                r.a.createElement(
                  _.a,
                  {
                    open: o,
                    onClose: this.handleDialogClose,
                    maxWidth: 'md',
                    classes: { paper: t.paper },
                  },
                  r.a.createElement(
                    J.a,
                    { id: 'dialog-title', className: t.dialogTitle },
                    a.name,
                    r.a.createElement(
                      O.a,
                      {
                        'aria-label': n('common.close'),
                        color: 'inherit',
                        onClick: this.handleDialogClose,
                        className: t.closeButton,
                      },
                      r.a.createElement(X.a, null)
                    )
                  ),
                  r.a.createElement(
                    G.a,
                    { classes: { root: t.dialogRoot } },
                    r.a.createElement(
                      'div',
                      { className: t.dialogContainer },
                      r.a.createElement(
                        'div',
                        { className: t.dialogImg },
                        r.a.createElement(
                          T.a,
                          {
                            enableMouseEvents: !0,
                            index: l,
                            onChangeIndex: this.handleChangeIndex,
                          },
                          a.images.map(function(e, a) {
                            return r.a.createElement('img', {
                              src: e,
                              key: 'img' + a,
                              className: t.img,
                              alt: 'product' + a,
                            })
                          })
                        ),
                        r.a.createElement(M.a, {
                          steps: a.images.length,
                          position: 'static',
                          activeStep: l,
                          className: t.mobileStepper,
                          nextButton: r.a.createElement(
                            O.a,
                            {
                              size: 'small',
                              'aria-label': n('common.scrollLeft'),
                              onClick: this.handleNext,
                              disabled: l === a.images.length - 1,
                            },
                            r.a.createElement(F.a, null)
                          ),
                          backButton: r.a.createElement(
                            O.a,
                            {
                              size: 'small',
                              'aria-label': n('common.scrollRight'),
                              onClick: this.handleBack,
                              disabled: 0 === l,
                            },
                            r.a.createElement(A.a, null)
                          ),
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: t.dialogContent },
                        r.a.createElement(
                          'div',
                          { className: t.priceContainer },
                          r.a.createElement(
                            z.a,
                            { variant: 'h6', className: t.price },
                            '€' + a.price
                          ),
                          r.a.createElement(
                            'div',
                            { className: t.iconContainer },
                            a.amazon &&
                              r.a.createElement(
                                O.a,
                                {
                                  className: t.button,
                                  'aria-label': 'Amazon',
                                  href: a.amazon,
                                  target: '_blank',
                                  rel: 'noopener',
                                },
                                r.a.createElement(P.a, { className: t.icon })
                              ),
                            a.ebay &&
                              r.a.createElement(
                                O.a,
                                {
                                  className: t.button,
                                  'aria-label': 'Ebay',
                                  href: a.ebay,
                                  target: '_blank',
                                  rel: 'noopener',
                                },
                                r.a.createElement(P.b, { className: t.icon })
                              )
                          )
                        ),
                        r.a.createElement(
                          $.a,
                          { disablePadding: !0, className: t.scroll },
                          a.more.map(function(e, a) {
                            return r.a.createElement(
                              ae.a,
                              { key: 'listItem' + a, className: t.listItem },
                              r.a.createElement(
                                se.a,
                                null,
                                r.a.createElement(oe.a, { className: t.icon })
                              ),
                              r.a.createElement(ne.a, {
                                primary: e,
                                classes: {
                                  root: t.listItemTextRoot,
                                  primary: t.listItemText,
                                },
                              })
                            )
                          })
                        )
                      )
                    )
                  )
                )
              )
            }),
            a
          )
        })(s.Component)
      le.propTypes = { classes: w.a.object.isRequired }
      var ce = Object(g.b)()(
          Object(C.a)(
            Object(j.withStyles)(function(e) {
              var a, t, n, i, s, r
              return {
                more: ((a = { width: '100%' }),
                (a[e.breakpoints.up('md')] = { width: '50%' }),
                a),
                paper: ((t = { margin: 15 }),
                (t[e.breakpoints.up('sm')] = { margin: 48 }),
                t),
                dialogContainer: ((n = {
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                }),
                (n[e.breakpoints.up('sm')] = {
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }),
                n),
                dialogImg: ((i = {
                  paddingRight: 0,
                  paddingLeft: 0,
                  flexBasis: '40%',
                }),
                (i[e.breakpoints.up('md')] = {
                  paddingRight: 60,
                  paddingLeft: 60,
                }),
                i),
                dialogContent: { flexBasis: '50%' },
                dialogTitle: { textAlign: 'center' },
                closeButton: { float: 'right' },
                name: {
                  paddingTop: 15,
                  paddingBottom: 10,
                  fontWeight: 600,
                  textAlign: 'left',
                },
                price: {
                  color: e.palette.primary.main,
                  fontWeight: 600,
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                },
                img: { width: '100%' },
                listItem: {
                  alignItems: 'flex-start',
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                },
                listItemTextRoot: { paddingLeft: 0, paddingRight: 0 },
                listItemText: { fontSize: 14 },
                icon: { fontSize: 18 },
                priceContainer: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                mobileStepper: { background: e.status.white },
                scroll: ((s = { paddingBottom: 30, overflowY: 'hidden' }),
                (s[e.breakpoints.up('sm')] = {
                  height: '55vh',
                  overflowY: 'auto',
                }),
                (s['&::-webkit-scrollbar-track'] = {
                  WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: 4,
                  backgroundColor: e.status.grey.greyBG,
                }),
                (s['&::-webkit-scrollbar'] = {
                  width: 4,
                  backgroundColor: e.status.grey.greyBG,
                }),
                (s['&::-webkit-scrollbar-thumb'] = {
                  WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: 4,
                  backgroundColor: e.status.grey.greyDivs,
                }),
                s),
                dialogRoot: ((r = { overflowY: 'auto' }),
                (r[e.breakpoints.up('md')] = { overflowY: 'hidden' }),
                r),
              }
            })(le)
          )
        ),
        me = t(544),
        de = t.n(me),
        pe = t(545),
        ue = t.n(pe),
        ge = t(546),
        he = t.n(ge),
        be = t(547),
        fe = t.n(be),
        ye = t(548),
        ke = t.n(ye),
        we = t(549),
        ve = t.n(we),
        Ee = t(550),
        xe = t.n(Ee),
        Se = t(551),
        Ce = t.n(Se),
        Ne = t(552),
        Te = t.n(Ne),
        je = t(553),
        Be = t.n(je),
        ze = t(554),
        Re = t.n(ze),
        Oe = t(555),
        Le = t.n(Oe),
        De = t(556),
        Ie = t.n(De),
        Me = t(557),
        qe = t.n(Me),
        Ae = t(558),
        We = t.n(Ae),
        Fe = [
          {
            name: 'FCS Double Tab Thruster Fin Set with Fin Key',
            images: [de.a, ue.a, he.a, fe.a, ke.a, ve.a],
            price: '19.90',
            ebay: 'http://www.ebay.de/itm/183498144801',
            amazon: 'https://www.amazon.de/dp/B07K8W2TKK',
            more: [
              'Set of 3 fins with center fin and the two side fins (right and left) with inside profile in standard size G5 / M5.',
              'Fits any surfboard with double tab FCS1 plug system - whether bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or water sports in general.',
              'High quality materials make the fins durable and flexible.',
              'All our products come in a sustainable and environmentally friendly packaging.',
              "Height: 11.63 cm (4.58'')",
              "Length: 11.13 cm (4.38'')",
              "Thickness: 0.66 cm (0.26'')",
              'Angle: 35.5 degree',
              'Scope of delivery: 3 fin set with fin key',
            ],
          },
          {
            name: 'RailProtect Tape',
            images: [xe.a, Ce.a, Te.a, Be.a],
            price: '24.90',
            ebay: 'http://www.ebay.de/itm/183498197638',
            amazon: 'https://www.amazon.de/dp/B07K8W9TG9',
            more: [
              'The particularly durable diamond structure protects the edges of your board against dings and bumps, thus preventing the ingress of water.',
              'Fits any surfboard up to 6ft (1.83m) - whether its bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or SUP (stand up paddling).',
              "The two adhesive strips (each 191 x 6.3 cm (6'3 x 2.5)) are easy to attach and will last a long time on your board.",
              'All our products come in a sustainable and environmentally friendly handcrafted packaging.',
              'Scope of delivery: 2 piece set surfboard RailProtect tape',
            ],
          },
          {
            name: 'Future Single Tab Thruster Fin Set with Fin Key',
            images: [Re.a, Le.a, Ie.a, qe.a, We.a],
            price: '19.90',
            ebay: 'http://www.ebay.de/itm/183498170584',
            amazon: null,
            more: [
              'Set of 3 fins with center fin and the two side fins (right and left) with inside profile in standard size G5 / M5.',
              'Fits any surfboard with single tab Future plug system - whether bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or water sports in general.',
              'High quality materials make the fins durable and flexible.',
              'All our products come in a sustainable and environmentally friendly packaging.',
              "Height: 11.63 cm (4.58'')",
              "Length: 11.13 cm (4.38'')",
              "Thickness: 0.66 cm (0.26'')",
              'Angle: 35.5 degree',
              'Scope of delivery: 3 fin set with fin key',
            ],
          },
        ],
        Pe = (function(e) {
          function a() {
            for (
              var a, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i]
            return (
              ((a = e.call.apply(e, [this].concat(n)) || this).state = {
                activeStep: 0,
              }),
              (a.handleIndexChange = function(e) {
                a.setState({ activeStep: e })
              }),
              (a.handleNext = function() {
                a.setState(function(e) {
                  return { activeStep: e.activeStep + 1 }
                })
              }),
              (a.handleBack = function() {
                a.setState(function(e) {
                  return { activeStep: e.activeStep - 1 }
                })
              }),
              a
            )
          }
          return (
            i()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.classes,
                t = e.t,
                n = this.state.activeStep
              return r.a.createElement(
                'div',
                { className: a.root, id: 'products' },
                r.a.createElement(
                  z.a,
                  { className: a.title, variant: 'h5' },
                  t('products.sectionTitle')
                ),
                r.a.createElement(
                  'div',
                  { className: a.container },
                  r.a.createElement(
                    D.a,
                    { xsDown: !0 },
                    Fe.map(function(e, t) {
                      return r.a.createElement(
                        'div',
                        { className: a.itemContainer, key: 'product' + t },
                        r.a.createElement('img', {
                          src: e.images[0],
                          className: a.img,
                          alt: 'product ' + t,
                        }),
                        r.a.createElement(
                          'div',
                          { className: a.descriptionContainer },
                          r.a.createElement(z.a, { className: a.name }, e.name),
                          r.a.createElement(
                            'div',
                            { className: a.fullWidth },
                            r.a.createElement(
                              'div',
                              { className: a.priceContainer },
                              r.a.createElement(
                                z.a,
                                { variant: 'h6', className: a.price },
                                '€' + e.price
                              ),
                              r.a.createElement(
                                'div',
                                { className: a.iconContainer },
                                e.amazon &&
                                  r.a.createElement(
                                    O.a,
                                    {
                                      className: a.button,
                                      'aria-label': 'Amazon',
                                      href: e.amazon,
                                      target: '_blank',
                                      rel: 'noopener',
                                    },
                                    r.a.createElement(P.a, {
                                      className: a.icon,
                                    })
                                  ),
                                e.ebay &&
                                  r.a.createElement(
                                    O.a,
                                    {
                                      className: a.button,
                                      'aria-label': 'Ebay',
                                      href: e.ebay,
                                      target: '_blank',
                                      rel: 'noopener',
                                    },
                                    r.a.createElement(P.b, {
                                      className: S()(a.icon, a.ebay),
                                    })
                                  )
                              )
                            ),
                            r.a.createElement(ce, { product: e })
                          )
                        )
                      )
                    })
                  ),
                  r.a.createElement(
                    D.a,
                    { smUp: !0 },
                    r.a.createElement(
                      T.a,
                      {
                        enableMouseEvents: !0,
                        index: n,
                        onChangeIndex: this.handleIndexChange,
                      },
                      Fe.map(function(e, t) {
                        return r.a.createElement(
                          'div',
                          { className: a.itemContainer, key: 'product' + t },
                          r.a.createElement('img', {
                            src: e.images[0],
                            className: a.img,
                            alt: 'product ' + t,
                          }),
                          r.a.createElement(
                            'div',
                            { className: a.descriptionContainer },
                            r.a.createElement(
                              z.a,
                              { className: a.name },
                              e.name
                            ),
                            r.a.createElement(
                              'div',
                              { className: a.fullWidth },
                              r.a.createElement(
                                'div',
                                { className: a.priceContainer },
                                r.a.createElement(
                                  z.a,
                                  { variant: 'h6', className: a.price },
                                  '€' + e.price
                                ),
                                r.a.createElement(
                                  'div',
                                  { className: a.iconContainer },
                                  e.amazon &&
                                    r.a.createElement(
                                      O.a,
                                      {
                                        className: a.button,
                                        'aria-label': 'Amazon',
                                        href: e.amazon,
                                        target: '_blank',
                                        rel: 'noopener',
                                      },
                                      r.a.createElement(P.a, {
                                        className: a.icon,
                                      })
                                    ),
                                  e.ebay &&
                                    r.a.createElement(
                                      O.a,
                                      {
                                        className: a.button,
                                        'aria-label': 'Ebay',
                                        href: e.ebay,
                                        target: '_blank',
                                        rel: 'noopener',
                                      },
                                      r.a.createElement(P.b, {
                                        className: S()(a.icon, a.ebay),
                                      })
                                    )
                                )
                              ),
                              r.a.createElement(ce, { product: e })
                            )
                          )
                        )
                      })
                    ),
                    r.a.createElement(M.a, {
                      steps: 3,
                      position: 'static',
                      activeStep: n,
                      className: a.mobileStepper,
                      nextButton: r.a.createElement(
                        O.a,
                        {
                          size: 'small',
                          'aria-label': t('common.scrollLeft'),
                          onClick: this.handleNext,
                          disabled: 2 === n,
                        },
                        r.a.createElement(F.a, null)
                      ),
                      backButton: r.a.createElement(
                        O.a,
                        {
                          size: 'small',
                          'aria-label': t('common.scrollRight'),
                          onClick: this.handleBack,
                          disabled: 0 === n,
                        },
                        r.a.createElement(A.a, null)
                      ),
                    })
                  )
                )
              )
            }),
            a
          )
        })(s.Component)
      Pe.propTypes = { classes: w.a.object.isRequired }
      var Ve = Object(g.b)()(
          Object(C.a)(
            Object(j.withStyles)(function(e) {
              var a, t, n, i, s, r, o
              return {
                root: ((a = {
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 15,
                  paddingRight: 15,
                  background: e.palette.common.white,
                }),
                (a[e.breakpoints.up('sm')] = {
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
                container: ((t = {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }),
                (t[e.breakpoints.up('sm')] = { flexDirection: 'row' }),
                t),
                title: {
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: 15,
                },
                itemContainer: {
                  flexBasis: '30%',
                  textAlign: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                },
                img: ((n = { width: '80%' }),
                (n[e.breakpoints.up('sm')] = { width: '100%' }),
                n),
                name: {
                  paddingTop: 15,
                  paddingBottom: 10,
                  fontWeight: 600,
                  textAlign: 'center',
                },
                descriptionContainer: {
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                priceContainer: ((i = {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: 15,
                  paddingLeft: 15,
                }),
                (i[e.breakpoints.up('sm')] = {
                  justifyContent: 'center',
                  paddingRight: 0,
                  paddingLeft: 0,
                }),
                i),
                price: ((s = {
                  color: e.palette.primary.main,
                  fontWeight: 600,
                  marginRight: 15,
                  fontSize: 16,
                }),
                (s[e.breakpoints.up('md')] = { fontSize: 20 }),
                s),
                fullWidth: { width: '100%' },
                iconContainer: { marginLeft: 15 },
                icon: ((r = { fill: e.status.black, fontSize: 18 }),
                (r[e.breakpoints.up('md')] = { fontSize: 36 }),
                r),
                ebay: ((o = { fontSize: 24 }),
                (o[e.breakpoints.up('md')] = { fontSize: 36 }),
                o),
                mobileStepper: { background: e.status.white },
              }
            })(Pe)
          )
        ),
        Ye = t(232),
        Ue = t.n(Ye),
        _e = (t(89), t(233), t(234)),
        Ke = t.n(_e),
        Ge = t(559),
        He = t.n(Ge),
        Je = t(573),
        Qe = t.n(Je),
        Xe = t(266),
        Ze = t.n(Xe),
        $e = t(265),
        ea = t.n($e),
        aa = t(565),
        ta = t.n(aa),
        na = t(567),
        ia = t.n(na),
        sa = (function(e) {
          function a() {
            for (
              var a, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i]
            return (
              ((a = e.call.apply(e, [this].concat(n)) || this).state = {
                email: '',
                name: '',
                isEmailValid: null,
                isNameValid: null,
                isCheckboxOpen: !1,
                isDialogOpen: !1,
                isSnackbarOpen: !1,
                snackbarMessage: null,
                error: !1,
              }),
              (a.handleSubmit = (function() {
                var e = Ke()(
                  Ue.a.mark(function e(t) {
                    var n
                    return Ue.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !(
                                  a.state.isCheckboxOpen &&
                                  a.state.isEmailValid &&
                                  a.state.isNameValid
                                )
                              ) {
                                e.next = 6
                                break
                              }
                              return (
                                (e.next = 3),
                                He()(a.state.email, {
                                  FNAME: a.state.name,
                                  gdpr_26529: !0,
                                })
                              )
                            case 3:
                              ;(n = e.sent),
                                a.handleDialogClose(),
                                'error' === n.result
                                  ? a.setState({
                                      isSnackbarOpen: !0,
                                      snackbarMessage: n.msg.includes('<a')
                                        ? n.msg.split('<a')[0]
                                        : n.msg,
                                    })
                                  : a.setState({
                                      isSnackbarOpen: !0,
                                      error: !1,
                                      isEmailValid: !0,
                                      isNameValid: !0,
                                      snackbarMessage: 'success',
                                    })
                            case 6:
                              a.state.isCheckboxOpen ||
                                a.setState({ error: !0 }),
                                pattern.test(a.state.email) ||
                                  a.setState({ isEmailValid: !1 }),
                                a.state.name.length <= 500 &&
                                  a.setState({ isNameValid: !1 })
                            case 9:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      this
                    )
                  })
                )
                return function(a) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleSnackbarClose = function(e, t) {
                'clickaway' !== t && a.setState({ isSnackbarOpen: !1 })
              }),
              (a.handleDialogOpen = function() {
                a.setState({ isDialogOpen: !0 })
              }),
              (a.handleDialogClose = function() {
                a.setState({ isDialogOpen: !1 })
              }),
              (a.handleChange = function(e) {
                return function(t) {
                  'email' === e &&
                    (pattern.test(t.target.value)
                      ? a.setState({ isEmailValid: !0, email: t.target.value })
                      : a.setState({
                          isEmailValid: !1,
                          email: t.target.value,
                        })),
                    'name' === e &&
                      (t.target.value.length > 500
                        ? a.setState({ isNameValid: !1 })
                        : a.setState({ isNameValid: !0, name: t.target.value }))
                }
              }),
              (a.handleCheckbox = function(e) {
                a.setState({ isCheckboxOpen: e.target.checked })
              }),
              a
            )
          }
          return (
            i()(a, e),
            (a.prototype.render = function() {
              var e = this,
                a = this.props,
                t = a.classes,
                n = a.t,
                i = this.state,
                s = i.email,
                o = i.name,
                l = i.isDialogOpen,
                c = i.isSnackbarOpen,
                m = i.isCheckboxOpen,
                d = i.error,
                p = i.isEmailValid,
                u = i.isNameValid,
                g = i.snackbarMessage
              return r.a.createElement(
                'div',
                { className: t.containerNewsletter },
                r.a.createElement(ea.a, {
                  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                  open: c,
                  autoHideDuration: 5e3,
                  onClose: this.handleSnackbarClose,
                  ContentProps: {
                    'aria-describedby': 'message-id',
                    className:
                      'success' === g ? t.snackbarSuccess : t.snackbarError,
                  },
                  message:
                    'success' === g
                      ? r.a.createElement(
                          'span',
                          { id: 'message-id' },
                          n('newsletter.success')
                        )
                      : r.a.createElement('span', { id: 'message-id' }, g),
                  action: r.a.createElement(
                    O.a,
                    {
                      key: 'closeNewsletter',
                      'aria-label': n('common.close'),
                      color: 'inherit',
                      onClick: this.handleSnackbarClose,
                    },
                    r.a.createElement(X.a, null)
                  ),
                }),
                r.a.createElement(
                  z.a,
                  { className: t.textNewsletter, variant: 'h5' },
                  n('newsletter.sectionTitle')
                ),
                r.a.createElement(
                  z.a,
                  { className: t.subtitleNewsletter },
                  n('newsletter.message')
                ),
                r.a.createElement(
                  Y.a,
                  {
                    variant: 'contained',
                    color: 'primary',
                    className: t.button,
                    onClick: this.handleDialogOpen,
                  },
                  n('newsletter.signUp')
                ),
                r.a.createElement(
                  _.a,
                  { open: l, onClose: this.handleDialogClose },
                  r.a.createElement(
                    J.a,
                    { id: 'dialog-title' },
                    n('newsletter.newsletter'),
                    r.a.createElement(
                      O.a,
                      {
                        'aria-label': n('common.close'),
                        className: t.close,
                        color: 'inherit',
                        onClick: this.handleDialogClose,
                      },
                      r.a.createElement(X.a, null)
                    )
                  ),
                  r.a.createElement(
                    G.a,
                    { className: t.dialogContent },
                    r.a.createElement(
                      'form',
                      { className: t.form },
                      r.a.createElement(Ze.a, {
                        required: !0,
                        id: 'email',
                        type: 'text',
                        label: 'Email',
                        error: null === p ? null : !p,
                        placeholder: n('common.email'),
                        value: s,
                        onChange: this.handleChange('email'),
                        className: t.textField,
                        margin: 'normal',
                        variant: 'outlined',
                      }),
                      r.a.createElement(Ze.a, {
                        required: !0,
                        id: 'name',
                        type: 'text',
                        label: 'Name',
                        error: null === u ? null : !u,
                        placeholder: n('common.name'),
                        value: o,
                        onChange: this.handleChange('name'),
                        className: t.textField,
                        margin: 'normal',
                        variant: 'outlined',
                      })
                    ),
                    r.a.createElement(
                      'div',
                      { className: t.legalContainer },
                      r.a.createElement(ta.a, {
                        classes: { label: d && !m ? t.error : null },
                        control: r.a.createElement(ia.a, {
                          checked: m,
                          onChange: this.handleCheckbox,
                          className: d ? t.error : null,
                          value: 'consent',
                          color: 'primary',
                        }),
                        label:
                          'Yes, I would like to recieve emails from Eisbach Riders.',
                      })
                    ),
                    r.a.createElement(
                      z.a,
                      { className: t.legal },
                      n('newsletter.legal1'),
                      r.a.createElement(
                        'a',
                        { href: 'https://mailchimp.com/legal/' },
                        n('newsletter.legal2')
                      )
                    )
                  ),
                  r.a.createElement(
                    Qe.a,
                    { className: t.dialogActions },
                    r.a.createElement(
                      Y.a,
                      {
                        onClick: this.handleDialogClose,
                        color: 'primary',
                        className: t.actionButton,
                      },
                      n('common.cancel')
                    ),
                    r.a.createElement(
                      Y.a,
                      {
                        onClick: function() {
                          e.handleSubmit()
                        },
                        className: t.actionButton,
                        color: 'primary',
                        autoFocus: !0,
                        type: 'submit',
                      },
                      n('newsletter.subscribe')
                    )
                  )
                )
              )
            }),
            a
          )
        })(s.Component)
      sa.propTypes = { classes: w.a.object.isRequired }
      var ra = Object(g.b)()(
          Object(C.a)(
            Object(j.withStyles)(function(e) {
              var a, t, n
              return {
                containerNewsletter: ((a = {
                  background: e.status.white,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 30,
                  paddingTop: 30,
                  textAlign: 'center',
                }),
                (a[e.breakpoints.up('sm')] = {
                  paddingLeft: 60,
                  paddingRight: 60,
                  paddingBottom: 30,
                  paddingTop: 30,
                }),
                (a[e.breakpoints.up('md')] = {
                  paddingLeft: 90,
                  paddingRight: 90,
                  paddingBottom: 90,
                  paddingTop: 90,
                }),
                a),
                textNewsletter: ((t = {
                  textTransform: 'uppercase',
                  paddingBottom: 5,
                  fontSize: 18,
                }),
                (t[e.breakpoints.up('md')] = { fontSize: 24 }),
                t),
                subtitleNewsletter: { paddingBottom: 30 },
                form: { display: 'flex', flexDirection: 'column' },
                textField: { marginBottom: 15 },
                button: ((n = { padding: '9px 27px', fontSize: 14 }),
                (n[e.breakpoints.up('md')] = {
                  padding: '16px 48px',
                  fontSize: 18,
                }),
                n),
                snackbarError: { background: e.status.red },
                snackbarSuccess: { background: e.status.green },
                dialogContent: { paddingBottom: 0 },
                legal: { fontSize: 11, marginTop: 15 },
                legalContainer: { display: 'flex', alignItems: 'center' },
                img: { marginRight: 15, marginLeft: 15, height: 60 },
                dialogActions: {
                  marginLeft: 30,
                  marginRight: 30,
                  marginBottom: 30,
                },
                close: { float: 'right' },
                actionButton: { margin: 0 },
                error: { color: e.palette.error.main },
              }
            })(sa)
          )
        ),
        oa = t(575),
        la = t.n(oa),
        ca = function(e) {
          var a = e.classes,
            t = e.t
          return r.a.createElement(
            'div',
            { className: a.container, id: 'about' },
            r.a.createElement(
              D.a,
              { xsDown: !0 },
              r.a.createElement('div', { className: a.img })
            ),
            r.a.createElement(
              'div',
              { className: a.textContainer },
              r.a.createElement(
                z.a,
                { className: a.title, variant: 'h5' },
                t('about.sectionTitle')
              ),
              r.a.createElement(
                z.a,
                { className: a.text, variant: 'body1' },
                t('about.message')
              )
            )
          )
        }
      ca.propTypes = { classes: w.a.object.isRequired }
      var ma = Object(g.b)()(
          Object(C.a)(
            Object(j.withStyles)(function(e) {
              var a, t, n, i, s
              return {
                container: ((a = {
                  display: 'flex',
                  justifyContent: 'center',
                  height: 215,
                  background: e.status.black,
                }),
                (a[e.breakpoints.up('sm')] = {
                  height: 250,
                  justifyContent: 'space-between',
                }),
                (a[e.breakpoints.up('md')] = { height: 400 }),
                a),
                img: ((t = {
                  height: 250,
                  width: '100%',
                  flexBasis: '50%',
                  backgroundImage: 'url(' + la.a + ')',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  background: e.status.black,
                }),
                (t[e.breakpoints.up('md')] = { height: 400 }),
                t),
                textContainer: ((n = {
                  flexBasis: '100%',
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingRight: 15,
                  paddingLeft: 15,
                  textAlign: 'center',
                }),
                (n[e.breakpoints.up('sm')] = {
                  flexBasis: '50%',
                  paddingRight: 60,
                  paddingLeft: 60,
                }),
                (n[e.breakpoints.up('md')] = {
                  paddingTop: 45,
                  paddingRight: 60,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }),
                n),
                title: ((i = {
                  textTransform: 'uppercase',
                  letterSpacing: 3,
                  paddingBottom: 5,
                  fontSize: 14,
                  color: e.palette.secondary.main,
                }),
                (i[e.breakpoints.up('md')] = {
                  paddingBottom: 30,
                  fontSize: 24,
                }),
                i),
                text: ((s = { color: e.palette.common.white, fontSize: 12 }),
                (s[e.breakpoints.up('md')] = { fontSize: 16 }),
                s),
              }
            })(ca)
          )
        ),
        da = function(e) {
          var a = e.img,
            t = e.logo,
            n = e.classes,
            i = e.t
          return r.a.createElement(
            'div',
            { className: n.root },
            r.a.createElement(E.a, {
              fluid: a.node.fluid,
              alt: '',
              className: n.img,
            }),
            r.a.createElement(
              'div',
              { className: n.container },
              r.a.createElement(
                D.a,
                { smUp: !0 },
                r.a.createElement(E.a, {
                  fluid: t.node.fluid,
                  alt: '',
                  className: n.logo,
                })
              ),
              r.a.createElement(
                z.a,
                {
                  variant: 'h2',
                  gutterBottom: !0,
                  className: S()(n.text, n.title),
                },
                'Eisbach Riders'
              ),
              r.a.createElement(
                z.a,
                { className: S()(n.text, n.subtitle) },
                i('hero.subtitle')
              )
            )
          )
        }
      da.propTypes = { classes: w.a.object.isRequired }
      var pa = Object(g.b)()(
        Object(C.a)(
          Object(j.withStyles)(function(e) {
            var a, t, n, i, s
            return {
              root: ((a = { height: 250, marginTop: -65 }),
              (a[e.breakpoints.up('sm')] = { height: 300 }),
              (a[e.breakpoints.up('md')] = { height: 700 }),
              a),
              img: ((t = { zIndex: -2, height: 250 }),
              (t[e.breakpoints.up('sm')] = { height: 300 }),
              (t[e.breakpoints.up('md')] = { height: 700 }),
              t),
              container: ((n = {
                position: 'absolute',
                width: '100%',
                top: 65,
                paddingTop: 40,
                paddingLeft: 15,
                paddingRight: 15,
                textAlign: 'center',
              }),
              (n[e.breakpoints.up('sm')] = { paddingTop: 130 }),
              (n[e.breakpoints.up('md')] = { paddingTop: 250 }),
              n),
              text: {
                textTransform: 'capitalize',
                letterSpacing: 3,
                fontWeight: 600,
                color: e.status.white,
                textShadow: '2px 2px 4px #404040',
              },
              title: ((i = { fontSize: 35 }),
              (i[e.breakpoints.up('sm')] = { fontSize: 48 }),
              (i[e.breakpoints.up('md')] = { fontSize: 96 }),
              i),
              subtitle: ((s = { fontSize: 14 }),
              (s[e.breakpoints.up('sm')] = { fontSize: 18 }),
              (s[e.breakpoints.up('md')] = { fontSize: 24 }),
              s),
              logo: { width: 90, paddingBottom: 20, textAlign: 'center' },
            }
          })(da)
        )
      )
      t.d(a, 'pageQuery', function() {
        return ga
      })
      var ua = (function(e) {
        function a() {
          for (var a, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i]
          return (
            ((a = e.call.apply(e, [this].concat(n)) || this).state = {
              activePage: '/',
              language: 'en',
            }),
            (a.handlePageChange = function(e) {
              a.setState({ activePage: e })
            }),
            (a.handleLanguageChange = function() {
              var e = 'en' === a.state.language ? 'de' : 'en'
              f.changeLanguage(e), a.setState({ language: e })
            }),
            a
          )
        }
        return (
          i()(a, e),
          (a.prototype.render = function() {
            var e = this.props.data,
              a = this.state,
              t = a.activePage,
              n = a.language,
              i = l()(this, 'props.data.site.siteMetadata.title'),
              s = l()(this, 'props.data.site.siteMetadata.description'),
              o = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('backsplash')
              }),
              c = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('logo')
              }),
              d = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('homepage1')
              })
            return r.a.createElement(
              y.a,
              {
                location: this.props.location,
                handleLanguageChange: this.handleLanguageChange,
                handlePageChange: this.handlePageChange,
                activePage: t,
                language: n,
              },
              r.a.createElement(m.a, {
                htmlAttributes: { lang: 'en' },
                meta: [{ name: 'description', content: s }],
                title: i,
              }),
              r.a.createElement(pa, { img: o, logo: c }),
              r.a.createElement(ra, null),
              r.a.createElement(ma, { img: d }),
              r.a.createElement(Ve, null)
            )
          }),
          a
        )
      })(s.Component)
      ua.propTypes = {}
      a.default = ua
      var ga = '3144685729'
    },
    355: function(e) {
      e.exports = {
        header: { about: 'about', products: 'products', contact: 'contact' },
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
        hero: { subtitle: 'Surf equipment accessories from Munich' },
        about: {
          sectionTitle: 'who we are',
          message:
            'Eisbach Riders is a young local surf brand from Munich and offers equipment for surfing. Whether you are in the sea, in the river or on the city wave. We, Michael and Robin, are passionate surfers ourselves and value quality products at comparable prices. Packed in sustainable and environmentally friendly packaging, we will ship as fast as possible so that you can jump right back into the water with a smile on your face.',
        },
        products: { sectionTitle: 'essential surf equipment', more: 'more' },
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
      }
    },
    356: function(e) {
      e.exports = {
        header: { about: 'about', products: 'products', contact: 'contact' },
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
        hero: { subtitle: 'Surf equipment accessories from Munich' },
        about: {
          sectionTitle: 'who we are',
          message:
            'Eisbach Riders is a young local surf brand from Munich and offers equipment for surfing. Whether you are in the sea, in the river or on the city wave. We, Michael and Robin, are passionate surfers ourselves and value quality products at comparable prices. Packed in sustainable and environmentally friendly packaging, we will ship as fast as possible so that you can jump right back into the water with a smile on your face.',
        },
        products: { sectionTitle: 'essential surf equipment', more: 'more' },
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
      }
    },
    544: function(e, a, t) {
      e.exports = t.p + 'static/main-2d681ba7fe15b5ad8a69ab47fef6f0d7.jpg'
    },
    545: function(e, a, t) {
      e.exports = t.p + 'static/img1-b0bc93de89b08723c7d028cc8f1420a2.jpg'
    },
    546: function(e, a, t) {
      e.exports = t.p + 'static/img2-571270b0770eef9b7d82fe5c8d3ac65d.jpg'
    },
    547: function(e, a, t) {
      e.exports = t.p + 'static/img3-243c572bf0dcbb945b953f120001d676.jpg'
    },
    548: function(e, a, t) {
      e.exports = t.p + 'static/img4-e577ca30567391f77febb26089b9346b.jpg'
    },
    549: function(e, a, t) {
      e.exports = t.p + 'static/img5-97e9f8887dec54963875548404efd1f2.jpg'
    },
    550: function(e, a, t) {
      e.exports = t.p + 'static/main-1c758d5c480bd44070022a3e523cd6a6.jpg'
    },
    551: function(e, a, t) {
      e.exports = t.p + 'static/img1-9b234c459aecbbb3c5874991099414e6.jpg'
    },
    552: function(e, a, t) {
      e.exports = t.p + 'static/img2-cc0a710b771242dbf1116f0ac507bc9e.jpg'
    },
    553: function(e, a, t) {
      e.exports = t.p + 'static/img3-df8a3e853743d65136d3f70614fed9f9.jpg'
    },
    554: function(e, a, t) {
      e.exports = t.p + 'static/main-40c89e038d70d9e55811960b2b6b6012.jpg'
    },
    555: function(e, a, t) {
      e.exports = t.p + 'static/img1-89136cd7d6071e61cf31cd98f3ea19a3.jpg'
    },
    556: function(e, a, t) {
      e.exports = t.p + 'static/img2-2481eca5c1679ab0fac09415cbcaf969.jpg'
    },
    557: function(e, a, t) {
      e.exports = t.p + 'static/img3-0fb288b41e5c6b525c67322a31eeb9ce.jpg'
    },
    558: function(e, a, t) {
      e.exports = t.p + 'static/img4-97e9f8887dec54963875548404efd1f2.jpg'
    },
    575: function(e, a, t) {
      e.exports = t.p + 'static/homepage1-a2fe926e00c3af700a874e755cd4e694.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-b70a94e6d8606f01ef9b.js.map
