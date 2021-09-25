import requests
import json

api_request = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD&CMC_PRO_API_KEY=b2836bb2-a6a2-45e3-80a7-14a3810fe1e6")

api = json.loads(api_request.content)

invested_coins = [
    {
      "symbol" : "BTC",
      "amount_owned" : 2,
      "price_per_coin": 3200
    },
    {
      "symbol" : "BNB",
      "amount_owned" : 100,
      "price_per_coin": 2.05
    }
]

for index in range(0,5):
    for coin in invested_coins:
        if api["data"][index]["symbol"] == coin["symbol"]:
            print(api["data"][index]["name"] + " ✿ " + api["data"][index]["symbol"])
            print("Price ✿ ${0:.2f}".format(api["data"][index]["quote"]["USD"]["price"]))
            # ("{0:.2f}".format -- reformats the output to be 2 decimals
            print("━━━━━━━☆☆━━━━━━━…‥・")