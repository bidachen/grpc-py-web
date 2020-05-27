import psycopg2

def CreateNewUser(name, email, password):
    try:
        conn = psycopg2.connect(database='grpc-py', user='postgres', password='123456', host = "127.0.0.1", port = "5432")
        cur = conn.cursor()
        cur = conn.cursor()
        cur.execute('insert into users (name, email, password) values (%s, %s, %s)', (name, email, password))
        conn.commit()
        return 'success'
    except:
        return 'fail'
    finally:
        conn.close()

def UserSignin(email, password):
    try:
        conn = psycopg2.connect(database='grpc-py', user='postgres', password='123456', host = "127.0.0.1", port = "5432")
        cur = conn.cursor()
        cur = conn.cursor()
        cur.execute('select from users where email = %s and password = %s', (email, password))
        rows = cur.fetchall()
        if len(rows) > 0:
            return 'success'
        return 'fail'
    finally:
        conn.close()