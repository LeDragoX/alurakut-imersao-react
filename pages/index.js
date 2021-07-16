import React from "react";
import { Box } from "../src/components/Box";
import { MainGrid } from "../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { ProfileSideBar, ProfileRelationsBox } from "../src/lib/AlurakutPageUtils";

export default function Home() {
  const randomUser = "ledragox";
  const [communities, setCommunities] = React.useState([
    // {
    //   id: '47852436578436782346784754678',
    //   title: 'Eu odeio acordar cedo',
    //   imageUrl: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    // }
  ]);
  const favPersons = [
    'ChrisTitusTech',
    'Thog',
    'gdkchan',
    'Diolinux',
    'danileao',
    'maykbrito',
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];
  const qualities = [3, 2, 1,]
  const [gitFollowers, setGitFollowers] = React.useState([])
  // Array de seguidores no GitHub para um Box https://api.github.com/users/ledragox/followers
  React.useEffect(function () {
    // GitHub API (GET)
    fetch(`https://api.github.com/users/${randomUser}/followers`)
      .then(function getResponse(response) {
        if (response.ok) {
          return response.json()
        }
      })
      .then(function printResponse(response) {
        setGitFollowers(response)
      })

    // GraphQL API (POST)
    const TOKEN_READ = "65fa4978cccae44ce7fce735e63979"
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': `${TOKEN_READ}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "query": `query {
          allCommunities {
            id
            title
            imageUrl
            creatorSlug
          }
        }`
      })
    })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((responseComplete) => {
        const communitiesDato = responseComplete.data.allCommunities
        setCommunities(communitiesDato)

        console.log("Communities:\n", communitiesDato)
      })

  }, [])

  return (
    <div>
      <AlurakutMenu githubUser={randomUser} />
      <MainGrid>
        {/* <Box style= "grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={randomUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>

          <Box>
            <h1 className="title">
              Bem vindo(a), {randomUser[0].toUpperCase() + randomUser.substr(1)}
            </h1>
            <OrkutNostalgicIconSet confiavel={qualities[0]} legal={qualities[1]} sexy={qualities[2]} />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const formData = new FormData(e.target)
              const randomNum = Math.floor(Math.random() * 1029)
              if (!(formData.get('image'))) {
                formData.set('image', `https://picsum.photos/id/${randomNum}/200/300`)
              }

              console.log('Title: ', formData.get('title'))
              console.log('Image: ', formData.get('image'))

              const community = {
                // id: new Date().toISOString(),
                title: formData.get('title'),
                imageUrl: formData.get('image'),
                creatorSlug: randomUser,
              }

              fetch('api/communities', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(community),
              })
                .then(async (response) => {
                  const responseData = await response.json()
                  console.log("Create community response:\n", responseData.recordData)
                  const community = responseData.recordData

                  const updatedCommunities = [...communities, community]
                  setCommunities(updatedCommunities)
                })

            }}>
              <div>
                <input
                  type="text"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Coloque uma URL para usar de capa (Opcional)"
                  name="image"
                  aria-label="Coloque uma URL para usar de capa (Opcional)"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>

        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>

          <ProfileRelationsBox title="Seguidores" items={gitFollowers} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Minhas comunidades <a className="boxLink" href="#">({communities.length})</a>
            </h2>
            <ul>
              {communities.slice(0, 6).map((currentItem) => {
                return (
                  <li key={currentItem.id}>
                    <a href={`/communities/${currentItem.id}`}>
                      <img src={currentItem.imageUrl} />
                      <span>{currentItem.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <hr />
            <a className="boxLink" href="#">Ver Todos</a>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Seguindo <a className="boxLink" href="#">({favPersons.length})</a>
            </h2>
            <ul>
              {favPersons.slice(0, 6).map((currentItem) => {
                return (
                  <li key={currentItem}>
                    <a href={`/users/${currentItem}`}>
                      <img src={`https://github.com/${currentItem}.png`} />
                      <span>{currentItem}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <hr />
            <a className="boxLink" href="#">Ver Todos</a>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </div>
  )
}
