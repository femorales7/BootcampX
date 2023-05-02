-- SELECT teachers.name as teacher, cohorts.name as cohort
-- FROM assistance_requests
-- JOIN students on students.id = student_id
-- JOIN teachers on teachers.id = teacher_id
-- JOIN cohorts on cohorts.id = students.cohort_id
-- WHERE cohorts.name = 'JUL02'
-- ORDER BY teacher; 

SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;