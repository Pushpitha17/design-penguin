"use client"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { DialogClose } from "@radix-ui/react-dialog"

function Navbar() {
  return (
    <div className="w-[90%] mx-auto md:container">
      <div className="flex justify-between items-center pt-2">
        <div>
          <img
            src="/assets/DP logo/logo_with_name.png"
            alt=""
            className="w-28 md:w-36"
          />
        </div>
        <div>
          <ul className="space-x-10 uppercase hidden md:flex font-normal">
            <Link href="/">Home</Link>
            <Link href="/">About us</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Portfolio</Link>
          </ul>
        </div>
        <div className="md:flex hidden gap-2">
          <img
            src="/assets/Social media logos/fb.svg"
            alt=""
            className="size-5"
          />
          <img
            src="/assets/Social media logos/insta.svg"
            alt=""
            className="size-5"
          />
          <img
            src="/assets/Social media logos/linkedin.svg"
            alt=""
            className="size-5"
          />
        </div>
        <div className="md:hidden block">
          <Dialog>
            <DialogTrigger>
              <Menu />
            </DialogTrigger>
            <DialogContent className="min-h-[calc(100dvh)] min-w-full">
              <div className="w-[90%] mx-auto md:container">
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <img
                      src="/assets/DP logo/logo_with_name.png"
                      alt=""
                      className="w-28 md:w-36"
                    />
                  </div>
                  <DialogClose>
                    <X />
                  </DialogClose>
                </div>
                <div>
                  <ul className="pt-8 gap-6 flex flex-col uppercase font-medium pl-2 text-slate-800">
                    <Link href="/">Home</Link>
                    <Link href="/">About us</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Portfolio</Link>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default Navbar
