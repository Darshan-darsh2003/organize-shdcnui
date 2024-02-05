import MainComponent from '@/components/mainComponent'
import { Sidebar } from '@/components/sidebar'
import React from 'react'

const Page = () => {
  return (
    <MainComponent>
        <Sidebar />
    <div>Notes Page</div>
</MainComponent>
  )
}

export default Page