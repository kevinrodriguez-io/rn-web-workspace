import React, { FC } from 'react'
import { Button } from '@yourapp/ui'

export default {
  title: 'Button',
  component: Button,
  args: {
    disabled: false
  }
}

export const Default: FC = ({ ...args }) => <Button {...args}>Continue</Button>
