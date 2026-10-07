import { EventItem, MembershipTier, SectorItem, InsightArticle, CBCService, ClientCategory } from '../types';

export const CBC_CONTACT = {
  name: 'The Corporate Business Circle (CBC)',
  slogan: 'The Cycle of Great Minds',
  tagline: 'Providing Corporate Solutions to Corporate Companies Operating in South Sudan AND Africa at large.',
  email: 'thecorporatebizcircle@gmail.com',
  phonePrimary: '+211 929 115 924',
  phoneSecondary: '+211 980 383 695',
  phoneTertiary: '+211 910 543 840',
  whatsapp: '211929115924',
  whatsappFormatted: '+211 929 115 924',
  address: 'TM Lion, Bowker Blvd, Airport Road Area, Juba, South Sudan',
  googleMapsUrl: 'https://maps.app.goo.gl/R3wyCQ2LJU3K4aaRA?g_st=aw',
  plusCode: 'VH5P+CHG Juba, South Sudan',
  hours: 'Monday – Friday: 8:00 AM – 5:00 PM CAT (GMT+2)',
  city: 'Juba, South Sudan',
  pobox: 'P.O. Box 412, Juba, Republic of South Sudan',
  social: {
    facebook: 'https://www.facebook.com/share/18DpbJQLyD/',
    pixieset: 'https://tomemediaco.pixieset.com/glc-2/',
  },
};

export const CBC_PROFILE = {
  name: 'The Corporate Business Circle',
  slogan: 'The Cycle of Great Minds',
  registrationDate: 'September 20, 2023',
  inceptionYear: '2022',
  inceptionEvent: 'Juba Auto Show',
  tagline: 'Providing Corporate Solutions to Corporate Companies Operating in South Sudan AND Africa at large.',
  background: [
    'The Corporate Business Circle under its slogan, is a Corporate Company that aims at providing Corporate Solutions to Corporate Companies Operating in South Sudan AND Africa at large.',
    'We use our experience in dealing with Corporate Companies to ensure that we provide Tailored made Business Solution that enables Companies to achieve both their short term and long-Term Visions.',
    'As our Slogan states "The Cycle of Great Minds", Means that we are all surrounded Circle of Great Minds and we want to use the Great Minds to ensure that our clients are well attended to.',
    'The Corporate Business Circle started in 2022 with the Juba Auto Show, an Event that brings Auto Lovers and Auto Dealers to one Experience of Networking and Business to Business Interactions.',
    'Officially we got Registered on the 20th of September 2023 to ensure us spread our wings to serve the Corporates legally.',
  ],
  vision: 'We aim at providing Tailored Made Business solutions to our clients and enable them to achieve their Business Objectives.',
  mission: 'To Build a trusted Corporate Business Partner to all the Corporate Entities in the Country and Beyond.',
  coreValues: [
    { name: 'Honesty', desc: 'Transparent, uncompromised integrity in every deal, contract, and client interaction.' },
    { name: 'Creativity', desc: 'Custom tailored, innovative solutions that overcome frontier market challenges.' },
    { name: 'Sustainability', desc: 'Long-term value creation with environmentally sound and socially responsible practices.' },
    { name: 'Accountability', desc: 'Full ownership of deliverables, timeliness, and measurable outcomes for our partners.' },
    { name: 'Humility', desc: 'Respectful, collaborative servant-leadership putting client and community goals first.' },
  ],
  environmentPolicy: {
    title: 'Environment Policy',
    intro: 'Corporate Business Circle will continue to develop, document and communicate the general principles and practices of the policy to our employees and make it available to the general public.',
    commitments: [
      'Minimizing waste of both materials and energy in our operations',
      'Recycling or reuse of material',
      'Safe handling of production materials and byproducts',
      'Using non-toxic, less toxic, or recycled alternatives whenever possible',
      'Disposing of hazardous materials safely according to State standards and practices',
      'Always purchasing the more environmentally sound product when a choice is reasonable',
    ],
  },
  healthAndSafetyPolicy: {
    title: 'Health and Safety Policy',
    statement:
      'Employees and others acting on behalf COPERATE business circle Co. Ltd are responsible for knowing and complying with all applicable EHS laws and regulations, as well as to cooperate related policies, standards, and guidelines. The management is also responsible for ensuring that employees and others acting on their behalf are properly trained on the above policies. Professionals in all areas of EHS relating to products, operations and workplace safety are available to assist in these matters.',
  },
};

