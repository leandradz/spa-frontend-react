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
  