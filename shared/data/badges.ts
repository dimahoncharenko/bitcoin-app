import i18n from "../../app/i18n";

export const badges = [
  {
    order: 0,
    icons: [],
    label: "",
  },
  {
    order: 1,
    icons: [
      require("../../assets/icons/user.png"),
      require("../../assets/icons/charity.png"),
      require("../../assets/icons/user.png"),
    ],
    label: i18n.t("welcome.card2"),
  },
  {
    order: 4,
    icons: [
      require("../../assets/icons/crane.png"),
      require("../../assets/icons/offices.png"),
      require("../../assets/icons/residential.png"),
    ],
    label: i18n.t("welcome.card1"),
  },
  {
    order: 2,
    icons: [
      require("../../assets/icons/oil.png"),
      require("../../assets/icons/metals.png"),
      require("../../assets/icons/lightning.png"),
    ],
    label: i18n.t("welcome.card4"),
  },
  {
    order: 5,

    icons: [
      require("../../assets/icons/invesco.png"),
      require("../../assets/icons/vangard.png"),
      require("../../assets/icons/iShares.png"),
    ],
    label: i18n.t("welcome.card3"),
  },
  {
    order: 3,
    icons: [
      require("../../assets/icons/etherium.png"),
      require("../../assets/icons/bitcoin.png"),
      require("../../assets/icons/tether.png"),
    ],
    label: i18n.t("welcome.card5"),
  },
];