export const CBC_SERVICES: CBCService[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    tagline: 'Product marketing, social media management & on-ground activations',
    iconName: 'Megaphone',
    shortDescription: 'Comprehensive strategic marketing solutions built for brand recall and measurable commercial conversion.',
    fullDescription: 'We deploy cutting-edge consumer and B2B marketing campaigns across South Sudan. From structured product go-to-market launches and high-engagement social media management to immersive on-ground product activations that capture market share.',
    subServices: [
      'Product marketing',
      'Social media management and marketing',
      'Product activation marketing',
    ],
    deliverables: [
      'Multi-channel product launch campaigns & retail placement',
      'Targeted social media strategy, content creation & community management',
      'Experiential experiential activations, roadshows & mall/market takeovers',
      'B2B customer acquisition pipelines and analytics tracking',
    ],
    badge: 'Core Competency',
    highlighted: true,
  },
  {
    id: 'business-proposal-writing',
    title: 'Business Proposal Writing',
    tagline: 'High-conversion institutional bids, tenders & investment decks',
    iconName: 'FileText',
    shortDescription: 'Institutional-grade proposals, government tender submissions, and international investment prospectuses.',
    fullDescription: 'We translate complex corporate ideas into winning business proposals. Whether pitching for multi-million dollar public tenders, DFI grant allocations, or private equity funding, our expert analysts craft compelling, compliant, and legally structured documentation.',
    deliverables: [
      'Public-Private Partnership (PPP) bids and institutional RFP responses',
      'Comprehensive bankable business plans and financial modeling',
      'Commercial grant applications and donor project dossiers',
      'Investor pitch decks and executive corporate summaries',
    ],
    badge: 'High Impact',
  },
  {
    id: 'corporate-media-engagement',
    title: 'Corporate Media Engagement',
    tagline: 'Press conferences, broadcast interviews & national media alliances',
    iconName: 'Tv',
    shortDescription: 'Direct access and placement across South Sudan’s most influential radio stations, newspapers, and TV networks.',
    fullDescription: 'Leveraging our established network across Eye Radio, Capital FM, The City Review, Citizen NO 1, and regional correspondents, we position your corporate brand at the forefront of national discourse through dignified media roundtables and press releases.',
    deliverables: [
      'Press conference planning, moderation, and media kit dissemination',
      'Prime-time radio talk show bookings (English and Arabic)',
      'Front-page coverage and feature articles in leading national newspapers',
      'Media monitoring, sentiment reporting, and executive broadcast media coaching',
    ],
    badge: 'Media Network',
  },
  {
    id: 'public-relation-strategies',
    title: 'Public Relation Strategies',
    tagline: 'Reputation management, corporate communication & stakeholder alignment',
    iconName: 'ShieldAlert',
    shortDescription: 'Strategic communications and reputation management designed for enduring institutional trust.',
    fullDescription: 'We construct robust public relations frameworks that build lasting goodwill between corporate institutions, regulatory bodies, and host communities. We manage crisis communications, stakeholder alignment, and positive corporate image curation.',
    deliverables: [
      'Corporate reputation audits and strategic PR roadmap design',
      'Crisis communication management and emergency media defense',
      'Community stakeholder engagement and corporate citizenship campaigns',
      'Executive speechwriting, op-eds, and official corporate press releases',
    ],
  },
  {
    id: 'capacity-building-training',
    title: 'Capacity Building / Training',
    tagline: 'Executive upskilling, corporate governance & workforce empowerment',
    iconName: 'GraduationCap',
    shortDescription: 'Custom corporate training programs enhancing productivity, compliance, and leadership excellence.',
    fullDescription: 'Empowering South Sudanese talent and executive teams with practical corporate skills. Our tailored training programs encompass executive governance, financial stewardship, customer excellence, and sales leadership aligned with international best practices.',
    deliverables: [
      'Boardroom governance, compliance, and ethical leadership retreats',
      'Frontline corporate sales, customer service, and client retention workshops',
      'Digital workplace tools, productivity, and ERP operations training',
      'Pre-employment professional etiquette and cross-cultural business communication',
    ],
  },
  {
    id: 'general-events-management',
    title: 'General Events Management',
    tagline: 'Flagship Juba Auto Show, corporate summits, galas & brand launches',
    iconName: 'CalendarRange',
    shortDescription: 'Flawless execution of corporate conferences, exhibitions, award galas, and national expos.',
    fullDescription: 'Born out of the iconic Juba Auto Show in 2022, CBC is South Sudan’s premier events architect. From concept to red-carpet execution, we handle venue sourcing, high-security protocol, stagecraft, audiovisual rigging, VIP guest logistics, and live streaming.',
    deliverables: [
      'Full-scale expos and exhibitions (including our flagship Juba Auto Show)',
      'High-level ministerial summits and C-Suite executive roundtables',
      'Annual corporate galas, award dinners, and product release ceremonies',
      'End-to-end audiovisual staging, LED walls, sound engineering, and decor',
    ],
    badge: 'Flagship Proven',
    highlighted: true,
  },
  {
    id: 'design-brand-printing',
    title: 'Design, Brand, and Printing',
    tagline: 'Designing works, fliers, pull-up banners, stickers, vehicle branding & custom apparel',
    iconName: 'Palette',
    badge: 'Turnkey Production',
    highlighted: true,
    shortDescription: 'Full-service graphic design, commercial offset printing, die-cut vinyl stickers, large-format event banners, and custom corporate apparel.',
    fullDescription: 'Corporate Business Circle operates an advanced commercial design and printing production division in South Sudan. We deliver end-to-end creative and industrial printing solutions: from corporate identity design and logo guidelines to high-volume promotional fliers, retractable roll-up banners, teardrop flags, die-cut vinyl stickers, product packaging labels, institutional architectural masterplan framing displays, and custom corporate African printed fabric uniforms.',
    subServices: [
      'Designing Works & Corporate Identity',
      'Promotional Fliers, Leaflets & Tri-Fold Brochures',
      'Roll-Up Banners, Teardrops & Stage Backdrops',
      'Die-Cut Vinyl Stickers, Packaging Labels & Decals',
      'Custom Corporate Apparel & African Fabric Uniforms',
      'Architectural Plaques & Exhibition Masterplan Framing',
    ],
    deliverables: [
      'Promotional Fliers & Brochures: High-speed offset & digital full-color A5/A4 fliers, folding corporate brochures, company profiles, and presentation folders.',
      'Banners & Large-Format Backdrops: Retractable rollup banners (85x200cm / 120x200cm), outdoor teardrop flags, media press backdrops, and heavy PVC billboards.',
      'Die-Cut Stickers & Labels: Waterproof vinyl packaging stickers, vehicle & fleet branding decals, security warranty seals, barcode tags, and window graphics.',
      'Graphic Design & Branding Works: Complete brand identity systems, logo vectorization, typography guidelines, pitch decks, and digital collateral.',
      'Corporate Apparel & Uniforms: Custom printed African fabric uniforms, executive embroidered polo shirts, event caps, VIP conference lanyards, and badges.',
      'Architectural & Exhibition Framing: Institutional masterplan frames, engraved metal plaques, acrylic showcases, and VIP ceremonial awards.',
    ],
  },
  {
    id: 'brand-ambassadors-signings',
    title: 'Company Brand Ambassadors Signings',
    tagline: 'Celebrity partnerships, influencer contracts & endorsement management',
    iconName: 'Users',
    shortDescription: 'Pairing leading corporations with credible ambassadors for authentic market resonance.',
    fullDescription: 'We identify, vet, negotiate, and execute exclusive brand ambassador agreements with top-tier South Sudanese public figures, sports icons, music artists, and industry influencers. We oversee contract compliance, campaign appearances, and performance ROI.',
    deliverables: [
      'Brand alignment research and ambassador vetting',
      'Legal contract drafting, rights management, and exclusivity agreements',
      'Ambassador signing press conferences and launch media rollouts',
      'Scheduled campaign appearances, social media deliverables, and tour coordination',
    ],
  },
  {
    id: 'jingle-production-adverts',
    title: 'Jingle Production / Adverts',
    tagline: 'Broadcast-quality audio jingles, commercial spots & voiceovers',
    iconName: 'Headphones',
    shortDescription: 'Memorable, high-energy commercial jingles and adverts in English, Juba Arabic, and regional dialects.',
    fullDescription: 'Our sound engineers and lyricists produce catchy, culturally resonant audio jingles that stay in listeners’ minds. Engineered specifically for South Sudan’s radio-first media landscape, our ads drive unmatched brand awareness and immediate product recall.',
    deliverables: [
      'Custom sonic branding, musical jingles, and signature audio logos',
      'Radio advertisement scriptwriting, voicing in multiple local languages',
      'Professional sound mixing, mastering, and broadcast clearance packaging',
      'TV commercial soundtracking, voiceover dubbing, and acoustic design',
    ],
  },
  {
    id: 'outside-catering',
    title: 'Outside Catering',
    tagline: 'Executive corporate dining, summit buffets & VIP banqueting',
    iconName: 'Utensils',
    shortDescription: 'Gourmet catering services tailored for high-profile business meetings, conferences, and galas.',
    fullDescription: 'We deliver exceptional culinary experiences for corporate clientele. Whether catering for a private board luncheon of 12 or an international summit of 1,000 delegates, our culinary team provides hygienic, gourmet, and culturally diverse menus with five-star service.',
    deliverables: [
      'VIP breakfast roundtables, executive coffee breaks, and artisanal pastries',
      'Multi-course hot buffets and plated banquets for corporate conferences',
      'Outdoor cocktail receptions, canapé spreads, and gala evening dinners',
      'Dedicated uniformed banquet waitstaff, chafing setups, and cutlery service',
    ],
  },
  {
    id: 'general-supply',
    title: 'General Supply',
    tagline: 'Corporate office supplies, equipment sourcing & procurement logistics',
    iconName: 'Truck',
    shortDescription: 'Reliable, compliant procurement and supply chain solutions for enterprise requirements.',
    fullDescription: 'We provide institutional procurement support for corporate enterprises, embassies, and development organizations. From IT hardware and office automation systems to branded supplies and event provisions, we guarantee on-time delivery in Juba.',
    deliverables: [
      'Corporate office equipment, computers, printers, and consumables',
      'Conference and event staging materials, badges, and delegate kits',
      'Custom corporate uniforms, safety wear, and promotional apparel',
      'Fast-track local delivery, customs clearance liaisons, and warranty support',
    ],
  },
];

