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
        src="https://cdn.discordapp.com/attachments/1240631069879963649/1240631093846081689/reforged.png?ex=6647433e&is=6645f1be&hm=4838d2e651bc6c8648c481d40ba7f05bde9f1b66f786cd357bb5cc41abd3a62c&"
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