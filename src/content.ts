export type NavItem = {
  id: string
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'mobile-app', label: 'Try our Mobile App', path: '/mobile-app' },
  { id: 'solution', label: 'Solution', path: '/solution' },
  { id: 'pricing', label: 'Pricing', path: '/pricing' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'desktop', label: 'Desktop', path: '/desktop' },
  { id: 'partners', label: 'Partner with us', path: '/partners' },
  { id: 'login', label: 'Login', path: '/login' },
]

export const heroHighlights = [
  'GST-ready invoices, estimates, and draft bills',
  'Inventory with QR / barcode support and Excel import/export',
  'Bluetooth label + receipt printing (ESC/POS, ZPL, TSPL, CPCL)',
  'Secure backups, Firestore roles, and FCM notifications',
]

export const mobileFeatureCards = [
  {
    title: 'Billing & invoices',
    description:
      'Create GST invoices, estimates and drafts with gold, diamond, silver, labour and stone details.',
    bullets: [
      'PDF invoices/estimates via built-in PdfUtils',
      'Share instantly over WhatsApp or email',
      'Handles tax invoice and showroom-style billing',
    ],
  },
  {
    title: 'Inventory & stock',
    description:
      'Item master with categories, purity, weights, images and tags backed by Firestore data.',
    bullets: [
      'Import items from Excel templates (ImportItems tools)',
      'Export stock snapshots to Excel for audit',
      'Search by design, barcode or category',
    ],
  },
  {
    title: 'Labels & Bluetooth printing',
    description:
      'Print jewellery labels and receipts straight from mobile to your existing printers.',
    bullets: [
      'QR-coded item labels with store branding',
      'Supports ESC/POS, ZPL, TSPL and CPCL printers',
      'Thermal sizes 100mm / 80mm / 58mm and more',
    ],
  },
]

export const solutionColumns = [
  {
    title: 'For owners',
    bullets: [
      'Stores, users and roles modeled in Firestore',
      'Encrypted backups to cloud + local Downloads/JewelVault',
      'Excel & Google Sheets exports for sales and stock',
    ],
  },
  {
    title: 'For counter & inventory staff',
    bullets: [
      'Fast billing with QR / barcode scanning',
      'Label printing right from inventory screens',
      'Draft and final invoices for showroom workflows',
    ],
  },
  {
    title: 'For accountants & auditors',
    bullets: [
      'Tax invoices, estimates and drafts as PDF',
      'Clear folder structure for invoices and backups',
      'Item-level exports for reconciliation',
    ],
  },
  {
    title: 'Security & notifications',
    bullets: [
      'Biometric login and PIN protection',
      'Firestore rules per user/store for data safety',
      'FCM notifications via JewelVault messaging service',
    ],
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    blurb: 'Mobile-only billing and inventory for single-counter shops.',
    bullets: [
      'Android app with GST invoices & estimates',
      'Inventory with QR/Barcode search',
      'Basic Excel export',
    ],
  },
  {
    name: 'Professional',
    tag: 'Most popular',
    blurb: 'Mobile + desktop access with advanced inventory and labels.',
    bullets: [
      'Mobile and desktop companion views',
      'Advanced label profiles & Bluetooth printing',
      'Multi-user roles and permissions',
    ],
  },
  {
    name: 'Enterprise',
    blurb: 'Chains and wholesale setups with custom workflows.',
    bullets: [
      'Multi-branch dashboards',
      'Custom reports & integrations',
      'Dedicated onboarding and support',
    ],
  },
]

export const desktopBullets = [
  'Run billing on a big screen while mobile stays active on the floor',
  'Shared data between desktop and mobile (same Firestore store)',
  'Large tables for stock, invoices and exports to Excel/PDF',
]

export const partnerBullets = [
  'Local software resellers and IT vendors',
  'CA firms and accounting advisors',
  "Jewellers' associations and buying groups",
]

export const loginBullets = [
  'Use the same mobile number and store used in JewelVault Mobile',
  'Issue OTPs or reuse secure PINs for staff',
  'Map roles (owner/manager/staff) to desktop permissions',
]
