import { FaLeaf, FaShieldAlt, FaPaintRoller, FaBroom, FaHandHoldingUsd, FaFileInvoiceDollar, FaAirFreshener } from "react-icons/fa";

const services = [
  { id: 'gardening', title: { ru: 'Озеленение', he: 'שירותי גינון', en: 'Gardening', fr: 'Jardinage' }, icon: FaLeaf },
  { id: 'security', title: { ru: 'Охрана', he: 'שירותי אבטחה', en: 'Security', fr: 'Sécurité' }, icon: FaShieldAlt },
  { id: 'renovation', title: { ru: 'Ремонт', he: 'שיפוצים', en: 'Renovation', fr: 'Rénovation' }, icon: FaPaintRoller },
  { id: 'cleaning', title: { ru: 'Уборка', he: 'ניקיון', en: 'Cleaning', fr: 'Nettoyage' }, icon: FaBroom },
  { id: 'investment', title: { ru: 'Инвестиции', he: 'השקעות', en: 'Investments', fr: 'Investissements' }, icon: FaHandHoldingUsd },
  { id: 'billing', title: { ru: 'Счета', he: 'חשבונות', en: 'Billing', fr: 'Facturation' }, icon: FaFileInvoiceDollar },
  { id: 'scent', title: { ru: 'Ароматы', he: 'מפיצי ריח', en: 'Scents', fr: 'Parfums' }, icon: FaAirFreshener }
];

export default services;
