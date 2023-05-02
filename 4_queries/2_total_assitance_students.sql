SELECT name, count(assistance_requests.id) as total_assistances
FROM assistance_requests
JOIN students on students.id = assistance_requests.student_id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;