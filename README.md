# js-for-react-native-11297233

#11297233

##processArray function:
For the first task we were required to take an array of numbers as input and return a new array where each even number is squared, and each odd number is tripled.
###Approach: Iterate through the input array, check if each number is even or odd, and perform the required operation accordingly.I then stored the processed numbers in a new array and returned it.

##formatArrayStrings function:
For the second task we were to modify each string in an array based on its corresponding number from another array.
###Approach: Iterate through the array of strings along with the array of corresponding numbers. For each string, check if the corresponding number is even or odd. If it's even, capitalize the entire string; if it's odd, convert the string to lowercase. Store the modified strings in a new array and return it.

##createuserprofiles function:
For the third task it aims at creating a function to take two arrays: one containing original names and the other containing modified names, and then return an array of objects representing user profiles, each containing the original name, modified name, and an auto-incremented id starting from 1.
###Approach: The function initializes an empty array to store the user profiles.A variable id is the utilized to auto-increment starting from 1 for each user profile.For each pair of names, the function creates a user profile object with the original name, modified name, and id.The user profile object is pushed to the profiles array.Finally,the array of user profiles are returned.