import sys
import json
import base64
import requests
import csv

def sendRequests(user):
  print(user)
  try:
    headers = {'Connection': 'close',
                'Content-Type': 'application/json'}
    response = requests.post(receiver, data=json.dumps(user),
                              headers=headers,
                              timeout=0.1)
    
    if response.status_code != 200:
        print('Hov, I would like a 200 status code. Your system'
              'returned {}'.format(response.status_code))
    else :
      response.close()
      return True


  except requests.exceptions.ConnectionError as e:
    print('Hov, it seems I cannot connect to your system!')
  except requests.exceptions.ReadTimeout as e:
    print('Hov, your system seems to be a bit slow in responding!')
  except Exception as e:
    print('Hov, something else went wrong!')
    print(e)


if __name__ == '__main__':
    host = sys.argv[1]

    receiver = '{}/user/registration'.format(host)

    with open('/Users/edmondpetres/Cphbusiness/HackerNewsG7/utils/users.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = -1
        success_count = 0

        for row in csv_reader:
            if line_count == -1:
                print('Column names are {", ".join(row)}\n')
                line_count += 1
            else:
                if line_count > 213045:
                  success = sendRequests({'username': row[0], 'password': row[1]})

                  if success == True:
                    success_count += 1
                
                line_count += 1
        
        print(f'Successfully imported {success_count} users out of {line_count} rows.')


