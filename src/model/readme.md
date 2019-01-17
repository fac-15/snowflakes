## Here we should put in the connection to the database files

### Example:
 dbConnection.query(
  `SELECT full_name,  WHERE full_name = ($1)`,
    [name],
  )
