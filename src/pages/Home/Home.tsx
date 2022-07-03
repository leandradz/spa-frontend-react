import { useEffect, useState } from 'react'
import {
  IconFavoriteOne,
  IconHero,
} from '../../components/Icons'
import { Logo } from '../../components/Logo'
import { useGetData } from '../../service/api'
import {
  CardList,
  Centralize,
  Container,
  Header,
  HeaderList,
  Text,
} from './styles'
import { debounce } from 'lodash'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Toggle } from '../../components/Toggle/Toggle'

export const Home = () => {
  const [data, setData] = useState(undefined)
  const { getCharacters } = useGetData()

  const [searchValue, setSearchValue] = useState('')
  const debouncedHandleSearch = debounce((value: string) => {
    setSearchValue(value)
  }, 1000)

  const [isSorterActive, setIsSorterActive] = useState(true)
  const orderByName = isSorterActive ? '&orderBy=name' : '&orderBy=-name'

  useEffect(() => {
    ;(async () => {
      const promise = new Promise((resolve) =>
        resolve(getCharacters(orderByName, searchValue)),
      )
      const result = await promise
      setData(result)
    })()
  }, [searchValue, isSorterActive])

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

      <SearchBar setSearchValue={debouncedHandleSearch} isRed isLarge />

      <HeaderList>
        <Text>Encontrados X heróis</Text>

        <div>
          <IconHero />
          <Text isColorRed>Ordenar por nome - A/Z</Text>

          <Toggle
            isActive={isSorterActive}
            setIsSorterActive={setIsSorterActive}
          />
        </div>

        <div>
          <IconFavoriteOne />
          <Text isColorRed>Somente os favoritos</Text>
        </div>
      </HeaderList>

      {!!data ? <CardList></CardList> : <Centralize>carregando...</Centralize>}
    </Container>
  )
}
