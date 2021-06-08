import * as React from "react"
import { useTranslation } from "react-i18next"
import CookieConsent from "react-cookie-consent"
import Box from "@material-ui/core/Box"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Link from "./ui/Link"
import "../i18n/i18n"

const Layout = ({ location, children }) => {
  const { t } = useTranslation()

  const handleOptOut = () => {
    var disableStr = `ga-disable-${process.env.GA_KEY}`
    document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`
    window[disableStr] = true
  }

  const handleAccept = () => {
    window.location.reload(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: theme => theme.color.white,
        minHeight: "100%",
      }}
    >
      <Header location={location} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <CookieConsent
        location="bottom"
        enableDeclineButton
        onDecline={() => handleOptOut()}
        declineButtonText={t("tracking.decline")}
        setDeclineCookie
        declineButtonStyle={{
          color: "#00130e",
          fontSize: "14px",
          textTransform: "uppercase",
          background: "transparent",
          letterSpacing: 1.5,
        }}
        onAccept={() => handleAccept()}
        buttonText={t("tracking.accept")}
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#00d7a2", color: "#00130e" }}
        buttonStyle={{
          background: "#1F2833",
          color: "#ffffff",
          fontSize: "14px",
          padding: "14px 24px",
          borderRadius: 3,
          lineHeight: "1.25rem",
          textTransform: "uppercase",
          letterSpacing: "1.25px",
          fontFamily: '"Roboto", sans-serif,',
          fontWeight: 500,
        }}
        expires={150}
      >
        {t("tracking.consent")}
        <Link
          to="/dataProtection/"
          style={{ color: "#00130e", textDecoration: "underline" }}
        >
          {t("tracking.dataPrivacy")}
        </Link>
      </CookieConsent>

      <Footer />
    </Box>
  )
}

export default Layout
