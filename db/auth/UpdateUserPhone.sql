UPDATE users 
SET phone = $1 
WHERE user_id = $2
RETURNING*