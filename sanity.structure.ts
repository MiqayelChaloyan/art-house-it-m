import { DocumentsIcon } from '@sanity/icons';
import { IoFolderOpen } from 'react-icons/io5';
import { MdFolder } from 'react-icons/md';
import { MdContactSupport } from 'react-icons/md';
import { RiAiGenerate } from 'react-icons/ri';

export default (S: any) =>
    S.list()
        .title('Base')
        .items([
            ...S.documentTypeListItems().filter(
                (listItem: any) => ![
                    'home',
                    'partners',
                    'about-us',
                    'courses',
                    'orders',
                    'price-list',
                    'our-team',
                    'select-option',
                    'contact-us',
                ].includes(listItem.getId() as string)
            ),

            S.listItem()
                .title('Pages')
                .icon(MdFolder)
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Home')
                                .icon(IoFolderOpen)
                                .child(S.document().schemaType('home').documentId('home')),
                            S.listItem()
                                .title('About Us')
                                .icon(IoFolderOpen)
                                .child(S.document().schemaType('about-us').documentId('about-us')),
                            S.listItem()
                                .title('Courses')
                                .icon(IoFolderOpen)
                                .child(
                                    S.documentList()
                                        .title('Courses')
                                        .filter('_type == "courses"')),
                            S.listItem()
                                .title('Orders')
                                .icon(IoFolderOpen)
                                .child(S.document().schemaType('orders').documentId('orders')),
                            S.listItem()
                                .title('Price List')
                                .icon(IoFolderOpen)
                                .child(S.document().schemaType('price-list').documentId('price-list')),
                            S.listItem()
                                .title('Our team')
                                .icon(IoFolderOpen)
                                .child(S.document().schemaType('our-team').documentId('our-team')),
                        ])
                ),
            S.listItem()
                .title('Lessons & Orders')
                .icon(MdFolder)
                .child(
                    S.list()
                        .title('Options')
                        .items([
                            S.listItem()
                                .title('Lessons & Orders')
                                .icon(IoFolderOpen)
                                .child(S.document().schemaType('select-option').documentId('select-option')),
                        ])
                ),
            S.listItem()
                .title('Partners')
                .icon(RiAiGenerate)
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Partners')
                                .icon(IoFolderOpen)
                                .child(
                                    S.documentList()
                                        .title('Partners')
                                        .filter('_type == "partners"')),
                        ])
                ),
            S.listItem()
                .title('Contact Us')
                .icon(MdContactSupport)
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
