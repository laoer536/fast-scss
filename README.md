# fast-scss
fast-scss for font-end sass project.

Browser global default style has been reset for you, see it at [fast-scss/_index.scss at main · laoer536/fast-scss (github.com)](https://github.com/laoer536/fast-scss/blob/main/packages/fast-scss/src/reset/_index.scss)

### How to use

- pnpm

  ```
  pnpm install fast-scss -D
  ```

  

- npm

  ```
  npm install fast-scss -D
  ```

  

- yarn

  ```
  yarn add fast-scss -D
  ```



Then,

- vite

  ```js
  //vite.config.ts
  export default defineConfig({
    //...
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "fast-scss" as *;`,
        },
      },
    },
   //...
  })
  ```

  ```vue
  //*.vue
  //demo
  <style lang="scss">
  @use 'sass:map';
  /* The following are the shortcuts provided by fast-scss */
  p {
    @include more-line-ellipsis(1);
    background-color: get-color($rose, 500, 0.3);
    color: map.get($orange, 600);
  }
  </style>
  ```

More methods are waiting for you to explore.
