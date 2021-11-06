import requests
import json
from PIL import Image, ImageFont, ImageDraw
from datetime import date

api_key = "39915bbb4ea3af1c3dc22953d9852d24"
position = [300, 430, 555, 690, 820]

uk_list = ["London", 'Manchester', "Edinburgh", "Bristol","Birmingham"] 
india_list = ["Jaipur", 'Delhi', "Mumbai", "Kolkata","Chennai"] 
us_list = ["New York", 'Chicago', "San Francisco", "Los Angeles","San Diego"] 

country_list = [uk_list, india_list, us_list]

for country in country_list:
    image = Image.open("post.png")
    draw = ImageDraw.Draw(image)

    font = ImageFont.truetype('Inter.ttf',size = 50)
    content = "Latest Weather Forecast"
    color = 'rgb(255, 255, 255)'
    (x, y) = (55, 50)
    draw.text((x, y), content, color, font = font)

    font = ImageFont.truetype('Inter.ttf',size = 30)
    content = date.today().strftime("%A - %B %d, %Y")
    color = 'rgb(255, 255, 255)'
    (x, y) = (55, 145)
    draw.text((x, y), content, color, font = font)


    index =  0
    for city in country:
        url = "https://api.openweathermap.org/data/2.5/weather?q={}&appid=39915bbb4ea3af1c3dc22953d9852d24&units=metric".format(city)
        response = requests.get(url)
        data = json.loads(response.text)
        
        # City Name
        font = ImageFont.truetype('Inter.ttf',size = 50 )
        color = 'rgb(0, 0, 0)'
        (x, y) = (135, position[index])
        draw.text((x, y), city, color, font = font)
        
        # Temperature
        font = ImageFont.truetype('Inter.ttf',size = 50)
        content = str(data['main']['temp']) + "\u00b0"
        color = 'rgb(255, 255, 255)'
        (x, y) = (600, position[index])
        draw.text((x, y), content, color, font = font)
        
        # Humidity
        font = ImageFont.truetype('Inter.ttf',size = 50)
        content = str(data['main']['humidity']) + "%"
        color = 'rgb(255, 255, 255)'
        (x, y) = (810, position[index])
        draw.text((x, y), content, color, font = font)
        
        index += 1


    
    image.save(str(date.today()) + country[0] + ".png")
    # Convert To PDF File!!
    image_pdf = image.convert('RGB')
    image_pdf.save(str(date.today()) + country[0] + ".pdf")

