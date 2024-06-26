import { createClient } from '@sanity/client'

export const  client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
//   here because we using the cache cdn coming from next 
  useCdn: false,
})