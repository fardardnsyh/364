import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import type { Props } from '@theme/BlogPostItem/Footer/ReadMoreLink'
import React from 'react'

function ReadMoreLabel() {
  return (
    <b>
      <Translate
        id="theme.blog.post.readMore"
        description="The label used in blog post item excerpts to link to full blog posts"
      >
        Read More
      </Translate>
    </b>
  )
}

export default function BlogPostItemFooterReadMoreLink(props: Props): JSX.Element {
  const { blogPostTitle, ...linkProps } = props
  return (
    <Link
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description: 'The ARIA label for the link to full blog posts from excerpts',
        },
        { title: blogPostTitle },
      )}
      style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
      {...linkProps}
    >
      <ReadMoreLabel />
      <Icon icon="ri:arrow-right-line" />
    </Link>
  )
}