export { CBC_CLIENT_CATEGORIES, CBC_CLIENTS_LIST } from './clientsData';

export const KEY_STATS = [
  { label: 'Corporate Clients Served', value: '70+', change: 'Across 17 Industry Sectors' },
  { label: 'Flagship Event Heritage', value: '2022', change: 'Inception with Juba Auto Show' },
  { label: 'Statutory Registration', value: 'Sept 2023', change: 'Ministry of Justice & Constitutional Affairs' },
  { label: 'Regional Reach', value: 'Pan-African', change: 'South Sudan & East Africa Common Market' },
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'ceo-breakfast-fintech',
    title: 'C-Suite Executive Breakfast: Banking Modernization & Digital FX Solutions',
    subtitle: 'Navigating Foreign Exchange, Mobile Money & Corporate Compliance',
    category: 'Breakfast Roundtable',
    date: 'November 05, 2026',
    time: '07:30 AM – 10:30 AM CAT',
    venue: 'Radisson Blu Hotel Juba',
    address: 'Airport Road, Kololo District, Juba',
    fee: 'Complimentary for Executive & Corporate Members / $120 Guest',
    capacity: '80 Executives',
    seatsLeft: 14,
    image: '/assets/gallery/glc-2026-panel-session.jpg',
    description:
      'A private morning roundtable for Managing Directors, Chief Financial Officers, and treasury heads discussing central banking monetary policy updates, digital payment integrations, and trade finance credit lines.',
    agenda: [
      { time: '07:30 AM', activity: 'Gourmet Breakfast & Welcome Networking' },
      { time: '08:15 AM', activity: 'Briefing: Foreign Exchange Liquidity & Cross-Border Settlement' },
      { time: '09:00 AM', activity: 'Roundtable Discussion with Commercial Bank CEOs' },
      { time: '10:00 AM', activity: 'Executive Q&A and Action Points Summary' },
    ],
    speakers: [
      { name: 'James Gatwech', role: 'Head of Treasury', company: 'Kush Bank South Sudan' },
      { name: 'Grace Achan', role: 'Director of Fintech Innovation', company: 'DigiPay Nile' },
      { name: 'Francis K. Mwangi', role: 'Regional Partner', company: 'KPMG East Africa' },
    ],
    isFeatured: true,
    status: 'Registration Open',
  },
  {
    id: 'women-executive-circle',
    title: 'Women in Corporate Leadership Masterclass & Gala Luncheon',
    subtitle: 'Elevating Female Boardroom Representation & Enterprise Governance',
    category: 'Masterclass',
    date: 'November 26, 2026',
    time: '09:00 AM – 02:00 PM CAT',
    venue: 'Crown Hotel Juba',
    address: 'Hai Matar, Airport Road, Juba',
    fee: 'Included in Membership / $100 General Admission',
    capacity: '120 Participants',
    seatsLeft: 22,
    image: '/assets/events/mandela-nzanzu-networking.jpg',
    description:
      'Dedicated to advancing executive women across South Sudan’s corporate, legal, public, and entrepreneurial sectors. Features masterclasses on board governance, capital raising, and international leadership negotiation.',
    agenda: [
      { time: '09:00 AM', activity: 'Arrival & Welcome Coffee' },
      { time: '09:45 AM', activity: 'Masterclass: Board Readiness & Corporate Governance' },
      { time: '11:15 AM', activity: 'Executive Panel: Breaking Ceilings in Energy & Finance' },
      { time: '12:30 PM', activity: 'Gala Networking Luncheon & Award Presentations' },
    ],
    speakers: [
      { name: 'Hon. Mary Nyibol', role: 'Former Minister & Board Chair', company: 'Equatoria Investment Trust' },
      { name: 'Dr. Rebecca Yar', role: 'CEO', company: 'Juba Medical & Life Sciences Group' },
      { name: 'Amina Hassan', role: 'Managing Partner', company: 'Lex & Nile Legal Consultants' },
    ],
    isFeatured: false,
    status: 'Registration Open',
  },
  {
    id: 'annual-cbc-gala-2026',
    title: 'The CBC Annual Black-Tie Business Gala & Corporate Awards 2026',
    subtitle: 'Celebrating Excellence in Business Leadership, Innovation & Philanthropy',
    category: 'Annual Gala',
    date: 'December 12, 2026',
    time: '06:30 PM – 11:30 PM CAT',
    venue: 'Pyramid Continental Ballroom',
    address: 'Ministries Road, Juba',
    fee: '$150 Single Ticket / $1,200 Corporate Table (10 pax)',
    capacity: '400 VIP Guests',
    seatsLeft: 65,
    image: '/assets/events/glc-grand-hall-pyramid.jpg',
    description:
      'The most prestigious night on South Sudan’s business calendar. An evening of black-tie sophistication, keynote address by international guest speakers, South Sudan Business of the Year Awards, and philanthropic auction.',
    agenda: [
      { time: '06:30 PM', activity: 'Red Carpet Arrival & Champagne Reception' },
      { time: '07:30 PM', activity: 'Welcome Remarks by CBC Executive Board' },
      { time: '08:00 PM', activity: 'Four-Course Gourmet Dinner & Musical Interlude' },
      { time: '09:15 PM', activity: '2026 Corporate Business Circle Excellence Awards' },
      { time: '10:30 PM', activity: 'Executive Networking Lounge & Live Band Performance' },
    ],
    speakers: [
      { name: 'CBC Executive Advisory Council', role: 'Executive Secretariat', company: 'Corporate Business Circle' },
      { name: 'Special Diplomatic Guest', role: 'Ambassador', company: 'East African Community Mission' },
    ],
    isFeatured: true,
    status: 'Registration Open',
  },
];

export interface CBCAward {
  id: string;
  title: string;
  recipient: string;
  presentedBy: string;
  event: string;
  date: string;
  venue: string;
  citation: string;
  motto: string;
  description: string;
  badge: string;
}

