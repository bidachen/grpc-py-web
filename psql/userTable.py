import psycopg2
conn = psycopg2.connect(database='grpc-py', user='postgres', password='123456', host = "127.0.0.1", port = "5432")
print('db is ready')

cur = conn.cursor()
cur.execute('''create table users
            (id serial primary key,
            name text not null,
            email text not null,
            password text not null);
''')
print('table user created')
conn.commit()
conn.close()