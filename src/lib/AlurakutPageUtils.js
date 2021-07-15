import { Box } from "../components/Box";
import { AlurakutProfileSidebarMenuDefault } from "./AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelations";

// ================================================================================================================
// ProfileSideBar
// ================================================================================================================
function ProfileSideBar(props) {
  console.log("Profile Side Bar: ", props)
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
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {/* {props.items.map((currentItem) => {
          return (
            <li key={currentItem.id}>
              <a href={`/communities/${currentItem.title}`}>
                <img src={currentItem.image} />
                <span>{currentItem.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export { ProfileSideBar, ProfileRelationsBox }