export const CBC_AWARDS: CBCAward[] = [
  {
    id: 'glc-2026-event-organizer',
    title: 'The Event Organizer of The Global Logistics Convention 2026',
    recipient: 'The Corporate Business Circle (CBC)',
    presentedBy: 'South Sudan Freight Forwarders Association (SSFFA) & Ministry of Transport',
    event: 'Global Logistics Convention 2026 (7th Edition)',
    date: '25th – 27th August 2026',
    venue: 'Pyramid Continental Hotel, Juba, South Sudan',
    citation: 'Recognition Appreciation Proudly Presented to The Co-Operate Business Circle (CBC) — Event Organizer',
    motto: 'Together for Efficient Trade Logistics',
    description: 'Awarded to Corporate Business Circle for exceptional turnkey planning, strategic marketing, stage production, and executive coordination of the 7th Global Logistics Convention in Juba.',
    badge: 'Official Recognition Trophy',
  },
];

export const ATTENDED_EVENTS: EventItem[] = [
  {
    id: 'east-africa-ceo-investment-forum-nairobi',
    title: 'The East Africa CEO Investment Forum in Nairobi',
    subtitle: '#InvestEastAfrica — High-Level Regional Executive Delegation',
    category: 'High-Level Summit',
    eventType: 'attended',
    date: '17 to 18 September 2026',
    time: 'Two-Day Executive Summit & B2B Deal Rooms',
    venue: 'Nairobi, Kenya',
    address: 'Nairobi Financial District, Kenya',
    fee: 'Executive Delegation Representation',
    capacity: 'Regional C-Suite Delegation',
    seatsLeft: 0,
    image: '/assets/gallery/glc-2026-registration-area.jpg',
    description:
      'The Corporate Business Circle was represented at the prestigious East Africa CEO Investment Forum held in Nairobi on 17–18 September 2026. The CBC executive delegation, led by CEO / Delegate Mr. Nzanzu Tshomba Eli, actively engaged top regional Chief Executives, international venture syndicates, and trade commissioners to build cross-border commercial bridges, attract direct investments into South Sudan, and advocate for integrated regional supply chains.',
    agenda: [
      { time: 'Day 1 Morning', activity: 'Opening Plenary: Unlocking Private Capital in the East African Community' },
      { time: 'Day 1 Midday', activity: 'Cross-Border Infrastructure & Sovereign Trade Financing Roundtables' },
      { time: 'Day 1 Afternoon', activity: 'Bilateral Deal Rooms: South Sudan Corporate Opportunities & Investment Roadmaps' },
      { time: 'Day 2 Morning', activity: 'CEO Dialogue on Digital Trade, Mobile Cross-Border Payments & Banking' },
      { time: 'Day 2 Afternoon', activity: 'Executive Networking Gala & Strategic Alliance Signings' },
    ],
    speakers: [
      { name: 'Mr. Nzanzu Tshomba Eli', role: 'CEO & Delegate', company: 'The Corporate Business Circle (CBC)' },
      { name: 'East African CEOs & Ministers', role: 'Plenary Chairs', company: 'Invest East Africa Council' },
      { name: 'Regional Trade Attaches', role: 'Commercial Partners', company: 'Kenya & EAC Business Chambers' },
    ],
    isFeatured: true,
    status: 'Completed',
    attendeeRole: 'Attended by CBC Leadership (Led by CEO / Delegate Mr. Nzanzu Tshomba Eli)',
    organizerPartner: '#InvestEastAfrica Secretariat, Nairobi',
  },
];

export interface DignitaryMilestone {
  id: string;
  order: number;
  title: string;
  officialDescription: string;
  personage: string;
  organization: string;
  yearContext: string;
  location: string;
  image: string;
  categoryBadge: string;
  historicalSignificance: string;
}

export const CBC_DIGNITARY_MILESTONES: DignitaryMilestone[] = [
  {
    id: 'cbc-team-gen-taban-deng-gai',
    order: 1,
    title: 'CBC Team with Former Vice President Hon. Gen. Taban Deng Gai',
    officialDescription: 'Corporate Business Circle team with Former Vice President Hon Gen Taban Deng Gai.',
    personage: 'Hon. Gen. Taban Deng Gai',
    organization: 'Office of the Vice President & CBC Leadership',
    yearContext: 'Executive State Audience',
    location: 'Juba, South Sudan',
    image: '',
    categoryBadge: 'Vice-Presidential Delegation',
    historicalSignificance: 'High-level executive audience between the Corporate Business Circle leadership delegation and South Sudan Former Vice President Hon. Gen. Taban Deng Gai, focusing on sovereign infrastructure projects, private sector integration, and regional investment corridors.',
  },
  {
    id: 'mandela-nelson-hon-allah-jabu',
    order: 2,
    title: 'Mandela Nelson with Former Mayor of Juba City Hon. Allah Jabu',
    officialDescription: 'Mandela Nelson with the former Major of Juba City Hon Allah Jabu',
    personage: 'Mandela Nelson (CBC Founder & South Sudanese Corporate Executive) & Hon. Michael Allah-Jabu',
    organization: 'Corporate Business Circle (CBC) & Juba City Council',
    yearContext: 'Executive Civic Handshake & Municipal Partnership',
    location: 'Office of the Mayor, Juba City Council Chambers, South Sudan',
    image: '',
    categoryBadge: 'Historic Civic Landmark',
    historicalSignificance: 'South Sudanese corporate executive and CBC Founder Mandela Nelson with former Mayor of Juba City Hon. Michael Allah-Jabu during an official mayoral audience at Juba City Council. Demonstrating strong civic-commercial collaboration, municipal economic support, and automotive infrastructure initiatives for the capital.',
  },
  {
    id: 'mandela-nelson-mgurush-launch',
    order: 3,
    title: 'Mandela Nelson during the Launch of m-Gurush South Sudan',
    officialDescription: 'Mandela Nelson during the launch of MGurush South Sudan',
    personage: 'Mandela Nelson (CBC Founder & South Sudanese Corporate Executive)',
    organization: 'm-Gurush South Sudan & Corporate Business Circle',
    yearContext: 'Pioneering Mobile Financial Services',
    location: 'Juba, South Sudan',
    image: '',
    categoryBadge: 'FinTech Landmark',
    historicalSignificance: 'Mandela Nelson (CBC Founder and South Sudanese corporate leader) on stage during the official commercial launch of m-Gurush South Sudan, the country’s pioneering mobile money and digital financial ecosystem in Juba.',
  },
  {
    id: 'cbc-team-dr-james-wani-igga',
    order: 4,
    title: 'CBC Team with Former Vice President Hon. Dr. James Wani Igga',
    officialDescription: 'Corporate Business Circle team with.teh former Vice President Hon Dr James Wani Igga.',
    personage: 'Hon. Dr. James Wani Igga',
    organization: 'Economic Cluster / Office of the Vice President & CBC Leadership',
    yearContext: 'Executive Economic Dialogue',
    location: 'Juba, South Sudan',
    image: '',
    categoryBadge: 'Vice-Presidential Audience',
    historicalSignificance: 'High-level executive audience and ceremonial presentation between the Corporate Business Circle leadership delegation and South Sudan Former Vice President Hon. Dr. James Wani Igga, deliberating on economic cluster revitalization, private enterprise support, and fiscal stability.',
  },
];

