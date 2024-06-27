import LogoAnimation from "@/components/LogoAnimation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full px-4 md:px-0 md:container">
        <div className="pt-14 md:pt-24 mb-10 flex justify-center">
          <div className="md:w-[60%] text-primary-foreground text-5xl md:text-7xl leading-normal md:text-center">
            {/* Unlock the <span className="bg-secondary px-1">perfection</span> of{" "}
            <span className="font-bold">digital marketing</span> */}
            Unlock the{" "}
            <div className="relative inline-block align-middle overflow-hidden  leading-none md:leading-tight">
              <span className="px-1 relative z-10">Perfection</span>
              <div className="absolute top-0 left-0 w-full h-full bg-secondary animate-bg-slide"></div>
            </div>{" "}
            of <span className="font-bold">digital marketing</span>
          </div>
        </div>
        <div className="md:w-[50%] mx-auto md:text-center text-primary-foreground font-medium">
          <p className="mb-2">
            Turning your visions into reality with meticulous precision and
            creativity.
          </p>
          <p>
            Experience the pinnacle of digital marketing perfection with us.
          </p>
        </div>
        <div className="flex md:justify-center mt-10 space-x-4">
          <button className="bg-primary-foreground text-white py-2 px-7 rounded">
            {" "}
            About Us
          </button>
          <button className=" text-primary-foreground border border-secondary py-2 px-7 rounded font-medium">
            {" "}
            Contact Us
          </button>
        </div>
        <div className="my-14">
          <LogoAnimation />
        </div>
      </div>
    </main>
  )
}
