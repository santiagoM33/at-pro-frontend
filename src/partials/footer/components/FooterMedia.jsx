import React from 'react'
import FooterLink from './FooterLink'

const FooterMedia = () => {
    return ( 
        <ul className="bd-footer-links">
            <FooterLink
                href='https://github.com/twbs'
            >
            GitHub</FooterLink>
            <FooterLink
                href='https://twitter.com/getbootstrap'
            >
            Twitter</FooterLink>
            <FooterLink
                href='/docs/4.6/examples/'
            >
            Example</FooterLink>
            <FooterLink
                href='/docs/4.6/about/overview/'
            >
            About</FooterLink>
        </ul>
     );
}
 
export default FooterMedia;