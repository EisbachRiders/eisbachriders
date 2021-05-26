import React from "react"
import { useTranslation } from "react-i18next"
import Button from "@material-ui/core/Button"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import Container from "@material-ui/core/Container"

function Topbar() {
  const { i18n } = useTranslation()

  const handleSetLang = () => {
    let newLng = i18n.language === "en" ? "de" : "en"
    i18n.changeLanguage(newLng)
  }

  const icons = [
    {
      href: "https://www.facebook.com/EisbachRiders/",
      label: "facebook",
      icon: <FacebookIcon />,
    },
    {
      href: "https://www.instagram.com/eisbachriders/",
      label: "instagram",
      icon: <InstagramIcon />,
    },
    {
      href: "https://www.pinterest.com/eisbachriders/",
      label: "pinterest",
      icon: <PinterestIcon />,
    },
  ]

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        background: "#000",
      }}
    >
      {icons.map(elem => (
        <Button
          href={elem.href}
          aria-label={elem.label}
          size="small"
          rel="noopener"
          target="_blank"
        >
          {elem.icon}
        </Button>
      ))}

      <Button onClick={() => handleSetLang()}>{i18n.language}</Button>
    </Container>
  )
}

export default Topbar
