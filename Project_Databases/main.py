import sqlite3

con = sqlite3.connect('mycompany.db')
cObj = con.cursor()

cObj.close()
con.close()