// src/components/Post.tsx
import { PortableText } from "@portabletext/react";

import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

import { POST_QUERYResult } from "../../../sanity.types";

export function Post({ post }: { post: POST_QUERYResult }) {
  const { title, mainImage, body } = post || {};

  return (
    <main className="prose prose-lg container mx-auto p-4">
      {title ? <h1>{title}</h1> : null}
      {mainImage?.asset?._ref ? (
        <Image
          className="float-left m-0 mr-4 w-1/3 rounded-lg"
          src={urlFor(mainImage?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={title || ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
      <hr />
      <Link href="/blog">&larr; Return to blog</Link>
    </main>
  );
}
