import random

# random.choice
    # picks a random choice out of a list / tuple / dictionary
    # e.g. print(random.choice(<list/tuple/dict name>))
    
# random.randint
    # picks a random integer from a range of numbers
    # e.g. print(random.randint(<min #>,<max #>)) 
    
# random.random()
    # picks a random floating number from 0.0 to 1.0
    # e.g. print(random.random())
    
# Strong Password Requirements :
# 8+ Character Length
# 1+ Upper Character
# 1+ Lower Character
# 1+ Numberic Digit
# 1+ Special Symbol( ! @ # $ % ^ & * ( ) + - = _ ~ )

upper_character = ['A', 'B', 'C', 'D', 'E']
lower_chracter = ['a','b','c','d','e']
numbers = ['1', '2', '3', '4', '5']
special_characters = ['@', '#', '^', '&', '!']

password = (
            random.choice(upper_character) 
            + random.choice(lower_chracter) 
            + random.choice(numbers) 
            + random.random.choice(special_characters)
            )
