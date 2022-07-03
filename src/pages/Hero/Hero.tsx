import { Link } from 'react-router-dom'
import { LogoMinor } from '../../components/Logo'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Centralize, Container, Header, Title, ComicsSection } from './styles'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { useGetData } from '../../service/api'
import { CharactersDTO } from '../../service/interface'
import { CharacterDetails } from '../../components/CharacterDetails/CharacterDetails'
import { handleFavoriteCharacters } from '../../utils/favorite'
import { ComicsList } from '../../components/ComicsList/ComicsList'

export const Hero = () => {
  const { getCharacters, getComicsByCharacter } = useGetData()

  const [heroComics, setHeroComics] = useState(undefined)
  const [character, setCharacter] = useState(
    JSON.parse(localStorage.getItem('character')),
  )

  const favoriteList = JSON.parse(localStorage.getItem('favorite')) || []
  const [hasNewFavorite, setHasNewFavorite] = useState(false)
  const handleNewFavorite = (character: CharactersDTO) => {
    setHasNewFavorite(!hasNewFavorite)
    handleFavoriteCharacters(character)
  }

  const [searchValue, setSearchValue] = useState('')
  const debouncedHandleSearch = debounce((value: string) => {
    setSearchValue(value)
  }, 1000)

  useEffect(() => {
    if (!!character) {
      ;(async () => {
        const resp = new Promise((resolve) =>
          resolve(getComicsByCharacter(character?.id)),
        )
        const result = await resp
        setHeroComics(result)
      })()
    }
  }, [character])

  useEffect(() => {
    if (searchValue !== '') {
      ;(async () => {
        const resp = new Promise((resolve) =>
          resolve(getCharacters('', searchValue)),
        )
        const result: any = await resp
        localStorage.setItem(
          'character',
          JSON.stringify(
            !!result?.data?.results?.[0] ? result?.data?.results?.[0] : [],
          ),
        )
        setCharacter(result?.data?.results?.[0])
      })()
    }
  }, [searchValue])

  return (
    <Container>
      <Header>
        <Link to={`/`}>
          <LogoMinor />
        </Link>

        <SearchBar setSearchValue={debouncedHandleSearch} />
      </Header>
      {!!character?.name ? (
        <div>
          <CharacterDetails
            character={character}
            handleNewFavorite={handleNewFavorite}
            favoriteList={favoriteList}
            heroComics={heroComics}
          />

          <ComicsSection>
            <Title>Últimos lançamentos</Title>

            <ComicsList heroComics={heroComics} />
          </ComicsSection>
        </div>
      ) : (
        <Centralize>Personagem não encontrado</Centralize>
      )}
    </Container>
  )
}
