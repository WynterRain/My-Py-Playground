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
                print("Number Of Coin:", coin["amount_owned"])
                print("Total Amount Paid:", "${0:.2f}".format(total_paid))
                print("Current Value:", "${0:.2f}".format(current_value))
                print("P/L Per Coin:", "${0:.2f}".format(p_l_percoin))
                print("Total P/L With Coin:", "${0:.2f}".format(total_p_l_coin))
                print("━━━━━━━☆☆━━━━━━━…‥・")
                
                name = Label(pycrypto, text=api["data"][index]["symbol"], bg="grey", fg="black")
                name.grid(row=0, column=0, sticky=N+S+E+W)

                price = Label(pycrypto, text="${0:.2f}".format(api["data"][index]["quote"]["USD"]["price"]), bg="white", fg="black")
                price.grid(row=0, column=1, sticky=N+S+E+W)

                no_coins = Label(pycrypto, text=coin["amount_owned"], bg="grey", fg="black")
                no_coins.grid(row=0, column=2, sticky=N+S+E+W)

                total_paid = Label(pycrypto, text="${0:.2f}".format(total_paid), bg="white", fg="black")
                total_paid.grid(row=0, column=3, sticky=N+S+E+W)

                current_value = Label(pycrypto, text="${0:.2f}".format(current_value), bg="grey", fg="black")
                current_value.grid(row=0, column=4, sticky=N+S+E+W)

                p_l_coin = Label(pycrypto, text="${0:.2f}".format(p_l_percoin), bg="white", fg="black")
                p_l_coin.grid(row=0, column=5, sticky=N+S+E+W)

                total_p_l = Label(pycrypto, text="${0:.2f}".format(total_p_l_coin), bg="grey", fg="black")
                total_p_l.grid(row=0, column=6, sticky=N+S+E+W)

    print("Total P/L For Portfolio:", "${0:.2f}".format(total_p_l))

    print("━━━━━━━☆☆━━━━━━━…‥・")
    print("━━━━━━━☆☆━━━━━━━…‥・")
    

name = Label(pycrypto, text="Coin Name", bg="grey", fg="black")
name.grid(row=0, column=0, sticky=N+S+E+W)

price = Label(pycrypto, text="Price", bg="white", fg="black")
price.grid(row=0, column=1, sticky=N+S+E+W)

no_coins = Label(pycrypto, text="Coin Owned", bg="grey", fg="black")
no_coins.grid(row=0, column=2, sticky=N+S+E+W)

total_paid = Label(pycrypto, text="Total Amount Paid", bg="white", fg="black")
total_paid.grid(row=0, column=3, sticky=N+S+E+W)

current_value = Label(pycrypto, text="Current Value", bg="grey", fg="black")
current_value.grid(row=0, column=4, sticky=N+S+E+W)

p_l_coin = Label(pycrypto, text="P/L Per Coin", bg="white", fg="black")
p_l_coin.grid(row=0, column=5, sticky=N+S+E+W)

total_p_l = Label(pycrypto, text="Total P/L With Coin", bg="grey", fg="black")
total_p_l.grid(row=0, column=6, sticky=N+S+E+W)


#name.pack()
# pack moves button when resized ;; 
    # can replace with name.grid(row=<row #>, column=<column #>) to be more specific


pycrypto.mainloop()

print("Program Completed")