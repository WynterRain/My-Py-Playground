from tkinter import *
import requests 
import json

pycrypto = Tk()
pycrypto.title("My Crypto Portfolio")
pycrypto.mainloop()



api_request = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD&CMC_PRO_API_KEY=b2836bb2-a6a2-45e3-80a7-14a3810fe1e6")
api = json.loads(api_request.content)

print("----------------")
print("----------------")

coins = [
  {
    "symbol":"BTC",
    "amount_owned": 2,
    "price_per_coin": 3200
  }, 
  {
    "symbol":"BNB",
    "amount_owned": 100,
    "price_per_coin": 2.05
  }
]

total_pl = 0

for i in range(0, 5):
  for coin in coins:
    if api["data"][i]["symbol"] == coin["symbol"]:
      total_paid = coin["amount_owned"] * coin["price_per_coin"]
      current_value = coin["amount_owned"] * api["data"][i]["quote"]["USD"]["price"]
      pl_percoin = api["data"][i]["quote"]["USD"]["price"] - coin["price_per_coin"]
      total_pl_coin = pl_percoin * coin["amount_owned"]
      
      total_pl = total_pl + total_pl_coin

      print(api["data"][i]["name"] + " - " + api["data"][i]["symbol"])
      print("Price - ${0:.2f}".format(api["data"][i]["quote"]["USD"]["price"]))
      print("Number Of Coin:", coin["amount_owned"])
      print("Total Amount Paid:", "${0:.2f}".format(total_paid))
      print("Current Value:", "${0:.2f}".format(current_value))
      print("P/L Per Coin:", "${0:.2f}".format(pl_percoin))
      print("Total P/L With Coin:", "${0:.2f}".format(total_pl_coin))
      print("----------------")

print("Total P/L For Portfolio:", "${0:.2f}".format(total_pl))