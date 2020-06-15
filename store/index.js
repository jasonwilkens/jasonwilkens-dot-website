export const state = () => ({
  contactFormEmail: '',
  contactFormMessage: '',
  isContactFormOpen: false,
  isIntroRunning: true,
  notificationText: null,
});

export const mutations = {
  toggle (state) {
    state.isContactFormOpen = !state.isContactFormOpen;
  },
  turnOffIntro (state) {
    state.isIntroRunning = false;
  },
  updateContactFormEmail (state, email) {
    state.contactFormEmail = email;
  },
  updateContactFormMessage (state, message) {
    state.contactFormMessage = message;
  },
  setNotificationText (state, text) {
    state.notificationText = text;
  }
};

export const actions = {
  updateNotificationText ({ commit }, text) {
    commit('setNotificationText', text);
    setTimeout(() => {
      commit('setNotificationText', '');
    }, 2500);
  }
};