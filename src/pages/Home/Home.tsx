import { useEffect, useState } from 'react'
import { IconHero } from '../../components/Icons'
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
import { Card } from '../../components/Card/Card'
import { CharactersDTO } from '../../service/interface'
import { ButtonFavorite } from '../../components/ButtonFavorite/ButtonFavorite'
import { handleFavoriteCharacters } from '../../utils/favorite'

export const Home = () => {
  const { getCharacters } = useGetData()
  const [data, setData] = useState(undefined)

  const [isFilterActive, setIsFilterActive] = useState(false)
  const favoriteList = JSON.parse(localStorage.getItem('favorite')) || []
  const dataList = isFilterActive ? favoriteList : data?.data?.results

  const [searchValue, setSearchValue] = useState('')
  const debouncedHandleSearch = debounce((value: string) => {
    setSearchValue(value)
  }, 1000)

  const [isSorterActive, setIsSorterActive] = useState(true)
  const orderByName = isSorterActive ? '&orderBy=name' : '&orderBy=-name'

  const handleSaveHero = (character: CharactersDTO) => {
    localStorage.setItem('character', JSON.stringify(character))
  }

  const [hasNewFavorite, setHasNewFavorite] = useState(false)
  const handleNewFavorite = (character: CharactersDTO) => {
    setHasNewFavorite(!hasNewFavorite)
    handleFavoriteCharacters(character)
  }

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
        <Text>Encontrados {data?.data?.total} heróis</Text>

        <div>
          <IconHero />
          <Text isColorRed>Ordenar por nome - A/Z</Text>

          <Toggle
            isActive={isSorterActive}
            setIsSorterActive={setIsSorterActive}
          />
        </div>

        <div>
          <ButtonFavorite
            isFavorite={isFilterActive}
            setIsActive={setIsFilterActive}
            isFilter
          />
          <Text isColorRed>Somente os favoritos</Text>
        </div>
      </HeaderList>

      {!!dataList ? (
        <CardList>
          {dataList?.map((character: CharactersDTO) => (
            <Card
              character={character}
              handleSaveHero={handleSaveHero}
              favoriteList={favoriteList}
              handleNewFavorite={handleNewFavorite}
            />
          ))}
        </CardList>
      ) : (
        <Centralize>carregando...</Centralize>
      )}
    </Container>
  )
}
