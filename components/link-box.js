import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Category,
  CategoryContainer,
  Box,
  BoxContainer
} from './link-box-styled'

import terraLogo from '../public/images/terra-logo.png'
import terraThumb from '../public/images/terra-thumb.jpg'

import avaxLogo from '../public/images/avax-logo.png'
import avaxThumb from '../public/images/avax-thumb.png'

import wbtcLogo from '../public/images/wbtc-logo.png'
import wbtcThumb from '../public/images/wbtc-thumb.jpg'

import uniswapLogo from '../public/images/uniswap-logo.png'
import uniswapThumb from '../public/images/uniswap-thumb.jpg'

import chainLogo from '../public/images/chainlink-logo.png'
import chainThumb from '../public/images/chainlink-thumb.jpg'

import tsbLogo from '../public/images/tsb-logo.png'
import tsbThumb from '../public/images/tsb-thumb.png'

import decentralandLogo from '../public/images/decentraland-logo.png'
import decentralandThumb from '../public/images/decentraland-thumb.jpg'

import enjinLogo from '../public/images/enjin-logo.png'
import enjinThumb from '../public/images/enjin-thumb.jpg'

import bloktopiaLogo from '../public/images/bloktopia-logo.png'
import bloktopiaThumb from '../public/images/bloktopia-thumb.jpg'

import openseaLogo from '../public/images/opensea-logo.png'
import openseaThumb from '../public/images/opensea-thumb.jpg'

import axieLogo from '../public/images/axie-logo.png'
import axieThumb from '../public/images/axie-thumb.jpg'

import larvalabsLogo from '../public/images/larvalabs-logo.png'
import larvalabsThumb from '../public/images/larvalabs-thumb.png'

import raribleLogo from '../public/images/rarible-logo.png'
import raribleThumb from '../public/images/rarible-thumb.png'

import foundationLogo from '../public/images/foundation-logo.jpg'
import foundationThumb from '../public/images/foundation-thumb.png'

import niftygatewayLogo from '../public/images/niftygateway-logo.png'
import niftygatewayThumb from '../public/images/niftygateway-thumb.png'

import heliumLogo from '../public/images/helium-logo.png'
import heliumThumb from '../public/images/helium-thumb.jpg'

import fluxLogo from '../public/images/flux-logo.png'
import fluxThumb from '../public/images/flux-thumb.png'

import filecoinLogo from '../public/images/filecoin-logo.png'
import filecoinThumb from '../public/images/filecoin-thumb.png'

import polkadottLogo from '../public/images/polkadott-logo.png'
import polkadottThumb from '../public/images/polkadott-thumb.jpg'

import kusamaLogo from '../public/images/kusama-logo.png'
import kusamaThumb from '../public/images/kusama-thumb.jpg'

import epicheroLogo from '../public/images/epichero-logo.jpg'
import epicheroThumb from '../public/images/epichero-thumb.png'

import wizardiumLogo from '../public/images/wizardium-logo.jpg'
import wizardiumThumb from '../public/images/wizardium-thumb.jpg'

import nbaLogo from '../public/images/nba-logo.jpg'
import nbaThumb from '../public/images/nba-thumb.jpeg'

import tankbattleLogo from '../public/images/tankbattle-logo.png'
import tankbattleThumb from '../public/images/tankbattle-thumb.jpg'

import staratlasLogo from '../public/images/staratlas-logo.png'
import staratlasThumb from '../public/images/staratlas-thumb.jpg'

import bittorrentLogo from '../public/images/bittorrent-logo.png'
import bittorrentThumb from '../public/images/bittorrent-thumb.png'

import holoLogo from '../public/images/holo-logo.png'
import holoThumb from '../public/images/holo-thumb.jpg'

import aerweaveLogo from '../public/images/aerweave-logo.png'
import aerweaveThumb from '../public/images/aerweave-thumb.jpg'

import ankrLogo from '../public/images/ankr-logo.png'
import ankrThumb from '../public/images/ankr-thumb.jpg'

import siacoinLogo from '../public/images/siacoin-logo.png'
import siacoinThumb from '../public/images/siacoin-thumb.jpg'

import Link from 'next/link'

/*DEFI, METAVERSE, NFT AND COLLECTIBLES, WEB 3.0, Gaming, filesharing*/

