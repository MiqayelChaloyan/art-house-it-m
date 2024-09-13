import {  ProjectsIcon } from '@sanity/icons';
import { RuleType } from '../../ruleType';

export const ordersSchema = {
    name: 'orders',
    type: 'document',
    title: 'Orders',
    id: 'orders',
    fields: [
        {
            title: 'Title',
            name: 'title',
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
        {
            name: 'our_works',
            type: 'array',
            title: 'Our Works',
            of: [
                {
                    name: 'Object',
                    type: 'object',
                    icon: ProjectsIcon,
                    validation: (Rule: RuleType) => Rule.required(),
                    fields: [
                        {
                            title: 'Website Title',
                            name: 'website_title',
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
                        {
                            title: 'Website activity',
                            name: 'website_activity',
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
                        {
                            name: 'web_site_url',
                            title: 'Website url',
                            type: 'string',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'website_title.en',
                        },
                        prepare(selection: { title?: string}) {
                            return {
                                title: selection.title,
                            };
                        },
                    }
                }
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Պատվերներ',
            };
        },
    }
};

export default ordersSchema;