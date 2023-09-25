import {useState} from 'react'
import {BgContainer, Para, Button} from './styledComponents'

const Lock = () => {
  const [status, setStatus] = useState('false')

  const onChangeStatus = () => {
    setStatus(prev => !prev)
  }

  return (
    <BgContainer>
      <img
        src={
          status
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={status ? 'lock' : 'unlock'}
      />
      <Para>
        {status ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Para>
      <Button type="button" onClick={onChangeStatus}>
        {status ? 'Unlock' : 'Lock'}
      </Button>
    </BgContainer>
  )
}
export default Lock
