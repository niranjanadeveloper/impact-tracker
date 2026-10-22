export const DEMO_STATS = [
  {
    id: 'capital',
    target: 4.8,
    prefix: '₹',
    suffix: ' Cr+',
    label: 'Community Support Coordinated',
    subtext: 'Directly reaching grassroots initiatives across India',
    decimals: 1,
  },
  {
    id: 'projects',
    target: 1250,
    prefix: '',
    suffix: '+',
    label: 'Community Projects Supported',
    subtext: 'Led by village panchayats and local volunteer groups',
    decimals: 0,
  },
  {
    id: 'trees',
    target: 185000,
    prefix: '',
    suffix: '+',
    label: 'Trees & Mangroves Planted',
    subtext: 'Monitored with regular community survival checks',
    decimals: 0,
  },
  {
    id: 'beneficiaries',
    target: 65000,
    prefix: '',
    suffix: '+',
    label: 'Students & Families Impacted',
    subtext: 'Benefiting from clean water, solar light, and green spaces',
    decimals: 0,
  },
];

export const CAUSE_CATEGORIES = [
  { id: 'all', label: 'All Causes' },
  { id: 'reforestation', label: 'Trees & Forests' },
  { id: 'water', label: 'Clean Drinking Water' },
  { id: 'energy', label: 'Solar & Clean Energy' },
  { id: 'regenerative', label: 'Natural Farming' },
  { id: 'marine', label: 'Lakes & Mangroves' },
];

export const STATUS_OPTIONS = [
  { id: 'all', label: 'All Statuses' },
  { id: 'ongoing', label: 'Active & Ongoing' },
  { id: 'completed', label: 'Goal Completed' },
];

