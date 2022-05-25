import axios from 'axios';

export default {
  loadLoanApplications: async ({ commit }) => {
    // TODO: make a GET request
    try {
      const res = await axios.get('https://6271819ac455a64564b41998.mockapi.io/api/v3/applications');
      const applications = await res.data.data.applications;
      commit('setApplications', applications);
    } catch (error) {
      alert('There was an error, check the console');
      console.log(error);
    }
  }
};
