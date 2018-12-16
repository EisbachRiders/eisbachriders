import React from 'react'
import PropTypes from 'prop-types'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
  listItem: {
    padding: 0,
  },
}

const Privacy = props => {
  const { classes } = props
  return (
    <div className={classes.container} id="privacy">
      <Typography variant="h6" className={classes.title}>
        Data Protection Declaration
      </Typography>

      <Typography variant="subtitle1">
        1) Information on the Collection of Personal Data and Contact Details of
        the Controller
      </Typography>

      <Typography className={classes.text}>
        1.1 We are pleased that you are visiting our website and thank you for
        your interest. In the following pages, we inform you about the handling
        of your personal data when using our website. Personal data is all data
        with which you can be personally identified.
      </Typography>
      <Typography className={classes.text}>
        1.2 The controller in charge of data processing on this website, within
        the meaning of the General Data Protection Regulation (GDPR), is Eisbach
        Riders, Robin Eisenhardt & Michael Schmidt GbR, Lothstr. 72, 80797
        München, Deutschland, Tel.: 017669019542, E-Mail:
        business@eisbach-riders.com. The controller in charge of the processing
        of personal data is the natural or legal person who alone or jointly
        with others determines the purposes and means of the processing of
        personal data.
      </Typography>
      <Typography className={classes.text}>
        1.3 This website uses SSL or TLS encryption for security reasons and to
        protect the transmission of personal data and other confidential content
        (e.g. orders or inquiries to the controller). You can recognize an
        encrypted connection by the character string https:// and the lock
        symbol in your browser line.
      </Typography>

      <Typography variant="subtitle1">
        2) Data Collection When You Visit Our Website
      </Typography>

      <Typography className={classes.text}>
        When using our website for information only, i.e. if you do not register
        or otherwise provide us with information, we only collect data that your
        browser transmits to our server (so-called "server log files"). When you
        visit our website, we collect the following data that is technically
        necessary for us to display the website to you:
      </Typography>

      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Our visited website"
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Date and time at the moment of access"
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Amount of data sent in bytes"
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Source/reference from which you came to the page"
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Browser used"
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Operating system used"
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- IP address used (if applicable: in anonymized form)"
          />
        </ListItem>
      </List>
      <Typography className={classes.text}>
        Data processing is carried out in accordance with Art. 6 (1) point f
        GDPR on the basis of our legitimate interest in improving the stability
        and functionality of our website. The data will not be passed on or used
        in any other way. However, we reserve the right to check the server log
        files subsequently, if there are any concrete indications of illegal
        use.
      </Typography>

      <Typography variant="subtitle1">3) Cookies</Typography>

      <Typography className={classes.text}>
        In order to make your visit to our website attractive and to enable the
        use of certain functions, we use so-called cookies on various pages.
        These are small text files that are stored on your end device. Some of
        the cookies we use are deleted after the end of the browser session,
        i.e. after closing your browser (so-called session cookies). Other
        cookies remain on your terminal and enable us or our partner companies
        (third-party cookies) to recognize your browser on your next visit
        (persistent cookies). If cookies are set, they collect and process
        specific user information such as browser and location data as well as
        IP address values according to individual requirements. Persistent
        cookies are automatically deleted after a specified period, which may
        vary depending on the cookie.
      </Typography>
      <Typography className={classes.text}>
        In some cases, cookies are used to simplify the ordering process by
        saving settings (e.g. remembering the content of a virtual shopping
        basket for a later visit to the website). If personal data are also
        processed by individual cookies set by us, the processing is carried out
        in accordance with Art. 6 (1) point b GDPR either for the execution of
        the contract or in accordance with Art. 6 (1) point f GDPR to safeguard
        our legitimate interests in the best possible functionality of the
        website and a customer-friendly and effective design of the page visit.
      </Typography>
      <Typography className={classes.text}>
        We work together with advertising partners who help us to make our
        website more interesting for you. For this purpose, cookies from partner
        companies are also stored on your hard drive when you visit our website
        (third-party cookies). You will be informed individually and separately
        about the use of such cookies and the scope of the information collected
        in each case within the following sections.
      </Typography>
      <Typography className={classes.text}>
        Please note that you can set your browser in such a way that you are
        informed about the setting of cookies and you can decide individually
        about their acceptance or exclude the acceptance of cookies for certain
        cases or generally. Each browser differs in the way it manages the
        cookie settings. This is described in the help menu of each browser,
        which explains how you can change your cookie settings. You will find
        these for the respective browsers under the following links:
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Internet Explorer: https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Firefox: https://www.mozilla.org/en-US/privacy/websites/#cookies
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Chrome: https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Safari: https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            "
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Opera: https://help.opera.com/en/latest/web-preferences/#cookies
            "
          />
        </ListItem>
      </List>

      <Typography className={classes.text}>
        Please note that the functionality of our website may be limited if
        cookies are not accepted.
      </Typography>

      <Typography variant="subtitle1">4) Contacting Us</Typography>

      <Typography className={classes.text}>
        When you contact us (e.g. via contact form or e-mail), personal data is
        collected. Which data is collected in the case of a contact form can be
        seen from the respective contact form. These data are stored and used
        exclusively for the purpose of responding to your request or for
        establishing contact and for the associated technical administration.
        The legal basis for processing data is our legitimate interest in
        responding to your request in accordance with Art. 6 (1) point f GDPR.
        If your contact is aimed at concluding a contract, the additional legal
        basis for the processing is Art. 6 (1) point b GDPR. Your data will be
        deleted after final processing of your enquiry; this is the case if it
        can be inferred from the circumstances that the facts in question have
        been finally clarified, provided that there are no legal storage
        obligations to the contrary.
      </Typography>

      <Typography variant="subtitle1">
        5) Data Processing When Opening a Customer Account and for Contract
        Processing
      </Typography>

      <Typography className={classes.text}>
        Pursuant to Art. 6 (1) point b GDPR, personal data will continue to be
        collected and processed if you provide them to us for the execution of a
        contract or when opening a customer account. Which data is collected can
        be seen from the respective input forms. It is possible to delete your
        customer account at any time. This can be done by sending a message to
        the above-mentioned address of the controller. We store and use the data
        provided by you for contract processing. After complete processing of
        the contract or deletion of your customer account, your data will be
        blocked in consideration of tax and commercial retention periods and
        deleted after expiry of these periods, unless you have expressly
        consented to further use of your data or a legally permitted further use
        of data has been reserved by our site, about which we will inform you
        accordingly below.
      </Typography>

      <Typography variant="subtitle1">
        6) Use of Your Data for Direct Advertising
      </Typography>

      <Typography className={classes.text}>
        6.1 If you subscribe to our e-mail newsletter, we will send you regular
        information about our offers. The only mandatory information for sending
        the newsletter is your e-mail address. The indication of additional
        possible data is voluntary and is used to be able to address you
        personally. We use the so-called double opt-in procedure for sending the
        newsletter. This means that we will not send you an e-mail newsletter,
        unless you have expressly confirmed to us that you agree to the sending
        of the newsletter. We will then send you a confirmation e-mail asking
        you to confirm that you wish to receive future newsletters by clicking
        on an appropriate link. By activating the confirmation link, you give us
        your consent to the use of your personal data in accordance with Art. 6
        (1) point a GDPR. When you register for the newsletter, we store your IP
        address entered by the Internet Service Provider (ISP) as well as the
        date and time of registration so that we can trace any possible misuse
        of your e-mail address at a later time. The data collected by us when
        you register for the newsletter will be used exclusively for the purpose
        of advertising by means of the newsletter. You can unsubscribe from the
        newsletter at any time via the link provided in the newsletter or by
        sending a message to the responsible person named above. After your
        cancellation, your e-mail address will immediately be deleted from our
        newsletter distribution list, unless you have expressly consented to
        further use of your data or we reserve the right to use data in excess
        thereof, which is permitted by law and about which we inform you in this
        declaration.
      </Typography>
      <Typography className={classes.text}>
        6.2 Our e-mail newsletters are sent via the technical service provider,
        The Rocket Science Group, LLC d/b/a MailChimp, 675 Ponce de Leon Ave NE,
        Suite 5000, Atlanta, GA 30308, USA (https://mailchimp.com), to whom we
        pass on the data you provided when registering for the newsletter. This
        disclosure is made in accordance with Art. 6 (1) point f GDPR and serves
        our legitimate interest in the use of an effective, secure and
        user-friendly newsletter system. Please note that your data is usually
        transferred to a MailChimp server in the USA and stored there. MailChimp
        uses this information to send and statistically evaluate the newsletter
        on our behalf. For evaluation purposes, the e-mails sent contain
        so-called web beacons or tracking pixels, which represent single-pixel
        image files stored on our website. This allows us to determine whether a
        newsletter message has been opened and which links have been clicked on.
        In addition, technical information is recorded (e.g. time of retrieval,
        IP address, browser type and operating system). The data are collected
        exclusively in a pseudonymized format and are not linked with other
        personal data from you. A direct personal relationship is excluded. This
        data is used exclusively for statistical analysis of newsletter
        campaigns. The results of these analyses can be used to better adapt
        future newsletters to the interests of the recipients. If you wish to
        object to the data analysis for statistical evaluation purposes, you
        must unsubscribe from the newsletter. Furthermore, MailChimp can use
        this data according to Art. 6 (1) point f GDPR even on the basis of its
        own legitimate interest in the demand-oriented design and optimization
        of the service as well as for market research purposes, for example to
        determine from which countries recipients come. However, MailChimp does
        not use the data of our newsletter recipients to address those
        recipients or pass that data on to third parties. To protect your data
        in the USA, we have concluded a data processing agreement
        ("Data-Processing-Agreement") with MailChimp on the basis of the
        standard contractual clauses of the European Commission to enable the
        transmission of your personal data to MailChimp. If you are interested
        in viewing this data processing agreement, you can do so at the
        following Internet link:
        https://mailchimp.com/legal/forms/data-processing-agreement/ MailChimp
        is also certified under the US-European data protection agreement
        "Privacy Shield" and thus undertakes to comply with EU data protection
        regulations. The data protection regulations of MailChimp can be viewed
        at: https://mailchimp.com/legal/privacy/
      </Typography>

      <Typography variant="subtitle1">
        7) Processing of Data for the Purpose of Order Handling
      </Typography>

      <Typography className={classes.text}>
        7.1 The personal data collected by us will be passed on to the transport
        company commissioned with the delivery within the scope of contract
        processing, insofar as this is necessary for the delivery of the goods.
        We will pass on your payment data to the commissioned credit institution
        within the framework of payment processing, if this is necessary for
        payment handling. If payment service providers are used, we explicitly
        inform you of this below. The legal basis for the transfer of data is
        Art. 6 (1) point b GDPR.
      </Typography>
      <Typography className={classes.text}>
        7.2 Use of Special Service Providers for Order Processing and Handling -
        Billbee Orders are processed by the service provider "Billbee" (Billbee
        GmbH, Paulinenstrasse 54, 32756 Detmold). Name, address and, if
        applicable, other personal data will be passed on to Billbee exclusively
        for processing the online order in accordance with Art. 6 (1) point b
        GDPR. Your data will only be passed on if this is actually necessary for
        processing the order. Details regarding Billbee's privacy policy and
        Billbee's privacy policy can be found on Billbee's website at:
        https://www.billbee.io/datenschutz/
      </Typography>
      <Typography className={classes.text}>
        7.3 Use of Payment Service Providers - Paypal When you pay via PayPal,
        credit card via PayPal, direct debit via PayPal or - if offered -
        "purchase on account" or "payment by instalments" via PayPal, we
        transmit your payment data to PayPal (Europe) S.a.r.l. et Cie, S.C.A.,
        22-24 Boulevard Royal, L-2449 Luxembourg (hereinafter "PayPal"). The
        transfer takes place in accordance with Art. 6 (1) point b GDPR and only
        insofar as this is necessary for payment processing. PayPal reserves the
        right to carry out credit checks for the payment methods credit card via
        PayPal, direct debit via PayPal or, if offered, "purchase on account" or
        "payment by installments" via PayPal. For this purpose, your payment
        data may be passed on to credit agencies on the basis of PayPal's
        legitimate interest in determining your solvency pursuant to Art. 6 (1)
        point f GDPR. PayPal uses the result of the credit assessment in
        relation to the statistical probability of non-payment for the purpose
        of deciding on the provision of the respective payment method. The
        credit report can contain probability values (so-called score values).
        If score values are included in the result of the credit report, they
        are based on recognized scientific, mathematical-statistical methods.
        The calculation of the score values includes, but is not limited to,
        address data. For further information on data protection law, including
        the credit agencies used, please refer to PayPal's data protection
        declaration at: https://www.paypal.com/uk/webapps/mpp/ua/privacy-full.
        You can object to this processing of your data at any time by sending a
        message to PayPal. However, PayPal may still be entitled to process your
        personal data if this is necessary for contractual payment processing.
      </Typography>

      <Typography variant="subtitle1">8) Web Analysis Services</Typography>

      <Typography className={classes.text}>
        Google (Universal) Analytics This website uses Google Analytics, a web
        analysis service of Google LLC, 1600 Amphitheatre Parkway, Mountain
        View, CA 94043, USA ("Google"). Google Analytics uses so-called cookies,
        which are text files stored on your computer, to help the website
        analyze how users use the site. The information generated by the cookies
        about your use of this website (including the shortened IP address) is
        generally transmitted to a Google server in the USA and stored there.
        This website uses Google Analytics exclusively with the extension
        "_anonymizeIp()", which ensures an anonymization of the IP address by
        shortening it and excludes a direct personal relationship. As a result
        of the extension, your IP address will previously be shortened by Google
        within member states of the European Union or in other signatory states
        to the Agreement on the European Economic Area. Only in exceptional
        cases will the full IP address be transmitted to a Google server in the
        USA and shortened there. In these exceptional cases, processing is
        carried out in accordance with Art. 6 (1) point f GDPR, on the basis of
        our legitimate interest in the statistical analysis of user behavior for
        optimization and marketing purposes. On our behalf, Google will use this
        information to evaluate your use of the website, to compile reports on
        website activity and to provide us with other services relating to
        website and internet use. The IP address transmitted by your browser in
        the context of Google Analytics is not merged with other Google data.
        You may refuse the use of cookies by selecting the appropriate settings
        on your browser. However, we should point out that in that case you
        might not be able to use the full functionality of this website. You may
        permanently prevent Google from collecting data generated by cookies
        regarding the use of the website (including your IP address) and to
        process them. You can download and install the browser plugin available
        under the following link:
        https://tools.google.com/dlpage/gaoptout?hl=en. As an alternative to the
        browser plug-in or for browsers on mobile devices, please click on the
        following link in order to set an opt-out cookie which disables Google
        Analytics to collect data on this website in the future (this opt-out
        cookie only functions for this browser and this domain. If you delete
        your cookies on this browser, you must click again on this link):
        {`<a
          onclick="alert ('Google Analytics has been disabled'); "
          href="javascript:gaOptout()"
        >
          Disable Google Analytics
        </a>`}
        Google LLC, based in the United States, is certified for the US-European
        data protection agreement "Privacy Shield", which guarantees compliance
        with the data protection level applicable in the EU. More information on
        how Google Analytics handles user data can be found in Google's privacy
        policy at: https://support.google.com/analytics/answer/6004245?hl=en
      </Typography>

      <Typography variant="subtitle1">9) Tools and Miscellaneous</Typography>

      <Typography className={classes.text}>
        Google Maps Our website uses Google Maps (AP’I) of Google LLC., 1600
        Amphitheatre Parkway, Mountain View, CA 94043, USA (“Google”). Google
        Maps is a web service for displaying interactive (country) maps in order
        to display geographical information visually. Using this service will
        show you our location and will make it easier for you to find us. When
        you access the sub-pages that contain the Google Maps map, information
        about your use of our website (such as your IP address) is transmitted
        to and stored by Google on servers in the United States. This is
        regardless of whether Google provides a user account that you are logged
        in with or whether no user account exists. If you are logged in to
        Google, your information will be directly associated with your account.
        If you do not wish to be associated with your profile on Google, you
        must log out before activating the button. Google saves your data (even
        for users who are not logged in) as usage profiles and evaluates them.
        Such an evaluation takes place according to Art. 6 (1) point f GDPR, on
        the basis of the legitimate interests of Google in the insertion of
        personalized advertising, market research and/or demand-oriented design
        of its website. You have the right to object to the creation of these
        user profiles. If you want to do so, you must contact Google to exercise
        this right. Google LLC, based in the United States, is certified for the
        US-European data protection agreement "Privacy Shield", which guarantees
        compliance with the data protection level applicable in the EU. If you
        do not agree to the future transmission of your data to Google in the
        context of using Google Maps, you may completely deactivate the Google
        Maps web service by switching off the JavaScript application in your
        browser. In this case, Google Maps as well as the map display on this
        website cannot be used. The Google terms of use can be found at:
        https://policies.google.com/terms?hl=en. The additional terms of use can
        be found at: https://www.google.com/intl/en-US_US/help/terms_maps.html.
        You can find detailed information on data protection in connection with
        the use of Google Maps on Google's website ("Google Privacy Policy") at:
        https://policies.google.com/privacy?hl=en.
      </Typography>

      <Typography variant="subtitle1">
        10) Rights of the Data Subject
      </Typography>

      <Typography className={classes.text}>
        10.1 The applicable data protection law grants you the following
        comprehensive rights of data subjects (rights of information and
        intervention) vis-à-vis the data controller with regard to the
        processing of your personal data:
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right of access by the data subject pursuant to Art. 15 GDPR"
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right to rectification pursuant to Art. 16 GDPR"
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right to erase (“right to be forgotten”) pursuant to Art. 17 GDPR"
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right to restriction of processing pursuant to Art. 18 GDPR"
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right to be informed pursuant to Art. 19 GDPR"
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right to data portability pursuant to Art. 20 GDPR"
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right to withdraw a given consent pursuant to Art. 7 (3) GDPR"
          />{' '}
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary="- Right to lodge a complaint pursuant to Art. 77 GDPR"
          />{' '}
        </ListItem>
      </List>

      <Typography variant="subtitle1">10.2 RIGHT TO OBJECT</Typography>

      <Typography className={classes.text}>
        IF, WITHIN THE FRAMEWORK OF A CONSIDERATION OF INTERESTS, WE PROCESS
        YOUR PERSONAL DATA ON THE BASIS OF OUR PREDOMINANT LEGITIMATE INTEREST,
        YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THIS PROCESSING WITH EFFECT
        FOR THE FUTURE ON THE GROUNDS THAT ARISE FROM YOUR PARTICULAR SITUATION.
        IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA
        CONCERNED. HOWEVER, WE RESERVE THE RIGHT TO FURTHER PROCESSING IF WE CAN
        PROVE COMPELLING REASONS WORTHY OF PROTECTION FOR PROCESSING WHICH
        OUTWEIGH YOUR INTERESTS, FUNDAMENTAL RIGHTS AND FREEDOMS, OR IF THE
        PROCESSING SERVES TO ASSERT, EXERCISE OR DEFEND LEGAL CLAIMS. IF WE
        PROCESS YOUR PERSONAL DATA FOR DIRECT MARKETING PURPOSES, YOU HAVE THE
        RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA
        WHICH ARE USED FOR DIRECT MARKETING PURPOSES. YOU MAY EXERCISE THE
        OBJECTION AS DESCRIBED ABOVE. IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE
        WILL STOP PROCESSING THE DATA CONCERNED FOR DIRECT ADVERTISING PURPOSES.
      </Typography>

      <Typography variant="subtitle1">
        11) Duration of Storage of Personal Data
      </Typography>
      <Typography className={classes.text}>
        The duration of the storage of personal data is determined by the
        respective legal retention period (e.g. commercial and tax retention
        periods). After expiry of this period, the corresponding data will be
        routinely deleted, provided they are no longer necessary for the
        performance or initiation of the contract and/or there is no longer any
        legitimate interest on our part in further storage.
      </Typography>
    </div>
  )
}

Privacy.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Privacy))
