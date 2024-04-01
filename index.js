const firstname = [
    "John", "Emily", "Michael", "Sarah", "David", "Jessica", "Christopher", "Jennifer", "James", "Amanda",
    "Matthew", "Elizabeth", "Daniel", "Stephanie", "Robert", "Melissa", "Joshua", "Michelle", "Andrew", "Ashley",
    "William", "Samantha", "Joseph", "Lauren", "Benjamin", "Nicole", "Ryan", "Kimberly", "Jonathan", "Hannah",
    "Christopher", "Megan", "Nicholas", "Victoria", "Brandon", "Rachel", "Kevin", "Emily", "Alexander", "Brittany",
    "Justin", "Kayla", "Tyler", "Rebecca", "Jacob", "Amber", "Brandon", "Courtney", "Zachary", "Danielle",
    "Jonathan", "Christina", "Austin", "Katie", "Nicholas", "Tiffany", "Kyle", "Stephanie", "Brandon", "Laura",
    "Andrew", "Erin", "Joseph", "Megan", "Samuel", "Sara", "William", "Chelsea", "Brandon", "Alexandra",
    "James", "Brittney", "Alexander", "Alyssa", "Matthew", "Kaylee", "Daniel", "Jenna", "Eric", "Vanessa",
    "Nicholas", "Julia", "Ryan", "Anna", "Brian", "Katherine", "Anthony", "Maria", "Christian", "Andrea",
    "Joshua", "Emily", "Adam", "Nicole", "Kevin", "Kristen", "Zachary", "Haley", "Robert", "Natalie",
    "Olivia", "Lucas", "Sophia", "Liam", "Emma", "Henry", "Ava", "Ethan", "Isabella", "Noah",
    "Amelia", "Mason", "Mia", "Caden", "Ella", "Logan", "Charlotte", "Carter", "Avery", "Jackson",
    "Evelyn", "Elijah", "Harper", "Grayson", "Addison", "Lucy", "Jacob", "Scarlett", "Gabriel", "Luna",
    "Benjamin", "Chloe", "William", "Grace", "Alexander", "Lily", "Ryan", "Nora", "Jack", "Sofia",
    "Luke", "Hannah", "Daniel", "Ellie", "James", "Zoey", "Henry", "Madison", "Jackson", "Victoria",
    "Andrew", "Brooklyn", "Samuel", "Stella", "Owen", "Penelope", "David", "Hazel", "Wyatt", "Aria",
    "Joseph", "Aubrey", "Michael", "Claire", "Matthew", "Leah", "Gabriel", "Sadie", "Daniel", "Skylar",
    "Matthew", "Lillian", "Nicholas", "Natalie", "John", "Eva", "Jonathan", "Savannah", "Isaac", "Audrey",
    "Samuel", "Katherine", "Christopher", "Caroline", "Nathan", "Anna", "Dylan", "Violet", "Adam", "Kylie",
    "Tyler", "Naomi", "Evan", "Peyton", "Aaron", "Maria", "Brandon", "Alice", "Kevin", "Alexis",
    "Landon", "Sarah", "Kayden", "Alyssa", "Austin", "Hailey", "Eli", "Brianna", "Nathaniel", "Nevaeh",
    "Ian", "Kaylee", "Jaxon", "Maya", "Parker", "Leah", "Xavier", "Sophie", "Josiah", "Ariana",
    "Greyson", "Ellie", "Levi", "Madelyn", "Miles", "Peyton", "Ezra", "Mackenzie", "Caleb", "Kylie",
    "Carter", "Gabriella", "Colton", "Kaitlyn", "Roman", "Jasmine", "Brayden", "Alexa", "Micah", "Gianna",
    "Vincent", "Brooklyn", "Connor", "Julia", "Austin", "Allison", "Bryce", "Faith", "Diego", "Serenity",
    "Easton", "Harper", "Brody", "Morgan", "Jordan", "Scarlett", "Cole", "Zoe", "Wyatt", "Elena",
    "Jason", "Clara", "Chase", "Taylor", "Alex", "Katherine", "Dominic", "Molly", "Micah", "Paige",
    "Adam", "Eleanor", "Carlos", "Makayla", "Jace", "Bella", "Xander", "Samantha", "Tristan", "Hannah",
    "Carson", "Alexandra", "Bentley", "Lillian", "Nolan", "Layla", "Max", "Alexis", "Hudson", "Nova", "Mateo", "Luna", "Santiago", "Mia", "Leonardo", "Camila", "Daniel", "Valentina", "Benjamin", "Isabella",
    "Emiliano", "Sofia", "Alexander", "Valeria", "Sebastian", "Luciana", "Matias", "Emma", "Nicolas", "Victoria",
    "Samuel", "Martina", "Diego", "Emily", "Dylan", "Abril", "David", "Daniela", "Oliver", "Antonella",
    "Thiago", "Jimena", "Juan", "Elena", "Gabriel", "Alejandra", "Enzo", "Maria", "Adrian", "Catalina",
    "Iker", "Aitana", "Joaquin", "Ana", "Liam", "Briana", "Lucas", "Juliana", "Ian", "Isabel",
    "Angel", "Laura", "Emmanuel", "Paula", "Anthony", "Natalia", "Rafael", "Sara", "Mateo", "María",
    "Eduardo", "Juana", "José", "Valentina", "Isaac", "Mariana", "Carlos", "Luisa", "Maximiliano", "Florencia",
    "Manuel", "Gabriela", "Erick", "Ximena", "Hector", "Carmen", "Andres", "Miranda", "Fernando", "Mía"
]


