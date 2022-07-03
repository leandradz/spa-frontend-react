import { useState } from "react";
import {
  IconFavoriteOne,
  IconHero,
  IconToggleOff,
} from "../../components/Icons";
import { Logo } from "../../components/Logo";
import {
  CardList,
  Centralize,
  Container,
  Header,
  HeaderList,
  Text,
} from "./styles";

export const Home = () => {
  const [data, setData] = useState(undefined);

  return (
    <Container>
      <Header>
        <Logo />
        <h1>EXPLORE O UNIVERSO</h1>
        <Text isColorGray>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </Text>
      </Header>

      <input placeholder="Procurar por heróis" />
      <HeaderList>
        <Text>Encontrados X heróis</Text>

        <div>
          <IconHero />
          <Text isColorRed>Ordenar por nome - A/Z</Text>

          <IconToggleOff />
        </div>

        <div>
          <IconFavoriteOne />
          <Text isColorRed>Somente os favoritos</Text>
        </div>
      </HeaderList>

      {!!data ? <CardList></CardList> : <Centralize>carregando...</Centralize>}
    </Container>
  );
};
