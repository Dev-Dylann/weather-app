import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

const Error = ({ errMsg }) => {
  return (
    <section className="my-20 mx-6 flex flex-col gap-4">
        <FaExclamationCircle className="text-5xl md:text-[70px] mx-auto"/>

        <p className="text-xl md:text-3xl text-center">{errMsg}</p>
    </section>
  )
}

export default Error