SELECT users.first_name, users.last_name, users.email, users.phone, users.state, goals.goal
FROM users
INNER join goals
ON goals.goal_id = users.goal_id
WHERE users.user_id = $1