export const PAST_EVENTS: EventItem[] = [
  {
    id: 'south-sudan-corporate-trade-investment-forum',
    title: 'South Sudan High-Level Corporate Trade & Investment Forum',
    subtitle: 'Concluded Flagship Forum — Unlocking Cross-Border Value Chains & EAC Regional Integration',
    category: 'High-Level Summit',
    eventType: 'done',
    date: 'Concluded & Delivered',
    time: 'Two-Day Executive Summit & B2B Deal Rooms',
    venue: 'Pyramid Continental Hotel',
    address: 'Ministries Road, Juba, South Sudan',
    fee: 'Concluded / Official CBC Production',
    capacity: '300+ C-Suite Executives & Regional Trade Dignitaries',
    seatsLeft: 0,
    image: '/assets/events/glc-stage-delegation.jpg',
    description:
      'The landmark corporate forum uniting South Sudan’s C-Suite executives, government dignitaries, regional trade attaches, and development finance institutions. Planned, marketed, and executed with strategic focus on transport corridor infrastructure, regional tariff harmonization, and local manufacturing incentives.',
    agenda: [
      { time: 'Day 1 Plenary', activity: 'Registration, VIP Networking Breakfast & Ministerial Keynote' },
      { time: 'Midday Roundtables', activity: 'Financing Infrastructure & Renewable Energy in South Sudan' },
      { time: 'Bilateral Deal Rooms', activity: 'Executive Luncheon & Cross-Border Private Equity Matchmaking' },
      { time: 'Closing Session', activity: 'Communique Signing & Executive Awards Gala' },
    ],
    speakers: [
      { name: 'Dr. Elizabeth Deng', role: 'Chief Economist', company: 'Horn of Africa Advisory & CBC Board' },
      { name: 'Hon. Michael Ladu', role: 'Permanent Secretary', company: 'Ministry of Trade & Industry' },
      { name: 'Eng. Sarah Alier', role: 'Managing Director', company: 'Nile Energy & Infrastructure Group' },
      { name: 'Peter Taban', role: 'President', company: 'South Sudan Bankers Association' },
    ],
    isFeatured: true,
    status: 'Completed',
    roleOrganized: 'Concluded & Marketed by Corporate Business Circle (CBC)',
    organizerPartner: 'CBC Secretariat in collaboration with Regional Trade Chambers',
  },
  {
    id: 'global-logistics-convention-2026',
    title: 'Global Logistics Convention 2026 (7th Edition)',
    subtitle: 'Planned and Marketed by The Corporate Business Circle (CBC)',
    category: 'High-Level Summit',
    eventType: 'done',
    date: '25, 26 and 27 August 2026',
    time: '3-Day Continental Convention, Expo & Gala Dinner',
    venue: 'Pyramid Continental Hotel',
    address: 'Ministries Road, Juba, South Sudan',
    fee: 'Concluded / Official CBC Production',
    capacity: '450+ Continental Delegates & Ministers',
    seatsLeft: 0,
    image: '/assets/events/bsmart-customs-setup.jpg',
    description:
      'The 7th Edition of the Global Logistics Convention (GLC 2026) was successfully held on 25, 26 and 27 August 2026 at Pyramid Continental Hotel in Juba. Corporate Business Circle (CBC) was the official planning and marketing company, leading the end-to-end design, branding, public relations, high-security protocol, VIP guest hospitality, stagecraft, and commercial logistics. CBC was proudly presented with the prestigious award of "The Event Organizer of The Global Logistics Convention 2026".',
    agenda: [
      { time: '25 August', activity: 'Inaugural Opening Ceremony by Dignitaries, Ministerial Keynotes & Freight Corridor Expo' },
      { time: '26 August', activity: 'Technical Plenary: Customs Harmonization, Port Intermodal Transit & Nimule Corridors' },
      { time: '27 August', activity: 'Executive Resolutions, SSFFA Strategic Communique & Awards Gala at Pyramid Continental' },
    ],
    speakers: [
      { name: 'Hon. Minister of Transport', role: 'Keynote Guest', company: 'Republic of South Sudan' },
      { name: 'South Sudan Freight Forwarders Association (SSFFA)', role: 'Co-Hosts', company: 'SSFFA Leadership' },
      { name: 'The Corporate Business Circle (CBC)', role: 'Official Event Organizer', company: 'CBC Executive Team' },
      { name: 'Regional Port Authorities', role: 'Corridor Leaders', company: 'Mombasa & Dar es Salaam Delegations' },
    ],
    isFeatured: true,
    status: 'Completed',
    roleOrganized: 'Planned and Marketed by The Corporate Business Circle (CBC)',
    awardWon: 'The Event Organizer of The Global Logistics Convention 2026',
    organizerPartner: 'South Sudan Freight Forwarders Association (SSFFA) & Ministry of Transport',
    galleryUrl: 'https://tomemediaco.pixieset.com/glc-2/',
    photosCount: 100,
  },
  {
    id: 'juba-auto-show',
    title: 'The Juba Auto Show (2022 to 2025)',
    subtitle: 'CBC Flagship Inception Automotive Festival & Commercial Machinery Expo',
    category: 'High-Level Summit',
    eventType: 'done',
    date: 'Annual Editions: 2022, 2023, 2024, 2025',
    time: 'Annual Landmark Automotive & B2B Exhibition',
    venue: 'Pyramid Continental & Juba City Grounds',
    address: 'Ministries Road & Custom Road Area, Juba',
    fee: 'Concluded / Inception Hallmark',
    capacity: '2,000+ Attendees, 35+ Dealerships & Heavy Machinery Exhibitors',
    seatsLeft: 0,
    image: '/assets/juba-autoshow/autoshow-organizers-2nd-edition.jpg',
    description:
      'The landmark flagship gathering where The Corporate Business Circle was born in 2022. Running consecutively from 2022 through 2025, the Juba Auto Show connects automobile lovers, leading car dealerships, commercial machinery suppliers (including David Machinery and LTA), corporate fleet operators, and financial institutions for an electrifying showcase of modern vehicle engineering, supercars, off-road buggies, and commercial fleet trade deals.',
    galleryImages: [
      {
        url: '/assets/juba-autoshow/autoshow-organizers-2nd-edition.jpg',
        caption: 'Welcome to the 2nd Edition of Juba Auto Show - Organizing Team & Sponsor Stage Billboard',
        category: 'Organizing Committee & Sponsors',
      },
      {
        url: '/assets/juba-autoshow/autoshow-blue-jeep.jpg',
        caption: 'Juba Auto Show 4x4 Off-Road Exhibition - Lifted Electric-Blue Jeep Showcase with Mandela Nelson',
        category: '4x4 Off-Road Exhibition',
      },
      {
        url: '/assets/juba-autoshow/autoshow-street-convoy.jpg',
        caption: 'Juba Auto Show City Motorcade & Street Convoy - Custom Jeep & Buggy Parade under Juba City Council Billboard',
        category: 'Street Motorcade Convoy',
      },
      {
        url: '/assets/juba-autoshow/autoshow-courtyard-exhibition.jpg',
        caption: 'Juba Auto Show Courtyard Vehicle Exhibition - Supercars & Off-Road Buggy Showcase at Venue',
        category: 'Courtyard Exhibition',
      },
      {
        url: '/assets/gallery/juba-autoshow-press-briefing.jpg',
        caption: 'Official Promotional Flier & Press Briefing Session at Pyramid Continental Hotel',
        category: 'Official Session Graphic',
      },
    ],
    agenda: [
      { time: 'Annual Series', activity: 'Executive Dealership Ribbon Cutting, Fleet Showcase & Commercial Tenders' },
      { time: 'Exhibition', activity: 'Supercar & Buggy City Cruise, Sound Off & Automotive Enthusiast Parade' },
      { time: 'B2B Networking', activity: 'Asset Financing Matchmaking with Commercial Banks & Corporate Insurers' },
      { time: 'Gala Night', activity: 'CBC Dealership Excellence Awards & Executive Networking Cocktail' },
    ],
    speakers: [
      { name: 'CBC Executive Secretariat', role: 'Event Convener & Creator', company: 'The Corporate Business Circle' },
      { name: 'Automotive & Machinery Leaders', role: 'Exhibitors', company: 'David Machinery, LTA, Kilkilu & Partners' },
      { name: 'Commercial Fleet Managers', role: 'Corporate Buyers', company: 'Leading South Sudan Enterprises' },
    ],
    isFeatured: true,
    status: 'Completed',
    roleOrganized: 'Conceived, Planned, Marketed & Managed by The Corporate Business Circle (CBC)',
    organizerPartner: 'South Sudan Automotive & Machinery Council',
    photosCount: 80,
    youtubeId: '5K_wmloc7Ck',
    videoTitle: 'JUBA AUTO SHOW PRESS BRIEFING AT PYRAMID CONTINENTAL HOTEL',
    videoSource: 'Urban FM 99.5 Broadcast',
  },
  {
    id: 'eac-trade-facilitation-forum',
    title: 'South Sudan–EAC Trade Corridor & Customs Facilitation Forum',
    subtitle: 'Streamlining Cross-Border Logistics and Tariff Harmonization',
    category: 'Breakfast Roundtable',
    eventType: 'done',
    date: 'January 2026',
    time: '08:00 AM – 01:30 PM CAT',
    venue: 'Crown Hotel Juba',
    address: 'Hai Matar, Airport Road, Juba',
    fee: 'Concluded',
    capacity: '140 Delegates',
    seatsLeft: 0,
    image: '/assets/events/mtn-ict-skills-centre.jpg',
    description:
      'Focused dialogue between freight forwarders, commercial importers, and revenue authorities on Nimule border post clearance, transit protocols, and common market advantages.',
    agenda: [
      { time: '08:00 AM', activity: 'Breakfast Briefing & Trade Flow Overview' },
      { time: '09:30 AM', activity: 'Customs & Port Logistics Panel Discussion' },
      { time: '11:30 AM', activity: 'Private Sector Action Recommendations' },
    ],
    speakers: [
      { name: 'Emmanuel Taban Lokolong', role: 'Executive Director', company: 'CBC Secretariat Juba' },
      { name: 'Logistics Working Group', role: 'Chamber Representatives', company: 'South Sudan Freight Council' },
    ],
    isFeatured: false,
    status: 'Completed',
    roleOrganized: 'Facilitated by CBC Executive Secretariat',
  },
  {
    id: 'c-suite-governance-masterclass',
    title: 'Executive Boardroom Governance & ESG Compliance Masterclass',
    subtitle: 'Fostering Transparency and Institutional Resilience in Juba',
    category: 'Masterclass',
    eventType: 'done',
    date: 'November 2025',
    time: '09:00 AM – 03:00 PM CAT',
    venue: 'Pyramid Continental Executive Chamber',
    address: 'Ministries Road, Juba',
    fee: 'Concluded',
    capacity: '75 Board Members',
    seatsLeft: 0,
    image: '/assets/gallery/delegation-audience-group.jpg',
    description:
      'Intensive certification session on international corporate governance frameworks, board audit obligations, and risk mitigation strategies for growing South Sudanese enterprises.',
    agenda: [
      { time: '09:00 AM', activity: 'Principles of Board Accountability & Audit Committee Structure' },
      { time: '11:30 AM', activity: 'Case Studies: ESG Integration in Frontier Markets' },
      { time: '01:30 PM', activity: 'Executive Certification & Networking Luncheon' },
    ],
    speakers: [
      { name: 'Sarah Ayen Deng', role: 'Chair, Financial Council', company: 'CBC Governance Board' },
      { name: 'Senior Advisory Partners', role: 'Corporate Governance Specialists', company: 'East Africa Advisory' },
    ],
    isFeatured: false,
    status: 'Completed',
    roleOrganized: 'Delivered by CBC Capacity Building Division',
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'associate',
    name: 'Associate / Emerging SME Circle',
    badge: 'Growth Tier',
    priceUSD: 750,
    period: 'per year',
    tagline: 'Ideal for established small-to-medium businesses, professional consultancies, and emerging innovators.',
    idealFor: 'Growing SMEs, Boutique Law & Audit Firms, Tech Startups with 5+ staff',
    keyBenefits: [
      'Access to all regular CBC Breakfast Roundtables & Masterclasses',
      'Listing in the Official CBC Member Directory',
      'Invitations to 2 Annual Business Matchmaking Sessions',
      'Exclusive member pricing for Annual Gala tickets (20% off)',
      'Access to CBC Economic Intelligence briefings & newsletters',
    ],
    allPerks: [
      '2 Designated Delegate Passes per event',
      'Company profile in online directory',
      'Quarterly EAC Trade & Tariff updates',
      'Access to WhatsApp Executive Community',
      'Certificate of CBC Membership',
    ],
    colorTheme: 'slate',
  },
  {
    id: 'corporate',
    name: 'Corporate Enterprise Circle',
    badge: 'Most Popular',
    priceUSD: 2500,
    period: 'per year',
    tagline: 'Designed for established medium-to-large corporations, regional firms, and financial institutions in Juba.',
    idealFor: 'Commercial Banks, Telecoms, Construction Firms, Energy Companies, Logistics Providers',
    isPopular: true,
    keyBenefits: [
      'Complimentary access for 4 C-Suite executives to all CBC forums',
      'Priority seat reservations at Ministerial & Diplomatic roundtables',
      'Full-page feature in the Annual South Sudan Corporate Review',
      'Complimentary Corporate Table (10 seats) at the Annual Gala',
      'Direct matchmaking with incoming regional trade delegations',
      'Opportunity to sponsor or co-host a Sectoral Masterclass',
    ],
    allPerks: [
      '4 Permanent Executive Delegate badges',
      'Prominent logo placement on CBC website & event banners',
      'Direct facilitation of government & regulatory consultative meetings',
      'Full access to CBC VIP Business Lounge in Juba',
      'Priority access to B2B partnership deals',
      'Bespoke trade policy advocacy representation',
    ],
    colorTheme: 'gold',
  },
  {
    id: 'executive-diplomatic',
    name: 'Executive & Diplomatic Circle',
    badge: 'C-Suite & Multinationals',
    priceUSD: 5000,
    period: 'per year',
    tagline: 'Premier tier for industry leaders, multinational corporations, embassies, and development finance institutions.',
    idealFor: 'Multinational Corporations, Embassies & Trade Missions, Conglomerates, DFIs, Tier-1 Banks',
    keyBenefits: [
      'Unlimited executive delegate access to all CBC sessions & summits',
      'Exclusive invitations to Closed-Door Ministerial & Ambassador Dinners',
      'Keynote speaking & panel moderation opportunities',
      'VIP Corporate Table at the Annual Black-Tie Gala in Juba',
      'Customized business intelligence reports tailored to your sector',
      'Direct seat on the CBC Policy & Regulatory Advisory Council',
    ],
    allPerks: [
      '8 Executive Passes across all departments',
      'Exclusive branding across all flagship summit collateral',
      'Bi-annual private dinner with South Sudan economic ministers',
      'VIP Airport Protocol facilitation support for visiting delegations',
      'Dedicated CBC Relationship Concierge Officer',
      'Full archive of proprietary sector research & legal analyses',
    ],
    colorTheme: 'navy',
  },
  {
    id: 'founding-patron',
    name: 'Founding Patron Circle',
    badge: 'By Invitation / High Distinction',
    priceUSD: 10000,
    period: 'per year',
    tagline: 'The ultimate distinction for visionary institutions actively architecting South Sudan’s commercial landscape.',
    idealFor: 'Major Conglomerates, National Anchors, Key Energy Producers, Sovereign & Private Equity Funds',
    keyBenefits: [
      'Permanent advisory position on the CBC Executive Advisory Council',
      'Co-branding on all CBC international trade mission delegations',
      'Presidential & High-Level State Banquet invitations',
      'Two VIP Corporate Tables (20 seats) at the Annual Gala',
      'Dedicated research paper published under joint CBC-Patron auspices',
      'Lifetime recognition in CBC Hall of Business Distinction',
    ],
    allPerks: [
      'All perks of Executive Diplomatic Circle included',
      'Direct liaison with international chambers of commerce in Nairobi, Kampala, Addis Ababa, and Dubai',
      'Executive boardroom meeting room usage at CBC Secretariat',
      'Permanent bespoke plaque in CBC Executive Hall',
    ],
    colorTheme: 'emerald',
  },
];

