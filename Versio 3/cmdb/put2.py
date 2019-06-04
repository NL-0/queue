import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="admin",
  database="jono2"
)

mycursor = mydb.cursor()

sql = "UPDATE components_server SET jono = '12', seuraava = '39' WHERE components_server.id = '4'"

mycursor.execute(sql)

mydb.commit()

print(mycursor.rowcount, "record(s) affected") 
