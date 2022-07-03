import { IconMinorSearch } from '../Icons'
import { SearchBarStyled, Input } from './styles'

interface SearchBarProps {
  setSearchValue: (value: string) => void
  isRed?: boolean
  isLarge?: boolean
}

export const SearchBar = ({
  setSearchValue,
  isRed = false,
  isLarge = false,
}: SearchBarProps) => (
  <SearchBarStyled isRed={isRed} isLarge={isLarge}>
    <IconMinorSearch />
    <Input
      type="text"
      placeholder="Procure por heróis"
      className="clear-styles"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  </SearchBarStyled>
)