export const SECTORS: SectorItem[] = [
  {
    id: 'banking-fintech',
    name: 'Banking, FinTech & Capital Markets',
    iconName: 'Building2',
    description: 'Modernizing financial infrastructure, mobile wallet systems, agency banking, and cross-border currency settlement across Juba and rural trade centers.',
    growthRate: '+24% YoY growth',
    opportunities: ['Mobile Money & Remittance Infrastructure', 'Trade Finance Guarantees & Letters of Credit', 'SME Micro-Lending & Digital Accounting'],
    keyHighlights: 'Over 12 commercial banks and fintech operators active in CBC working groups.',
  },
  {
    id: 'energy-oil-renewables',
    name: 'Energy, Infrastructure & Renewables',
    iconName: 'Zap',
    description: 'Catalyzing public-private partnerships in solar mini-grids, off-grid industrial power, petroleum distribution logistics, and power grid interconnectivity with Uganda and Ethiopia.',
    growthRate: 'High Priority Sector',
    opportunities: ['Commercial & Industrial Solar Power Plants', 'Fuel Storage & Modern Distribution Networks', 'Hydroelectric Feasibility Along the White Nile'],
    keyHighlights: 'Direct liaison with Ministry of Energy and regional EPC contractors.',
  },
  {
    id: 'agribusiness-value-addition',
    name: 'Agribusiness & Value Addition',
    iconName: 'Wheat',
    description: 'Unlocking South Sudan’s fertile agricultural zones in Equatoria and Bahr el Ghazal through mechanized farming, cold chain logistics, and grain processing mills.',
    growthRate: '+38% export potential',
    opportunities: ['Grain Silos & Seed Processing Facilities', 'Edible Oil Extraction & Packaging', 'Cold Storage Logistics Corridors along Nimule Road'],
    keyHighlights: 'Connecting farmers and commercial off-takers across the EAC common market.',
  },
  {
    id: 'construction-real-estate',
    name: 'Construction & Commercial Real Estate',
    iconName: 'Hotel',
    description: 'Developing contemporary office towers, diplomatic housing complexes, commercial logistics hubs, and modern paved arterial roadways in Juba.',
    growthRate: '+19% annualized',
    opportunities: ['Grade-A Corporate Office Developments', 'Warehousing Parks in Gumbo & Bilpam Corridors', 'Hospitality & Conference Resorts on the Nile'],
    keyHighlights: 'Facilitating international joint ventures in urban master-planning.',
  },
  {
    id: 'logistics-trade-corridors',
    name: 'Logistics, Aviation & Trade Corridors',
    iconName: 'Truck',
    description: 'Streamlining cross-border freight from Mombasa & Dar es Salaam ports via Malaba/Nimule, air cargo handling at Juba International, and river transport on the White Nile.',
    growthRate: 'Strategic Gateway',
    opportunities: ['One-Stop Border Post (OSBP) Clearing Tech', 'Cold Chain Fleet Management', 'River Freight Barges connecting Juba to Malakal and Renk'],
    keyHighlights: 'Direct advocacy on customs harmonization and transit time reduction.',
  },
  {
    id: 'telecoms-digital-economy',
    name: 'Telecoms, Tech & Professional Services',
    iconName: 'Cpu',
    description: 'Expanding fiber optic connectivity, cloud data infrastructure, enterprise ERP deployment, legal advisory, and accounting compliance standards.',
    growthRate: '+31% adoption',
    opportunities: ['Fiber-to-the-Business Broadband Networks', 'Enterprise Cybersecurity & Data Centers', 'Corporate Governance & Statutory Audit Practices'],
    keyHighlights: 'Advancing Juba as a digital hub for East Africa’s emerging markets.',
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'eac-tariff-harmonization-juba',
    title: 'South Sudan’s Path to Full EAC Tariff Harmonization: Opportunities for Corporate Importers',
    category: 'Trade & Policy',
    date: 'August 24, 2026',
    readTime: '6 min read',
    summary: 'An executive analysis of the latest East African Community Common External Tariff (CET) milestones and how Juba manufacturers can leverage zero-duty raw materials.',
    content: [
      'The Republic of South Sudan’s continued integration into the East African Community (EAC) represents the single most consequential economic transformation for businesses operating in Juba.',
      'Under recent harmonization protocols signed in Arusha, manufacturers based in South Sudan now benefit from reduced import duties on key capital equipment and intermediate manufacturing goods.',
      'Key recommendations for CBC corporate members include structuring regional subsidiary entities to take advantage of Rules of Origin certifications, which allow duty-free access across Kenya, Uganda, Tanzania, Rwanda, Burundi, and DRC.',
      'The Corporate Business Circle Trade Advisory Committee continues to represent member interests at national trade facilitation committees.',
    ],
    author: {
      name: 'Dr. Elizabeth Deng',
      role: 'Chief Economic Advisor, CBC',
    },
    tags: ['EAC Integration', 'Customs & Tariffs', 'Cross-Border Trade', 'Juba Logistics'],
  },
  {
    id: 'commercial-solar-financing-juba',
    title: 'Commercial & Industrial Solar: Lowering Operational Overhead for Juba Enterprises',
    category: 'Energy & Sustainability',
    date: 'August 12, 2026',
    readTime: '5 min read',
    summary: 'How leading hotels, banks, and processing facilities in Juba are slashing heavy diesel reliance by up to 60% with rooftop and ground-mounted solar-plus-storage models.',
    content: [
      'Power costs have historically constituted one of the largest operating expenditures for businesses in Juba, where reliance on diesel generators has been standard for over a decade.',
      'However, a significant influx of Development Finance Institution (DFI) blended credit lines and specialized commercial solar EPC providers has dramatically altered the financial equation.',
      'Case studies from three CBC member enterprises illustrate that hybrid solar systems with lithium-ion storage deliver payback periods under 3.4 years, while ensuring 99.9% uptime during peak business hours.',
      'CBC is hosting an Energy Transition Workshop in October to connect member facilities directly with accredited solar developers and financing syndicates.',
    ],
    author: {
      name: 'Eng. Sarah Alier',
      role: 'Head of Infrastructure Committee, CBC',
    },
    tags: ['Solar Energy', 'Cost Optimization', 'Renewables', 'Industrial Operations'],
  },
  {
    id: 'corporate-governance-audit-standards',
    title: 'Strengthening Corporate Governance: Attracting Foreign Direct Investment to South Sudan',
    category: 'Governance & Legal',
    date: 'July 29, 2026',
    readTime: '4 min read',
    summary: 'Why transparent financial reporting, independent board oversight, and anti-money laundering compliance are unlocking millions in regional venture capital and debt financing.',
    content: [
      'As international institutional investors evaluate opportunities in South Sudan, the primary differentiator between successful capital raises and stalled negotiations remains the quality of corporate governance.',
      'Firms that institute independent board committees, publish annual audited financials according to IFRS standards, and maintain clear beneficial ownership structures command significant valuation premiums.',
      'The Corporate Business Circle Masterclass Series in Board Readiness has already certified 65 executive directors, helping elevate South Sudanese enterprises on the continental stage.',
    ],
    author: {
      name: 'Emmanuel Taban Lokolong',
      role: 'Executive Director, CBC',
    },
    tags: ['Corporate Governance', 'FDI', 'Boardroom Excellence', 'Compliance'],
  },
];

