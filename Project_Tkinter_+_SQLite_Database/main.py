from tkinter import *
import requests 
import json
import sqlite3

pycrypto = Tk()
pycrypto.title("My Crypto Portfolio")
#pycrypto.iconbitmap("favicon.ico")

con = sqlite3.connect('coin.db')
cursorObj = con.cursor()
cursorObj.execute("CREATE TABLE IF NOT EXISTS coin(id INTEGER PRIMARY KEY, symbol TEXT, amount INTEGER, price REAL)")
con.commit()


def my_portfolio():
    
    api_request = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=300&convert=USD&CMC_PRO_API_KEY=b2836bb2-a6a2-45e3-80a7-14a3810fe1e6")
    api = json.loads(api_request.content)

    
    cursorObj.execute("SELECT * FROM coin")
    coins = cursorObj.fetchall()
    
    def font_color(amount):
        if amount > 0:
            return "#4E9CB1"
        else:
            return "#E2252B"

    
    total_pl = 0
    coin_row = 1
    total_current_value = 0
    total_amount_paid = 0

    for i in range(0, 300):
        for coin in coins:
            if api["data"][i]["symbol"] == coin[1]:
                total_paid = coin[2] * coin[3]
                current_value = coin[2] * api["data"][i]["quote"]["USD"]["price"]
                pl_percoin = api["data"][i]["quote"]["USD"]["price"] - coin[3]
                total_pl_coin = pl_percoin * coin[2]
                
                total_pl += total_pl_coin
                total_current_value += current_value
                total_amount_paid += total_paid
                
                name = Label(pycrypto, text = api["data"][i]["symbol"], bg = "#B8A8A8", fg = "Black", font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
                name.grid(row = coin_row, column = 0, sticky = N + S + E + W)

                price = Label(pycrypto, text = "${0:.2f}".format(api["data"][i]["quote"]["USD"]["price"]), bg = "#B8A8A8", fg = "Black", font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
                price.grid(row = coin_row, column = 1, sticky = N + S + E + W)

                no_coins = Label(pycrypto, text = coin[2], bg = "#B8A8A8", fg = "Black", font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
                no_coins.grid(row = coin_row, column = 2, sticky = N + S + E + W)

                amount_paid = Label(pycrypto, text = "${0:.2f}".format(total_paid), bg = "#B8A8A8", fg = "Black", font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
                amount_paid.grid(row = coin_row, column = 3, sticky = N + S + E + W)

                current_val = Label(pycrypto, text = "${0:.2f}".format(current_value), bg = "#B8A8A8", fg ="Black", font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
                current_val.grid(row = coin_row, column = 4, sticky = N + S + E + W)

                pl_coin = Label(pycrypto, text = "${0:.2f}".format(total_pl_coin), bg = "#B8A8A8", fg = font_color(float("{0:.2f}".format(pl_percoin))), font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
                pl_coin.grid(row = coin_row, column = 5, sticky = N + S + E + W)

                totalpl = Label(pycrypto, text = "${0:.2f}".format(total_pl_coin), bg = "#B8A8A8", fg = font_color(float("{0:.2f}".format(total_pl_coin))), font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
                totalpl.grid(row = coin_row, column = 6, sticky = N + S + E + W)
                
                coin_row += 1

    totalap = Label(pycrypto, text = "${0:.2f}".format(total_amount_paid), bg = "#B8A8A8", fg = "Black", font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
    totalap.grid(row = coin_row, column = 3, sticky = N + S + E + W)
                
    totalcv = Label(pycrypto, text = "${0:.2f}".format(total_current_value), bg = "#B8A8A8", fg = "Black", font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
    totalcv.grid(row = coin_row, column = 4, sticky = N + S + E + W)
    
    totalpl = Label(pycrypto, text = "${0:.2f}".format(total_pl), bg = "#B8A8A8", fg = font_color(float("{0:.2f}".format(total_pl))), font="Lato 12", borderwidth = 2, relief = "groove", padx="2", pady="2")
    totalpl.grid(row = coin_row, column = 6, sticky = N + S + E + W)
    
    
    api = ""
    
    refresh = Button(pycrypto, text = "Refresh".format(total_pl), bg = "#915858", fg = "#F3B6B6", command = my_portfolio, font="Lato 12 bold", borderwidth = 2, relief = "groove", padx="2", pady="2")
    refresh.grid(row = coin_row + 1, column = 6, sticky = N + S + E + W)
    
    
   
            
            
def app_header():
    portfolio_id = Label(pycrypto, text = "Portfolio ID", bg = "#915858", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    portfolio_id.grid(row=0, column = 0, sticky = N + S + E + W)
                
    name = Label(pycrypto, text = "Coin Name", bg = "#915858", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    name.grid(row=0, column = 1, sticky = N + S + E + W)

    price = Label(pycrypto, text = "Price", bg = "#C38888", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    price.grid(row = 0, column = 2, sticky = N + S + E + W)

    no_coins = Label(pycrypto, text = "Coin Owned", bg = "#915858", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    no_coins.grid(row = 0, column = 3, sticky = N + S + E + W)

    amount_paid = Label(pycrypto, text = "Total Amount Paid", bg = "#C38888", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    amount_paid.grid(row = 0, column = 4, sticky = N + S + E + W)

    current_val = Label(pycrypto, text = "Current Value", bg = "#915858", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    current_val.grid(row = 0, column = 5, sticky = N + S + E + W)

    pl_coin = Label(pycrypto, text = "P/L Per Coin", bg = "#C38888", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    pl_coin.grid(row = 0, column = 6, sticky = N + S + E + W)

    totalpl = Label(pycrypto, text = "Total P/L With Coin", bg = "#915858", fg = "#F3B6B6", font="Lato 12 bold", padx="5", pady="5", borderwidth = 2, relief = "groove" )
    totalpl.grid(row = 0, column = 7, sticky = N + S + E + W)

app_header()
my_portfolio()
pycrypto.mainloop()
# print("Program Completed")

cursorObj.close()
con.close()