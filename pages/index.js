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
  const favPersons = [
    'ChrisTitusTech',
    'Thog',
    'gdkchan',
    'Diolinux',
    'danileao',
    'maykbrito',
    //'juunegreiros',
    //'omariosouto',
    //'peas',
    //'rafaballerini',
    //'marcobrunodev',
    //'felipefialho',
  ];
  const qualities = [
    3,
    2,
    1,
  ]

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
              Bem vindo(a) {githubUser[0].toUpperCase() + githubUser.substr(1)}
            </h1>
            <OrkutNostalgicIconSet confiavel={qualities[0]} legal={qualities[1]} sexy={qualities[2]} />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({favPersons.length})
            </h2>
            <ul>
              {favPersons.map((currentPerson) => {
                return (
                  <li>
                    <a href={`/users/${currentPerson}`} key={currentPerson}>
                      <img src={`https://github.com/${currentPerson}.png`} />
                      <span>{currentPerson}</span>
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
