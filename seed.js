// First authenticate with admin database
db = db.getSiblingDB('admin');
db.auth(process.env.MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_INITDB_ROOT_PASSWORD);

// Then switch to our target database
db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

// Print connection info for verification
print('Connected to database:', db.getName());

db.users.insertMany([
    { name: 'John Doe', email: 'john@example.com', created_at: new Date() },
    { name: 'Jane Smith', email: 'jane@example.com', created_at: new Date() },
    { name: 'Bob Johnson', email: 'bob@example.com', created_at: new Date() }
]);

db.products.insertMany([
    { name: 'Product 1', price: 99.99, stock: 100 },
    { name: 'Product 2', price: 149.99, stock: 50 },
    { name: 'Product 3', price: 199.99, stock: 75 }
]);

// Print confirmation
print('Data seeded successfully');