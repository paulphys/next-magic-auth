![magic auth](/magic.png)
#  Next.js + Magic Auth boilerplate

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpaulphys%2Fnext-magic-auth)
                             
### Built with
-   [Next.js](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Magic Auth](https://magic.link/)
-   [Tailwind CSS](https://tailwindcss.com/)

## Demo
Check out a live demo 👉 [magic.baul.ml](https://magic.baul.ml)

## Magic Auth
[Magic](https://magic.link) is a passwordless authentication sdk that lets you plug and play different auth methods into your app. 
Magic supports passwordless email login via magic links, social login with OAuth2 and web standards like WebAuthn.

For more insight into the authentication flow and actual implementation, take a look at their Next.js starter [example-nextjs](https://github.com/magiclabs/example-nextjs) or visit the [docs](https://docs.magic.link).
### Setup
- [Sign up](https://dashboard.magic.link/signup) for Magic
- Create a new App
#### Email login
- Copy `TEST PUBLISHABLE KEY` for testing purposes and `LIVE PUBLISHABLE KEY` for live production 
#### Social login (OAuth2)
Follow the official [documentation](https://docs.magic.link/social-login) on how to set up each social login provider:
- [Github](https://docs.magic.link/social-login#github)
- [Google](https://docs.magic.link/social-login#google--gmail)
- [Gitlab](https://docs.magic.link/social-login#gitlab)
- [Bitbucket](https://docs.magic.link/social-login#bitbucket)
- [Apple](https://docs.magic.link/social-login#apple)
- [Twitter](https://docs.magic.link/social-login#twitter)
- [Facebook](https://docs.magic.link/social-login#facebook)
- [LinkedIn](https://docs.magic.link/social-login#linkedin)

## Develop locally

```bash
git clone https://github.com/baulml/next-magic-auth.git
cd next-magic-auth
yarn
yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/paulphys/next-magic-auth/blob/main/.env.example) in the root of the application.

## Deploy to Vercel ▲

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpaulphys%2Fnext-magic-auth)

- Add `NEXT_PUBLIC_MAGIC_KEY` as an [Environment Variable](https://vercel.com/docs/environment-variables) to the production build.

