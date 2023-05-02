SELECT name , count(assistance_requests.id) as total_assistances FROM assistance_requests
JOIN teachers on teachers.id = assistance_requests.teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP by teachers.name;

