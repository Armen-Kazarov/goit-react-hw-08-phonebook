const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getLoading = state => state.loading;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;


const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getLoading,
  getIsFetchingCurrent
}

export default authSelectors;