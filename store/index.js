export const state = () => ({
  count: 0,
})

export const getters = {
  getCount(state) {
    return state.count
  },
}

export const mutations = {
  setCount(state, count) {
    state.count = count
  },
}

export const actions = {
  operateCount(vuexContext, count) {
    console.log(vuexContext)
    vuexContext.commit('setCount', count)
  },
}
