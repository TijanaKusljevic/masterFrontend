export default({
    namespaced:true,
    state: {
        token: ''
    },
    mutations: {
        setToken(state, token) {state.token = token}
    },
    actions: {
        signIn({ commit }, token) {commit ('setToken', token)}
    },
    getters: {
        getToken: state => state.token,
        isLoggedIn: state => !!state.token,
    }
})