import React from "react"

const logos = [
  "Clients logo-01.svg",
  "Clients logo-02.svg",
  "Clients logo-03.svg",
  "Clients logo-04.svg",
  "Clients logo-05.svg",
  "Clients logo-06.svg",
  "Clients logo-07.svg",
  "Clients logo-01.svg",
  "Clients logo-08.svg",
  "Clients logo-09.svg",
  "Clients logo-10.svg",
  "Clients logo-11.svg",
  "Clients logo-12.svg"
]

const path = "/assets/Clients' logos/"

function LogoAnimation() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left">
        {logos.map((item, index) => (
          <li key={index}>
            <img src={path + item} className="size-20" />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left"
        aria-hidden="true"
      >
        {logos.map((item, index) => (
          <li key={index}>
            <img  key={index} src={path + item} className="size-20" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LogoAnimation