const lastname = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
    "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King",
    "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter",
    "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins",
    "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey",
    "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez",
    "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross",
    "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Gomez", "Gonzales", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Ford", "Hamilton", "Graham",
    "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis",
    "Harrison", "Gibson", "Mcdonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells",
    "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd",
    "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Ray", "Scott", "Bryant", "Tran",
    "Lynch", "Holland", "Stokes", "Park", "Byrd", "Gregory", "Figueroa", "Carroll", "Cobb", "Davenport",
    "Chang", "Blake", "Malone", "Wolf", "Horton", "Rojas", "Bender", "Hahn", "Gibbs", "Hobbs",
    "Knight", "Kramer", "Madden", "Harper", "Pittman", "Hayes", "Chung", "Lloyd", "Sharp", "Steele",
    "Thomas", "Hale", "Mcmahon", "Becker", "Baldwin", "Pierce", "Hester", "Chandler", "Mccarthy", "Schmidt"
]



function generateRandomNumber() {
    return Math.floor(Math.random() * 1000);
}

/**
 * Generates a unique username by combining a random first name, last name, and a random number.
 * 
 * @returns {string} - A string representing a unique username in the format "firstName-lastName-randomNumber".
 * @throws {Error} - If firstname or lastname is not an array or is empty.
 */
function generateUniqueUsername() {
  try {
    if (!firstname || !lastname || !Array.isArray(firstname) || !Array.isArray(lastname)) {
      throw new Error('Invalid data format: firstname or lastname is not an array or is empty.');
    }

    if (firstname.length === 0 || lastname.length === 0) {
      throw new Error('No names available: firstname or lastname arrays are empty.');
    }

    const randomFirstName = getRandomElement(firstname);
    const randomLastName = getRandomElement(lastname);
    const randomNumber = generateRandomNumber();
    return `${randomFirstName}-${randomLastName}-${randomNumber}`;
  } catch (error) {
    console.error('Error generating random name:', error);
    throw error;
  }
}

/**
 * Generates a random number between 100 and 999.
 * 
 * @returns {number} - A random number between 100 and 999.
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * 900) + 100;
}

/**
 * Returns a random element from the given array.
 * 
 * @param {Array} array - The array to get a random element from.
 * @returns {*} - A random element from the array.
 */
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


module.exports = generateUniqueUsername;
