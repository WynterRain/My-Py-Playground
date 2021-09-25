import requests
import json

api_request = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD&CMC_PRO_API_KEY=b2836bb2-a6a2-45e3-80a7-14a3810fe1e6")

api = json.loads(api_request.content)

print(api["data"][0]["symbol"])
print("{0:.2f}".format(api["data"][0]["quote"]["USD"]["price"]))
# ("{0:.2f}".format -- reformats the output to be 2 decimals