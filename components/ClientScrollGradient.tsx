'use client'

import dynamic from 'next/dynamic'

const ScrollGradient = dynamic(() => import("@/components/scrollGradient"), {
    ssr: false
  });

export default function ClientScrollGradient() {
  return <ScrollGradient />
}