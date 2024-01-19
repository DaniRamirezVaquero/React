import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "Vakero",
    name: "Daniel Ramírez Vaquero",
  },
  {
    userName: "NattySex",
    name: "Natalia Contreras Gómez",
  },
  {
    userName: "P4co",
    name: "Francisco Javier",
  },
  {
    userName: "Manolo74",
    name: "Manuel García",
  }
];

export function App() {

  // <> </> es un React.Fragment
  return (
    <section className="App">
      {
        users.map((user) => (
          <TwitterFollowCard userName={user.userName} key={user.userName}>
            {user.name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
