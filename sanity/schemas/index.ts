import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'

// We must export exactly "schema" so sanity.config.ts can find it
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}