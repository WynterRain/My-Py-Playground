import requests
from bs4 import BeautifulSoup 

url = "https://finance.yahoo.com/quote/AMZN?p=AMZN&.tsrc=fin-srch"
headers = {'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'}
html_page = requests.get(url, headers=headers)

soup = BeautifulSoup(html_page.content, 'lxml')

header_info = soup.find_all("div", id = "quote-header-info")[0]
stock_title = header_info.find("h1").get_text()
current_price = header_info.find("div", class_="My(6px) Pos(r) smartphone_Mt(6px) W(100%)").find("span").get_text()

print(stock_title)
print(current_price)

table_info = soup.find_all("div", class_="D(ib) W(1/2) Bxz(bb) Pend(12px) Va(t) ie-7_D(i) smartphone_D(b) smartphone_W(100%) smartphone_Pend(0px) smartphone_BdY smartphone_Bdc($seperatorColor)")[0].find_all("tr")

for i in range(0,8):
    heading = table_info[i].find_all("td")[0].get_text()
    value = table_info[i].find_all("td")[1].get_text()

    print(heading + " : " + value)

