import { CharactersDTO } from '../../service/interface'
import { IconFavoriteOne, IconFavoriteTwo } from '../Icons'
import { Button } from './styles'

interface FavoriteProps {
  isFavorite?: boolean
  character?: CharactersDTO
  handleNewFavorite?: (character: CharactersDTO) => void
  setIsActive?: (b: boolean) => void
  isFilter?: boolean
}

export const ButtonFavorite = ({
  isFavorite,
  character,
  handleNewFavorite,
  isFilter,
  setIsActive,
}: FavoriteProps) => {
  
  const handleChangeFavorite = (character: CharactersDTO) => {
    if (isFilter) {
      return setIsActive(!isFavorite)
    }
    handleNewFavorite(character)
  }

  return (
    <Button onClick={() => handleChangeFavorite(character)}>
      {isFavorite ? <IconFavoriteOne /> : <IconFavoriteTwo />}
    </Button>
  )
}
