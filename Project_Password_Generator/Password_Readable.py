import random

word_list = []


with open("Wiki_BT_Text.txt", 'r') as file:
    data = file.readlines()
    
    for line in data:
        words = line.split()
    
        for item in words:
            if len(item) > 5:
                word_list.append(item)
                
                
rand_word = (random.choice(word_list))
special_character = random