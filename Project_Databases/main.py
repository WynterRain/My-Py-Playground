import sqlite3

con = sqlite3.connect('mycompany.db') 
    # connects to a database called my company.db

cObj = con.cursor() 
    # where to start

cObj.execute("CREATE TABLE IF NOT EXISTS employees(id INTEGER PRIMARY KEY, name TEXT, salary REAL, department TEXT, position TEXT )")
con.commit() 

def insert_value(id, name, salary, department, position):
    cObj.execute("INSERT INTO employees VALUES(?, ?, ?, ?, ?)", (id, name, salary, department, position))
    con.commit() 


def updatedepartment(dep, id):
     cObj.execute("UPDATE employees SET department=? WHERE id=?", (dep , id))
     con.commit()

def sql_fetch():
    cObj.execute("SELECT name FROM employees")
    result = cObj.fetchall()
    print(result)

def delete_all():
    cObj.execute("DELETE FROM employees")
    con.commit()

delete_all()


cObj.close()
con.close()


#NOTES:
# cObj = con.cursor() 
    # Cursor is where it starts. 
    # Cursor is placed inside a variable

# - cObj.execute("DELETE FROM <Table Name>") 
    # This Deletes Everything From Table
    
# con.commit() 
    # Saves The Table
    
# cObj.execute("CREATE TABLE <name of table>(id INTEGER PRIMARY KEY, <column 1> TEXT, <column 1> REAL, <column 1> TEXT, <column 1> TEXT )")
    # Creates Table With Columns
    # REAL == All Real Numbers
    # TEXT == Regular 'strings'
    # You can add 'IF NOT EXIST' after thhe 'CREATE TABLE' So if the table already exists it won't create another
    
# cObj.execute("INSERT INTO <table name> VALUES(<value for column1>, <value for column2>, 75000, <value for column3>, <value for column4>)")
    # Inserting values into a table

# cObj.execute("DELETE FROM <table name> WHERE <column name>=?", ('<What you want to delete>',))
    # This will delete a specific element from a column.