import { type SchemaTypeDefinition } from 'sanity';

import homeSchema from './schemas/home-schema';
import aboutUsSchema from './schemas/about-us-schema';
import priceListSchema from './schemas/price-list-schema';
import coursesSchema from './schemas/courses-schema';
import ourTeamSchema from './schemas/our-team-schema';
import lessonsSchema from './schemas/lessons-schema';
import contactUsSchema from './schemas/contact-us-schema';

export const schemaTypes: SchemaTypeDefinition[] = [
  homeSchema,
  aboutUsSchema,
  coursesSchema,
  priceListSchema,
  ourTeamSchema,
  lessonsSchema,
  contactUsSchema
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};