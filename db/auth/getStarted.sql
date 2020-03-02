INSERT INTO users (first_name, last_name, email, phone, state, goal_id, password)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING*;