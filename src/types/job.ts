interface Job {
  title: string,
  location: string,
  salary: number,
  id: string
}

export default Job


    // reactive
    // const state = reactive({
    //   name: 'Link' ,
    //   age: 25 as string | number
    // })
    // // state.name = 999 타입이 다르므로 변경되지 않는다
    // state.age = '26'

    // const name = ref('limk')
    // const age = ref<number | string>(25)

    //return
    // ...toRefs(state) 객체 내부의 개별 속성으로 분산하고 싶을때


    // methods
    // methods: {
    //   changeName(name: string) {
    //     this.name = name
    //     return name
    //   },
    //   changeAge(age: string | number) {
    //     this.age = age
    //     return age
    //   }
    // }