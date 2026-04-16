export interface Memory {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const categories = [
  'All',
  'Office Events',
  'Successful Projects',
  'Team Outings',
  'Awards',
  'Celebrations',
];

export const memories: Memory[] = [
  {
    id: 1,
    title: 'Annual Team Dinner 2024',
    description: 'Our entire team came together for a wonderful evening of celebration and bonding at the annual dinner.',
    category: 'Office Events',
    date: 'December 2024',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: '1000th Project Milestone',
    description: 'We successfully completed our 1000th data processing project — a huge milestone for EntryLab!',
    category: 'Successful Projects',
    date: 'November 2024',
    image: 'https://imgur.com/a/7NZDQ18',
    featured: true,
  },
  {
    id: 3,
    title: 'Cox\'s Bazar Team Trip',
    description: 'An unforgettable team outing to Cox\'s Bazar where we combined fun with team building exercises.',
    category: 'Team Outings',
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76cb?w=600&h=400&fit=crop',
    featured: true,
  },
   {
    id: 31,
    title: 'Cox\'s Bazar Team Trip',
    description: 'An unforgettable team outing to Cox\'s Bazar where we combined fun with team building exercises.',
    category: 'Team Outings',
    date: 'October 2024',
    image: 'https://imgur.com/a/7NZDQ18',
    featured: true,
  }
  {
    id: 4,
    title: 'Best Data Agency Award',
    description: 'EntryLab was recognized as one of the top data entry agencies in the region.',
    category: 'Awards',
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: 5,
    title: 'Eid Celebration at Office',
    description: 'The team celebrating Eid together with traditional food and festivities at our office.',
    category: 'Celebrations',
    date: 'April 2024',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'E-commerce Data Project Success',
    description: 'Successfully delivered a massive e-commerce data entry project with 99.9% accuracy.',
    category: 'Successful Projects',
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'New Office Inauguration',
    description: 'Moving into our brand new, modern office space — a new chapter for EntryLab.',
    category: 'Office Events',
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'Team Building Workshop',
    description: 'An intensive workshop focused on collaboration, leadership, and innovation.',
    category: 'Office Events',
    date: 'June 2024',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'Client Appreciation Day',
    description: 'A special day dedicated to thanking our wonderful clients for their trust and partnership.',
    category: 'Celebrations',
    date: 'May 2024',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
  },
  {
    id: 10,
    title: 'Healthcare Data Project',
    description: 'Completed a critical healthcare data processing project ahead of schedule.',
    category: 'Successful Projects',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
  },
  {
    id: 11,
    title: 'Annual Sports Day',
    description: 'Fun-filled sports day with cricket, badminton, and team relay races.',
    category: 'Team Outings',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1461896836934-bd45ba24e309?w=600&h=400&fit=crop',
  },
  {
    id: 12,
    title: 'Excellence in Service Award',
    description: 'Recognized for excellence in data processing services by industry peers.',
    category: 'Awards',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
  },
  {
    id: 13,
    title: 'Year-End Party 2023',
    description: 'Wrapping up an incredible year with music, food, and great company.',
    category: 'Celebrations',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=600&h=400&fit=crop',
  },
  {
    id: 14,
    title: 'Real Estate Data Migration',
    description: 'Successfully migrated 500K+ records for a major real estate company.',
    category: 'Successful Projects',
    date: 'November 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 15,
    title: 'Sylhet Retreat',
    description: 'A refreshing team retreat in the beautiful tea gardens of Sylhet.',
    category: 'Team Outings',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop',
  },
  {
    id: 16,
    title: 'Training & Skill Development',
    description: 'Investing in our team\'s growth through professional development workshops.',
    category: 'Office Events',
    date: 'September 2023',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  },
];

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'data-entry' | 'web-research';
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Data Entry',
    description: 'Accurate and efficient data entry services for businesses of all sizes. We handle large volumes with precision.',
    icon: 'keyboard',
    features: ['Manual Data Entry', 'Online/Offline Data Entry', 'Form Filling & Processing', 'PDF to Excel/Word Conversion'],
    category: 'data-entry',
  },
  {
    id: 2,
    title: 'Data Processing',
    description: 'Transform raw data into meaningful, structured information ready for analysis and decision-making.',
    icon: 'cpu',
    features: ['Data Sorting & Categorization', 'Data Formatting', 'Database Management', 'Bulk Data Processing'],
    category: 'data-entry',
  },
  {
    id: 3,
    title: 'Data Cleansing',
    description: 'Clean, validate, and standardize your data to ensure accuracy and consistency across all records.',
    icon: 'sparkles',
    features: ['Duplicate Removal', 'Error Correction', 'Data Standardization', 'Quality Assurance Checks'],
    category: 'data-entry',
  },
  {
    id: 4,
    title: 'Data Mining',
    description: 'Extract valuable patterns and insights from large datasets to drive strategic business decisions.',
    icon: 'pickaxe',
    features: ['Pattern Recognition', 'Trend Analysis', 'Statistical Modeling', 'Predictive Insights'],
    category: 'data-entry',
  },
  {
    id: 5,
    title: 'Web Research',
    description: 'Comprehensive online research services to gather accurate and up-to-date information for your business needs.',
    icon: 'globe',
    features: ['Market Research', 'Competitor Analysis', 'Lead Generation', 'Industry Reports'],
    category: 'web-research',
  },
  {
    id: 6,
    title: 'Web Scraping',
    description: 'Automated extraction of data from websites, delivered in clean, structured formats.',
    icon: 'code',
    features: ['E-commerce Price Scraping', 'Directory Scraping', 'Social Media Data', 'Custom Scraping Solutions'],
    category: 'web-research',
  },
  {
    id: 7,
    title: 'Product Data Entry',
    description: 'Specialized e-commerce product listing services including images, descriptions, and attributes.',
    icon: 'shopping-cart',
    features: ['Product Listing', 'Catalog Management', 'Image Editing & Upload', 'SKU Management'],
    category: 'data-entry',
  },
  {
    id: 8,
    title: 'Market Research',
    description: 'In-depth market analysis to help you understand trends, competition, and customer behavior.',
    icon: 'bar-chart',
    features: ['Consumer Surveys', 'Market Size Analysis', 'SWOT Analysis', 'Industry Benchmarking'],
    category: 'web-research',
  },
];

export const teamMembers = [
  {
    name: 'Shah Mohammad Masum',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Visionary leader with 5+ years in data services industry.',
  },
  {
    name: 'Ehshan Shakil',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Ensures smooth project delivery and team coordination.',
  },
  {
    name: 'Aminul Hoque',
    role: 'Lead Data Analyst',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Expert in data processing with exceptional attention to detail.',
  },
  {
    name: 'Sami Sakib',
    role: 'QA Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    bio: 'Maintains 99.9% accuracy rate across all projects.',
  },
];
