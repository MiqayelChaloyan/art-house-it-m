import { TrendUpwardIcon } from '@sanity/icons';
import { RuleType } from '@/sanity/ruleType';

export const aboutUsSchema = {
    name: 'about-us',
    type: 'document',
    title: 'About Us',
    id: 'about-us',
    fields: [
        {
            title: 'About us',
            name: 'about_us',
            type: 'object',
            fields: [
                {
                    title: 'Title',
                    name: 'title',
                    type: 'object',
                    validation: (Rule: RuleType) => Rule.required(),
                    fields: [
                        {
                            title: 'Armenian',
                            name: 'am',
                            type: 'string',
                        },
                        {
                            title: 'English',
                            name: 'en',
                            type: 'string',
                        },
                        {
                            title: 'Russian',
                            name: 'ru',
                            type: 'string',
                        },
                    ],
                },
                {
                    title: 'Content',
                    name: 'content',
                    type: 'object',
                    validation: (Rule: RuleType) => Rule.required(),
                    description: 'Will display 318 characters on the main page. Ensure it ends with a full stop, and that the sentence is not left incomplete.',
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
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                    description: 'This image will be displayed on both the main page and this specific section.',
                },
            ],
        },
        {
            name: 'strengths',
            type: 'array',
            title: 'Strengths',
            description: 'You can add any amount.',
            of: [
                {
                    title: 'Advantage',
                    name: 'advantage',
                    type: 'object',
                    icon: TrendUpwardIcon,
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'object',
                            validation: (Rule: RuleType) => Rule.required(),
                            fields: [
                                {
                                    title: 'Armenian',
                                    name: 'am',
                                    type: 'string',
                                },
                                {
                                    title: 'English',
                                    name: 'en',
                                    type: 'string',
                                },
                                {
                                    title: 'Russian',
                                    name: 'ru',
                                    type: 'string',
                                },
                            ],
                        },
                        {
                            title: 'Content',
                            name: 'content',
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
                        {
                            name: 'showImage',
                            title: 'Show Image',
                            type: 'boolean',
                            description: 'Check this box to display the image.',
                            initialValue: false,
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            hidden: ({ parent }: { parent: { showImage?: boolean } }) => !parent?.showImage,
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative text',
                                },
                            ],
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                        },
                        prepare(selection: { title?: { am?: string; en?: string; ru?: string } }) {
                            const { title } = selection;
                            return {
                                title: title?.am,
                            };
                        },
                    },
                },
            ],
        },
        {
            name: 'video',
            type: 'object',
            title: 'Video',
            fields: [
                {
                    name: 'useUpload',
                    type: 'boolean',
                    title: 'Use uploaded video?',
                    description: 'Check this box to upload a video file. Leave unchecked to provide a video URL.',
                    initialValue: false,
                },
                {
                    name: 'video_url',
                    title: 'Video Link',
                    type: 'url',
                    hidden: ({ parent }: { parent: { useUpload?: boolean } }) => parent?.useUpload === true,
                },
                {
                    name: 'videoFile',
                    type: 'file',
                    title: 'Upload Video',
                    options: {
                        accept: 'video/*',
                    },
                    hidden: ({ parent }: { parent: { useUpload?: boolean } }) => parent?.useUpload === false,
                },
                {
                    name: 'video_light',
                    title: 'Video Light',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative text',
                            type: 'string'
                        }
                    ],
                },
            ],
            validation: (Rule: RuleType) =>
                Rule.custom((fields) => {
                    if (fields.useUpload && !fields.videoFile) {
                        return 'Please upload a video file or uncheck "Use uploaded video?"';
                    }
                    if (!fields.useUpload && !fields.video_url) {
                        return 'Please provide a video URL or check "Use uploaded video?"';
                    }
                    return true;
                }),
        }
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Մեր մասին',
            };
        },
    }
};

export default aboutUsSchema;