const array = [
  {
    id: 1,
    logo: terraLogo,
    thumb: terraThumb,
    name: 'Terra',
    short: '(Luna)',
    price: 312,
    url: '/projects/terra',
    category: ['defi']
  },
  {
    id: 2,
    logo: avaxLogo,
    thumb: avaxThumb,
    name: 'Avalanche',
    short: '(AVAX)',
    price: 1231.0,
    url: '/projects/avax',
    category: ['defi']
  },
  {
    id: 3,
    logo: wbtcLogo,
    thumb: wbtcThumb,
    name: 'Wrapped Bitcoin',
    short: '(WBTC)',
    price: 321312.321321,
    url: '/projects/wbtc',
    category: ['defi']
  },
  {
    id: 4,
    logo: uniswapLogo,
    thumb: uniswapThumb,
    name: 'Uniswap',
    short: '',
    price: 312,
    url: '/projects/uniswap',
    category: ['defi']
  },
  {
    id: 5,
    logo: chainLogo,
    thumb: chainThumb,
    name: 'Chainlink',
    short: '(LINK)',
    price: 19.23,
    url: '/projects/chainlink',
    category: ['defi']
  },
  {
    id: 6,
    logo: tsbLogo,
    thumb: tsbThumb,
    name: 'The Sandbox',
    short: '(SAND)',
    price: 19.23,
    url: '/projects/sandbox',
    category: ['meta', 'gaming']
  },
  {
    id: 7,
    logo: decentralandLogo,
    thumb: decentralandThumb,
    name: 'Descentraland',
    short: '(MANA)',
    price: 19.32132,
    url: '/projects/descentraland',
    category: ['meta']
  },
  {
    id: 8,
    logo: enjinLogo,
    thumb: enjinThumb,
    name: 'Enjin',
    short: '(ENJIN)',
    price: 19.32132,
    url: '/projects/enjin',
    category: ['meta']
  },
  {
    id: 9,
    logo: bloktopiaLogo,
    thumb: bloktopiaThumb,
    name: 'Bloktopia',
    short: '(BLOK)',
    price: 19.32132,
    url: '/projects/bloktopia',
    category: ['meta']
  },
  {
    id: 10,
    logo: openseaLogo,
    thumb: openseaThumb,
    name: 'OpenSea',
    short: '',
    price: 19.32132,
    url: '/projects/opensea',
    category: ['nft']
  },
  {
    id: 11,
    logo: axieLogo,
    thumb: axieThumb,
    name: 'Axie Marketplace',
    short: '',
    price: 19.32132,
    url: '/projects/axie-marketplace',
    category: ['nft', 'gaming']
  },
  {
    id: 12,
    logo: larvalabsLogo,
    thumb: larvalabsThumb,
    name: 'LarvaLabs',
    short: '',
    price: 19.32132,
    url: '/projects/larvalabs',
    category: ['nft']
  },
  {
    id: 13,
    logo: raribleLogo,
    thumb: raribleThumb,
    name: 'Rarible',
    short: '',
    price: 19.32132,
    url: '/projects/rarible',
    category: ['nft']
  },
  {
    id: 14,
    logo: foundationLogo,
    thumb: foundationThumb,
    name: 'Foundation',
    short: '',
    price: 19.32132,
    url: '/projects/foundation',
    category: ['nft']
  },
  {
    id: 15,
    logo: niftygatewayLogo,
    thumb: niftygatewayThumb,
    name: 'Nifty Gateway',
    short: '',
    price: 19.32132,
    url: '/projects/niftygateway',
    category: ['nft']
  },
  {
    id: 16,
    logo: heliumLogo,
    thumb: heliumThumb,
    name: 'Helium',
    short: '(HNT)',
    price: 19.32132,
    url: '/projects/helium',
    category: ['web3']
  },
  {
    id: 17,
    logo: fluxLogo,
    thumb: fluxThumb,
    name: 'Flux',
    short: '(FLUX)',
    price: 19.32132,
    url: '/projects/flux',
    category: ['web3']
  },
  {
    id: 18,
    logo: filecoinLogo,
    thumb: filecoinThumb,
    name: 'Filecoin',
    short: '(FIL)',
    price: 19.32132,
    url: '/projects/filecoin',
    category: ['web3', 'filesharing']
  },
  {
    id: 19,
    logo: polkadottLogo,
    thumb: polkadottThumb,
    name: 'Polkadot',
    short: '(DOT)',
    price: 19.32132,
    url: '/projects/polkadot',
    category: ['web3']
  },
  {
    id: 20,
    logo: kusamaLogo,
    thumb: kusamaThumb,
    name: 'Kusama',
    short: '(KSM)',
    price: 19.32132,
    url: '/projects/kusama',
    category: ['web3']
  },
  {
    id: 21,
    logo: epicheroLogo,
    thumb: epicheroThumb,
    name: 'Epic Hero',
    short: '',
    price: 19.32132,
    url: '/projects/epichero',
    category: ['gaming']
  },
  {
    id: 22,
    logo: wizardiumLogo,
    thumb: wizardiumThumb,
    name: 'Wizardium',
    short: '',
    price: 19.32132,
    url: '/projects/wizardium',
    category: ['gaming']
  },
  {
    id: 23,
    logo: nbaLogo,
    thumb: nbaThumb,
    name: 'NBA Top Shot',
    short: '',
    price: 19.32132,
    url: '/projects/nba',
    category: ['gaming']
  },
  {
    id: 24,
    logo: tankbattleLogo,
    thumb: tankbattleThumb,
    name: 'Tank Battle',
    short: '',
    price: 19.32132,
    url: '/projects/tankbattle',
    category: ['gaming']
  },
  {
    id: 25,
    logo: staratlasLogo,
    thumb: staratlasThumb,
    name: 'Star Atlas',
    short: '',
    price: 19.32132,
    url: '/projects/staratlas',
    category: ['gaming']
  },
  {
    id: 26,
    logo: bittorrentLogo,
    thumb: bittorrentThumb,
    name: 'Bittorrent',
    short: '(BTT)',
    price: 19.32132,
    url: '/projects/bittorrent',
    category: ['filesharing']
  },
  {
    id: 27,
    logo: holoLogo,
    thumb: holoThumb,
    name: 'Holochain',
    short: '(HOT)',
    price: 19.32132,
    url: '/projects/holochain',
    category: ['filesharing']
  },
  {
    id: 28,
    logo: aerweaveLogo,
    thumb: aerweaveThumb,
    name: 'Aerweave',
    short: '(AR)',
    price: 19.32132,
    url: '/projects/aerweave',
    category: ['filesharing']
  },
  {
    id: 29,
    logo: ankrLogo,
    thumb: ankrThumb,
    name: 'Ankr',
    short: '(ANKR)',
    price: 19.32132,
    url: '/projects/ankr',
    category: ['filesharing']
  },
  {
    id: 30,
    logo: siacoinLogo,
    thumb: siacoinThumb,
    name: 'Siacoin',
    short: '(SIA)',
    price: 19.32132,
    url: '/projects/siacoin',
    category: ['filesharing']
  }
]

