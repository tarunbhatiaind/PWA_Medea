import socket
s = socket.socket()
host = input(str("enter sender's host"))
port = 5050
s.connect((host,port))
print("connected")

filename = input(str("enter incoming file name " ))
file = open(filename,'wb')
file_data = s.recv(4096)
print(file_data)
file.write(file_data)
file.close()
print("received !")