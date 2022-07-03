import moment from 'moment'
import { ButtonFavorite } from '../../components/ButtonFavorite/ButtonFavorite'
import { CharactersDTO } from '../../service/interface'
import { IconComics, IconEvaluationOff, IconEvaluationOn, IconTrailer } from '../Icons'
import {
  BlockWrapper,
  CardDetails,
  Column,
  Container,
  H4,
  Row,
  Space,
} from './styles'

interface CharacterDetailsProps {
  character: CharactersDTO
  handleNewFavorite: (character: CharactersDTO) => void
  favoriteList: CharactersDTO[]
  heroComics: any
}

export const CharacterDetails = ({
  character,
  handleNewFavorite,
  favoriteList,
  heroComics,
}: CharacterDetailsProps) => {
  return (
    <Container>
      <CardDetails>
        <Space>
          <H4>{character?.name?.toUpperCase()}</H4>
          <ButtonFavorite
            character={character}
            handleNewFavorite={handleNewFavorite}
            isFavorite={
              !!favoriteList?.find(
                (item: CharactersDTO) => item.id === character?.id,
              )
            }
          />
        </Space>
        <div>
          <p>{character?.description}</p>
        </div>
        <BlockWrapper>
          <Column>
            <H4 style={{ marginBottom: '0.5em' }}>Quadrinhos</H4>
            <div
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            >
              <IconComics />
              {character?.comics?.available}
            </div>
          </Column>

          <Column>
            <H4 style={{ marginBottom: '0.5em' }}>Filmes</H4>
            <div
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            >
              <IconTrailer />
              {character?.series?.available}
            </div>
          </Column>

          <Row>
            <H4 style={{ display: 'inline', marginRight: '0.5em' }}>Rating:</H4>
            <span>
              <IconEvaluationOn />
              <IconEvaluationOn />
              <IconEvaluationOn />
              <IconEvaluationOn />
              <IconEvaluationOff />
            </span>
          </Row>

          <Row>
            <H4 style={{ display: 'inline', marginRight: '0.5em' }}>
              Último quadrinho:
            </H4>
            <span>
              {moment(heroComics?.[0]?.comic?.dates?.[0]?.date)
                .locale('pt-BR')
                .format('LL')}
            </span>
          </Row>
        </BlockWrapper>
      </CardDetails>

      <img
        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        alt={character.name}
        width="400px"
        height="400px"
        style={{ borderRadius: '16px' }}
      />
    </Container>
  )
}
