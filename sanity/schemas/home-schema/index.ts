import { CheckmarkIcon } from '@sanity/icons';
import { FaDiscourse } from 'react-icons/fa';
import { RuleType } from '@/sanity/ruleType';

const homeSchema = {
    name: 'home',
    type: 'document',
    title: 'Home',
    id: 'home',
    groups: [
        {
            name: 'og',
            title: 'Social Share Info',
            default: true
        },
        {
            name: 'manifest',
            title: 'Web App Settings',
            hidden: ({ document }: {
                document: {
                    [key: string]: never;
                }
            }): boolean => !(document.isPwa)
        },
    ],
    fields: [
        {
            type: 'string',
            title: 'Open Graph Title',
            name: 'ogTitle',
            description:
                'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
            validation: (Rule: RuleType) => Rule.required(),
            group: ['og']
        },
        {
            title: 'Meta keywords',
            name: 'keywords',
            type: 'array',
            of: [{ type: 'string' }],
            group: ['og'],
        },
        {
            title: 'Social Share Description',
            name: 'ogDescription',
            type: 'object',
            group: ['og'],
            fields: [
                {
                    title: 'Armenian',
                    name: 'am',
                    type: 'string'
                },
                {
                    title: 'English',
                    name: 'en',
                    type: 'string'
                },
                {
                    title: 'Russian',
                    name: 'ru',
                    type: 'string'
                }
            ]
        },
        {
            type: 'image',
            title: 'Image',
            name: 'ogImage',
            description:
                'URL of the image that should be used in social media previews.',
            validation: (Rule: RuleType) => Rule.required(),
            group: ['og'],
        },
        /* Schema */
        {
            name: 'our_advantages',
            type: 'array',
            title: 'Our advantages',
            description: 'You can add any amount (Text should not be more than 250 characters).',
            validation: (Rule: RuleType) => Rule.required(),
            of: [
                {
                    name: 'Object',
                    type: 'object',
                    icon: CheckmarkIcon,
                    fields: [
                        {
                            title: 'Armenian',
                            name: 'am',
                            type: 'string',
                        },
                        {
                            title: 'English',
                            name: 'en',
                            type: 'string'
                        },
                        {
                            title: 'Russian',
                            name: 'ru',
                            type: 'string'
                        }
                    ]
                },
            ],
        },
        {
            name: 'about_course',
            title: 'About Course',
            description: 'You can add information about any course that is already in the course list.',
            type: 'object',
            validation: (Rule: RuleType) => Rule.required(),
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'object',
                    fields: [
                        {
                            name: 'am',
                            title: 'Armenian',
                            type: 'string',
                            validation: (Rule: RuleType) => Rule.required(),
                        },
                        {
                            name: 'en',
                            title: 'English',
                            type: 'string',
                            validation: (Rule: RuleType) => Rule.required(),
                        },
                        {
                            name: 'ru',
                            title: 'Russian',
                            type: 'string',
                            validation: (Rule: RuleType) => Rule.required(),
                        }
                    ]
                },
                {
                    name: 'features',
                    type: 'array',
                    title: 'Features',
                    of: [
                        {
                            name: 'featureObject',
                            type: 'object',
                            icon: FaDiscourse,
                            fields: [
                                {
                                    name: 'feature',
                                    title: 'Feature',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'am',
                                            title: 'Armenian',
                                            type: 'string',
                                            validation: (Rule: RuleType) => Rule.required(),
                                        },
                                        {
                                            name: 'en',
                                            title: 'English',
                                            type: 'string',
                                            validation: (Rule: RuleType) => Rule.required(),
                                        },
                                        {
                                            name: 'ru',
                                            title: 'Russian',
                                            type: 'string',
                                            validation: (Rule: RuleType) => Rule.required(),
                                        }
                                    ]
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'feature.en',
                                },
                                prepare(selection: { title?: string }) {
                                    return {
                                        title: selection.title,
                                    };
                                }
                            }
                        }
                    ],
                    validation: (Rule: RuleType) => Rule.required(),
                },
                {
                    name: 'categories',
                    title: 'Course Category',
                    type: 'reference',
                    to: [{ type: 'courses' }],
                    validation: (Rule: RuleType) => Rule.required(),
                },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    description: 'Must be in png format',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative text',
                            type: 'string',
                            validation: (Rule: RuleType) => Rule.required(),
                        }
                    ],
                },
            ]
        },        
        {
            title: 'Content',
            name: 'content',
            description: 'What to study at ITM?',
            type: 'object',
            validation: (Rule: RuleType) => Rule.required(),
            fields: [
                {
                    title: 'Armenian',
                    name: 'am',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
                {
                    title: 'English',
                    name: 'en',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
                {
                    title: 'Russian',
                    name: 'ru',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Գլխավոր',
            };
        },
    }
};

export default homeSchema;
