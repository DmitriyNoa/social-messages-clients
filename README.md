# SPACECIAL
A hypothetical social network for space colonists called "Spacecial". 
This is an experimental/learning/best practices gathering, nonprofitable project, aiming to collect best practices of code reuse between multiple platforms: web, Android and IOS.
![preview](./docs/img/preview.png)

## Technologies
- React native
- React
- TypeScript
- CSS-in-JS
- Redux
- Redux saga
- Yarn workspaces

## API
[https://github.com/DmitriyNoa/social-messages-clients](https://github.com/DmitriyNoa/social-messages-clients)

## Requirements
- XCode
- cocoapods
- yarn
- NodeJS

## Installation
- Clone the repo `git clone git@github.com:DmitriyNoa/social-messages-clients.git` .
- CD into the project `cd social-messages-clients`.
- Install dependencies `yarn install`.
- Install pods `cd mobile-client/ios`, `pod install`.

## Running
### Mobile client
- IOS
    - `cd mobile-client`
    - `yarn ios`
- Android
    - `cd mobile-client`
    - `yarn android`
### WEB client
- `cd web-client`
- `yarn serve`

## Features list plan
- [x] Login
- Register user 
- Post a text message
- Explore/search other users
- Follow/unfollow other users
- Like a message
- See messages feed
- User privacy settings (who can see user's data)
- Repost a message
- Comment under a message
- Post a message with image 
- Post a message with video 
- Post a message with parsable URL (show preview image and text of a posted link)
- User groups