export const FAQS = [
  {
    question: 'What is Corporate Business Circle (CBC) and who can join?',
    answer:
      'Corporate Business Circle is South Sudan’s premier executive business membership organization based in Juba. Membership is open to registered corporations, SMEs, financial institutions, embassies, development agencies, and executive business leaders operating in or expanding into South Sudan.',
  },
  {
    question: 'Where are CBC events held in Juba?',
    answer:
      'Flagship summits and executive roundtables are hosted at premier business venues including the Pyramid Continental Hotel, Radisson Blu Hotel Juba, Crown Hotel, and the private CBC Executive Lounge in the Airport Road corporate district.',
  },
  {
    question: 'How do I register for upcoming events and summits?',
    answer:
      'You can register directly through our online Event Registration Form on this website. Members receive complimentary or heavily discounted delegate passes. Non-members and guest delegates can register and receive instant email confirmation.',
  },
  {
    question: 'What is the process for Corporate Membership approval?',
    answer:
      'Prospective members complete our Membership Application Form. Our Membership Committee reviews the business credentials within 3 business days, after which an official invoice and welcome onboarding package are issued.',
  },
  {
    question: 'How does CBC support international investors entering South Sudan?',
    answer:
      'CBC provides executive matchmaking, introductions to accredited local partners, regulatory briefings with government ministries, and logistical protocol support to ensure smooth, compliant market entry.',
  },
];

