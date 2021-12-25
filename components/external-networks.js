import {
  ExternalBox,
  LinkCard,
  LinksBox,
  NetworksTitle
} from './external-networks-styled'
import { BsGlobe2, BsTwitter, BsReddit, BsDiscord } from 'react-icons/bs'
import { RiFilePaperLine } from 'react-icons/ri'
import { FaGithubAlt } from 'react-icons/fa'
import { Rounded } from './home-styled'
import Link from 'next/link'

const ExternalNetworks = ({
  github,
  reddit,
  whitepaper,
  twitter,
  web,
  discord
}) => {
  return (
    <ExternalBox>
      <NetworksTitle>
        <h3>External Links</h3>
        <Rounded
          viewBox="0 0 400 472"
          style={{ height: '100%', bottom: '0', left: '0' }}
        >
          <path
            d="M400,600H0V128H26.79a74.89,74.89,0,0,1,31,6.71h0a95.91,95.91,0,0,1,44.59,41.5h0C152.87,321.74,173.07,431.15,279,543l33,26c10.69,11,63.07,31,78.24,31Z"
            transform="translate(0 -128)"
          />
        </Rounded>
      </NetworksTitle>
      <LinksBox>
        <LinkCard>
          <div className="front">
            <BsGlobe2 />
            <span>Official Web</span>
          </div>
          <div className="back">
            <span>Official Web</span>
            {web ? (
              <Link href={web} passHref>
                <span>Go to the Official Web</span>
              </Link>
            ) : (
              <span>Not ready yet</span>
            )}
          </div>
        </LinkCard>
        <LinkCard>
          <div className="front">
            <RiFilePaperLine />
            <span>Whitepaper</span>
          </div>
          <div className="back">
            <span>Whitepaper</span>
            {whitepaper ? (
              <Link href={whitepaper} passHref>
                <span>Go to the Whitepaper</span>
              </Link>
            ) : (
              <span>Not Ready Yet</span>
            )}
          </div>
        </LinkCard>
        <LinkCard>
          <div className="front">
            <BsTwitter />
            <span>Twitter</span>
          </div>
          <div className="back">
            <span>Twitter</span>
            {twitter ? (
              <Link href={twitter} passHref>
                <span>Go to the Twitter</span>
              </Link>
            ) : (
              <span>Not Ready Yet</span>
            )}
          </div>
        </LinkCard>
        <LinkCard>
          <div className="front">
            <FaGithubAlt />
            <span>Github</span>
          </div>
          <div className="back">
            <span>Github</span>
            {github ? (
              <Link href={github} passHref>
                <span>Go to the Github</span>
              </Link>
            ) : (
              <span>Not Ready Yet</span>
            )}
          </div>
        </LinkCard>
        <LinkCard>
          <div className="front">
            <BsReddit />
            <span>Reddit Thread</span>
          </div>
          <div className="back">
            <span>Reddit Thread</span>
            {reddit ? (
              <Link href={reddit} passHref>
                <span>Go to the Reddit Thread</span>
              </Link>
            ) : (
              <span>Not Ready Yet</span>
            )}
          </div>
        </LinkCard>
        <LinkCard>
          <div className="front">
            <BsDiscord />
            <span>Official Discord</span>
          </div>
          <div className="back">
            <span>Official Discord</span>
            {discord ? (
              <Link href={discord} passHref>
                <span>Go to the Official Discord</span>
              </Link>
            ) : (
              <span>Not Ready Yet</span>
            )}
          </div>
        </LinkCard>
      </LinksBox>
    </ExternalBox>
  )
}

export default ExternalNetworks
