import * as React from "react"
import { useTranslation } from "react-i18next"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import Container from "@material-ui/core/Container"

export default function Topbar() {
  const { i18n } = useTranslation()

  const handleSetLang = () => {
    let newLng = i18n.language === "en" ? "de" : "en"
    i18n.changeLanguage(newLng)
  }

  const icons = [
    {
      href: "https://www.facebook.com/EisbachRiders/",
      label: "facebook",
      icon: <FacebookIcon sx={{ fill: theme => theme.color.white }} />,
    },
    {
      href: "https://www.instagram.com/eisbachriders/",
      label: "instagram",
      icon: <InstagramIcon sx={{ fill: theme => theme.color.white }} />,
    },
    {
      href: "https://www.pinterest.com/eisbachriders/",
      label: "pinterest",
      icon: <PinterestIcon sx={{ fill: theme => theme.color.white }} />,
    },
  ]

  return (
    <Box
      sx={{
        background: "#000",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {icons.map(elem => (
          <Button
            href={elem.href}
            aria-label={elem.label}
            size="small"
            rel="noopener"
            target="_blank"
            key={`socialIcon${elem.label}`}
            sx={{
              width: 36,
              height: 36,
              "&:hover svg": {
                fill: theme => theme.palette.primary.main,
              },
            }}
          >
            {elem.icon}
          </Button>
        ))}
      </Container>
    </Box>
  )
}
