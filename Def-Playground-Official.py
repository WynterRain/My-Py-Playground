
from datetime import date

today = date.today()
todaydate = today.strftime("%m/%d/%y")
print(todaydate)

def profile(name, lastname, age, gender, grade, birthday):
    stats = "Hello " + name + "! This is your profile statistics!    " "First Name   : " + name + "| Last Name   : " + lastname + "| Age     : " + age + "| Gender    : " + gender + "| Grade   : " + grade + "| Birthday   : " + birthday
    return stats

allstats = []
count = 0
list = 0

num_profiles = int(input("How Many Profiles Would You like To Make?:   "))

for count in range(num_profiles):
    start = input("Would you like to make a new profile? Please enter y/n:  ")
    if start.lower().startswith("y"):
        entername = (input("Please enter their first name here:    "))
        enterlastname = (input("Please enter their last name here:    "))
        enterage = (input("Please enter their age here:    "))
        entergender = (input("Please enter their gender here:    "))
        entergrade = (input("Please enter their grade here:    "))
        enterbday = (input("Please enter their birthday this year here; Please put it in this format > <month>/<date>/<last 2 digits of current year> (e.g: 03/09/21):   "))
        if todaydate == enterbday:
            print(f""" Wow!! {entername} {enterlastname} I can't believe it! Today is your birthday!! Happy Birthday and Good Wishes to You on turning {enterage} year(s) old!
             ^____^     
            (｡･ω･｡)つ━☆・*。
            ⊂　 ⠀|　　 ・゜+. ♡
            しーＪ　　°。+ *´¨)
    ⠀⠀      ⠀⠀ ⠀⠀ ⠀⠀.· ´¸.·*´¨) ¸.·*¨)
    ⠀⠀ ⠀    ⠀ ⠀⠀ ⠀⠀(¸.·´ (¸.·’* ☆

            """)
        print(profile(entername, enterlastname, enterage, entergender, entergrade, enterbday))
        count =+ 1
        print("~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
        print("You have made", count , "profile(s)")
        allstats.append(entername)
        allstats.append(enterlastname)
    else:
        exit()
        
        
print("Nice Work !! You have made new profiles for:  ")
for listname in range(len(allstats)):
    print(allstats[listname])
    if listname % 2 == 1: 
        print("- - - - - -")


