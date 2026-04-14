import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["primary", "secondary"],
        },
        onClick: { action: "clicked" },
    },
    args: {
        children: "Click me",
        variant: "primary",
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary",
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
        children: "Disabled",
    },
}
