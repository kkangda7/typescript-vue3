# vue-typescript

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


  reactive
    const state = reactive({
      name: 'Link',
      age: 25 as string | number
    })

    state.name = '88'
    state.age = 6

    return {
      ...toRefs(state)
    }
    ref
    const name = ref('Link')
    const age = ref<number | string>(25)

    return {
      name,
      age
    }

  data() {
    return {
      name: 'Link',
      age: 25 as number | string,
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name
    },
    changeAge(age: string|number) {
      this.age = age
    },
  }# typescript-vue3
