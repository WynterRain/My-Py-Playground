from tkinter import *
import requests
import json

pycrypto = Tk()
pycrypto.title("My Crypto Portfolio")


def my_portfolio():

    api_request = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD&CMC_PRO_API_KEY=b2836bb2-a6a2-45e3-80a7-14a3810fe1e6")

    api = json.loads(api_request.content)

    print("━━━━━━━☆☆━━━━━━━…‥・")
    print("━━━━━━━☆☆━━━━━━━…‥・")

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

    total_p_l = 0

    for index in range(0,5):
        for coin in invested_coins:
            if api["data"][index]["symbol"] == coin["symbol"]:
                total_paid = coin["amount_owned"] * coin["price_per_coin"]
                current_value = coin["amount_owned"] * api["data"][index]["quote"]["USD"]["price"]
                p_l_percoin = api["data"][index]["quote"]["USD"]["price"] - coin["price_per_coin"]
                total_p_l_coin = p_l_percoin * coin["amount_owned"]

                total_p_l =+ total_p_l_coin

                print(api["data"][index]["name"] + " ✿ " + api["data"][index]["symbol"])
                print("Price ✿ ${0:.2f}".format(api["data"][index]["quote"]["USD"]["price"]))
                # ("{0:.2f}".format -- reformats the output to be 2 decimals
                print("Total Amount Paid:", "${0:.2f}".format(total_paid))
                print("Current Value:", "${0:.2f}".format(current_value))
                print("P/L Per Coin:", "${0:.2f}".format(p_l_percoin))
                print("Total P/L With Coin:", "${0:.2f}".format(total_p_l_coin))
                print("━━━━━━━☆☆━━━━━━━…‥・")

    print("Total P/L For Portfolio:", "${0:.2f}".format(total_p_l))

    print("━━━━━━━☆☆━━━━━━━…‥・")
    print("━━━━━━━☆☆━━━━━━━…‥・")
    

name = Label(pycrypto, text="Bitcoin")
name.pack()
# pack moves button when resized ;; 
    # can replace with name.grid(row=<row #>, column=<column #>) to be more specific


pycrypto.mainloop()

print("Program Completed")