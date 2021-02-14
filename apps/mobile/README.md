# Mobile

Mobile app starter project, basically the same as an expo bare workflow app but added some tweaks:

1- Added support to work with yarn workspaces (you should check `expo-yarn-workspaces.symlinks` in `package.json` to add new libraries that are suposed to be on the node_modules at the folder level (instead of using nohoist)).
2- Removed `expo-updates` dependency since it is not needed for pushing code, can be re-added.

Due to some limitations, you probably should always have the bundler running with `yarn start` before running on ios/android/expo.
Even if this might affect CI/CD, there are workarounds.