export const IMPACT_PROJECTS = [
  {
    id: 'proj-1',
    category: 'reforestation',
    status: 'ongoing',
    title: 'Kaveri Basin Native Agroforestry & Tree Planting',
    location: 'Thanjavur & Erode, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    description: 'Working with smallholder farmers and village panchayats to plant native neem, jamun, and teak saplings along river corridors to revive groundwater and soil fertility.',
    raised: 420000,
    goal: 500000,
    progress: 84,
    keyMetric: '42,000 Native Saplings Planted',
    secondaryMetric: '120 Farming Families Supported',
    verificationMethod: 'Geo-tagged plantation photos & Panchayat audit',
    lastVerified: 'Updated 2 days ago',
    verifier: 'Cauvery Green Volunteers Trust',
    carbonEst: '1,200 t CO2 estimated storage',
    keywords: ['kaveri', 'trees', 'tamil nadu', 'forest', 'farmers', 'saplings', 'neem'],
    auditDetails: {
      ndviIndex: '84% of saplings healthy & surviving at 12 months',
      milestones: [
        'Seedling nursery germination: Completed and verified',
        'Distribution to 120 farmers: Completed with sign-offs',
        'Post-monsoon survival check: Ongoing with field volunteers',
      ],
      ipfsProofHash: 'VOUCHER-TN-2026-084 (Panchayat verified)',
    },
  },
  {
    id: 'proj-2',
    category: 'water',
    status: 'ongoing',
    title: 'Clean Drinking Water for Rural Primary Schools',
    location: 'Yavatmal & Chandrapur, Maharashtra',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=1200&q=80',
    description: 'Installing reliable gravity and solar-assisted water filtration units across village schools with high fluoride contamination, reducing waterborne illness among school children.',
    raised: 285000,
    goal: 300000,
    progress: 95,
    keyMetric: '18 School RO Filtration Units Installed',
    secondaryMetric: '4,200 Students with Daily Safe Water',
    verificationMethod: 'Water purity lab tests & School Committee sign-offs',
    lastVerified: 'Updated yesterday',
    verifier: 'Vidarbha Gramin Jal Abhiyan',
    carbonEst: 'Eliminates wood-boiling emissions',
    keywords: ['water', 'schools', 'maharashtra', 'yavatmal', 'drinking water', 'students', 'filtration'],
    auditDetails: {
      ndviIndex: 'Purity standard: 99.4% compliant with Indian potable norms',
      milestones: [
        'Water sample lab screening: Completed across 18 schools',
        'Filter installation & plumbing: 18 of 20 units installed',
        'Teacher & student water caretakers trained: Complete',
      ],
      ipfsProofHash: 'AUDIT-MH-2026-192 (School committee sealed)',
    },
  },
  {
    id: 'proj-3',
    category: 'marine',
    status: 'ongoing',
    title: 'Sundarbans Coastal Mangrove Protection & Women Livelihoods',
    location: 'Gosaba & Canning, Sundarbans, West Bengal',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Partnering with coastal women’s self-help groups to raise mangrove nurseries and fortify tidal river bunds, shielding vulnerable island villages from cyclone storm surges.',
    raised: 310000,
    goal: 400000,
    progress: 77.5,
    keyMetric: '15 Hectares Mangrove Embankments Restored',
    secondaryMetric: '85 Women Self-Help Group Stewards',
    verificationMethod: 'Field inspections & geo-tagged survival records',
    lastVerified: 'Updated 4 days ago',
    verifier: 'Sundarbans Coastal Community Trust',
    carbonEst: 'Vital coastal storm buffer',
    keywords: ['sundarbans', 'mangroves', 'bengal', 'women', 'coastal', 'climate', 'wetlands'],
    auditDetails: {
      ndviIndex: 'Mangrove sapling survival rate: 89% in tidal mudflats',
      milestones: [
        'Seedling collection & nursery setup: Completed',
        'Tidal bund reinforcement planting: 77% completed',
        'Stewardship wage disbursement to self-help groups: Active',
      ],
      ipfsProofHash: 'COMMUNITY-WB-2026-033 (Local SHG audited)',
    },
  },
  {
    id: 'proj-4',
    category: 'regenerative',
    status: 'completed',
    title: 'Tribal Heirloom Millets & Traditional Organic Farming',
    location: 'Koraput & Rayagada, Odisha',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    description: 'Empowering tribal smallholders to cultivate drought-hardy traditional millets (ragi, kodo, kutki) using organic compost and indigenous seeds without costly chemical fertilizers.',
    raised: 200000,
    goal: 200000,
    progress: 100,
    keyMetric: '350 Tribal Farmers Adopted Natural Bio-inputs',
    secondaryMetric: '12 Heirloom Millet Seed Varieties Preserved',
    verificationMethod: 'Seed bank documentation & harvest weighment receipts',
    lastVerified: 'Milestone fully completed',
    verifier: 'Odisha Desi Beej Sangha',
    carbonEst: 'Chemical-free soil rejuvenation',
    keywords: ['millets', 'odisha', 'tribal', 'organic', 'farming', 'seeds', 'koraput'],
    auditDetails: {
      ndviIndex: 'Zero chemical fertilizer usage verified across 350 plots',
      milestones: [
        'Heirloom seed library setup: 100% complete',
        'Farmer workshops on organic jeevamrutha: 100% complete',
        'Cooperative harvest collection and fair price sales: Completed',
      ],
      ipfsProofHash: 'HARVEST-OD-2026-104 (Farmer cooperative verified)',
    },
  },
  {
    id: 'proj-5',
    category: 'energy',
    status: 'ongoing',
    title: 'Solar Study Centers & Digital Labs for Hill Villages',
    location: 'Chamoli & Pauri Garhwal, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80',
    description: 'Equipping remote Himalayan schools with rooftop solar panels and battery storage to ensure uninterrupted evening study hours during winter mountain power cuts.',
    raised: 340000,
    goal: 400000,
    progress: 85,
    keyMetric: '8 Solar-Powered Community Study Centers',
    secondaryMetric: '650 Village Children Attending Evening Classes',
    verificationMethod: 'Solar inverter logs & monthly attendance audits',
    lastVerified: 'Updated 1 week ago',
    verifier: 'Himalayan Rural Light Foundation',
    carbonEst: 'Replaces kerosene lamps & diesel generators',
    keywords: ['solar', 'uttarakhand', 'students', 'education', 'himalayas', 'clean energy', 'chamoli'],
    auditDetails: {
      ndviIndex: '100% uptime during winter evening study hours',
      milestones: [
        'Solar panel & battery installation: 8 of 8 schools active',
        'Digital study tablet setup: Completed',
        'Village youth trained as solar caretakers: Complete',
      ],
      ipfsProofHash: 'SOLAR-UK-2026-077 (Village council certified)',
    },
  },
  {
    id: 'proj-6',
    category: 'marine',
    status: 'ongoing',
    title: 'Bengaluru Urban Lake & Bio-Canopy Rejuvenation',
    location: 'Sarjapur & Whitefield, Bengaluru, Karnataka',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    description: 'Citizen-driven restoration of dried-up urban lakes, removing debris, planting native wetland reeds to naturally filter runoff, and recharging local borewells.',
    raised: 480000,
    goal: 600000,
    progress: 80,
    keyMetric: '2 Urban Lakes Desilted & Bunded',
    secondaryMetric: '6,500 Native Reeds & Miyawaki Trees Planted',
    verificationMethod: 'Citizen volunteer logs & groundwater table readings',
    lastVerified: 'Updated 3 days ago',
    verifier: 'Bengaluru Water Warriors Collective',
    carbonEst: 'Urban cooling & bird sanctuary habitat',
    keywords: ['bengaluru', 'lake', 'karnataka', 'urban', 'water', 'volunteers', 'city'],
    auditDetails: {
      ndviIndex: 'Groundwater table in surrounding wells rose by 1.8 meters',
      milestones: [
        'Lake inlet desilting & cleanup drives: Completed with 400 volunteers',
        'Native wetland wetland reed beds: 80% planted',
        'Perimeter fencing & walking track tree plantation: Ongoing',
      ],
      ipfsProofHash: 'CITIZEN-KA-2026-215 (Resident trust audited)',
    },
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Clear Goals & Direct Community Ownership',
    summary: 'Every initiative is initiated by village panchayats, self-help groups, or neighborhood citizen trusts who understand the ground realities best.',
    points: [
      'Co-designed with local panchayat committees and resident volunteers',
      'Transparent budget estimates with zero unnecessary middlemen',
      'Prioritizes local employment and fair wages for village caretakers',
    ],
  },
  {
    step: '02',
    title: 'Public Progress & Step-by-Step Milestones',
    summary: 'Support is released in planned stages as work is verified, rather than being disbursed blindly upfront.',
    points: [
      'Geo-tagged photos and purchase vouchers uploaded at each milestone',
      'Open updates visible to all volunteers, contributors, and the community',
      'Clear tracking so you can see where every rupee is utilized',
    ],
  },
  {
    step: '03',
    title: 'Long-term Care & Community Stewardship',
    summary: 'A project does not end when saplings are planted or water filters are installed. We focus on long-term survival and maintenance.',
    points: [
      'Locally appointed caretakers ensure sapling survival and filter upkeep',
      'Regular water quality tests and tree count audits',
      'Ongoing community volunteer days to keep neighbors involved',
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Earlier, getting support for our village sapling nursery meant months of paperwork. With ImpactTracker, we share simple photo updates directly and people can see our saplings growing week by week.',
    name: 'Dr. Meenakshi Sundaram',
    role: 'Village Panchayat Coordinator',
    org: 'Thanjavur Farmers Trust, Tamil Nadu',
    metric: '42,000+ trees growing with 84% survival rate',
  },
  {
    quote: 'I joined the lake cleanup drive through the website. It was inspiring to see ₹4,80,000 raised transparently and watch the silt cleared with our own eyes alongside 400 fellow volunteers.',
    name: 'Pooja Hegde',
    role: 'Student & Volunteer Coordinator',
    org: 'Bengaluru Water Warriors, Karnataka',
    metric: '2 lakes rejuvenated with community participation',
  },
  {
    quote: 'Our school now has clean drinking water every day. The progress was clear from day one, and our local technician is trained to maintain the filters regularly.',
    name: 'Rajeshwar Patil',
    role: 'Headmaster & Educator',
    org: 'Zilla Parishad High School, Vidarbha',
    metric: '18 school water filters operating daily',
  },
];

export const FAQS = [
  {
    question: 'How do I know where my support or contribution goes?',
    answer: 'Every project lists clear milestones (such as buying saplings, installing filters, or building water bunds). As work progresses, local teams upload geo-tagged photos, receipts, and progress updates so you can see the tangible results on the ground.'
  },
  {
    question: 'Are all amounts shown in Indian Rupees?',
    answer: 'Yes, all project goals, contributions, and community estimates on ImpactTracker are calculated and displayed in Indian Rupees (₹) using standard Indian numbering.'
  },
  {
    question: 'How can students, working professionals, and volunteers participate?',
    answer: 'You can contribute funds toward specific project milestones, join weekend volunteer tree plantation or lake cleanup drives in your city, or help local schools test water quality.'
  },
  {
    question: 'Who decides which community projects get listed?',
    answer: 'Projects are submitted by registered grassroots trusts, village panchayats, and verified community self-help groups. Our review team checks the feasibility, local permissions, and community need before listing.'
  },
  {
    question: 'What happens after the project goal is completed?',
    answer: 'Unlike one-time campaigns, projects enter a stewardship phase where local caretakers submit quarterly health updates (such as tree survival rates and water filter maintenance logs) to ensure lasting benefits.'
  }
];
