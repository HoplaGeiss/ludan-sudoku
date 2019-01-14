# Ludan Sudoku

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Live example

Visit [https://ludan-sudoku.firebaseapp.com/](https://ludan-sudoku.firebaseapp.com/)

## Unit test

Run `npm test`

## Notes

I started the project from a boilerplate I created some time ago with storybook, firebase and lazy routing ready to go.

## Functionalities

- Set the difficulty of the game.
- Reset to a new game.
- Verify your answer and highlight the wrong cells.
- Display the solution.

## Additional functionalities

- The inputs accept a single number and ctrl+C / ctrl+V.
- The initial numbers of the grid are read-only.

## Tools in place

- I used storybook to test the different component in isolation.
- I used firebase to deploy the app.
- I have lazy loading routing in place.
- I have styling folder which I can use to import the style where and when I need them.

## Improvements

- The service generating the sudoku solution is doing quite a lot of calculations. It would have been nice to offload this to a server. Eventually a node server with a REST API.

- I implemented the logic of my service from scratch without checking how other people have implemented it. ( that was to showcase how I solve problems without external help. ) My algorythm often needs several iterations to find a solvable sudoku grid, there must be a better way of generating this!

- At the moment I am reading the value of the inputs directly from the elements. It would have been nice to use a reactive form. However, since the inputs are dynamically generated, I would need to do some research to see how that works.

- I did a little bit of UT to showcase how to do it. If I had more time, I would have unit tested all the app.
