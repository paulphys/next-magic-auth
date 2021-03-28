![magic auth](/magic.png)
#  Next.js + [Magic](https://magic.link/) Auth boilerplate

> Next.js Typescript starter with [Magic](https://magic.link/)'s passwordless authentication

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fbaulml%2Fnextjs-magic)
                             
### Built with
-   [Next.js](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Magic Auth](https://magic.link/)
-   [Tailwind CSS](https://tailwindcss.com/)

## Demo
Check out the live demo 👉 [magic.baul.ml](https://magic.baul.ml)

## Magic Auth
[Magic](https://magic.link) is a passwordless authentication sdk that lets you plug and play different auth methods into your app. 
Magic supports passwordless email login via magic links, social login with OAuth2 and web standards like WebAuthn.

For more insight into the authentication flow and implementation, take a look at their Next.js starter [example-nextjs](https://github.com/magiclabs/example-nextjs) or visit the [docs](https://docs.magic.link).
### Setup
- Sign up for [Magic](https://dashboard.magic.link/signup)
- Create a new App
#### Email login
- Copy `TEST PUBLISHABLE KEY` for testing purposes and `LIVE PUBLISHABLE KEY` for live production 
#### Social login (OAuth2)
Follow the official [documentation](https://docs.magic.link/social-login) on how to set up each social login provider.
- [Github](https://docs.magic.link/social-login#github)
- [Google](https://docs.magic.link/social-login#google--gmail)

## Develop locally

```bash
git clone https://github.com/baulml/nextjs-magic.git
cd nextjs-magic
yarn
yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/baulml/nextjs-magic/blob/main/.env.example) in the root of the application.

## Deploy to Vercel ▲

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fbaulml%2Fnextjs-magic)

- Add `NEXT_PUBLIC_MAGIC_KEY` as an [Environment Variable](https://vercel.com/docs/environment-variables) to the production build.
