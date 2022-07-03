import md5 from 'md5'

export const useGetData = () => {
  const timestamp = Number(new Date())
  const hash = md5(
    timestamp +
      process.env.REACT_APP_PRIVATE_KEY +
      process.env.REACT_APP_PUBLIC_KEY,
  )

  const getCharacters = async (orderByName: string, searchValue: string) => {
    const queryString = searchValue != '' ? `&name=${searchValue}` : ''

    const result = await fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?ts=${timestamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}${queryString}${orderByName}`,
    )
      .then((response) => response.json())
      .then((resp) => resp)
      .catch((err) => console.log(err))

    return result
  }

  const getComicsByCharacter = async (characterId: string) => {
    const result = await fetch(
      `${process.env.REACT_APP_BASE_URL}/characters/${characterId}/comics?ts=${timestamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}&orderBy=-onsaleDate&limit=10`,
    )
      .then((response) => response.json())
      .then((resp) => resp.data.results)
      .catch((err) => console.log(err))

    return result
  }

  return {
    getCharacters,
    getComicsByCharacter,
  }
}
