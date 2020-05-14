import FinSizeImg_en from "../../assets/faq/finSize_en.png"
import FinSizeImg_de from "../../assets/faq/finSize_de.png"

const faqData = {
  products: {
    title: "products",
    nav: [
      {
        key: "singleFin",
        button: true,
      },
      {
        key: "finSize",
        img_en: FinSizeImg_en,
        img_de: FinSizeImg_de,
      },
      {
        key: "incorrectFit",
      },
      {
        key: "finTypes",
      },
      {
        key: "finSystem",
      },
      {
        key: "wax",
      },
    ],
  },
  shipping: {
    title: "shipping",
    nav: [
      {
        key: "shop",
        button: true,
      },
      {
        key: "typo",
        button: true,
      },
      {
        key: "country",
        button: true,
      },
      {
        key: "cost",
      },
      {
        key: "time",
      },
      {
        key: "company",
      },
    ],
  },
  returns: {
    title: "returns & exchanges",
    nav: [
      {
        key: "policy",
      },
      {
        key: "returns",
        link: true,
      },
    ],
  },
  payments: {
    title: "payments",
    nav: [
      {
        key: "services",
      },
      {
        key: "currency",
      },
      {
        key: "largeOrders",
        button: true,
      },
    ],
  },
}

export default faqData
