# React Native + React Web Workspace

After some time working on both native and web projects I realized that there are some essential differences
between both platforms, specially when it comes to routing patterns and screen presentation patterns, this is
why I decided to go ahead and create a library of shared leaf components between the mobile and web projects,
and also other shared libraries for hooks and cross platform functionality instead of trying to share a 100%
of code; This will allow for some nice code reusability patterns, specially since we're using a monorepo.

This template repository includes the following features:

- React Native App (Bare Workflow) 📱.
- Next.js App (Yep, you can use SSR for RN Components 🤯).
- Create React App (Regular react app, for convenience).
- Storybook + React Native Web Development enviroment so you can have an isolated component environment.
- Absolute imports.
- Yarn workspace to share code between projects.
- Typescript.

