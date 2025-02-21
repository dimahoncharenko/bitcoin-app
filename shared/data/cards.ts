import i18n from "../../app/i18n";

export const cards = [
  {
    content: i18n.t("home.card1.title"),
    subtext: i18n.t("home.card1.steps"),
    containerClassname: "bg-brand-gray-700",
  },
  {
    content: i18n.t("home.card2.title"),
    subtext: i18n.t("home.card2.steps"),
    containerClassname: "bg-danger ml-4",
    subtextClassname: "text-brand-gray-700",
  },
];
