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

upper_character = [
                'A', 'B', 'C', 'D', 'E'
                'F','G','H','I','J',
                'K','L','M','N','O',
                'P','Q','R','S','T',
                'U','V','W','X','Y','Z'
                    ]
lower_chracter = [
                'a','b','c','d','e'
                'f','g','h','i','j',
                'k','l','m','n','o',
                'p','q','r','s','t',
                'u','v','w','x','y','z'
                  ]
numbers = [
        '1', '2', '3', '4', '5
        '6','7','8','9'
            ]
special_characters = [
                    '!','@','#','$',
                    '%','^','&','*'
                        ]

password = (
            random.choice(upper_character) 
            + random.choice(lower_chracter) 
            + random.choice(numbers) 
            + random.choice(special_characters)
            + random.choice(upper_character) 
            + random.choice(lower_chracter) 
            + random.choice(numbers) 
            + random.choice(special_characters)
            )

print(password)