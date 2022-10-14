import {Meta, StoryObj} from '@storybook/react'
import {Envelope} from 'phosphor-react'
import {TextInput, TextInputInputProps, TextInputRootProps} from './TextInput'

export default { //configuração global do TextInput
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <>
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>,
                <TextInput.Input 
                    placeholder='Digite seu e-mail'
                    type='email'
                />
            </>
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

} as Meta<TextInputRootProps>

//Configurações das variantes de TextInput
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Digite seu e-mail' type='email'/>
    }
}

