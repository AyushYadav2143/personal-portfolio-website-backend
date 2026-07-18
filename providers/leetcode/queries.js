// ------------------------------------
// User Profile Query
// ------------------------------------

export const USER_PROFILE_QUERY = `
query getUserProfile($username: String!) {

  matchedUser(username: $username) {

    username

    profile {
      realName
      userAvatar
      ranking
      reputation
      aboutMe
      school
      countryName
      company
      jobTitle
      skillTags
    }

    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }

  }

}
`;