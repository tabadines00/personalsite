import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"

const Index: React.FC<PageProps> = () => {
  return (
    <main className="grid place-items-center h-screen">
      Gatsby is cool!
    </main>
  )
}

export default Index
export const Head: HeadFC = () => <title>Home Page</title>