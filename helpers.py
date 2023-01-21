import requests

def lookup(input): 
  # 
  # Store the requested information on a variable
  response = requests.get("https://www.dnd5eapi.co/api/monsters/" + str(input))
  # 
  # 200 means that the request has ben successful
  print(response.status_code)
  # 
  # Store the converted to json response on another variable
  monster = response.json()
  #
  # Return the json
  return monster