import { BookIcon } from '@sanity/icons';
import { RuleType } from '@/sanity/ruleType';

export const coursesSchema = {
    name: 'courses',
    type: 'document',
    title: 'Courses',
    icon: BookIcon,
    groups: [
        {
            name: 'og',
            title: 'Social Share Info',
            default: true
        },
        { name: 'all-fields', hidden: true, },
    ],
    fields: [
        {
            title: 'Meta keywords',
            name: 'keywords',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'og',
        },
        {
            type: 'object',
            name: 'ogDescription',
            title: 'Social Share Description',
            group: 'og',
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
            title: 'Course Name',
            name: 'course_name',
            type: 'object',
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
            title: 'Course Image',
            name: 'course_image',
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
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Slug must be the name of the course in lowercase and must be unique. Use `-` or `_` between words. Do not use `/`.',
            options: {
                source: 'course_name.en',
                maxLength: 200,
            },
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'about_course',
            type: 'object',
            title: 'About the Course',
            validation: (Rule: RuleType) => Rule.required(),
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
                    title: 'Content',
                    name: 'about_content',
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
                    ]
                },
            ]
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
                    initialValue: true,
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
        },
        {
            name: 'our_day',
            type: 'array',
            title: 'Our Day',
            description: 'You can add any number of pictures.',
            validation: (Rule: RuleType) => Rule.required(),
            of: [
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
                },
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
    preview: {
        select: {
            course: 'course_name.en',
        },
        prepare(selection: { course?: string }) {
            return {
                title: selection.course,
            };
        },
    }
};

export default coursesSchema;
