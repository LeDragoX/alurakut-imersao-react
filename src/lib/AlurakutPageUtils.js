import { Box } from "../components/Box";
import { AlurakutProfileSidebarMenuDefault } from "./AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelations";

// ================================================================================================================
// ProfileSideBar
// ================================================================================================================
function ProfileSideBar(props) {
  //console.log("Profile Side Bar:\n", props)
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: "8px" }}></img>
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

// ================================================================================================================
// ProfileRelationsBox
// ================================================================================================================
function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} <a className="boxLink" href="#">({props.items.length})</a>
      </h2>
      <ul>
        {props.items.slice(0, 6).map((currentItem) => {
          return (
            <li key={currentItem.id}>
              <a href={`${currentItem.html_url}`}>
                <img src={currentItem.avatar_url} />
                <span>{currentItem.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <hr />
      <a className="boxLink" href="#">Ver Todos</a>
    </ProfileRelationsBoxWrapper>
  )
}

export { ProfileSideBar, ProfileRelationsBox }