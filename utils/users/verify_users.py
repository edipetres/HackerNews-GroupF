
from pymongo import MongoClient
import csv

client = MongoClient('mongodb://hackernews:5kjs65srnpyhzq473x@18.197.133.240/hackernews')
db = client.hackernews
collection = db.users

def is_user_in_db(username):
  user = collection.find_one({"username": username})

  if (user):
    return True
  else:
    print('not found: ' + username)
    return False


file = open('/Users/edmondpetres/Cphbusiness/HackerNewsG7/utils/untracked_users.csv', 'a')

with open('/Users/edmondpetres/Cphbusiness/HackerNewsG7/utils/users.csv') as csv_file:
  csv_reader = csv.reader(csv_file, delimiter=',')
  line_count = 0
  last_line = 98162

  for row in csv_reader:
    line_count += 1

    if line_count < last_line:
      pass
    else:
      username = row[0]
  
      if not is_user_in_db(username):
        password = row[1]
        file.write(username + ',' + password + '\n')      
  
      
      if line_count % 50 == 0:
        print('Processing line {}'.format(line_count))
        file.flush()