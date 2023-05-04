const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];
const queryString = (`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`)
pool.query(queryString, values)
.then(res => {
  
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
  pool.end();
})
.catch(err => console.error('query error', err.stack));

module.exports = pool;