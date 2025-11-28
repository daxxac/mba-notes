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
    {
      type: 'category',
      label: 'Research Methods',
      link: {
        type: 'doc',
        id: 'research-methods/index',
      },
      items: [
        'research-methods/lecture-01',
        'research-methods/lecture-02',
        'research-methods/lecture-03',
        'research-methods/lecture-04',
        'research-methods/lecture-05',
        'research-methods/lecture-06',
        'research-methods/lecture-07',
        'research-methods/formulas',
      ],
    },
    'middle-east-economics',
  ],
};

export default sidebars;
