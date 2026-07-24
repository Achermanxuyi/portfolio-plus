# 2025 Portfolio & Blog

> Based on [YYsuni/2025-blog-public](https://github.com/YYsuni/2025-blog-public) (MIT License)

> Latest guide: https://www.yysuni.com/blog/readme

This project uses a Github App to manage content. Keep the generated **Private Key** safe and private.

## 1. Install

You do not need to run local development right away. You can deploy first and set environment variables later. The config keys are shown below:

```ts
export const GITHUB_CONFIG = {
  OWNER: process.env.NEXT_PUBLIC_GITHUB_OWNER || 'elanaliao',
  REPO: process.env.NEXT_PUBLIC_GITHUB_REPO || '2025-blog-public',
  BRANCH: process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main',
  APP_ID: process.env.NEXT_PUBLIC_GITHUB_APP_ID || '-'
} as const
```

If you want, install dependencies locally with `pnpm i`.

## 2. Deploy

I use Vercel, so this guide is based on Vercel deployment. Create a new project and import this repository.

![](https://elana-blog.vercel.app/blogs/readme/vercel_create.png)

No extra config is needed. Just click deploy.

![](https://elana-blog.vercel.app/blogs/)readme/vercel_deploy.png)

The deployment usually finishes in about 60 seconds. You will get a Vercel domain like `https://2025-blog-public.vercel.app/`.

At this point, the website is deployed. Next step: create a Github App.

## 3. Create a Github App and connect the repo

In your Github account settings, go to the bottom and open Developer Settings.

![](https://elana-blog.vercel.app/blogs/)readme/github_settings.png)

Then click **New Github App**.

The *GitHub App name* and *Homepage URL* can be anything. Webhook is not needed.


Go to `Permissions & events`. Give the app repository write access only. No other permissions are required.

![](https://elana-blog.vercel.app/blogs/)readme/github_permission.png)

Click create. Who can install the app does not matter here.

![](https://elana-blog.vercel.app/blogs/)readme/github_create.png)


### Create the private key

After creating the Github App, Github will prompt you to create a **Private Key**. Create it and download the file. If you lose it, you can always create another key later.

Copy the **App ID** from the app page.

Then go to the install page.

![](https://elana-blog.vercel.app/blogs/readme/github_installation.png)

Make sure you only authorize the current repository.

![](https://elana-blog.vercel.app/blogs/readme/github_authorization.png)

Install the app. Now the Github App has permission to manage the repository.

The frontend needs to know which repo to push to. That is the environment variables mentioned earlier. If you do not want to use env vars, you can also edit `src/consts.ts` directly. Since this is a public repo, env vars are mostly just a convenience.

Set these values, usually `OWNER` and `APP_ID` are enough. The rest can stay default.

![](https://elana-blog.vercel.app/blogs/readme/vercel_var.png)

After you finish, redeploy once so the environment variables take effect.

- Push code to the repo to trigger deployment.
- Or manually trigger a deployment in Vercel.

![](https://elana-blog.vercel.app/blogs/readme/vercel_final.png)

## 4. Done

Now the deployed site can be used to edit content from the frontend. For example, you can update a share entry.

**Note:** after the frontend shows success, wait for the backend deployment to finish and then refresh the page for the update to appear.

## 5. Remove

If you use this project, the first thing should be removing my example blog content. Single-item and bulk delete are already supported.

## 6. Configuration

Most pages have an edit button in the top right corner. That means you can use the **private key** to configure and deploy content.

### 6.1 Site config

The homepage has a small config button. Click it to see the current editable settings.

![]([docs/](https://elana-blog.vercel.app/blogs/)readme/home_page.png)

## 7. Writing blog posts

Image management for blog posts can be confusing. The recommended flow is:

1. Click the **+** button to add images.
2. Compress them first. Recommended width is no more than 1200px.
3. Drag uploaded images into the editor area.
4. Click preview in the top right to see the result.

## 8. For non-developers

Non-developers still need a config guide. Below are more detailed code notes.

### 8.1 Remove Liquid Grass

Open `src/layout/index.tsx`, delete two lines, then commit the code to Github:

```tsx
const LiquidGrass = dynamic(() => import('@/components/liquid-grass'), { ssr: false })
// ...other code...
<LiquidGrass /> // around line 53
```

### 8.2 Configure homepage content

Homepage content is partly editable through the frontend, but some layout changes require code edits in `src/app/(home)`. This folder contains homepage files. The main page file is `src/app/(home)/page.tsx`.
You will see many `Card` components. Edit the file for the card you want to change. For example, the middle content is `HiCard`. Open `hi-card.tsx` to update it.


