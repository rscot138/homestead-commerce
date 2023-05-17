import React from 'react'
import Link from 'next/link'

import { Footer as FooterType } from '../../payload-types'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'
import { Logo } from '../Logo'

import classes from './index.module.scss'

export const Footer: React.FC<{ footer: FooterType }> = ({ footer }) => {
  const navItems = footer?.navItems || []

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Logo color="white" />
        </Link>
        <nav className={classes.nav}>
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
        </nav>
      </Gutter>
    </footer>
  )
}
