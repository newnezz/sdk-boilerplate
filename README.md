# README Template

Please update the following in each of your SDK application.

## Introduction / Summary

This boilerplate is meant to give you a simple starting point to build new features in Topia using our Javascript SDK. Please reference the [documentation](https://metaversecloud-com.github.io/mc-sdk-js/index.html) for a more detailed breakdown of what the SDK is capable of and how to use it!

## Key Features

-

### Canvas elements & interactions

-

### Drawer content

-

### Admin features

Does your app have special admin functionality? If so your key features may looks something like this:

- Access: Click on the key asset to open the drawer and then select the Admin tab. Any changes you make here will only affect this instance of the application and will not impact other instances dropped in this or other worlds.
- Theme selection: Use the dropdown to select a theme.
- Reset: Click on the Reset button to clear the active game state and rebuild the game board in it's default state.

### Themes description

- Winter (default): A snowy theme that when selected will drop snowflakes throughout the scene
- Spring: A garden theme that when selected will drop flowers throughout the scene

### Data objects

We use data objects to store information about each implementation of the app per world.

#### How and when they are being used

See below for an example data object usage and implementation

- how to update nested item (and why)
- how to use locks with counters
  use TTT move as example for turn management

## Developers:

### Getting Started

- Clone this repository
- Run `npm i` in server
- `cd client`
- Run `npm i` in client
- `cd ..` back to server

### Add your .env environmental variables

```json
API_KEY=xxxxxxxxxxxxx
INSTANCE_DOMAIN=api.topia.io
INSTANCE_PROTOCOL=https
INTERACTIVE_KEY=xxxxxxxxxxxxx
INTERACTIVE_SECRET=xxxxxxxxxxxxxx
```

### Where to find API_KEY, INTERACTIVE_KEY and INTERACTIVE_SECRET

[Topia Dev Account Dashboard](https://dev.topia.io/t/dashboard/integrations)

[Topia Production Account Dashboard](https://topia.io/t/dashboard/integrations)

### Data objects

#### Example data object payload (in code)

#### Example

### Helpful links

- [SDK Developer docs](https://metaversecloud-com.github.io/mc-sdk-js/index.html)
- View it in action [here](topia.io/appname-prod)!
- How to play
- To see an example of an on canvas turn based game check out (TicTacToe)[]
