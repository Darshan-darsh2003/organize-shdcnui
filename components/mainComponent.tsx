import React from 'react'

const MainComponent = ({children}:any) => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    {children}
    </section>
  )
}

export default MainComponent