const LinkBox = () => {
  const [category, setCategory] = useState('defi')
  const [projects, setProjects] = useState(Array)
  useEffect(() => {
    setProjects(
      array.filter(
        array =>
          array.category[0] === category ||
          array.category[1] === category ||
          category === 'all'
      )
    )
    console.log(category, projects)
  }, [category])

  return (
    <div>
      <CategoryContainer>
        <Category
          aria-label="all"
          onClick={e => setCategory(e.target.ariaLabel)}
          active={category === 'all' && true}
        >
          All Categories
        </Category>
        <Category
          aria-label="defi"
          onClick={e => setCategory(e.target.ariaLabel)}
          active={category === 'defi' && true}
        >
          DeFi
        </Category>
        <Category
          aria-label="meta"
          onClick={e => setCategory(e.target.ariaLabel)}
          active={category === 'meta' && true}
        >
          Metaverse
        </Category>
        <Category
          aria-label="nft"
          onClick={e => setCategory(e.target.ariaLabel)}
          active={category === 'nft' && true}
        >
          NFT & collectibles
        </Category>
        <Category
          aria-label="web3"
          onClick={e => setCategory(e.target.ariaLabel)}
          active={category === 'web3' && true}
        >
          Web 3.0
        </Category>
        <Category
          aria-label="gaming"
          onClick={e => setCategory(e.target.ariaLabel)}
          active={category === 'gaming' && true}
        >
          Gaming
        </Category>
        <Category
          aria-label="filesharing"
          onClick={e => setCategory(e.target.ariaLabel)}
          active={category === 'filesharing' && true}
        >
          Filesharing
        </Category>
      </CategoryContainer>
      <BoxContainer>
        {projects.map(project => {
          return (
            <Link key={Math.random()} passHref={true} href={project.url}>
              <Box>
                <figure>
                  <Image src={project.thumb} layout="fill" alt={project.name} />
                </figure>
                <div>
                  <figure>
                    <div>
                      <Image
                        src={project.logo}
                        layout="fill"
                        alt={project.name}
                      />
                    </div>
                  </figure>
                  <span>
                    <p>{project.name}</p> <small>{project.short}</small>
                  </span>
                  <div style={{ margin: '1vw 0' }} />
                  <strong>
                    <p>BINANCE</p>
                    <p>{project.price}</p>
                  </strong>
                  <strong>
                    <p>Bit2me</p>
                    <p>{project.price}</p>
                  </strong>
                </div>
              </Box>
            </Link>
          )
        })}
      </BoxContainer>
    </div>
  )
}

export default LinkBox
