import random

word_list = []
special_characters = [
                    '!','@','#','$',
                    '%','^','&','*'
                        ]


with open("Wiki_BT_Text.txt", 'r') as file:
    data = file.readlines()
    
    for line in data:
        words = line.split()
    
        for item in words:
            if len(item) > 5:
                word_list.append(item)
                
                
rand_word = (random.choice(word_list))
rand_special_character = random.choice(special_characters)
rand_num = str(random.randint(10,99))
readable_password = (
                    rand_word 
                    + rand_special_character 
                    + rand_num
                    )

print(readable_password)