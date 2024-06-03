import { useRouter } from 'next/navigation'
import Image from "next/image";

const config = {
  project: {
    link: 'https://github.com/iamlexivale/reforged-wiki'
  },
  docsRepositoryBase: 'https://github.com/iamlexivale/reforged-wiki/blob/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Official Reforged Wiki' 
      }
    }
  },
  logo: (
    <>
      <Image
        src="https://sin1.contabostorage.com/8e522510ce50465f85df97fa757b2d60:reforged/reforged-logo.png"
        width={24} height={24} alt="Logo Reforged"
      />
      <b style={{ marginLeft: '.4em' }}>Official Reforged Wiki</b>
    </>
  ),
  chat: {
    link: 'https://discord.gg/jnYcwCR2UE',
  },
  // banner: {
  //   key: 'v1-release',
  //   text: (
  //     <a href="https://www.reforged.world/" target="_blank">
  //       🎉 Reforged Public API v1 is released. Read more →
  //     </a>
  //   )
  // },
  footer: ''
};

export default config;