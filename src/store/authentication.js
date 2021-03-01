export default({
    namespaced:true,
    state: {
        token: '',
        role: ''
    },
    mutations: {
        setToken(state, token) {state.token = token},
        deleteToken(state){state.token = null},
        setRole(state, role) {state.role = role}
    },
    actions: {
        signIn({ commit }, token) {commit ('setToken', token)},
        signOut({commit}){ commit('deleteToken')},
        role({commit}, role) {commit ('setRole', role)}
    },
    getters: {
        getToken: state => state.token,
        isLoggedIn: state => !!state.token,
        getRole: state => state.role
    }
})