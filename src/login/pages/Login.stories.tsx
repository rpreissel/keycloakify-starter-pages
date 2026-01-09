import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login.ftl" });

const meta = {
    title: "login/login.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInvalidCredentials: Story = {
    args: {
        kcContext: {
            login: {
                username: "johndoe"
            },
            message: {
                type: "error",
                summary: "Invalid username or password."
            }
        }
    }
};

export const WithoutRegistration: Story = {
    args: {
        kcContext: {
            realm: {
                registrationAllowed: false
            }
        }
    }
};

export const WithoutRememberMe: Story = {
    args: {
        kcContext: {
            realm: {
                rememberMe: false
            }
        }
    }
};

export const WithoutPasswordReset: Story = {
    args: {
        kcContext: {
            realm: {
                resetPasswordAllowed: false
            }
        }
    }
};

export const WithEmailAsUsername: Story = {
    args: {
        kcContext: {
            realm: {
                loginWithEmailAllowed: true,
                registrationEmailAsUsername: true
            }
        }
    }
};

export const WithSocialProviders: Story = {
    args: {
        kcContext: {
            social: {
                displayInfo: true,
                providers: [
                    {
                        loginUrl: "#",
                        alias: "google",
                        providerId: "google",
                        displayName: "Google",
                        iconClasses: "fa fa-google"
                    },
                    {
                        loginUrl: "#",
                        alias: "github",
                        providerId: "github",
                        displayName: "GitHub",
                        iconClasses: "fa fa-github"
                    }
                ]
            }
        }
    }
};
