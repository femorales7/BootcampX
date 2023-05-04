const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});
const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`];

const queryString = (`
SELECT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests.id) as total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;

`)

pool.query(queryString, values)
.then(res => {
  
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}:  ${teacher.teacher}`)
  })
  pool.end();
})
.catch(err => console.error('query error', err.stack));

module.exports = pool;
