# The Pythagorean Theorem webapp example

In this example, we demonstrate how to use JSON to call Rust functions in SSVM from JavaScript.

## Prerequisites

If you have not done so already, follow these simple instructions to [install Rust, Node.js, SSVM, and ssvmup](https://www.secondstate.io/articles/setup-rust-nodejs/).


## Build the application

```
$ ssvmup build
```

## Test

```
$ cd node
$ node test.js
[5.0,25.0]
```

## Web app

```
$ cd node
$ node server.js
Listening at http://localhost:8080
```

Then point your browser to `http://hostname:8080` enter numeric values for `a`, `b`, and hit the "Solve" button to find the hypotenuse.