export interface CBCVideoItem {
  id: string;
  title: string;
  subtitle: string;
  source: string;
  sourceChannel?: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  duration?: string;
  category: string;
  date: string;
  venue: string;
  description: string;
  featured?: boolean;
}

export const CBC_VIDEOS: CBCVideoItem[] = [
  {
    id: 'juba-auto-show-press-briefing',
    title: 'JUBA AUTO SHOW PRESS BRIEFING AT PYRAMID CONTINENTAL HOTEL',
    subtitle: 'Official Press Conference & Media Launch Broadcast by Urban FM 99.5',
    source: 'Urban FM 99.5 Broadcast',
    sourceChannel: 'https://www.youtube.com/@UrbanFM99.5',
    youtubeId: '5K_wmloc7Ck',
    youtubeUrl: 'https://youtu.be/5K_wmloc7Ck?feature=shared',
    thumbnail: 'https://i.ytimg.com/vi/5K_wmloc7Ck/hqdefault.jpg',
    duration: '04:12',
    category: 'Flagship Event Press Conference',
    date: 'Official Media Launch',
    venue: 'Pyramid Continental Hotel, Juba',
    description:
      'Official press conference and broadcast briefing covered live by Urban FM 99.5 at Pyramid Continental Hotel in Juba. Announcing the landmark Juba Auto Show, uniting automobile dealers, commercial machinery suppliers (David Machinery, LTA), corporate fleet operators, and financial institutions under The Corporate Business Circle.',
    featured: true,
  },
  {
    id: 'glc-2026-summit-media',
    title: '7th Global Logistics Convention 2026 — Executive Summit Media',
    subtitle: 'Turnkey Summit Planning, Marketing & Management by Corporate Business Circle',
    source: 'CBC Media & Logistics Secretariat',
    sourceChannel: 'https://tomemediaco.pixieset.com/glc-2/',
    youtubeId: '',
    youtubeUrl: 'https://tomemediaco.pixieset.com/glc-2/',
    thumbnail: '/assets/events/glc-grand-hall-pyramid.jpg',
    duration: 'Official Gallery Archive',
    category: 'International Convention & Awards',
    date: '25th – 27th August 2026',
    venue: 'Pyramid Continental Hotel, Juba',
    description:
      'Comprehensive visual documentation and high-level stakeholder dialogues from the 7th Global Logistics Convention 2026 at Pyramid Continental Hotel. Awarded "Event Organizer of The Global Logistics Convention 2026" to The Corporate Business Circle.',
    featured: false,
  },
];

