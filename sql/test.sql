



// create todo

    CREATE TABLE todo(
             todo_id serial PRIMARY KEY,
             todo_title VARCHAR (80) NOT NULL,
             todo_text VARCHAR (250) NOT NULL,
             todo_due_until VARCHAR (50) NOT NULL,
             todo_created_on TIMESTAMPTZ NOT NULL DEFAULT NOW()
          );



// create weight_history

    CREATE TABLE weight_history(
             entry_id serial PRIMARY KEY,
             entry_date VARCHAR (80) NOT NULL,
             entry_value VARCHAR (10) NOT NULL
          );
