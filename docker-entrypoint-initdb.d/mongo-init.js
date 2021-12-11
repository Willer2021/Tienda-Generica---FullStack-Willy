
db = db.getSiblingDB('db_users')
db.createCollection('users')

db.users.insert({
  "user": "user",
  "password": "$2b$12$BO/2DgIUJcpddpk9UJ9J..qVxiH1B1XhgwXUgb7xvaGvkUv1xZQ9O",
  "name": "User User",
  "email": "user@mail.com",
  "roles": ["admin"]
})
