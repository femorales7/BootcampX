SELECT cohorts.name as cohort, count(assignment_submissions.*) as total_submissions 
FROM assignment_submissions 
JOIN students on students.id = assignment_submissions.student_id
JOIN cohorts on students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY total_submissions  DESC;