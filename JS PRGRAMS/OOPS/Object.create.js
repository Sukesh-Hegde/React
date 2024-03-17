// Problem statement
// You are working on a project that involves managing user profiles. Each user profile is represented as an object with properties such as name, age, and email.

// Objecive:
// Your task is to implement the following functionality:
// updateProfile function: This function should take two parameters: user (an object representing the user profile) and updates (an object containing the properties to update in the user profile). The function should use the Object.assign method to update the user profile with the properties from the updates object.
// Return the updated user object.
// freezeProfile function: This function should take one parameter: user (an object representing the user profile). The function should use the Object.freeze method to make the user profile object immutable, preventing any further modifications.
// Return the updated user object.
// Implement the updateProfile and freezeProfile functions to achieve this functionality.

// Hint:
// Learn more about the Object.assign method using the link:
// https://developer.mozilla.org/en- 
// US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 
//  Learn more about the Object.freeze method using the link:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze



// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
    // Implement the code here
    const updateUser = Object.assign({}, user, updates);
    return updateUser;
  }
  
  function freezeProfile(user) {
    // Implement the code here
      const frozenUser = Object.freeze(user);
      return frozenUser;
  }


  