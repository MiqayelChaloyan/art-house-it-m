import { EarthGlobeIcon, UserIcon } from '@sanity/icons';
import { BiSolidUserDetail } from 'react-icons/bi';

import { RuleType } from '../../ruleType';

const ourTeamSchema = {
    name: 'our-team',
    type: 'document',
    title: 'Our Team',
    icon: EarthGlobeIcon,
    id: 'our-team',
    initialValue: () => ({
        publishedAt: new Date().toISOString()
    }),
    fields: [
        {
            name: 'our_team',
            type: 'array',
            title: 'Our Team',
            of: [
                {
                    name: 'Object',
                    type: 'object',
                    icon: UserIcon,
                    fields: [
                        {
                            title: 'Worker',
                            name: 'worker',
                            type: 'object',
                            description: 'Անուն, Ազգանուն',
                            validation: (Rule: RuleType) => Rule.required(),
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
                            title: "The employee's profession",
                            name: 'profession',
                            type: 'object',
                            description: 'Աշխատողի մասնագիտությունը',
                            validation: (Rule: RuleType) => Rule.required(),
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
                            title: 'Worker Image',
                            name: 'worker_image',
                            type: 'image',
                            options: { hotspot: true },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alternative text',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            name: 'additional_detalis',
                            type: 'array',
                            title: 'Additional detalis',
                            description: 'Լրացուցիչ մանրամասներ (պարտադիր չէ)',
                            of: [
                                {
                                    name: 'Object',
                                    type: 'object',
                                    icon: BiSolidUserDetail,
                                    fields: [
                                        {
                                            title: "Detalis",
                                            name: 'detalis',
                                            type: 'object',
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
                                    ],
                                    preview: {
                                        select: {
                                            title: 'detalis.en'
                                        },
                                        prepare(selection: { title?: string }) {
                                            return {
                                                title: selection.title,
                                            };
                                        },
                                    },
                                }
                            ]
                        }
                    ],
                    preview: {
                        select: {
                            title: 'worker.en'
                        },
                        prepare(selection: { title?: string }) {
                            return {
                                title: selection.title,
                            };
                        },
                    },
                }
            ]
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Մեր թիմը',
            };
        },
    }
};

export default ourTeamSchema;
