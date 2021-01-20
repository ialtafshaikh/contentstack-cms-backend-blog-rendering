# CMS Backend for Blog Rendering

Using contentstack as a backend for creating a content model for a blog website and designing the frontend using NextJS.

## Features

- content-modelling is done using Contentstack CMS
- content-types are grouped using Labels in stack.
- app is fetching data from Contentstack Backend
- Data for Navigation, Footer and Main Section are fetched from backend and rendered on frontend.
- bootsrap is used to layout and design the pages and components
- app make use of sass and css
- nextjs serverless function implemented
- nextjs app is hosted on **Vercel**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To Download this project and run locally

First, clone the repository into your local machine:

```
git clone https://github.com/ialtafshaikh/contentstack-cms-backend-blog-rendering.git
```

Secondly, install all the dependencies

```
npm i
```

create a .`.env.local` file inside root of your directory and add contentstack credentials as follows:

```
CS_API_KEY=<your stack api key>
CS_DELIVERY_TOKEN=<your delivery token>
CS_ENVIRONMENT=<your environment name>
```

**NOTE**

- For development all the data are published in `altaf_development` environment
- And For hosted application the environment for publishing the data is set to 'altaf_production` so to see any update in live hosted website kindly publish entry in respective environment.
- My stack name `Team3` and all the content-types are inside single label `Altaf Blog Rendering` so kindly choose the `Label` in `VIEW BY` filter to see the content-type in Label view.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Resources

- [React keys and list](https://reactjs.org/docs/lists-and-keys.html)
- [NextJs router](https://nextjs.org/docs/api-reference/next/router)
- [NextJs Image](https://nextjs.org/docs/api-reference/next/image)
- [NextJs Getting Started](https://nextjs.org/docs/getting-started)
- [Contentstack Node SDK](https://www.contentstack.com/docs/developers/nodejs/get-started-with-nodejs-sdk/)
- [Contentstack Labels For Content-Type grouping](https://www.contentstack.com/docs/developers/create-content-types/create-and-apply-labels/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Live Demo of this Project

The app is hosted but it is failing to load because of some error..so try to run the project locally

[Live link](https://contentstack-cms-backend-blog-rendering.vercel.app/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Author

- **Altaf Shaikh** - _work by_ - [ialtafshaikh](https://github.com/ialtafshaikh)

![altaf shaikh](https://raw.githubusercontent.com/ialtafshaikh/static-files/master/coollogo_com-327551664.png)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
