from sqlalchemy import create_engine

engine = create_engine('sqlite:///data.db')
with engine.connect() as con:

    rs = con.execute('INSERT INTO users VALUES(?,?,?,?,?,?)', 5, "user12222", "123","12zz3@gmail.com",
    "first_name", "last_name")
                                        
