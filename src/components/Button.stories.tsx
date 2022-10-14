import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from './Button'

export default { //configuração global do Button
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create'
    },
    argTypes: {

    }

} as Meta<ButtonProps>

//Configurações das variantes de Button
export const Default: StoryObj<ButtonProps> = {}
