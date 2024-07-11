import React from 'react'
import data from '../data/content'

const Footer = () => {
  const { company, copyright, devCompany, year} = data.footer;
  return (
    <section className="bg-darkGreen-80 text-white flex justify-center">
        <div className="lg:max-w-[80%] text-center p-10">
          {company} &copy; {year}. {copyright}.
          <br />
          Desarrollado por <b>{devCompany}</b>
        </div>
      </section>
  )
}

export default Footer