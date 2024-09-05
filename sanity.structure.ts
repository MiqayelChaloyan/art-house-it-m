import { DocumentsIcon } from '@sanity/icons';

export default (S: any) =>
    S.list()
        .title('Base')
        .items([
            ...S.documentTypeListItems().filter(
                (listItem: any) => ![
                    'home',
                    'about-us',
                    'courses',
                    'price-list',
                    'our-team',
                    'select-option',
                    'contact-us',
                ].includes(listItem.getId())
            ),

            S.listItem().title('Pages')
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Home')
                                .icon(DocumentsIcon)
                                .child(S.document().schemaType('home').documentId('home')),
                            S.listItem()
                                .title('About Us')
                                .icon(DocumentsIcon)
                                .child(S.document().schemaType('about-us').documentId('about-us')),
                            S.listItem()
                                .title('Courses')
                                .child(
                                    S.documentList()
                                        .title('Courses')
                                        .filter('_type == "courses"')),
                            S.listItem()
                                .title('Price List')
                                .icon(DocumentsIcon)
                                .child(S.document().schemaType('price-list').documentId('price-list')),
                            S.listItem()
                                .title('Our team')
                                .icon(DocumentsIcon)
                                .child(S.document().schemaType('our-team').documentId('our-team')),
                        ])
                ),
            S.listItem().title('Lessons & Orders')
                .child(
                    S.list()
                        .title('Options')
                        .items([
                            S.listItem()
                                .title('Lessons & Orders')
                                .icon(DocumentsIcon)
                                .child(S.document().schemaType('select-option').documentId('select-option')),
                        ])
                ),
            S.listItem().title('Contact Us')
                .child(
                    S.list()
                        .title('Contact Us')
                        .items([
                            S.listItem()
                                .title('Contact Us')
                                .icon(DocumentsIcon)
                                .child(S.document().schemaType('contact-us').documentId('contact-us')),
                        ])
                ),
        ]);
