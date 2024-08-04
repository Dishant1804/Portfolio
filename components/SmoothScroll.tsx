'use client'

import { ReactLenis, useLenis } from 'lenis/react'

const SmoothScroll = ({children}  : {children: React.ReactNode}) => {
  return (
    <ReactLenis root options={{ lerp : 0.095, duration : 1.2 }} >
      {children}
    </ReactLenis>
  )

}

export default SmoothScroll;