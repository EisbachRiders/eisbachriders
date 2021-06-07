import * as React from "react"
import { useTranslation } from "react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography
        sx={{
          fontSize: { xs: 42, sm: 36, md: 52, lg: 72 },
          fontWeight: 700,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {children}
      </Typography>
    ),
  },
}

export default function ProductType({ data }) {
  const { t } = useTranslation()
  const image = data.mainImage ? getImage(data.mainImage) : null

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        flexDirection: { xs: "column-reverse", sm: "row" },
        background: theme => theme.color.cream,
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "50%" },
          pt: { xs: 0, sm: 10, md: 12, lg: 20 },
          pb: { xs: 2, sm: 6, md: 8 },
          pl: { xs: 2, sm: 8, md: 10 },
          pr: { xs: 2, sm: 0 },
        }}
      >
        <Box sx={{ mb: { xs: 1, lg: 3 } }}>
          {renderRichText(data.title, options)}
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 16, md: 18, lg: 24 },
            mb: 3,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {data.subtitle}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={data.shopLink}
          target="_blank"
          rel="noreferrer"
          fullWidth
        >
          {t("product.buy")}
        </Button>
      </Box>

      <Box
        sx={{
          p: { xs: 0, md: 4, lg: 10 },
          flexBasis: { xs: "100%", sm: "50%" },
        }}
      >
        <Box sx={{ width: { xs: "70%", sm: "100%" }, margin: "0 auto" }}>
          <GatsbyImage image={image} alt={data.name} />
        </Box>
      </Box>
    </Box>
  )
}
