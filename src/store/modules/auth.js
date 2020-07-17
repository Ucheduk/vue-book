import * as types from '../types';
import { auth, provider } from '../../firebase/firebase.utils';

const state = {
    user: null,
    error: null
};

const getters = {
    [types.SELECT_CURRENT_USER]: state => {
        return state.user;
    },
};

const mutations = {
    [types.SIGN_IN_SUCCESS]: (state, payload) => {
      console.log('user payload: ', payload)
      state.user = payload;
    },
    [types.SIGN_IN_FAILURE]: (state, payload) => {
      state.error = payload.message;
    },
    [types.SIGN_OUT_SUCCESS]: (state) => {
      state.user = null;
      state.error = null;
    }
};

const actions = {
    [types.GOOGLE_SIGN_IN_START]: async ({ commit }) => {
      try {
        const { user } = await auth.signInWithPopup(provider);
        console.log('user: ', user)
        // const userRef = await createUserProfileDocument(user, {});
        // const userSnapshot = await userRef.get();
        const { displayName, email } = user;
        // console.log('userSnapshot: ', userSnapshot)
        commit(types.SIGN_IN_SUCCESS, {
          // id: userSnapshot.id,
          // ...userSnapshot.data()
          displayName,
          email
        });
        if(user) return user;
      } catch (error) {
        commit(types.SIGN_IN_FAILURE, error)
      }
    },
    [types.CHECK_USER_SESSION]: async ({ commit }, user) => {
      try {
        // const userAuth = await getCurrentUser();
        if(!user) return;
        // console.log('user: ', userAuth)
        // const userRef = await createUserProfileDocument(userAuth, {});
        // const userSnapshot = await userRef.get();
        const { displayName, email } = user;
        // console.log('userSnapshot: ', userSnapshot)
        commit(types.SIGN_IN_SUCCESS, {
          // id: userSnapshot.id,
          // ...userSnapshot.data()
          displayName,
          email
        });
      } catch (error) {
        commit(types.SIGN_IN_FAILURE, error)
      }
    },
    [types.SIGN_OUT_START]: async ({commit}) => {
      try {
        await auth.signOut();
        await commit(types.SIGN_OUT_SUCCESS)
      } catch (error) {
        console.log(error)
      }
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}