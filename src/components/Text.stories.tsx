import {Meta, StoryObj} from '@storybook/react'
import {Text, TextProps} from './Text'

export default { //configuração global do Text
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm','md','lg'],
            control: {
                type:'inline-radio'
            }
        }
    }

} as Meta<TextProps>

//Configurações das variantes de Text
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Agora com tag P</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}
