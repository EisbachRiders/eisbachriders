import React from 'react'
import PropTypes from 'prop-types'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  container: {
    paddingBottom: 100,
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  title: {
    paddingTop: 45,
    paddingBottom: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    paddingLeft: 30,
  },
}

const Legal = props => {
  const { classes } = props
  return (
    <div className={classes.container} id="legal">
      <Typography variant="h5" className={classes.title}>
        Imprint
      </Typography>
      <Typography className={classes.text}>
        Eisbach Riders <br />
        Robin Eisenhardt & Michael Schmidt GbR <br />
        Lothstr. 72 <br />
        80797 München <br />
        Deutschland <br />
      </Typography>

      <Typography className={classes.text}>
        Tel.: 0176/69019542 <br />
        E-Mail: business@eisbach-riders.com
      </Typography>

      <Typography className={classes.text}>
        Vertretungsberechtigte Gesellschafter: Robin Eisenhardt, Michael Schmidt
      </Typography>

      <Typography className={classes.text}>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE
        320071401 Plattform der EU-Kommission zur <br />
        Online-Streitbeilegung:{' '}
        <a href="https://ec.europa.eu/consumers/odr">
          https://ec.europa.eu/consumers/odr
        </a>
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      </Typography>

      <Typography className={classes.text}>
        Verantwortliche/r i.S.d. § 55 Abs. 2 RStV: Robin Eisenhardt, Michael
        Schmidt, Lothstr. 72, 80797, München
      </Typography>

      <Typography variant="h6" className={classes.title}>
        General Terms and Conditions
      </Typography>

      <Typography variant="subtitle1">1) Scope of Application</Typography>
      <Typography className={classes.text}>
        1.1 These General Terms and Conditions of the company Eisbach Riders,
        Robin Eisenhardt & Michael Schmidt GbR (hereinafter referred to as
        "Seller”) shall apply to all contracts concluded between a consumer or a
        trader (hereinafter referred to as "Client”) and the Seller relating to
        all goods and/or services presented in the Seller's online shop. The
        inclusion of the Client’s own conditions is herewith objected to, unless
        other terms have been stipulated.
      </Typography>
      <Typography className={classes.text}>
        1.2 A consumer pursuant to these Terms and Conditions is any natural
        person concluding a legal transaction for a purpose attributed neither
        to a mainly commercial nor a self-employed occupational activity. A
        trader pursuant to these Terms and Conditions is any natural or legal
        person or partnership with legal capacity acting in the performance of a
        commercial or self-employed occupational activity when concluding a
        legal transaction.
      </Typography>
      <Typography className={classes.text}>
        1.3 Digital content in the sense of these General Terms and Conditions
        are all data not on a tangible medium which are produced in digital form
        and are supplied by the Seller by granting certain usage rights
        precisely defined in these General Terms and Conditions.
      </Typography>

      <Typography variant="subtitle1">2) Conclusion of the Contract</Typography>
      <Typography className={classes.text}>
        2.1 The product descriptions in the Seller’s online shop do not
        constitute binding offers on the part of the Seller, but merely serve
        the purpose of submitting a binding offer by the Client.
      </Typography>

      <Typography className={classes.text}>
        2.2 The Client may submit the offer via the online order form integrated
        into the Seller's online shop. In doing so, after having placed the
        selected goods and/or services in the virtual basket and passed through
        the ordering process, and by clicking the button finalizing the order
        process, the Client submits a legally binding offer of contract with
        regard to the goods and/or services contained in the shopping cart.
      </Typography>

      <Typography className={classes.text}>
        2.3 The Seller may accept the Client’s offer within five days, - by
        transferring a written order confirmation or an order confirmation in
        written form (fax or e-mail); insofar receipt of order confirmation by
        the Client is decisive, or - by delivering ordered goods to the Client;
        insofar receipt of goods by the customer is decisive, or - by requesting
        the Client to pay after he placed his order. Provided that several of
        the aforementioned alternatives apply, the contract shall be concluded
        at the time when one of the aforementioned alternatives firstly occurs.
        Should the Seller not accept the Client’s offer within the
        aforementioned period of time, this shall be deemed as rejecting the
        offer with the effect that the Client is no longer bound by his
        statement of intent.
      </Typography>

      <Typography className={classes.text}>
        2.4 When submitting an offer via the Seller's online order form, the
        text of the contract is stored by the Seller after the contract has been
        concluded and transmitted to the Client in text form (e.g. e-mail, fax
        or letter) after the order has been sent. The seller shall not make the
        contract text accessible beyond this.
      </Typography>

      <Typography className={classes.text}>
        2.5 Prior to submitting a binding order via the Seller’s online order
        form, the Client may recognize input errors by reading attentively the
        information displayed on the screen. The enlargement function of the
        browser to enlarge the display on the screen may be an effective method
        for better recognizing input errors. The Client can correct all the data
        entered via the usual keyboard and mouse function during the electronic
        ordering process, until he clicks the button finalizing the ordering
        process.
      </Typography>

      <Typography className={classes.text}>
        2.6 The German language is exclusively available for the conclusion of
        the contract.
      </Typography>

      <Typography className={classes.text}>
        2.7 Order processing and contacting usually takes place via e-mail and
        automated order processing. It is the Client’s responsibility to ensure
        that the e-mail address he provides for the order processing is accurate
        so that e-mails sent by the Seller can be received at this address.
        Particularly, it is the Client`s responsibility, if SPAM filters are
        used, to ensure that all e-mails sent by the Seller or by third parties
        commissioned by the Seller with the order processing can be delivered.
      </Typography>

      <Typography variant="subtitle1">3) Right to Cancel</Typography>

      <Typography className={classes.text}>
        3.1 Consumers are entitled to the right to cancel.
      </Typography>
      <Typography className={classes.text}>
        3.2 Detailed informations about the right to cancel are provided in the
        Seller’s instruction on cancellation.
      </Typography>

      <Typography variant="subtitle1">
        4) Prices and Payment Conditions
      </Typography>
      <Typography className={classes.text}>
        4.1 Unless otherwise stated in the Seller’s product description, prices
        indicated are total prices including the statutory sales tax. Delivery
        costs, where appropriate, will be indicated separately in the respective
        product description
      </Typography>
      <Typography className={classes.text}>
        4.2 Payment can be made using one of the methods mentioned in the
        Seller’s online shop.
      </Typography>
      <Typography className={classes.text}>
        4.3 If prepayment by bank transfer has been agreed upon, payment is due
        immediately after conclusion of the contract, unless the parties have
        arranged a later maturity date
      </Typography>
      <Typography className={classes.text}>
        4.4 When payments are made using a payment method offered by PayPal,
        handling of payments takes place via the payment service provider PayPal
        ((Europe) S.a. r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
        Luxembourg (hereinafter called “PayPal”) subject to the PayPal terms of
        use which can be viewed at:
        https://www.paypal.com/de/webapps/mpp/ua/useragreement-full. In case the
        client has no PayPal account, the conditions applicable for payments
        without PayPal account will be effective. They can be viewed at:
        https://www.paypal.com/de/webapps/mpp/ua/privacywax-full
      </Typography>

      <Typography variant="subtitle1">
        5) Shipment and Delivery Conditions
      </Typography>
      <Typography className={classes.text}>
        5.1 Goods are generally delivered on dispatch route and to the delivery
        address indicated by the Client, unless agreed otherwise. During the
        processing of the transaction, the delivery address indicated in the
        Seller’s order processing is decisive. However, in case the Client
        selects the payment method PayPal, the delivery address deposited with
        PayPal at the date of payment shall be decisive.
      </Typography>
      <Typography className={classes.text}>
        5.2 Should the assigned transport company return the goods to the
        Seller, because delivery to the Client was not possible, the Client
        bears the costs for the unsuccessful dispatch. This shall not apply, if
        the Client exercises his right to cancel effectively, if the delivery
        cannot be made due to circumstances beyond the Client's control or if he
        has been temporarily impeded to receive the offered service, unless the
        Seller has notified the Client about the service for a reasonable time
        in advance.
      </Typography>
      <Typography className={classes.text}>
        5.3 Personal collection is not possible for logistical reasons.
      </Typography>

      <Typography variant="subtitle1">
        6) Reservation of Proprietary Rights
      </Typography>
      <Typography className={classes.text}>
        If the Seller provides advance deliveries, he retains title of ownership
        to the delivered goods, until the purchase price owed has been paid in
        full.
      </Typography>

      <Typography variant="subtitle1">7) Warranty</Typography>
      <Typography className={classes.text}>
        7.1 Should the object of purchase be deficient, statutory provisions
        shall apply.
      </Typography>
      <Typography className={classes.text}>
        7.2 Deviating hereof regarding used goods: Claims for defects are
        excluded if the defect does not occur until one year after delivery of
        the goods. Defects that occur within one year of delivery of the goods
        can be asserted within the statutory limitation period. The shortening
        of the limitation period does not apply, - for a product, which was not
        used, in accordance with its usual application, for building
        construction and which was the cause of the building's defectiveness, -
        for claims for damages and reimbursement of expenses on the part of the
        Client, and - if the Seller has fraudulently concealed the defect.
      </Typography>
      <Typography className={classes.text}>
        7.3 The Client is asked to notify any obvious transport damages to the
        forwarding agent and to inform the Seller accordingly. Should the Client
        fail to comply therewith, this shall not affect his statutory or
        contractual claims for defects.
      </Typography>

      <Typography variant="subtitle1">8) Applicable Law</Typography>
      <Typography className={classes.text}>
        The law of the Federal Republic of Germany shall apply to all legal
        relationships between the parties under exclusion of the laws governing
        the international purchase of movable goods. For consumers, this choice
        of law only applies to the extent that the granted protection is not
        withdrawn by mandatory provisions of the law of the country, in which
        the consumer has his habitual residence.
      </Typography>

      <Typography variant="subtitle1">
        9) Alternative dispute resolution
      </Typography>
      <Typography className={classes.text}>
        9.1 The EU Commission provides on its website the following link to the
        ODR platform: https://ec.europa.eu/consumers/odr. This platform shall be
        a point of entry for out-of-court resolutions of disputes arising from
        online sales and service contracts concluded between consumers and
        traders.
      </Typography>
      <Typography className={classes.text}>
        9.2 The Seller is neither obliged nor prepared to attend a dispute
        settlement procedure before an alternative dispute resolution entity.
      </Typography>

      <Typography variant="h6" className={classes.title}>
        Instructions for cancellation & Cancellation form
      </Typography>
      <Typography className={classes.text}>
        Consumers, i.e. any individual acting for purposes which are wholly or
        mainly outside those individual’s trade, business, craft or profession,
        are entitled to cancel any contract on the following conditions:
      </Typography>

      <Typography variant="subtitle1">
        A. Instructions for cancellation
      </Typography>
      <Typography className={classes.text}>Right to cancel</Typography>
      <Typography className={classes.text}>
        You have the right to cancel this contract within 1 month without giving
        any reason. The cancellation period will expire after 1 month from the
        day on which you acquire, or a third party other than the carrier and
        indicated by you acquires, physical possession of the goods. To exercise
        the right to cancel, you must inform us (Eisbach Riders, Robin
        Eisenhardt & Michael Schmidt GbR, Lothstr. 72, 80797 München,
        Deutschland, Tel.: 017669019542, E-Mail: business@eisbach-riders.com) of
        your decision to cancel this contract by a clear statement (e.g. a
        letter sent by post, fax or e-mail). You may use the attached model
        cancellation form, but it is not obligatory. To meet the cancellation
        deadline, it is sufficient for you to send your communication concerning
        your exercise of the right to cancel before the cancellation period has
        expired.
      </Typography>
      <Typography className={classes.text}>Effects of cancellation</Typography>
      <Typography className={classes.text}>
        If you cancel this contract, we will reimburse to you all payments
        received from you, including the costs of delivery (except for the
        supplementary costs arising if you choose a type of delivery other than
        the least expensive type of standard delivery offered by us) without
        undue delay and not later than fourteen days after the day on which we
        are informed about your decision to cancel this contract. We may make a
        deduction from the reimbursement for loss in value of any goods
        supplied, if the loss is the result of unnecessary handling by you. We
        will make the reimbursement using the same means of payment as you used
        for the initial transaction, unless you have expressly agreed otherwise.
        In any event, you will not incur any fees as a result of the
        reimbursement. We may withhold reimbursement until we have received the
        goods back or you have supplied evidence of having sent back the goods,
        whichever is the earliest. You shall send back the goods or hand them
        over to us without undue delay and in any event not later than fourteen
        days from the day on which you communicate your cancellation from this
        contract to us. The deadline is met if you send back the goods before
        the period of 14 days has expired. You will bear the direct cost of
        returning the goods. You are only liable for any diminished value of the
        goods resulting from the handling other than what is necessary to
        establish the nature, characteristics and functioning of the goods
      </Typography>

      <Typography className={classes.text}>General information</Typography>
      <Typography className={classes.text}>
        1) Please prevent damage to and contamination of the goods. Please
        return the goods, if possible, in the original packaging with all
        accessories and all packaging components. If necessary, please use
        protective outer packaging. If you are no longer in possession of the
        original packaging, please use suitable packaging providing adequate
        protection against potential transport damage. 2) Please do not return
        the goods freight forward. 3) Please note that the above general
        information in section 1 and 2 is not a precondition for effectively
        exercising your right to cancel.
      </Typography>

      <Typography variant="subtitle1">B. Cancellation form</Typography>
      <Typography className={classes.text}>
        If you wish to cancel this contract, please complete and submit this
        form.
      </Typography>

      <Typography className={classes.text}>
        Eisbach Riders <br />
        Robin Eisenhardt & Michael Schmidt GbR <br />
        Lothstr. 72 <br />
        80797 München <br />
        Deutschland <br />
        E-Mail: business@eisbach-riders.com
      </Typography>

      <Typography className={classes.text}>
        I/We (*) hereby give notice that I/We (*) cancel my/our (*) contract of
        sale of the following goods (*) /for the supply of the following service
        (*), <br />
        _______________________________________________________
        <br />
        _______________________________________________________
        <br />
        Ordered on (*) ____________ / received on (*) __________________
        <br />
        ________________________________________________________
        <br />
        Name of consumer(s)
        <br />
        ________________________________________________________
        <br />
        Address of consumer(s)
        <br />
        ________________________________________________________
        <br />
        Signature of consumer(s) (only if this form is notified on paper)
        <br />
        _________________________
        <br />
        Date
        <br />
        (*) Delete as appropriate
      </Typography>
    </div>
  )
}

Legal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Legal))
