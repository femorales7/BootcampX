SELECT cohorts.name as cohort_name, count(students.id) as student_count 
FROM students 
JOIN cohorts on students.cohort_id = cohorts.id 
GROUP BY cohorts.name 
HAVING count(students.id) >= 18
ORDER BY student_count;