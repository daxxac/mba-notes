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
    {
      type: 'category',
      label: 'Business Strategy',
      link: {
        type: 'doc',
        id: 'business-strategy/index',
      },
      items: [
        'business-strategy/lecture-01',
        'business-strategy/lecture-02',
        'business-strategy/lecture-03',
        'business-strategy/lecture-04',
      ],
    },
    {
      type: 'category',
      label: 'Digital Marketing',
      link: {
        type: 'doc',
        id: 'digital-marketing/index',
      },
      items: [
        'digital-marketing/lecture-01',
        'digital-marketing/lecture-02',
      ],
    },
    'middle-east-economics',
  ],
};

export default sidebars;
