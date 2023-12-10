import FamilyCard from "./components/cards";
import fundo from "./utils/fundofundo.jpg";
import infos from "./database/infos.json";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App" style={{ textAlign: "-webkit-center" }}>
      <Box
        sx={{
          paddingTop: "4%",
          paddingBottom: "4%",
          backgroundSize: "contain",
        }}
        style={{ backgroundImage: `url(${fundo})` }}
      >
        {infos.map((item, index) => (
          <FamilyCard
            key={index}
            nome={item.name}
            profileImage={item.image}
            like={item.like}
            dontLike={item.dontLike}
            shirt={item.shirt}
            pants={item.pants}
            shoes={item.shoes}
            linkImg={item.linkImg}
            link={item.link}
            textLines={item.thingsLike}
          />
        ))}
      </Box>
    </div>
  );
}

export default App;
