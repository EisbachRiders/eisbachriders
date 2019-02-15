;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    146: function(e, t, a) {
      'use strict'
      a.r(t)
      a(82), a(83), a(84)
      var i = a(7),
        n = a.n(i),
        r = a(0),
        s = a.n(r),
        o = a(177),
        l = a(4),
        d = a.n(l),
        c = a(183),
        p = a.n(c),
        u = a(163),
        m = a(169),
        f = a.n(m),
        g = a(162),
        h = a(152),
        b = a(454),
        y = a(439),
        w = a(184),
        v = a(185),
        x = a(176),
        E = (function(e) {
          function t() {
            for (
              var t, a = arguments.length, i = new Array(a), n = 0;
              n < a;
              n++
            )
              i[n] = arguments[n]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                isDialogOpen: !1,
              }),
              (t.handleDialogOpen = function() {
                t.setState({ isDialogOpen: !0 })
              }),
              (t.handleDialogClose = function() {
                t.setState({ isDialogOpen: !1 })
              }),
              t
            )
          }
          return (
            n()(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.img,
                a = e.classes,
                i = e.t,
                n = this.state.isDialogOpen
              return s.a.createElement(
                'div',
                { className: a.root, id: 'products' },
                s.a.createElement(
                  b.a,
                  { xsDown: !0 },
                  s.a.createElement(
                    'div',
                    { className: a.containerDetails },
                    s.a.createElement(
                      y.a,
                      { className: a.detailTitle },
                      i('feature.surfConditions')
                    ),
                    s.a.createElement(
                      'div',
                      { className: a.containerIcon2 },
                      s.a.createElement(
                        y.a,
                        { className: a.detailText },
                        i('feature.surfDetail2')
                      ),
                      s.a.createElement(x.d, { className: a.icon }),
                      s.a.createElement(x.d, { className: a.icon }),
                      s.a.createElement(x.d, { className: a.icon }),
                      s.a.createElement(x.d, { className: f()(a.off, a.icon) })
                    ),
                    s.a.createElement(
                      'div',
                      { className: a.containerIcon2, style: { paddingTop: 5 } },
                      s.a.createElement(
                        y.a,
                        { className: a.detailText },
                        i('feature.surfDetail1')
                      ),
                      s.a.createElement(x.f, { className: a.icon }),
                      s.a.createElement(x.f, { className: a.icon }),
                      s.a.createElement(x.f, { className: a.icon }),
                      s.a.createElement(x.f, { className: a.icon })
                    ),
                    s.a.createElement(
                      y.a,
                      { className: f()(a.detailTitle, a.padding) },
                      i('feature.experience')
                    ),
                    s.a.createElement(
                      'div',
                      { className: a.containerIcon2 },
                      s.a.createElement(
                        y.a,
                        { className: a.detailText },
                        i('feature.beginner')
                      ),
                      s.a.createElement('div', { className: a.barOff }),
                      s.a.createElement('div', { className: a.barOff }),
                      s.a.createElement('div', { className: a.barOff }),
                      s.a.createElement('div', { className: a.barOff })
                    ),
                    s.a.createElement(
                      'div',
                      { className: a.containerIcon2 },
                      s.a.createElement(
                        y.a,
                        { className: a.detailText },
                        i('feature.intermediate')
                      ),
                      s.a.createElement('div', { className: a.barOn }),
                      s.a.createElement('div', { className: a.barOn }),
                      s.a.createElement('div', { className: a.barOn }),
                      s.a.createElement('div', { className: a.barOff })
                    ),
                    s.a.createElement(
                      'div',
                      { className: a.containerIcon2 },
                      s.a.createElement(
                        y.a,
                        { className: a.detailText },
                        i('feature.pro')
                      ),
                      s.a.createElement('div', { className: a.barOn }),
                      s.a.createElement('div', { className: a.barOn }),
                      s.a.createElement('div', { className: a.barOn }),
                      s.a.createElement('div', { className: a.barOn })
                    )
                  )
                ),
                s.a.createElement(
                  'div',
                  { className: a.containerImg },
                  s.a.createElement(p.a, {
                    fluid: t.node.fluid,
                    alt: i('feature.featureProduct'),
                    className: a.img,
                  })
                ),
                s.a.createElement(
                  'div',
                  { className: a.containerInfo },
                  s.a.createElement(
                    y.a,
                    { className: a.detailTitle2 },
                    'Honeycomb Fin'
                  ),
                  s.a.createElement(
                    y.a,
                    { className: a.detailText },
                    i('feature.text')
                  ),
                  s.a.createElement(w.a, {
                    product: v.a[0],
                    buttonText: i('newProduct.more'),
                    handleDialogOpen: this.handleDialogOpen,
                    handleDialogClose: this.handleDialogClose,
                    isDialogOpen: n,
                  })
                )
              )
            }),
            t
          )
        })(r.Component)
      E.propTypes = {
        classes: d.a.object.isRequired,
        img: d.a.object.isRequired,
      }
      var S = Object(u.b)()(
          Object(g.a)(
            Object(h.a)(function(e) {
              var t, a, i, n
              return {
                root: ((t = {
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 15,
                  paddingRight: 15,
                  background: e.status.greyBlue,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }),
                (t[e.breakpoints.up('sm')] = {
                  flexDirection: 'row',
                  paddingLeft: 60,
                  paddingRight: 60,
                }),
                (t[e.breakpoints.up('md')] = {
                  flexWrap: 'nowrap',
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 170,
                  paddingRight: 170,
                }),
                t),
                containerDetails: {
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'right',
                  marginRight: 30,
                  flexBasis: '30%',
                },
                containerInfo: ((a = { flexBasis: '100%' }),
                (a[e.breakpoints.up('md')] = {
                  marginLeft: 30,
                  flexBasis: '30%',
                }),
                a),
                containerImg: ((i = { flexBasis: '100%' }),
                (i[e.breakpoints.up('sm')] = { flexBasis: '35%' }),
                i),
                detailTitle: {
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: 3,
                  paddingBottom: 5,
                  fontSize: 16,
                },
                detailTitle2: {
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: 3,
                  paddingBottom: 5,
                  fontSize: 16,
                  color: e.palette.secondary.main,
                },
                detailText: {
                  textTransform: 'capitalize',
                  color: e.status.greyDk,
                  letterSpacing: 3,
                  fontSize: 12,
                  paddingBottom: 5,
                },
                containerIcon: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  paddingBottom: 25,
                },
                containerIcon2: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingBottom: 5,
                },
                icon: { marginLeft: 5, width: 25, color: e.status.black },
                off: { color: e.status.grey },
                img: ((n = { width: '100%' }),
                (n[e.breakpoints.up('sm')] = { marginTop: 100 }),
                n),
                barOn: {
                  width: 25,
                  height: 5,
                  background: e.status.black,
                  marginLeft: 5,
                },
                barOff: {
                  width: 25,
                  height: 5,
                  background: e.status.grey,
                  marginLeft: 5,
                },
                padding: { marginTop: 30 },
              }
            })(E)
          )
        ),
        k = a(441),
        N = (function(e) {
          function t() {
            for (
              var t, a = arguments.length, i = new Array(a), n = 0;
              n < a;
              n++
            )
              i[n] = arguments[n]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                isDialogOpen: !1,
              }),
              (t.handleDialogOpen = function() {
                t.setState({ isDialogOpen: !0 })
              }),
              (t.handleDialogClose = function() {
                t.setState({ isDialogOpen: !1 })
              }),
              t
            )
          }
          return (
            n()(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.img,
                a = e.detailImg,
                i = e.classes,
                n = e.t,
                r = this.state.isDialogOpen
              return s.a.createElement(
                'div',
                { className: i.root, id: 'products' },
                s.a.createElement(
                  b.a,
                  { xsDown: !0 },
                  s.a.createElement(p.a, {
                    fluid: t.node.fluid,
                    alt: n('newProduct.imgAlt'),
                    className: i.img,
                  })
                ),
                s.a.createElement(
                  k.a,
                  { className: i.paper, elevation: 10 },
                  s.a.createElement(p.a, {
                    fluid: a.node.fluid,
                    alt: n('newProduct.logo'),
                    className: i.logo,
                  }),
                  s.a.createElement(
                    y.a,
                    { className: i.title },
                    'Bee Swell Surf Wax'
                  ),
                  s.a.createElement(y.a, null, n('newProduct.text')),
                  s.a.createElement(w.a, {
                    product: v.b[0],
                    buttonText: n('newProduct.more'),
                    handleDialogOpen: this.handleDialogOpen,
                    handleDialogClose: this.handleDialogClose,
                    isDialogOpen: r,
                  })
                )
              )
            }),
            t
          )
        })(r.Component)
      N.propTypes = {
        classes: d.a.object.isRequired,
        img: d.a.object.isRequired,
        detailImg: d.a.object.isRequired,
      }
      var T = Object(u.b)()(
          Object(g.a)(
            Object(h.a)(function(e) {
              var t, a, i
              return {
                root: ((t = {
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 15,
                  paddingRight: 15,
                  background:
                    'linear-gradient(to bottom, ' +
                    e.status.greyBlue +
                    ' 50%, #fff 50%)',
                  display: 'flex',
                  alignItems: 'center',
                }),
                (t[e.breakpoints.up('sm')] = {
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
                img: ((a = { height: 'auto', width: '60%' }),
                (a[e.breakpoints.up('md')] = { marginLeft: 50 }),
                a),
                paper: ((i = {
                  padding: 30,
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '90%',
                  alignItems: 'center',
                  textAlign: 'center',
                }),
                (i[e.breakpoints.up('sm')] = {
                  flexBasis: '50%',
                  marginLeft: -100,
                }),
                (i[e.breakpoints.up('md')] = { width: 400, margin: -100 }),
                i),
                logo: { width: 125 },
                title: {
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: 3,
                  paddingBottom: 5,
                  fontSize: 16,
                },
              }
            })(N)
          )
        ),
        C = (a(182), a(220)),
        z = a.n(C),
        I = a(445),
        R = a(458),
        B = a(221),
        D = a.n(B),
        j = a(202),
        O = a.n(j),
        F = (function(e) {
          function t() {
            for (
              var t, a = arguments.length, i = new Array(a), n = 0;
              n < a;
              n++
            )
              i[n] = arguments[n]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                activeStep: 0,
                isDialogOpen: [!1, !1, !1],
              }),
              (t.handleDialogOpen = function(e) {
                var a = [!1, !1, !1]
                ;(a[e] = !0), t.setState({ isDialogOpen: a })
              }),
              (t.handleDialogClose = function() {
                t.setState({ isDialogOpen: [!1, !1, !1] })
              }),
              (t.handleIndexChange = function(e) {
                t.setState({ activeStep: e })
              }),
              (t.handleNext = function() {
                t.setState(function(e) {
                  return { activeStep: e.activeStep + 1 }
                })
              }),
              (t.handleBack = function() {
                t.setState(function(e) {
                  return { activeStep: e.activeStep - 1 }
                })
              }),
              t
            )
          }
          return (
            n()(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.classes,
                i = t.t,
                n = this.state,
                r = n.activeStep,
                o = n.isDialogOpen
              return s.a.createElement(
                'div',
                { className: a.root, id: 'products' },
                s.a.createElement(
                  y.a,
                  { className: a.title, variant: 'h5' },
                  i('products.sectionTitle')
                ),
                s.a.createElement(
                  'div',
                  { className: a.container },
                  s.a.createElement(
                    b.a,
                    { xsDown: !0 },
                    v.c.map(function(t, n) {
                      return s.a.createElement(
                        'div',
                        { className: a.itemContainer, key: 'product' + n },
                        s.a.createElement('img', {
                          src: t.images[0],
                          className: a.img,
                          alt: 'product ' + n,
                          onClick: function() {
                            return e.handleDialogOpen(n)
                          },
                        }),
                        s.a.createElement(
                          'div',
                          { className: a.descriptionContainer },
                          s.a.createElement(y.a, { className: a.name }, t.name),
                          s.a.createElement(
                            'div',
                            { className: a.fullWidth },
                            s.a.createElement(
                              'div',
                              { className: a.priceContainer },
                              s.a.createElement(
                                y.a,
                                { variant: 'h6', className: a.price },
                                '€' + t.price
                              ),
                              s.a.createElement(
                                'div',
                                { className: a.iconContainer },
                                t.amazon &&
                                  s.a.createElement(
                                    I.a,
                                    {
                                      className: a.button,
                                      'aria-label': 'Amazon',
                                      href: t.amazon,
                                      target: '_blank',
                                      rel: 'noopener',
                                    },
                                    s.a.createElement(x.a, {
                                      className: a.icon,
                                    })
                                  ),
                                t.ebay &&
                                  s.a.createElement(
                                    I.a,
                                    {
                                      className: a.button,
                                      'aria-label': 'Ebay',
                                      href: t.ebay,
                                      target: '_blank',
                                      rel: 'noopener',
                                    },
                                    s.a.createElement(x.b, {
                                      className: f()(a.icon, a.ebay),
                                    })
                                  )
                              )
                            ),
                            s.a.createElement(w.a, {
                              product: t,
                              buttonText: i('products.features'),
                              buttonFull: !0,
                              idx: n,
                              handleDialogOpen: e.handleDialogOpen,
                              handleDialogClose: e.handleDialogClose,
                              isDialogOpen: o[n],
                            })
                          )
                        )
                      )
                    })
                  ),
                  s.a.createElement(
                    b.a,
                    { smUp: !0 },
                    s.a.createElement(
                      z.a,
                      {
                        enableMouseEvents: !0,
                        index: r,
                        onChangeIndex: this.handleIndexChange,
                      },
                      v.c.map(function(t, n) {
                        return s.a.createElement(
                          'div',
                          { className: a.itemContainer, key: 'product' + n },
                          s.a.createElement('img', {
                            src: t.images[0],
                            className: a.img,
                            alt: 'product ' + n,
                          }),
                          s.a.createElement(
                            'div',
                            { className: a.descriptionContainer },
                            s.a.createElement(
                              y.a,
                              { className: a.name },
                              t.name
                            ),
                            s.a.createElement(
                              'div',
                              { className: a.fullWidth },
                              s.a.createElement(
                                'div',
                                { className: a.priceContainer },
                                s.a.createElement(
                                  y.a,
                                  { variant: 'h6', className: a.price },
                                  '€' + t.price
                                ),
                                s.a.createElement(
                                  'div',
                                  { className: a.iconContainer },
                                  t.amazon &&
                                    s.a.createElement(
                                      I.a,
                                      {
                                        className: a.button,
                                        'aria-label': 'Amazon',
                                        href: t.amazon,
                                        target: '_blank',
                                        rel: 'noopener',
                                      },
                                      s.a.createElement(x.a, {
                                        className: a.icon,
                                      })
                                    ),
                                  t.ebay &&
                                    s.a.createElement(
                                      I.a,
                                      {
                                        className: a.button,
                                        'aria-label': 'Ebay',
                                        href: t.ebay,
                                        target: '_blank',
                                        rel: 'noopener',
                                      },
                                      s.a.createElement(x.b, {
                                        className: f()(a.icon, a.ebay),
                                      })
                                    )
                                )
                              ),
                              s.a.createElement(w.a, {
                                product: t,
                                buttonText: i('products.features'),
                                buttonFull: !0,
                                idx: n,
                                handleDialogOpen: e.handleDialogOpen,
                                handleDialogClose: e.handleDialogClose,
                                isDialogOpen: o[n],
                              })
                            )
                          )
                        )
                      })
                    ),
                    s.a.createElement(R.a, {
                      steps: 3,
                      position: 'static',
                      activeStep: r,
                      className: a.mobileStepper,
                      nextButton: s.a.createElement(
                        I.a,
                        {
                          size: 'small',
                          'aria-label': i('common.scrollLeft'),
                          onClick: this.handleNext,
                          disabled: 2 === r,
                        },
                        s.a.createElement(O.a, null)
                      ),
                      backButton: s.a.createElement(
                        I.a,
                        {
                          size: 'small',
                          'aria-label': i('common.scrollRight'),
                          onClick: this.handleBack,
                          disabled: 0 === r,
                        },
                        s.a.createElement(D.a, null)
                      ),
                    })
                  )
                )
              )
            }),
            t
          )
        })(r.Component)
      F.propTypes = { classes: d.a.object.isRequired }
      var L = Object(u.b)()(
          Object(g.a)(
            Object(h.a)(function(e) {
              var t, a, i, n, r, s, o
              return {
                root: ((t = {
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 15,
                  paddingRight: 15,
                  background: e.palette.common.white,
                }),
                (t[e.breakpoints.up('sm')] = {
                  paddingLeft: 60,
                  paddingRight: 60,
                }),
                (t[e.breakpoints.up('md')] = {
                  paddingTop: 90,
                  paddingBottom: 90,
                  paddingLeft: 170,
                  paddingRight: 170,
                }),
                t),
                container: ((a = {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }),
                (a[e.breakpoints.up('sm')] = { flexDirection: 'row' }),
                a),
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
                img: ((i = { width: '80%' }),
                (i[e.breakpoints.up('sm')] = { width: '100%' }),
                i),
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
                priceContainer: ((n = {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: 15,
                  paddingLeft: 15,
                }),
                (n[e.breakpoints.up('sm')] = {
                  justifyContent: 'center',
                  paddingRight: 0,
                  paddingLeft: 0,
                }),
                n),
                price: ((r = {
                  color: e.palette.primary.main,
                  fontWeight: 600,
                  marginRight: 15,
                  fontSize: 16,
                }),
                (r[e.breakpoints.up('md')] = { fontSize: 20 }),
                r),
                fullWidth: { width: '100%' },
                iconContainer: { marginLeft: 15 },
                icon: ((s = { fill: e.status.black, fontSize: 18 }),
                (s[e.breakpoints.up('md')] = { fontSize: 36 }),
                s),
                ebay: ((o = { fontSize: 24 }),
                (o[e.breakpoints.up('md')] = { fontSize: 36 }),
                o),
                mobileStepper: { background: e.status.white },
              }
            })(F)
          )
        ),
        H = function(e) {
          var t = e.img,
            a = e.waveImg,
            i = e.classes,
            n = e.t
          return s.a.createElement(
            'div',
            { className: i.root, id: 'about' },
            s.a.createElement(
              'div',
              { className: i.textContainer },
              s.a.createElement(
                y.a,
                { className: i.title, variant: 'h5' },
                n('about.sectionTitle1')
              ),
              s.a.createElement(
                y.a,
                { className: i.title, variant: 'h5' },
                n('about.sectionTitle2')
              ),
              s.a.createElement(
                y.a,
                { className: i.text, variant: 'body1' },
                n('about.message')
              )
            ),
            s.a.createElement(
              b.a,
              { xsDown: !0 },
              s.a.createElement(
                'div',
                { className: i.imgContainer },
                s.a.createElement(p.a, {
                  fluid: t.node.fluid,
                  alt: 'two surfers in ocean',
                  className: i.img,
                }),
                s.a.createElement(
                  y.a,
                  { className: i.sideText },
                  'Surf Accessories from Munich'
                )
              )
            ),
            s.a.createElement(p.a, {
              fluid: a.node.fluid,
              alt: 'wave background',
              className: i.backgroundImg,
              style: { position: 'absolute' },
            })
          )
        }
      H.propTypes = {
        classes: d.a.object.isRequired,
        img: d.a.object.isRequired,
        waveImg: d.a.object.isRequired,
      }
      var A = Object(u.b)()(
          Object(g.a)(
            Object(h.a)(function(e) {
              var t, a, i, n, r, s, o
              return {
                root: ((t = {
                  position: 'relative',
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 15,
                  paddingRight: 15,
                  background: e.status.greyBlue,
                  display: 'flex',
                  alignItems: 'center',
                }),
                (t[e.breakpoints.up('sm')] = {
                  paddingLeft: 60,
                  paddingRight: 60,
                }),
                (t[e.breakpoints.up('md')] = {
                  paddingTop: 45,
                  paddingBottom: 90,
                  paddingLeft: 170,
                  paddingRight: 170,
                }),
                t),
                textContainer: ((a = {
                  flexBasis: '100%',
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingRight: 15,
                  paddingLeft: 15,
                }),
                (a[e.breakpoints.up('sm')] = {
                  flexBasis: '50%',
                  paddingRight: 60,
                  paddingLeft: 60,
                }),
                (a[e.breakpoints.up('md')] = {
                  paddingTop: 45,
                  paddingRight: 60,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }),
                a),
                imgContainer: { flexBasis: '50%' },
                sideText: ((i = {
                  position: 'relative',
                  float: 'right',
                  marginTop: -100,
                  marginRight: 0,
                  transform: 'rotate(-270deg)',
                  WebkitTransform: 'rotate(-270deg)',
                  MozTransform: 'rotate(-270deg)',
                  MsTransform: 'rotate(-270deg)',
                  OTransform: 'rotate(-270deg)',
                  filter:
                    'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)',
                }),
                (i[e.breakpoints.up('sm')] = {
                  marginTop: -150,
                  marginRight: 0,
                }),
                (i[e.breakpoints.up('md')] = {
                  marginTop: -150,
                  marginRight: 0,
                }),
                i),
                img: ((n = { width: 200, height: 150 }),
                (n[e.breakpoints.up('md')] = { width: 400, height: 300 }),
                n),
                backgroundImg: ((r = {
                  zIndex: -5,
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: 80,
                }),
                (r.zIndex = 2),
                r),
                title: ((s = {
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: 3,
                  fontSize: 16,
                }),
                (s[e.breakpoints.up('md')] = { fontSize: 42 }),
                s),
                text: ((o = {
                  paddingTop: 30,
                  color: e.palette.common.black,
                  fontSize: 12,
                }),
                (o[e.breakpoints.up('md')] = { fontSize: 14 }),
                o),
              }
            })(H)
          )
        ),
        W = (a(411),
        function(e) {
          var t = e.img,
            a = e.classes,
            i = e.t
          return s.a.createElement(
            'div',
            { className: a.root },
            s.a.createElement(p.a, {
              fluid: t.node.fluid,
              alt: 'wave',
              className: a.img,
              style: { position: 'absolute' },
            }),
            s.a.createElement(
              'div',
              { className: a.container },
              s.a.createElement(
                y.a,
                {
                  variant: 'h2',
                  gutterBottom: !0,
                  className: f()(a.text, a.title),
                },
                'E',
                s.a.createElement('span', { className: a.small }, 'ISBACH')
              ),
              s.a.createElement(
                y.a,
                {
                  variant: 'h2',
                  gutterBottom: !0,
                  className: f()(a.text, a.title, a.title2),
                },
                'R',
                s.a.createElement('span', { className: a.small }, 'IDERS')
              ),
              s.a.createElement(
                y.a,
                { className: f()(a.text, a.subtitle) },
                i('hero.subtitle')
              )
            )
          )
        })
      W.propTypes = { classes: d.a.object.isRequired, img: d.a.object }
      var G = Object(u.b)()(
        Object(g.a)(
          Object(h.a)(function(e) {
            var t, a, i, n, r, s
            return {
              root: ((t = { height: 250, marginTop: -74 }),
              (t[e.breakpoints.up('sm')] = { height: 300 }),
              (t[e.breakpoints.up('md')] = { height: 700 }),
              t),
              container: ((a = {
                position: 'absolute',
                paddingTop: 100,
                paddingLeft: 30,
                paddingRight: 15,
              }),
              (a[e.breakpoints.up('sm')] = {
                paddingLeft: 120,
                paddingTop: 110,
              }),
              (a[e.breakpoints.up('md')] = {
                paddingLeft: 200,
                paddingTop: 250,
              }),
              a),
              img: ((i = {
                zIndex: -5,
                left: 0,
                top: 0,
                width: '100%',
                height: 250,
              }),
              (i[e.breakpoints.up('sm')] = { height: 300 }),
              (i[e.breakpoints.up('md')] = { height: 700 }),
              i),
              text: {
                letterSpacing: 3,
                fontWeight: 600,
                color: e.status.black,
                textShadow: '2px 2px 4px #ccc',
              },
              title: ((n = {
                textTransform: 'capitalize',
                fontSize: 35,
                margin: 0,
              }),
              (n[e.breakpoints.up('sm')] = { fontSize: 48 }),
              (n[e.breakpoints.up('md')] = { fontSize: 122 }),
              n),
              title2: { marginLeft: 60 },
              small: ((r = { fontSize: 35 }),
              (r[e.breakpoints.up('sm')] = { fontSize: 48 }),
              (r[e.breakpoints.up('md')] = { fontSize: 96 }),
              r),
              subtitle: ((s = {
                textTransform: 'uppercase',
                fontSize: 14,
                paddingTop: 30,
              }),
              (s[e.breakpoints.up('sm')] = { fontSize: 18 }),
              (s[e.breakpoints.up('md')] = { fontSize: 24 }),
              s),
            }
          })(W)
        )
      )
      a.d(t, 'pageQuery', function() {
        return P
      })
      var q = (function(e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        return (
          n()(t, e),
          (t.prototype.render = function() {
            var e = this.props.data,
              t = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('backsplash')
              }),
              a = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('featuredProduct')
              }),
              i = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('newProduct')
              }),
              n = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('newDetail')
              }),
              r = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('wave')
              }),
              l = e.allImageSharp.edges.find(function(e) {
                return e.node.fluid.src.includes('about')
              })
            return s.a.createElement(
              'div',
              { id: 'body' },
              s.a.createElement(
                o.a,
                { isHomepage: !0 },
                s.a.createElement(G, { img: t }),
                s.a.createElement(S, { img: a }),
                s.a.createElement(T, { img: i, detailImg: n }),
                s.a.createElement(L, null),
                s.a.createElement(A, { img: l, waveImg: r })
              )
            )
          }),
          t
        )
      })(r.Component)
      q.propTypes = {}
      t.default = q
      var P = '3144685729'
    },
    183: function(e, t, a) {
      'use strict'
      var i = a(8)
      ;(t.__esModule = !0), (t.default = void 0)
      var n,
        r = i(a(7)),
        s = i(a(54)),
        o = i(a(190)),
        l = i(a(150)),
        d = i(a(0)),
        c = i(a(4)),
        p = function(e) {
          var t = (0, l.default)({}, e)
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          )
        },
        u = {},
        m = function(e) {
          var t = p(e),
            a = t.fluid ? t.fluid.src : t.fixed.src
          return u[a] || !1
        },
        f = []
      var g = function(e, t) {
          ;(void 0 === n &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            (n = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  f.forEach(function(t) {
                    t[0] === e.target &&
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                      (n.unobserve(t[0]), t[1]())
                  })
                })
              },
              { rootMargin: '200px' }
            )),
          n).observe(e),
            f.push([e, t])
        },
        h = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            i = e.srcSetWebp
              ? "<source type='image/webp' srcSet=\"" +
                e.srcSetWebp +
                '" ' +
                a +
                '/>'
              : '',
            n = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + a + '/>' : '',
            r = e.title ? 'title="' + e.title + '" ' : '',
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : '',
            l = e.height ? 'height="' + e.height + '" ' : '',
            d = e.opacity ? e.opacity : '1'
          return (
            '<picture>' +
            i +
            n +
            '<img ' +
            o +
            l +
            t +
            s +
            r +
            'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' +
            (e.transitionDelay ? e.transitionDelay : '0.5s') +
            ';opacity:' +
            d +
            ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        b = d.default.forwardRef(function(e, t) {
          var a = e.style,
            i = e.onLoad,
            n = e.onError,
            r = (0, o.default)(e, ['style', 'onLoad', 'onError'])
          return d.default.createElement(
            'img',
            (0, l.default)({}, r, {
              onLoad: i,
              onError: n,
              ref: t,
              style: (0, l.default)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                a
              ),
            })
          )
        })
      b.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func,
      }
      var y = (function(e) {
        function t(t) {
          var a
          a = e.call(this, t) || this
          var i = !0,
            n = !1,
            r = t.fadeIn,
            o = m(t)
          !o &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            ((i = !1), (n = !0)),
            'undefined' == typeof window && (i = !1),
            t.critical && ((i = !0), (n = !1))
          var l = !(a.props.critical && !a.props.fadeIn)
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: !1,
              IOSupported: n,
              fadeIn: r,
              hasNoScript: l,
              seenBefore: o,
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind(
              (0, s.default)((0, s.default)(a))
            )),
            (a.handleRef = a.handleRef.bind((0, s.default)((0, s.default)(a)))),
            a
          )
        }
        ;(0, r.default)(t, e)
        var a = t.prototype
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                'function' == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current
              e && e.complete && this.handleImageLoaded()
            }
          }),
          (a.handleRef = function(e) {
            var t = this
            this.state.IOSupported &&
              e &&
              g(e, function() {
                var e = m(t.props)
                t.state.isVisible ||
                  'function' != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0, imgLoaded: e })
              })
          }),
          (a.handleImageLoaded = function() {
            var e, t, a
            ;(e = this.props),
              (t = p(e)),
              (a = t.fluid ? t.fluid.src : t.fixed.src),
              (u[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (a.render = function() {
            var e = p(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              n = e.style,
              r = void 0 === n ? {} : n,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              u = void 0 === c ? {} : c,
              m = e.placeholderClassName,
              f = e.fluid,
              g = e.fixed,
              y = e.backgroundColor,
              w = e.Tag,
              v = e.itemProp,
              x = 'boolean' == typeof y ? 'lightgray' : y,
              E = (0, l.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: 'opacity 0.5s',
                  transitionDelay: this.state.imgLoaded ? '0.5s' : '0.25s',
                },
                o,
                u
              ),
              S = (0, l.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition:
                    !0 === this.state.fadeIn ? 'opacity 0.5s' : 'none',
                },
                o
              ),
              k = {
                title: t,
                alt: this.state.isVisible ? '' : a,
                style: E,
                className: m,
              }
            if (f) {
              var N = f
              return d.default.createElement(
                w,
                {
                  className: (i || '') + ' gatsby-image-wrapper',
                  style: (0, l.default)(
                    { position: 'relative', overflow: 'hidden' },
                    r
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(N.srcSet),
                },
                d.default.createElement(w, {
                  style: {
                    width: '100%',
                    paddingBottom: 100 / N.aspectRatio + '%',
                  },
                }),
                N.base64 &&
                  d.default.createElement(
                    b,
                    (0, l.default)({ src: N.base64 }, k)
                  ),
                N.tracedSVG &&
                  d.default.createElement(
                    b,
                    (0, l.default)({ src: N.tracedSVG }, k)
                  ),
                x &&
                  d.default.createElement(w, {
                    title: t,
                    style: {
                      backgroundColor: x,
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      opacity: this.state.imgLoaded ? 0 : 1,
                      transitionDelay: '0.35s',
                      right: 0,
                      left: 0,
                    },
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    'picture',
                    null,
                    N.srcSetWebp &&
                      d.default.createElement('source', {
                        type: 'image/webp',
                        srcSet: N.srcSetWebp,
                        sizes: N.sizes,
                      }),
                    d.default.createElement('source', {
                      srcSet: N.srcSet,
                      sizes: N.sizes,
                    }),
                    d.default.createElement(b, {
                      alt: a,
                      title: t,
                      src: N.src,
                      style: S,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                    })
                  ),
                this.state.hasNoScript &&
                  d.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: h((0, l.default)({ alt: a, title: t }, N)),
                    },
                  })
              )
            }
            if (g) {
              var T = g,
                C = (0, l.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: T.width,
                    height: T.height,
                  },
                  r
                )
              return (
                'inherit' === r.display && delete C.display,
                d.default.createElement(
                  w,
                  {
                    className: (i || '') + ' gatsby-image-wrapper',
                    style: C,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(T.srcSet),
                  },
                  T.base64 &&
                    d.default.createElement(
                      b,
                      (0, l.default)({ src: T.base64 }, k)
                    ),
                  T.tracedSVG &&
                    d.default.createElement(
                      b,
                      (0, l.default)({ src: T.tracedSVG }, k)
                    ),
                  x &&
                    d.default.createElement(w, {
                      title: t,
                      style: {
                        backgroundColor: x,
                        width: T.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: '0.25s',
                        height: T.height,
                      },
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      'picture',
                      null,
                      T.srcSetWebp &&
                        d.default.createElement('source', {
                          type: 'image/webp',
                          srcSet: T.srcSetWebp,
                          sizes: T.sizes,
                        }),
                      d.default.createElement('source', {
                        srcSet: T.srcSet,
                        sizes: T.sizes,
                      }),
                      d.default.createElement(b, {
                        alt: a,
                        title: t,
                        width: T.width,
                        height: T.height,
                        src: T.src,
                        style: S,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                      })
                    ),
                  this.state.hasNoScript &&
                    d.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: h(
                          (0, l.default)(
                            {
                              alt: a,
                              title: t,
                              width: T.width,
                              height: T.height,
                            },
                            T
                          )
                        ),
                      },
                    })
                )
              )
            }
            return null
          }),
          t
        )
      })(d.default.Component)
      y.defaultProps = { critical: !1, fadeIn: !0, alt: '', Tag: 'div' }
      var w = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
        }),
        v = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
        })
      y.propTypes = {
        resolutions: w,
        sizes: v,
        fixed: w,
        fluid: v,
        fadeIn: c.default.bool,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool,
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
      }
      var x = y
      t.default = x
    },
    184: function(e, t, a) {
      'use strict'
      a(182)
      var i = a(7),
        n = a.n(i),
        r = a(0),
        s = a.n(r),
        o = a(4),
        l = a.n(o),
        d = a(208),
        c = a(163),
        p = a(220),
        u = a.n(p),
        m = a(169),
        f = a.n(m),
        g = a(152),
        h = a(162),
        b = a(439),
        y = a(443),
        w = a(447),
        v = a(449),
        x = a(448),
        E = a(445),
        S = a(218),
        k = a.n(S),
        N = a(437),
        T = a(457),
        C = a(438),
        z = a(450),
        I = a(458),
        R = a(280),
        B = a.n(R),
        D = a(221),
        j = a.n(D),
        O = a(202),
        F = a.n(O),
        L = a(176),
        H = (function(e) {
          function t() {
            for (
              var t, a = arguments.length, i = new Array(a), n = 0;
              n < a;
              n++
            )
              i[n] = arguments[n]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                activeStep: 0,
              }),
              (t.handleIndexChange = function(e) {
                t.setState({ activeStep: e })
              }),
              (t.handleNext = function() {
                t.setState(function(e) {
                  return { activeStep: e.activeStep + 1 }
                })
              }),
              (t.handleBack = function() {
                t.setState(function(e) {
                  return { activeStep: e.activeStep - 1 }
                })
              }),
              t
            )
          }
          return (
            n()(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                a = t.handleDialogOpen,
                i = t.handleDialogClose,
                n = t.isDialogOpen,
                o = t.idx,
                l = t.product,
                c = t.buttonText,
                p = t.buttonFull,
                m = t.classes,
                g = t.t,
                h = this.state.activeStep,
                S = d.a.language
              return s.a.createElement(
                r.Fragment,
                null,
                s.a.createElement(
                  y.a,
                  {
                    color: 'secondary',
                    variant: 'outlined',
                    className: f()(
                      m.button,
                      ((e = {}), (e[m.buttonFull] = p), e)
                    ),
                    onClick: function() {
                      return a(o)
                    },
                  },
                  c
                ),
                s.a.createElement(
                  w.a,
                  {
                    open: n,
                    onClose: i,
                    maxWidth: 'md',
                    classes: { paper: m.paper },
                  },
                  s.a.createElement(
                    x.a,
                    { id: 'dialog-title', className: m.dialogTitle },
                    l.name,
                    s.a.createElement(
                      E.a,
                      {
                        'aria-label': g('common.close'),
                        color: 'inherit',
                        onClick: i,
                        className: m.closeButton,
                      },
                      s.a.createElement(k.a, null)
                    )
                  ),
                  s.a.createElement(
                    v.a,
                    { classes: { root: m.dialogRoot } },
                    s.a.createElement(
                      'div',
                      { className: m.dialogContainer },
                      s.a.createElement(
                        'div',
                        { className: m.dialogImg },
                        s.a.createElement(
                          u.a,
                          {
                            enableMouseEvents: !0,
                            index: h,
                            onChangeIndex: this.handleChangeIndex,
                          },
                          l.images.map(function(e, t) {
                            return s.a.createElement('img', {
                              src: e,
                              key: 'img' + t,
                              className: m.img,
                              alt: 'product' + t,
                            })
                          })
                        ),
                        s.a.createElement(I.a, {
                          steps: l.images.length,
                          position: 'static',
                          activeStep: h,
                          className: m.mobileStepper,
                          nextButton: s.a.createElement(
                            E.a,
                            {
                              size: 'small',
                              'aria-label': g('common.scrollLeft'),
                              onClick: this.handleNext,
                              disabled: h === l.images.length - 1,
                            },
                            s.a.createElement(F.a, null)
                          ),
                          backButton: s.a.createElement(
                            E.a,
                            {
                              size: 'small',
                              'aria-label': g('common.scrollRight'),
                              onClick: this.handleBack,
                              disabled: 0 === h,
                            },
                            s.a.createElement(j.a, null)
                          ),
                        })
                      ),
                      s.a.createElement(
                        'div',
                        { className: m.dialogContent },
                        s.a.createElement(
                          'div',
                          { className: m.priceContainer },
                          s.a.createElement(
                            b.a,
                            { variant: 'h6', className: m.price },
                            '€' + l.price
                          ),
                          s.a.createElement(
                            'div',
                            { className: m.iconContainer },
                            l.amazon &&
                              s.a.createElement(
                                E.a,
                                {
                                  'aria-label': 'Amazon',
                                  href: l.amazon,
                                  target: '_blank',
                                  rel: 'noopener',
                                },
                                s.a.createElement(L.a, {
                                  className: m.iconButton,
                                })
                              ),
                            l.ebay &&
                              s.a.createElement(
                                E.a,
                                {
                                  'aria-label': 'Ebay',
                                  href: l.ebay,
                                  target: '_blank',
                                  rel: 'noopener',
                                },
                                s.a.createElement(L.b, {
                                  className: m.iconButton,
                                })
                              )
                          )
                        ),
                        s.a.createElement(
                          N.a,
                          { disablePadding: !0, className: m.scroll },
                          l.more[S].map(function(e, t) {
                            return s.a.createElement(
                              T.a,
                              { key: 'listItem' + t, className: m.listItem },
                              s.a.createElement(
                                z.a,
                                null,
                                s.a.createElement(B.a, { className: m.icon })
                              ),
                              s.a.createElement(C.a, {
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
            t
          )
        })(r.Component)
      ;(H.propTypes = {
        classes: l.a.object.isRequired,
        handleDialogOpen: l.a.func.isRequired,
        handleDialogClose: l.a.func.isRequired,
        isDialogOpen: l.a.bool.isRequired,
        idx: l.a.number,
        product: l.a.object.isRequired,
        buttonText: l.a.string.isRequired,
        buttonFull: l.a.bool,
      }),
        (t.a = Object(c.b)()(
          Object(h.a)(
            Object(g.a)(function(e) {
              var t, a, i, n, r, s, o
              return {
                buttonFull: ((t = { width: '100%' }),
                (t[e.breakpoints.up('md')] = { width: '50%' }),
                t),
                button: ((a = { color: e.palette.common.black }),
                (a[e.breakpoints.up('sm')] = { marginTop: 30 }),
                a),
                paper: ((i = { margin: 15 }),
                (i[e.breakpoints.up('sm')] = { margin: 48 }),
                i),
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
                dialogRoot: ((o = { overflowY: 'auto' }),
                (o[e.breakpoints.up('md')] = { overflowY: 'hidden' }),
                o),
              }
            })(H)
          )
        ))
    },
    185: function(e, t, a) {
      'use strict'
      a.d(t, 'c', function() {
        return $
      }),
        a.d(t, 'b', function() {
          return ee
        }),
        a.d(t, 'a', function() {
          return te
        }),
        a.d(t, 'e', function() {
          return ae
        }),
        a.d(t, 'd', function() {
          return ie
        })
      var i = a(222),
        n = a.n(i),
        r = a(223),
        s = a.n(r),
        o = a(224),
        l = a.n(o),
        d = a(225),
        c = a.n(d),
        p = a(226),
        u = a.n(p),
        m = a(227),
        f = a.n(m),
        g = a(228),
        h = a.n(g),
        b = a(229),
        y = a.n(b),
        w = a(230),
        v = a.n(w),
        x = a(231),
        E = a.n(x),
        S = a(232),
        k = a.n(S),
        N = a(233),
        T = a.n(N),
        C = a(234),
        z = a.n(C),
        I = a(235),
        R = a.n(I),
        B = a(236),
        D = a.n(B),
        j = a(237),
        O = a.n(j),
        F = a(238),
        L = a.n(F),
        H = a(239),
        A = a.n(H),
        W = a(240),
        G = a.n(W),
        q = a(241),
        P = a.n(q),
        M = a(242),
        _ = a.n(M),
        U = a(243),
        V = a.n(U),
        K = a(244),
        J = a.n(K),
        Y = a(245),
        Q = a.n(Y),
        X = a(246),
        Z = a.n(X),
        $ = [
          {
            name: 'FCS Double Tab Thruster Fin Set with Fin Key',
            images: [n.a, s.a, l.a, c.a, u.a, f.a],
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
            images: [h.a, y.a, v.a, E.a],
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
            images: [k.a, T.a, z.a, R.a, D.a],
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
            images: [O.a, L.a, A.a, G.a, P.a, _.a],
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
        te = [
          {
            name: 'Fiberglass Honeycomb FCS 1',
            images: [V.a, J.a, Q.a, Z.a],
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
        ae = [
          {
            name: 'Bee Swell Wax',
            images: [O.a, L.a, A.a, G.a, P.a, _.a],
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
        ie = [
          {
            name: 'Bee Swell Wax',
            images: [O.a, L.a, A.a, G.a, P.a, _.a],
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
    222: function(e, t, a) {
      e.exports = a.p + 'static/main-2d681ba7fe15b5ad8a69ab47fef6f0d7.jpg'
    },
    223: function(e, t, a) {
      e.exports = a.p + 'static/img1-b0bc93de89b08723c7d028cc8f1420a2.jpg'
    },
    224: function(e, t, a) {
      e.exports = a.p + 'static/img2-571270b0770eef9b7d82fe5c8d3ac65d.jpg'
    },
    225: function(e, t, a) {
      e.exports = a.p + 'static/img3-243c572bf0dcbb945b953f120001d676.jpg'
    },
    226: function(e, t, a) {
      e.exports = a.p + 'static/img4-e577ca30567391f77febb26089b9346b.jpg'
    },
    227: function(e, t, a) {
      e.exports = a.p + 'static/img5-97e9f8887dec54963875548404efd1f2.jpg'
    },
    228: function(e, t, a) {
      e.exports = a.p + 'static/main-1c758d5c480bd44070022a3e523cd6a6.jpg'
    },
    229: function(e, t, a) {
      e.exports = a.p + 'static/img1-9b234c459aecbbb3c5874991099414e6.jpg'
    },
    230: function(e, t, a) {
      e.exports = a.p + 'static/img2-cc0a710b771242dbf1116f0ac507bc9e.jpg'
    },
    231: function(e, t, a) {
      e.exports = a.p + 'static/img3-df8a3e853743d65136d3f70614fed9f9.jpg'
    },
    232: function(e, t, a) {
      e.exports = a.p + 'static/main-40c89e038d70d9e55811960b2b6b6012.jpg'
    },
    233: function(e, t, a) {
      e.exports = a.p + 'static/img1-89136cd7d6071e61cf31cd98f3ea19a3.jpg'
    },
    234: function(e, t, a) {
      e.exports = a.p + 'static/img2-2481eca5c1679ab0fac09415cbcaf969.jpg'
    },
    235: function(e, t, a) {
      e.exports = a.p + 'static/img3-0fb288b41e5c6b525c67322a31eeb9ce.jpg'
    },
    236: function(e, t, a) {
      e.exports = a.p + 'static/img4-97e9f8887dec54963875548404efd1f2.jpg'
    },
    237: function(e, t, a) {
      e.exports = a.p + 'static/main-79035a1e71b0f9a744c5f91b2957fb1c.jpg'
    },
    238: function(e, t, a) {
      e.exports = a.p + 'static/img1-32c7e61e109980f0a9384716457c2f50.jpg'
    },
    239: function(e, t, a) {
      e.exports = a.p + 'static/img2-4d85f36cbe3ed17d95c21a5a8429e366.jpg'
    },
    240: function(e, t, a) {
      e.exports = a.p + 'static/img3-0949f62d6ad075deaacc9e781e05b056.jpg'
    },
    241: function(e, t, a) {
      e.exports = a.p + 'static/img4-e06a0be1616b35a9e65c6a212ed654ee.jpg'
    },
    242: function(e, t, a) {
      e.exports = a.p + 'static/img5-8ef33d6076756eb31da307e86b1bba42.jpg'
    },
    243: function(e, t, a) {
      e.exports = a.p + 'static/main-7e3cb2f4ece259992eeee8fa790af145.png'
    },
    244: function(e, t, a) {
      e.exports = a.p + 'static/img1-0607e61499533c0e3a7426e748496746.jpg'
    },
    245: function(e, t, a) {
      e.exports = a.p + 'static/img2-0c5667bc053a20268853c4cace9c57a4.jpg'
    },
    246: function(e, t, a) {
      e.exports = a.p + 'static/img3-b5b7d64f811be504a90942bce0db3116.jpg'
    },
    411: function(e, t, a) {
      'use strict'
      a(274)('small', function(e) {
        return function() {
          return e(this, 'small', '', '')
        }
      })
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-507484fe7beee3fb322d.js.map
