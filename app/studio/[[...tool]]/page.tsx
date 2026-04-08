import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

// THE FIX: Added the "structure" route to tell Next.js it's safe to load
export function generateStaticParams() {
  return [
    { tool: [] },
    { tool: ["structure"] }
  ];
}

export default function StudioPage() {
  return <NextStudio config={config} />
}