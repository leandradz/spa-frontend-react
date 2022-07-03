import { Link } from 'react-router-dom'
import { LogoMinor } from '../../components/Logo'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import {
  Centralize,
  Container,
  Header,
  Title,
  ComicsSection,

} from './styles'
import { debounce } from 'lodash'
import { useState } from 'react'

export const Hero = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedHandleSearch = debounce((value: string) => {
    setSearchValue(value)
  }, 1000)

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
          </ComicsSection>
        </div>
      ) : (
        <Centralize>Personagem não encontrado</Centralize>
      )}
    </Container>
  )
}
