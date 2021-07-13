import styled from "styled-components";
import { Box } from "../src/components/Box";
import { MainGrid } from "../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";

function ProfileSideBar(params) {
  console.log(params)
  return (
    <Box>
      <img src={`https://github.com/${params.githubUser}.png`} style={{ borderRadius: "8px" }}></img>
    </Box>
  )
}

export default function Home() {
  const githubUser = "ledragox"
  const pessoasFav = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  return (
    <div>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          {/* <Box style= "grid-area: profileArea;"> */}
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFav.length})
            </h2>
            <ul>
              {pessoasFav.map((pessoaAtual) => {
                return (
                  <li>
                    <a href={`/users/${pessoaAtual}`} key={pessoaAtual}>
                      <img src={`https://github.com/${pessoaAtual}.png`} />
                      <span>{pessoaAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </div>
  )
}
