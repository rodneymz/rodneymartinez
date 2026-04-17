'use client'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight, XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedBackground } from 'motion-primitives/animated-background'
import { Magnetic } from 'motion-primitives/magnetic'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from 'motion-primitives/morphing-dialog'
import { Spotlight } from 'motion-primitives/spotlight'
import useSWR from 'swr'

import { Button } from '@/components/ui/button'
import { formatWorkDate } from 'utils'

import type { About, Company, Portfolio, Post, SocialLink } from 'types'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type PortfolioImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

function PortfolioImage({ src, alt, width, height }: PortfolioImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="aspect-video h-[50vh] w-full rounded-xl object-cover md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const { data: about } = useSWR<About>('/api/about', fetcher)
  const { data: portfolios } = useSWR<Portfolio[]>('/api/portfolios', fetcher)
  const { data: companies } = useSWR<Company[]>('/api/companies', fetcher)
  const { data: posts } = useSWR<Post[]>('/api/posts', fetcher)
  const { data: socialLinks } = useSWR<SocialLink[]>(
    '/api/social-links',
    fetcher
  )

  console.log(about)
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* About */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p>
            {about?.bio?.html && (
              <>
                <span dangerouslySetInnerHTML={{ __html: about.bio.html }} />
              </>
            )}
          </p>
        </div>
      </motion.section>

      {/* Portfolio */}
      {portfolios && portfolios.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Selected Work</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {portfolios.slice(0, 4).map((item) => (
              <div key={item.slug} className="space-y-2">
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  {item.thumbnail ? (
                    <PortfolioImage
                      src={item.thumbnail.url}
                      alt={item.title}
                      width={item.thumbnail.width ?? 800}
                      height={item.thumbnail.height ?? 450}
                    />
                  ) : (
                    <div className="aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-900" />
                  )}
                </div>
                <div className="px-1">
                  <Link
                    className="relative inline-block font-medium"
                    href={`/work/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                  {item.role && (
                    <p className="text-muted-foreground">{item.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-end">
            <Link href="/work">
              <Button variant="ghost" className="mt-2 gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.section>
      )}

      {/* Work Experience */}
      {companies && companies.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
          <div className="flex flex-col space-y-2">
            {companies.map((company) => {
              const latestRole = company.roles?.[0]
              return (
                <Link
                  className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                  href={`/work-experience/${company.slug}`}
                  key={company.id}
                >
                  <Spotlight
                    className="bg-zinc-950 from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:bg-zinc-50 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                    <div className="relative flex w-full flex-row justify-between">
                      <div>
                        <h4 className="font-normal dark:text-zinc-100">
                          {latestRole?.title}
                        </h4>
                        <p className="text-muted-foreground">{company.name}</p>
                      </div>
                      {latestRole && (
                        <p className="text-muted-foreground">
                          {formatWorkDate(latestRole.startDate)} -{' '}
                          {latestRole.endDate ? formatWorkDate(latestRole.endDate) : 'Present'}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="flex w-full justify-end">
            <Link href="/work-experience">
              <Button variant="ghost" className="mt-2 gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.section>
      )}

      {/* Blog */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          {posts && posts.length > 0 && (
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-200 dark:bg-zinc-800/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {posts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  className="-mx-3 rounded-xl px-3 py-3"
                  href={`/blog/${post.slug}`}
                  data-id={post.id}
                >
                  <div className="flex flex-col space-y-2">
                    <h4>{post.title}</h4>
                    <p className="text-muted-foreground">{post.desc}</p>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          )}
        </div>
        <div className="flex w-full justify-end">
          <Link href="/blog">
            <Button variant="ghost" className="mt-2 gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Social Links */}
      {socialLinks && socialLinks.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Let's Connect</h3>
          <div className="flex items-center justify-start space-x-3">
            {socialLinks.map((link) => (
              <MagneticSocialLink key={link.id} link={link.url}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.section>
      )}
    </motion.main>
  )
}
