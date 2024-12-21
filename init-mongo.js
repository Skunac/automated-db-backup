// Get environment variables that were passed through Docker
const adminUsername = process.env.MONGO_INITDB_ROOT_USERNAME;
const adminPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;
const database = process.env.MONGO_INITDB_DATABASE;

// Create root user
db.auth(adminUsername, adminPassword)

// Switch to the specified database
db = db.getSiblingDB(database);

// Create a user for the database
db.createUser({
    user: adminUsername,
    pwd: adminPassword,
    roles: ['readWrite', 'dbAdmin']
});