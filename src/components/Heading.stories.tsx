import {Meta, StoryObj} from '@storybook/react'
import {Heading, HeadingProps} from './Heading'

export default { //configuração global do Text
    title: 'Components/Heading',
    component: Heading,
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

} as Meta<HeadingProps>

//Configurações das variantes de Text
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Agora com H1</h1>
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