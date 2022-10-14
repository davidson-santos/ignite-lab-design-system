import {Meta, StoryObj} from '@storybook/react'
import {Checkbox, CheckboxProps} from './Checkbox'
import { Text } from './Text'

export default { //configuração global do Checkbox
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>
                        Lembrar de mim por 30 dias
                    </Text>
                </div>
            )
        }
    ]

} as Meta<CheckboxProps>

//Configurações das variantes de Checkbox
export const Default: StoryObj<CheckboxProps> = {}
