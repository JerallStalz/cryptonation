import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Title,
  TitleContainer,
  FloatingDate,
  FloatingArticle,
  FloatingButton,
  FloatingButtonContainer,
  SupportsAnnon,
  Rounded,
  SupportPlatforms,
  SupportsFloat,
  ProjectsContainer
} from '../components/home-styled'
import binance from '../public/images/binance-logo.svg'
import ethereum from '../public/images/ethereum-logo.svg'
import polkadot from '../public/images/polkadot-logo.svg'
import solana from '../public/images/solana-logo.svg'
import LinkBox from '../components/link-box'
import { BsFillCloudSunFill } from 'react-icons/bs'

const Home = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    getDate()
  }, [])

  const getDate = async () => {
    try {
      const newDate = await new Date()
      setDate(String(newDate).slice(4, 15).replaceAll(' ', ` / `))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <TitleContainer>
        <FloatingDate>
          <BsFillCloudSunFill />
          {date}
        </FloatingDate>
        <Title>
          <span>Investing early</span>
          <span>on the blockchain</span>
          <span> project</span>
        </Title>
        <FloatingArticle>
          <span>HIGHLY-VETTED IDEAS AND TEAMS YOU CAN TRUST</span>
          <span>SUPPORTED BY INDUSTRY-LEADING CREATORS AND FUNDS.</span>
        </FloatingArticle>
      </TitleContainer>
      <FloatingButtonContainer>
        <FloatingButton>SEE UPCOMING SALES</FloatingButton>
      </FloatingButtonContainer>

      <SupportsAnnon>
        <div>
          <span>Supported networks by</span>
        </div>
        <Rounded
          id="fd274703-ad24-4b34-ac10-1465e422daef"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 472"
          style={{ height: '100%', bottom: '-2px', left: '-2px' }}
        >
          <path
            d="M400,600H0V128H26.79a74.89,74.89,0,0,1,31,6.71h0a95.91,95.91,0,0,1,44.59,41.5h0C152.87,321.74,173.07,431.15,279,543l33,26c10.69,11,63.07,31,78.24,31Z"
            transform="translate(0 -128)"
          />
        </Rounded>
      </SupportsAnnon>
      <SupportPlatforms>
        <div>
          <article style={{ height: '2.7vw', width: '11vw' }}>
            <Image src={binance} alt="se" layout="fill" />
          </article>
          <article style={{ height: '2.3vw', width: '11vw' }}>
            <Image src={solana} alt="se" layout="fill" />
          </article>
          <article style={{ height: '2.3vw', width: '10vw' }}>
            <Image src={polkadot} alt="se" layout="fill" />
          </article>
          <article style={{ height: '2.7vw', width: '11vw' }}>
            <Image src={ethereum} alt="se" layout="fill" />
          </article>
        </div>
        <Rounded
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 256"
          style={{
            transform: 'rotate(180deg)',
            height: '100%',
            bottom: '0',
            left: '-1px'
          }}
        >
          <path d="M200,256h0a130,130,0,0,1-28.34-3.14c-12.25-2.74-23.85-5.87-35.16-12.54-24.68-14.54-40-32-53-59.82-.12-.24-.23-.48-.34-.72L0,0H200Z" />
        </Rounded>
        <SupportsFloat>
          <span>scroll to see ongoing blockchain</span>
          <span>project and give them your support</span>
        </SupportsFloat>
      </SupportPlatforms>
      <ProjectsContainer>
        <small>fundraising</small>
        <h2>
          <span>Futuristic work shows us what&apos;s posible.</span>
          <span>Help fund it here.</span>
          <small>We bring new technologies to our community.</small>
        </h2>
        <LinkBox />
      </ProjectsContainer>
    </div>
  )
}

export default Home
