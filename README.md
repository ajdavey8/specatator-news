# Spectator news

## Summary

A basic news app that allows you to bookmark articles, with a mock server that returns the articles. Based off this [zeplin design](https://app.zeplin.io/project/5f6c5e470ba84b35e49056d7/screen/5f6c5fcff96a43885dbcaab5)

## Approach

I enjoyed this tech test, it was quite different as normally given more requirements than just the design but I enjoyed the freedom in implementation.

Set up a basic Express server for the articles to keep that separate from the frontend logic. Most of the logic is covered by unit tests, it does need integration tests and e2e tests too. It was quite a simple app so didn't add any state management system as React state seemed sufficent. If growing the app I'd look to use either React Context or Redux to manage state. I used styled components for styling and set up a very basic theme to make styling a bit easier and tidier.

### Todos/Improvements
  - more tests (integration and e2e)
  - Better responive design particulary for medium viewports

## To run app

Install dependencies
```
$ yarn
```

Run app from root
```
$ yarn dev
```

## To run tests

```
$ cd client
$ yarn test
```
