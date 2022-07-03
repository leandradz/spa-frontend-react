import { CardStyled, H4 } from './styles'
import { Link } from 'react-router-dom'
import { ButtonFavorite } from '../ButtonFavorite/ButtonFavorite'
import { CharactersDTO } from '../../service/interface'

interface CardProps {
  character: CharactersDTO
  handleSaveHero: (character: CharactersDTO) => void
  favoriteList: Array<CharactersDTO> | []
  handleNewFavorite: (character: CharactersDTO) => void
}

export const Card = ({
  character,
  handleSaveHero,
  favoriteList,
  handleNewFavorite,
}: CardProps) => {
  return (
    <CardStyled onClick={() => handleSaveHero(character)}>
      <Link to={`hero/${character.id}`}>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width="200px"
          height="200px"
        />
      </Link>
      <div>
        <H4>{character.name}</H4>
        <ButtonFavorite
          character={character}
          handleNewFavorite={handleNewFavorite}
          isFavorite={
            !!favoriteList.find(
              (item: CharactersDTO) => item.id === character.id,
            )
          }
        />
      </div>
    </CardStyled>
  )
}
