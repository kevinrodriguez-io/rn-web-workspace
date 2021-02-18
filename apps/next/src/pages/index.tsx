import { FC } from 'react'
import { Button } from '@yourapp/ui'

const IndexPage: FC = () => {
  return (
    <div>
      <Button onPress={() => alert('Test')}>Primary</Button>
      <Button variant="SECONDARY" onPress={() => alert('Test')}>
        Secondary
      </Button>
      <Button disabled onPress={() => alert('Test')}>
        Disabled
      </Button>
    </div>
  )
}

export default IndexPage
