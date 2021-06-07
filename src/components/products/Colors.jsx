import * as React from "react"
import { useTranslation } from "react-i18next"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function Colors({ colors, variant }) {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = React.useState(
    new Array(colors.length).fill(null)
  )

  const handlePopoverOpen = (event, idx) => {
    let newArr = [...anchorEl]
    newArr[idx] = event.currentTarget
    setAnchorEl(newArr)
  }

  const handlePopoverClose = () => {
    setAnchorEl(new Array(colors.length).fill(null))
  }

  const circle = (color, idx) => (
    <Box
      key={color.name}
      sx={{
        flexBasis: variant === "large" ? { xs: "40%", lg: "30%" } : null,
        mb: variant === "large" ? 2 : 0,
        textAlign: "center",
      }}
    >
      <Typography
        component="p"
        aria-owns={
          Boolean(anchorEl[idx]) ? `mouse-over-popover${idx}` : undefined
        }
        aria-haspopup="true"
        onMouseEnter={e => handlePopoverOpen(e, idx)}
        onMouseLeave={handlePopoverClose}
        key={color.name}
        sx={{
          height: variant === "large" ? 60 : 15,
          width: variant === "large" ? 60 : 15,
          borderRadius: "50%",
          margin: variant === "large" ? "0 auto" : "0 5px",
          backgroundColor: theme =>
            theme.color[
              color.name
                .replace(/\s(.)/g, function ($1) {
                  return $1.toUpperCase()
                })
                .replace(/\s/g, "")
                .replace(/^(.)/, function ($1) {
                  return $1.toLowerCase()
                })
            ],
          border: theme =>
            color.name === "white"
              ? `1px solid ${theme.color.black}`
              : "transparent",
        }}
      />
      <Popover
        id={`mouse-over-popover${idx}`}
        open={Boolean(anchorEl[idx])}
        anchorEl={anchorEl[idx]}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        sx={{ pointerEvents: "none", p: 1 }}
      >
        <Typography>{t(`product.${color.name}`)}</Typography>
      </Popover>
    </Box>
  )

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: variant === "large" ? "wrap" : "nowrap",
        justifyContent: variant === "large" ? "space-between" : "center",
        alignItems: "center",
      }}
    >
      {colors.map((color, idx) => circle(color, idx))}
    </Box>
  )
}
