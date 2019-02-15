;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    147: function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t(7),
        i = t.n(n),
        r = t(0),
        o = t.n(r),
        s = t(177),
        l = t(4),
        c = t.n(l),
        d = t(163),
        p = t(162),
        u = t(152),
        m = t(439),
        f = (t(182), t(169)),
        g = t.n(f),
        b = t(445),
        h = t(176),
        w = t(184),
        y = (function(e) {
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
              }),
              (a.handleDialogOpen = function(e) {
                a.setState({ isDialogOpen: !0 })
              }),
              (a.handleDialogClose = function() {
                a.setState({ isDialogOpen: !1 })
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
                i = this.state.isDialogOpen
              return o.a.createElement(
                'div',
                { className: t.root },
                o.a.createElement('img', {
                  src: a.images[0],
                  className: t.img,
                  alt: 'product test',
                  onClick: this.handleDialogOpen,
                }),
                o.a.createElement(
                  'div',
                  { className: t.descriptionContainer },
                  o.a.createElement(m.a, { className: t.name }, a.name),
                  o.a.createElement(
                    'div',
                    { className: t.fullWidth },
                    o.a.createElement(
                      'div',
                      { className: t.priceContainer },
                      o.a.createElement(
                        m.a,
                        { variant: 'h6', className: t.price },
                        '€' + a.price
                      ),
                      o.a.createElement(
                        'div',
                        { className: t.iconContainer },
                        a.amazon &&
                          o.a.createElement(
                            b.a,
                            {
                              className: t.button,
                              'aria-label': 'Amazon',
                              href: a.amazon,
                              target: '_blank',
                              rel: 'noopener',
                            },
                            o.a.createElement(h.a, { className: t.icon })
                          ),
                        a.ebay &&
                          o.a.createElement(
                            b.a,
                            {
                              className: t.button,
                              'aria-label': 'Ebay',
                              href: a.ebay,
                              target: '_blank',
                              rel: 'noopener',
                            },
                            o.a.createElement(h.b, {
                              className: g()(t.icon, t.ebay),
                            })
                          )
                      )
                    )
                  ),
                  o.a.createElement(w.a, {
                    product: a,
                    buttonText: n('products.features'),
                    buttonFull: !0,
                    handleDialogOpen: this.handleDialogOpen,
                    handleDialogClose: this.handleDialogClose,
                    isDialogOpen: i,
                  })
                )
              )
            }),
            a
          )
        })(r.Component)
      y.propTypes = {
        classes: c.a.object.isRequired,
        product: c.a.object.isRequired,
      }
      var x = Object(d.b)()(
          Object(p.a)(
            Object(u.a)(function(e) {
              var a, t, n
              return {
                root: {
                  flexBasis: '30%',
                  textAlign: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                },
                img: ((a = { width: '80%' }),
                (a[e.breakpoints.up('sm')] = { width: '100%' }),
                a),
                descriptionContainer: {
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                priceContainer: ((t = {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: 15,
                  paddingLeft: 15,
                }),
                (t[e.breakpoints.up('sm')] = {
                  justifyContent: 'center',
                  paddingRight: 0,
                  paddingLeft: 0,
                }),
                t),
                price: ((n = {
                  color: e.palette.primary.main,
                  fontWeight: 600,
                  marginRight: 15,
                  fontSize: 16,
                }),
                (n[e.breakpoints.up('md')] = { fontSize: 20 }),
                n),
                fullWidth: { width: '100%' },
              }
            })(y)
          )
        ),
        k = t(185),
        v = function(e) {
          var a = e.classes,
            t = e.t
          return o.a.createElement(
            'div',
            { className: a.root },
            o.a.createElement(
              m.a,
              { className: a.header, variant: 'h5' },
              t('shop.fins')
            ),
            o.a.createElement(
              'div',
              { className: a.container },
              k.c.map(function(e, a) {
                return o.a.createElement(x, { product: e, key: 'fins' + a })
              })
            ),
            o.a.createElement(
              m.a,
              { className: a.header, variant: 'h5' },
              t('shop.leashes')
            ),
            o.a.createElement(
              'div',
              { className: a.container },
              k.d.map(function(e, a) {
                return o.a.createElement(x, { product: e, key: 'fins' + a })
              })
            ),
            o.a.createElement(
              m.a,
              { className: a.header, variant: 'h5' },
              t('shop.other')
            ),
            o.a.createElement(
              'div',
              { className: a.container },
              k.e.map(function(e, a) {
                return o.a.createElement(x, { product: e, key: 'fins' + a })
              })
            )
          )
        }
      v.propTypes = { classes: c.a.object.isRequired }
      var S = Object(d.b)()(
          Object(p.a)(
            Object(u.a)(function(e) {
              var a
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
                  paddingTop: 90,
                  paddingBottom: 90,
                  paddingLeft: 170,
                  paddingRight: 170,
                }),
                a),
                container: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginBottom: 45,
                },
                header: { marginBottom: 30, textTransform: 'uppercase' },
              }
            })(v)
          )
        ),
        F = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          return (
            i()(a, e),
            (a.prototype.render = function() {
              return o.a.createElement(s.a, null, o.a.createElement(S, null))
            }),
            a
          )
        })(r.Component)
      a.default = F
    },
    184: function(e, a, t) {
      'use strict'
      t(182)
      var n = t(7),
        i = t.n(n),
        r = t(0),
        o = t.n(r),
        s = t(4),
        l = t.n(s),
        c = t(208),
        d = t(163),
        p = t(220),
        u = t.n(p),
        m = t(169),
        f = t.n(m),
        g = t(152),
        b = t(162),
        h = t(439),
        w = t(443),
        y = t(447),
        x = t(449),
        k = t(448),
        v = t(445),
        S = t(218),
        F = t.n(S),
        E = t(437),
        C = t(457),
        H = t(438),
        T = t(450),
        j = t(458),
        z = t(280),
        B = t.n(z),
        N = t(221),
        A = t.n(N),
        R = t(202),
        G = t.n(R),
        D = t(176),
        O = (function(e) {
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
              var e,
                a = this.props,
                t = a.handleDialogOpen,
                n = a.handleDialogClose,
                i = a.isDialogOpen,
                s = a.idx,
                l = a.product,
                d = a.buttonText,
                p = a.buttonFull,
                m = a.classes,
                g = a.t,
                b = this.state.activeStep,
                S = c.a.language
              return o.a.createElement(
                r.Fragment,
                null,
                o.a.createElement(
                  w.a,
                  {
                    color: 'secondary',
                    variant: 'outlined',
                    className: f()(
                      m.button,
                      ((e = {}), (e[m.buttonFull] = p), e)
                    ),
                    onClick: function() {
                      return t(s)
                    },
                  },
                  d
                ),
                o.a.createElement(
                  y.a,
                  {
                    open: i,
                    onClose: n,
                    maxWidth: 'md',
                    classes: { paper: m.paper },
                  },
                  o.a.createElement(
                    k.a,
                    { id: 'dialog-title', className: m.dialogTitle },
                    l.name,
                    o.a.createElement(
                      v.a,
                      {
                        'aria-label': g('common.close'),
                        color: 'inherit',
                        onClick: n,
                        className: m.closeButton,
                      },
                      o.a.createElement(F.a, null)
                    )
                  ),
                  o.a.createElement(
                    x.a,
                    { classes: { root: m.dialogRoot } },
                    o.a.createElement(
                      'div',
                      { className: m.dialogContainer },
                      o.a.createElement(
                        'div',
                        { className: m.dialogImg },
                        o.a.createElement(
                          u.a,
                          {
                            enableMouseEvents: !0,
                            index: b,
                            onChangeIndex: this.handleChangeIndex,
                          },
                          l.images.map(function(e, a) {
                            return o.a.createElement('img', {
                              src: e,
                              key: 'img' + a,
                              className: m.img,
                              alt: 'product' + a,
                            })
                          })
                        ),
                        o.a.createElement(j.a, {
                          steps: l.images.length,
                          position: 'static',
                          activeStep: b,
                          className: m.mobileStepper,
                          nextButton: o.a.createElement(
                            v.a,
                            {
                              size: 'small',
                              'aria-label': g('common.scrollLeft'),
                              onClick: this.handleNext,
                              disabled: b === l.images.length - 1,
                            },
                            o.a.createElement(G.a, null)
                          ),
                          backButton: o.a.createElement(
                            v.a,
                            {
                              size: 'small',
                              'aria-label': g('common.scrollRight'),
                              onClick: this.handleBack,
                              disabled: 0 === b,
                            },
                            o.a.createElement(A.a, null)
                          ),
                        })
                      ),
                      o.a.createElement(
                        'div',
                        { className: m.dialogContent },
                        o.a.createElement(
                          'div',
                          { className: m.priceContainer },
                          o.a.createElement(
                            h.a,
                            { variant: 'h6', className: m.price },
                            '€' + l.price
                          ),
                          o.a.createElement(
                            'div',
                            { className: m.iconContainer },
                            l.amazon &&
                              o.a.createElement(
                                v.a,
                                {
                                  'aria-label': 'Amazon',
                                  href: l.amazon,
                                  target: '_blank',
                                  rel: 'noopener',
                                },
                                o.a.createElement(D.a, {
                                  className: m.iconButton,
                                })
                              ),
                            l.ebay &&
                              o.a.createElement(
                                v.a,
                                {
                                  'aria-label': 'Ebay',
                                  href: l.ebay,
                                  target: '_blank',
                                  rel: 'noopener',
                                },
                                o.a.createElement(D.b, {
                                  className: m.iconButton,
                                })
                              )
                          )
                        ),
                        o.a.createElement(
                          E.a,
                          { disablePadding: !0, className: m.scroll },
                          l.more[S].map(function(e, a) {
                            return o.a.createElement(
                              C.a,
                              { key: 'listItem' + a, className: m.listItem },
                              o.a.createElement(
                                T.a,
                                null,
                                o.a.createElement(B.a, { className: m.icon })
                              ),
                              o.a.createElement(H.a, {
                                primary: e,
                                classes: {
                                  root: m.listItemTextRoot,
                                  primary: m.listItemText,
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
        })(r.Component)
      ;(O.propTypes = {
        classes: l.a.object.isRequired,
        handleDialogOpen: l.a.func.isRequired,
        handleDialogClose: l.a.func.isRequired,
        isDialogOpen: l.a.bool.isRequired,
        idx: l.a.number,
        product: l.a.object.isRequired,
        buttonText: l.a.string.isRequired,
        buttonFull: l.a.bool,
      }),
        (a.a = Object(d.b)()(
          Object(b.a)(
            Object(g.a)(function(e) {
              var a, t, n, i, r, o, s
              return {
                buttonFull: ((a = { width: '100%' }),
                (a[e.breakpoints.up('md')] = { width: '50%' }),
                a),
                button: ((t = { color: e.palette.common.black }),
                (t[e.breakpoints.up('sm')] = { marginTop: 30 }),
                t),
                paper: ((n = { margin: 15 }),
                (n[e.breakpoints.up('sm')] = { margin: 48 }),
                n),
                dialogContainer: ((i = {
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                }),
                (i[e.breakpoints.up('sm')] = {
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }),
                i),
                dialogImg: ((r = {
                  paddingRight: 0,
                  paddingLeft: 0,
                  flexBasis: '40%',
                }),
                (r[e.breakpoints.up('md')] = {
                  paddingRight: 60,
                  paddingLeft: 60,
                }),
                r),
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
                iconButton: { color: e.status.black, fontSize: 36 },
                priceContainer: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                mobileStepper: { background: e.status.white },
                scroll: ((o = { paddingBottom: 30, overflowY: 'hidden' }),
                (o[e.breakpoints.up('sm')] = {
                  height: '55vh',
                  overflowY: 'auto',
                }),
                (o['&::-webkit-scrollbar-track'] = {
                  WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: 4,
                  backgroundColor: e.status.grey.greyBG,
                }),
                (o['&::-webkit-scrollbar'] = {
                  width: 4,
                  backgroundColor: e.status.grey.greyBG,
                }),
                (o['&::-webkit-scrollbar-thumb'] = {
                  WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: 4,
                  backgroundColor: e.status.grey.greyDivs,
                }),
                o),
                dialogRoot: ((s = { overflowY: 'auto' }),
                (s[e.breakpoints.up('md')] = { overflowY: 'hidden' }),
                s),
              }
            })(O)
          )
        ))
    },
    185: function(e, a, t) {
      'use strict'
      t.d(a, 'c', function() {
        return $
      }),
        t.d(a, 'b', function() {
          return ee
        }),
        t.d(a, 'a', function() {
          return ae
        }),
        t.d(a, 'e', function() {
          return te
        }),
        t.d(a, 'd', function() {
          return ne
        })
      var n = t(222),
        i = t.n(n),
        r = t(223),
        o = t.n(r),
        s = t(224),
        l = t.n(s),
        c = t(225),
        d = t.n(c),
        p = t(226),
        u = t.n(p),
        m = t(227),
        f = t.n(m),
        g = t(228),
        b = t.n(g),
        h = t(229),
        w = t.n(h),
        y = t(230),
        x = t.n(y),
        k = t(231),
        v = t.n(k),
        S = t(232),
        F = t.n(S),
        E = t(233),
        C = t.n(E),
        H = t(234),
        T = t.n(H),
        j = t(235),
        z = t.n(j),
        B = t(236),
        N = t.n(B),
        A = t(237),
        R = t.n(A),
        G = t(238),
        D = t.n(G),
        O = t(239),
        I = t.n(O),
        W = t(240),
        L = t.n(W),
        U = t(241),
        q = t.n(U),
        M = t(242),
        P = t.n(M),
        _ = t(243),
        K = t.n(_),
        Y = t(244),
        J = t.n(Y),
        V = t(245),
        Q = t.n(V),
        X = t(246),
        Z = t.n(X),
        $ = [
          {
            name: 'FCS Double Tab Thruster Fin Set with Fin Key',
            images: [i.a, o.a, l.a, d.a, u.a, f.a],
            price: '19.90',
            ebay:
              'https://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338456795&mpre=https%3A%2F%2Fwww.ebay.de%2Fitm%2F183534256900',
            amazon: 'https://amzn.to/2Vr6Gt7',
            more: {
              en: [
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
              de: [
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
          },
          {
            name: 'RailProtect Tape',
            images: [b.a, w.a, x.a, v.a],
            price: '24.90',
            ebay:
              'https://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338456795&mpre=https%3A%2F%2Fwww.ebay.de%2Fitm%2F183498197638',
            amazon: 'https://amzn.to/2GTx3Vh',
            more: {
              en: [
                'The particularly durable diamond structure protects the edges of your board against dings and bumps, thus preventing the ingress of water.',
                'Fits any surfboard up to 6ft (1.83m) - whether its bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or SUP (stand up paddling).',
                "The two adhesive strips (each 191 x 6.3 cm (6'3 x 2.5)) are easy to attach and will last a long time on your board.",
                'All our products come in a sustainable and environmentally friendly handcrafted packaging.',
                'Scope of delivery: 2 piece set surfboard RailProtect tape',
              ],
              de: [
                'The particularly durable diamond structure protects the edges of your board against dings and bumps, thus preventing the ingress of water.',
                'Fits any surfboard up to 6ft (1.83m) - whether its bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or SUP (stand up paddling).',
                "The two adhesive strips (each 191 x 6.3 cm (6'3 x 2.5)) are easy to attach and will last a long time on your board.",
                'All our products come in a sustainable and environmentally friendly handcrafted packaging.',
                'Scope of delivery: 2 piece set surfboard RailProtect tape',
              ],
            },
          },
          {
            name: 'Future Single Tab Thruster Fin Set with Fin Key',
            images: [F.a, C.a, T.a, z.a, N.a],
            price: '19.90',
            ebay: 'http://www.ebay.de/itm/183498170584',
            amazon: null,
            more: {
              en: [
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
              de: [
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
          },
        ],
        ee = [
          {
            name: 'Bee Swell Wax',
            images: [R.a, D.a, I.a, L.a, q.a, P.a],
            price: '6.95',
            ebay:
              'https://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338456795&mpre=https%3A%2F%2Fwww.ebay.de%2Fitm%2F183636677740',
            more: {
              en: [
                'Help bees! - Part of the profits will be active in the rescue of honey bees',
                'Size of bar is 2.25” x 2.25” x 0.875”',
                'Grip-Bee is the extra grippy cold water wax (58°F / 14°C and below). This wax is perfect for cold-water river and wake surfing.',
                'Hana Hou is the tropical wax (70°F / 21°C and warmer). This wax can also be used as a base coat in cooler temp water.',
                'Not only is it gentle on the environment but also on your skin and it smells damn good',
                'Handcrafted at Bee Swell in the USA',
                'All our products come in a sustainable and environmentally friendly packaging.',
              ],
              de: [
                'Helfe mit! - Ein Teil des Umsatzes wird aktiv zur Rettung von Honigbienen',
                'Größe: 5.7 x 5.7 x 2.2 cm',
                'Grip-Bee ist das extra griffige Wachs für kaltes Wasser (58°F / 14°C und kälter). es ist ideal für kühle Europäische Herbsttage oder für das Flussurfen, z.B. auf dem Münchner Eisbach.',
                'Hana Hou ist ideal für tropische Temperaturen (70°F / 21°C und wärmer) oder auch als Grundiereung für kühler Temperaturen.',
                'Ist nicht nur schonend zur Umwelt und sondern auch zu deiner Haut und duftet verdammt gut',
                'Handgefertig bei Bee Swell in den USA',
                'Surfwachs aus 100% ökologischer Herstellung',
              ],
            },
          },
        ],
        ae = [
          {
            name: 'Fiberglass Honeycomb FCS 1',
            images: [K.a, J.a, Q.a, Z.a],
            price: '39.90',
            ebay:
              'https://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338456795&mpre=https%3A%2F%2Fwww.ebay.de%2Fitm%2F183646902812',
            more: {
              en: [
                '3 piece set with center fin and both side fins (left and right)',
                'Configuration: Thruster',
                'Material: Fiberglass (glass-reinforced plastic (GRP)) with Honeycomb core',
                'System: FCS 1 Plug System',
                'Size: G5/M5 standard size',
                "Height: 11.63 cm (4.58'')",
                "Length: 11.13 cm (4.38'')",
                "Thickness: 0.66 cm (0.26'')",
                'Angle: 35.5 degree',
                'Scope of delivery: 3 fiberglass honeycomb fin set with fin key',
              ],
              de: [
                '3er Set mit Centerfinne und den beiden Seitenfinnen (rechts und links)',
                'Konfiguration: Thruster',
                'Material: Fiberglas (glasfaserverstärkter Kunststoff (GFK)) mit Honigwaben-Kern',
                'System: FCS 1 Plug System',
                'Größe: G5/M5 Standardgröße',
                "Höhe: 11.63 cm (4.58'')",
                "Länge: 11.13 cm (4.38'')",
                "Dicke: 0.66 cm (0.26'')",
                'Winkel: 35.5 Grad',
                'Lieferumfang: 3er Set Surfboard Finnen mit Fin Key',
              ],
            },
          },
        ],
        te = [
          {
            name: 'Bee Swell Wax',
            images: [R.a, D.a, I.a, L.a, q.a, P.a],
            price: '6.95',
            ebay:
              'https://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338456795&mpre=https%3A%2F%2Fwww.ebay.de%2Fitm%2F183636677740',
            more: {
              en: [
                'Help bees! - Part of the profits will be active in the rescue of honey bees',
                'Size of bar is 2.25” x 2.25” x 0.875”',
                'Grip-Bee is the extra grippy cold water wax (58°F / 14°C and below). This wax is perfect for cold-water river and wake surfing.',
                'Hana Hou is the tropical wax (70°F / 21°C and warmer). This wax can also be used as a base coat in cooler temp water.',
                'Not only is it gentle on the environment but also on your skin and it smells damn good',
                'Handcrafted at Bee Swell in the USA',
                'All our products come in a sustainable and environmentally friendly packaging.',
              ],
              de: [
                'Helfe mit! - Ein Teil des Umsatzes wird aktiv zur Rettung von Honigbienen',
                'Größe: 5.7 x 5.7 x 2.2 cm',
                'Grip-Bee ist das extra griffige Wachs für kaltes Wasser (58°F / 14°C und kälter). es ist ideal für kühle Europäische Herbsttage oder für das Flussurfen, z.B. auf dem Münchner Eisbach.',
                'Hana Hou ist ideal für tropische Temperaturen (70°F / 21°C und wärmer) oder auch als Grundiereung für kühler Temperaturen.',
                'Ist nicht nur schonend zur Umwelt und sondern auch zu deiner Haut und duftet verdammt gut',
                'Handgefertig bei Bee Swell in den USA',
                'Surfwachs aus 100% ökologischer Herstellung',
              ],
            },
          },
        ],
        ne = [
          {
            name: 'Bee Swell Wax',
            images: [R.a, D.a, I.a, L.a, q.a, P.a],
            price: '6.95',
            ebay:
              'https://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338456795&mpre=https%3A%2F%2Fwww.ebay.de%2Fitm%2F183636677740',
            more: {
              en: [
                'Help bees! - Part of the profits will be active in the rescue of honey bees',
                'Size of bar is 2.25” x 2.25” x 0.875”',
                'Grip-Bee is the extra grippy cold water wax (58°F / 14°C and below). This wax is perfect for cold-water river and wake surfing.',
                'Hana Hou is the tropical wax (70°F / 21°C and warmer). This wax can also be used as a base coat in cooler temp water.',
                'Not only is it gentle on the environment but also on your skin and it smells damn good',
                'Handcrafted at Bee Swell in the USA',
                'All our products come in a sustainable and environmentally friendly packaging.',
              ],
              de: [
                'Helfe mit! - Ein Teil des Umsatzes wird aktiv zur Rettung von Honigbienen',
                'Größe: 5.7 x 5.7 x 2.2 cm',
                'Grip-Bee ist das extra griffige Wachs für kaltes Wasser (58°F / 14°C und kälter). es ist ideal für kühle Europäische Herbsttage oder für das Flussurfen, z.B. auf dem Münchner Eisbach.',
                'Hana Hou ist ideal für tropische Temperaturen (70°F / 21°C und wärmer) oder auch als Grundiereung für kühler Temperaturen.',
                'Ist nicht nur schonend zur Umwelt und sondern auch zu deiner Haut und duftet verdammt gut',
                'Handgefertig bei Bee Swell in den USA',
                'Surfwachs aus 100% ökologischer Herstellung',
              ],
            },
          },
        ]
    },
    222: function(e, a, t) {
      e.exports = t.p + 'static/main-2d681ba7fe15b5ad8a69ab47fef6f0d7.jpg'
    },
    223: function(e, a, t) {
      e.exports = t.p + 'static/img1-b0bc93de89b08723c7d028cc8f1420a2.jpg'
    },
    224: function(e, a, t) {
      e.exports = t.p + 'static/img2-571270b0770eef9b7d82fe5c8d3ac65d.jpg'
    },
    225: function(e, a, t) {
      e.exports = t.p + 'static/img3-243c572bf0dcbb945b953f120001d676.jpg'
    },
    226: function(e, a, t) {
      e.exports = t.p + 'static/img4-e577ca30567391f77febb26089b9346b.jpg'
    },
    227: function(e, a, t) {
      e.exports = t.p + 'static/img5-97e9f8887dec54963875548404efd1f2.jpg'
    },
    228: function(e, a, t) {
      e.exports = t.p + 'static/main-1c758d5c480bd44070022a3e523cd6a6.jpg'
    },
    229: function(e, a, t) {
      e.exports = t.p + 'static/img1-9b234c459aecbbb3c5874991099414e6.jpg'
    },
    230: function(e, a, t) {
      e.exports = t.p + 'static/img2-cc0a710b771242dbf1116f0ac507bc9e.jpg'
    },
    231: function(e, a, t) {
      e.exports = t.p + 'static/img3-df8a3e853743d65136d3f70614fed9f9.jpg'
    },
    232: function(e, a, t) {
      e.exports = t.p + 'static/main-40c89e038d70d9e55811960b2b6b6012.jpg'
    },
    233: function(e, a, t) {
      e.exports = t.p + 'static/img1-89136cd7d6071e61cf31cd98f3ea19a3.jpg'
    },
    234: function(e, a, t) {
      e.exports = t.p + 'static/img2-2481eca5c1679ab0fac09415cbcaf969.jpg'
    },
    235: function(e, a, t) {
      e.exports = t.p + 'static/img3-0fb288b41e5c6b525c67322a31eeb9ce.jpg'
    },
    236: function(e, a, t) {
      e.exports = t.p + 'static/img4-97e9f8887dec54963875548404efd1f2.jpg'
    },
    237: function(e, a, t) {
      e.exports = t.p + 'static/main-79035a1e71b0f9a744c5f91b2957fb1c.jpg'
    },
    238: function(e, a, t) {
      e.exports = t.p + 'static/img1-32c7e61e109980f0a9384716457c2f50.jpg'
    },
    239: function(e, a, t) {
      e.exports = t.p + 'static/img2-4d85f36cbe3ed17d95c21a5a8429e366.jpg'
    },
    240: function(e, a, t) {
      e.exports = t.p + 'static/img3-0949f62d6ad075deaacc9e781e05b056.jpg'
    },
    241: function(e, a, t) {
      e.exports = t.p + 'static/img4-e06a0be1616b35a9e65c6a212ed654ee.jpg'
    },
    242: function(e, a, t) {
      e.exports = t.p + 'static/img5-8ef33d6076756eb31da307e86b1bba42.jpg'
    },
    243: function(e, a, t) {
      e.exports = t.p + 'static/main-7e3cb2f4ece259992eeee8fa790af145.png'
    },
    244: function(e, a, t) {
      e.exports = t.p + 'static/img1-0607e61499533c0e3a7426e748496746.jpg'
    },
    245: function(e, a, t) {
      e.exports = t.p + 'static/img2-0c5667bc053a20268853c4cace9c57a4.jpg'
    },
    246: function(e, a, t) {
      e.exports = t.p + 'static/img3-b5b7d64f811be504a90942bce0db3116.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-shop-js-0a4926ba6d34a9f7d78c.js.map
