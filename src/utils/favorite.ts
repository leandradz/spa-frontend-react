import { toast } from 'react-toastify'
import { CharactersDTO } from '../service/interface'

const updateLocalStorage = (value: CharactersDTO[]) => {
  localStorage.setItem('favorite', JSON.stringify(value))
}

export const handleFavoriteCharacters = (character: CharactersDTO) => {
  const favoriteList: CharactersDTO[]  = JSON.parse(localStorage.getItem('favorite')) || []
  const hasThisCharacter = favoriteList.find(
    (item: CharactersDTO) => item.id === character.id,
  )

  if (!!hasThisCharacter) {
    return updateLocalStorage(
      favoriteList.filter((item: CharactersDTO) => item.id !== character.id),
    )
  }

  if (favoriteList.length === 5)
    return toast.error('Limite de 5 favoritos já foi atingido')

  return updateLocalStorage([...favoriteList, character])
}
