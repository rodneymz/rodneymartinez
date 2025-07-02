'use client';

import * as React from 'react';

import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/shadcn/dropdown-menu';

export default function HomePage() {
  const { setTheme } = useTheme();

  return (
    <>
      <main className="px-8 py-24 pt-38">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Designing seamless digital experiences for finance & beyond
          </h2>
          <p className="mb-8 text-lg md:text-xl">
            I'm a product designer that is passionate about designing better financial applications.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>view portfolio</Button>
            <Button variant="outline">work with me</Button>
          </div>
        </div>
      </main>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold">Portfolio</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-center">
              <div className="mb-4 flex h-64 items-center justify-center rounded-lg bg-gray-200">
                <span className="">Project Image</span>
              </div>
              <h4 className="text-xl font-semibold">Retirement planning app</h4>
            </div>
            <div className="text-center">
              <div className="mb-4 flex h-64 items-center justify-center rounded-lg bg-gray-200">
                <span className="">Project Image</span>
              </div>
              <h4 className="text-xl font-semibold">Mobile banking app</h4>
            </div>
            <div className="text-center">
              <div className="mb-4 flex h-64 items-center justify-center rounded-lg bg-gray-200">
                <span className="">Project Image</span>
              </div>
              <h4 className="text-xl font-semibold">Investment platform</h4>
            </div>
            <div className="text-center">
              <div className="mb-4 flex h-64 items-center justify-center rounded-lg bg-gray-200">
                <span className="">Project Image</span>
              </div>
              <h4 className="text-xl font-semibold">Crypto trading platform</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-8 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16 text-center text-3xl font-bold">About</h2>
          <p className="mb-8 text-lg md:text-xl">
            I'm a senior product designer and front-end web developer with over a decade of
            experience working on projects big and small from startups to corporations. I approach
            design from a customer centered perspective backed by data and influenced by my
            knowledge of programming to build products that are great.
          </p>
          <Button className="bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
            View resume
          </Button>
        </div>
      </section>

      <footer className="bg-black px-8 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Let's work together!</h2>
            <p className="text-lg">Tell me a little more about your project</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="details" className="mb-2 block text-sm font-medium">
                Details about your company, project, or team
              </label>
              <textarea
                id="details"
                name="details"
                rows={6}
                className="resize-vertical w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="text-center">
              <Button type="submit" className="bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
}
