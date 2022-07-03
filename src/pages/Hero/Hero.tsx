import { Link } from 'react-router-dom'
import { LogoMinor } from '../../components/Logo'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Centralize, Container, Header, Title, ComicsSection, Card } from './styles'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { useGetData } from '../../service/api'
import { ComicsDTO } from '../../service/interface'

export const Hero = () => {
  const { getCharacters, getComicsByCharacter } = useGetData()

  const [character, setCharacter] = useState(
    JSON.parse(localStorage.getItem('character')),
  )
  const [heroComics, setHeroComics] = useState(undefined)

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
          <ComicsSection>
            <Title>Últimos lançamentos</Title>
            {heroComics?.map((comic: ComicsDTO) => (
              <Card>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={`${comic.title}`}
                  width="150px"
                  height="230px"
                />
                <p>{comic.title}</p>
              </Card>
            ))}
          </ComicsSection>
        </div>
      ) : (
        <Centralize>Personagem não encontrado</Centralize>
      )}
    </Container>
  )
}
