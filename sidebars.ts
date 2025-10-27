import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar configuration for MBA Notes
 * Clean, minimal structure with only essential courses
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'cross-cultural-negotiations',
    'game-theory',
    'business-game',
    'corporate-finance',
    {
      type: 'category',
      label: 'Principles of Finance',
      link: {
        type: 'doc',
        id: 'principles-of-finance/index',
      },
      items: [
        'principles-of-finance/lecture-01',
        'principles-of-finance/lecture-02',
        'principles-of-finance/lecture-03',
        'principles-of-finance/lecture-04',
        'principles-of-finance/lecture-05',
        'principles-of-finance/lecture-06',
        'principles-of-finance/lecture-07',
        'principles-of-finance/lecture-08',
        'principles-of-finance/glossary',
        'principles-of-finance/formulas',
      ],
    },
    'middle-east-economics',
  ],
};

export default sidebars;
