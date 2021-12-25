import {
  P,
  Subtitle,
  Title,
  Project,
  ImageContainer
} from '../../components/projects-styled'
import Image from 'next/image'
import terra from '../../public/images/terra.webp'
import image from '../../public/images/terra-1.webp'
import image2 from '../../public/images/terra-2.webp'
import ExternalNetworks from '../../components/external-networks'

const Terra = () => {
  return (
    <Project>
      <Title>Terra</Title>
      <P>
        <strong>
          <b>Terra (LUNA)</b> is a blockchain project that seeks to create an
          entire ecosystem focused on the generation of <b>DeFi</b> applications
          on a high-speed blockchain and the facility to generate stablecoins
          anchored to the main fiat currencies around the world.
        </strong>
      </P>
      <ImageContainer>
        <Image src={terra} alt="terra" />
      </ImageContainer>
      <P>
        The stablecoin world is one of the fastest growing in the world. world
        of cryptocurrencies and, Terra (LUNA) is a clear example of this. Terra
        is a project with a clear objective:{' '}
        <strong>
          create a blockchain framework for application deployment <b>DeFi </b>
          that use native <b> stablecoins </b> and the LUNA token.
        </strong>
      </P>
      <P>
        The idea is simple: {''}
        <strong>
          use the LUNA token to algorithmically collateralize stablecoins, and
          thus enable the LUNA token as a token of governance and payments on
          the Terra network, and stablecoins for DeFi platforms and electronic
          payments.
        </strong>{' '}
        {''}
        In this way, Terra creates a framework that others can use to run your
        own applications, stable and secure payment systems from any part of the
        world.
      </P>
      <ImageContainer>
        <Image src={image} alt="terra" />
      </ImageContainer>
      <Subtitle>Origin of Terra Money</Subtitle>
      <P>
        Terra Money is the brainchild of TerraLabs, a South Korean company
        founded by <strong> Daniel Shin </strong> and <strong> Do Kwon</strong>.
        TerraLabs started its operations in January 2018 and since then it had
        proposed to revolutionize the crypto space with a new idea: {''}
        <strong> the Terra blockchain. </strong>
      </P>
      <P>
        The idea of this blockchain was to create an infrastructure of high
        speed that would allow the deployment of DeFi applications through all
        tools integrated into the blockchain itself. That was how the
        development of the blockchain Terra, its LUNA token, stablecoins
        algorithms and all the tokenomics that would make possible the operation
        of this new project.
      </P>
      <P>
        As the development became more and more complete, TerraLabs integrated
        its efforts with other projects such as {''}
        <b> Mirror Protocol</b>, the electronic payment system <b> Chai </b> and{' '}
        {''}
        <b> Anchor Protocol</b>. With these new added efforts, Terra started to
        develop faster and in April 2019, Terra announced the official mainnet
        launch along with its whitepaper.
      </P>
      <ImageContainer>
        <Image src={image2} alt="creators-image" />
      </ImageContainer>
      <Subtitle>How Terra works</Subtitle>
      <P>
        First of all, you should know that Terra is a protocol and its own
        blockchain that does not depend on other blockchains such as{' '}
        <b>Ethereum</b> or <b>Solana</b>. This means that the chain of blocks,
        wallets and all the infrastructure of Terra works autonomously from
        other projects.
      </P>
      <P>
        That said, the Terra blockchain works thanks to the{' '}
        <b>Proof of Stake (PoS)</b>, so block validators must do <b>staking</b>{' '}
        of LUNA tokens, in order to vote and validate blocks within the network.
        This is the main functionality of the LUNA token, ensuring the proper
        functioning and security of the Terra network.
      </P>
      <P>
        Additionally, Terra has been built to give developers advanced{' '}
        <b>smart contract</b>, allowing them to design <b>dApps</b>. As Terra is
        a PoS type blockchain, these dApps are benefit from high transaction
        speed and low transaction costs commissions, which provides an
        additional bonus to the use of Terra as platform to create dApps.
        However, the jewels of performance of Terra are its ability to execute
        smart contracts, deploy stablecoins and DeFi services that are
        integrated within Terra.
      </P>
      <P>
        On the other hand, all of Terra&apos;s operations are carried out in a
        decentralized manner and are controlled by the system&apos;s smart
        contracts enabled by <b>CosmWasm</b> technology. This allows developers
        to build smart contracts in Rust, Go or AssemblyScript, use Terra
        stablecoins, onchain swaps, layer one oracles natively, and expose DApps
        user bases to Terra payment services without the need to use
        permissions.
      </P>
      <P>
        In September 2021,{' '}
        <strong>Terra has updated its protocol to the Columbus-5</strong>{' '}
        version, which has introduced important changes to the system. One of
        these changes has been the modification of the tokenomic model of the
        project towards the burning of all the LUNAs used to mint TerraUSD
        (UST), instead of assigning a part to the community pool as it happened
        previously.
      </P>
      <P>
        Additionally, the integration of LUNA in the{' '}
        <strong>Inter-Blockchain Communication (IBC)</strong> standard allows
        the Terra network to communicate and interact with operating protocols
        in <b>Cosmos</b>. This implies a more widespread adoption of LUNA
        throughout the Cosmos ecosystem, which allows cross-operation between
        almost twenty different blockchains. To better understand the operation
        and structure of Terra, let&apos;s take a closer look at each of its
        parts.
      </P>
      <ExternalNetworks
        github={'https://github.com/terra-money'}
        twitter={'https://twitter.com/terra_money'}
        whitepaper={
          'https://academy.bit2me.com/wp-content/uploads/2021/10/Terra_White_paper.pdf'
        }
        reddit={'https://www.reddit.com/r/terraluna/'}
        discord={'https://discord.com/invite/e29HWwC2Mz'}
        web={'https://www.terra.money/'}
      />
    </Project>
  )
}

export default Terra
