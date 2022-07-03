import { ComicsDTO } from '../../service/interface'
import { Card, Container } from './styles'

interface ComicsListProps {
  heroComics: ComicsDTO[]
}

export const ComicsList = ({ heroComics }: ComicsListProps) => {
  return (
    <Container>
      {heroComics?.map((comic: ComicsDTO) => (
        <Card>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
            width="150px"
            height="230px"
          />
          <p>{comic.title}</p>
        </Card>
      ))}
    </Container>
  )
}
