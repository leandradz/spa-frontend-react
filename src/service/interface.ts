export interface CharactersDTO {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    items: {
      name: string
    }[]
    available: string
  }
  stories: string[]
  events: string[]
  series: {
    available: string
  }
}
export interface ComicsDTO {
  thumbnail: { extension: string; path: string }
  title: string
}
