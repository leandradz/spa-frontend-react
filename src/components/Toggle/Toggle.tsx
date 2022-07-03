import ToggleOn from '../../assets/img/toggle_on.svg'
import ToggleOff from '../../assets/img/toggle_off.svg'
import { Button } from './styles'

interface ToggleProps {
  isActive: boolean
  setIsSorterActive: (b: boolean) => void
}

export const Toggle = ({ isActive, setIsSorterActive }: ToggleProps) => (
  <Button onClick={() => setIsSorterActive(!isActive)}>
    {isActive ? (
      <img src={ToggleOn} alt="Toggle On" />
      ) : (
      <img src={ToggleOff} alt="Toggle Off" />
    )}
  </Button>
)
