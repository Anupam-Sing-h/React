import React from 'react'

function Cards({username, btnText='Visit me'}) {
  console.log(username)
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://media.istockphoto.com/id/1440592325/vector/king-of-spades-playing-card-classic-design.jpg?s=2048x2048&w=is&k=20&c=UB61z8MFDFSDprCob-Rt_DACmrPGNG9UO_XS1rrBDzg="
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default Cards