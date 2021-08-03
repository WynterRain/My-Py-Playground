# Takes Date and Time
from datetime import date

today = date.today()
todaydate = today.strftime("%m/%d/%y")


def profile(name, lastname, age, gender, grade, birthday):
    stats = "Hello " + name + "! This is your profile statistics!    " "First Name   : " + name + "| Last Name   : " + lastname + "| Age     : " + age + "| Gender    : " + gender + "| Grade   : " + grade + "| Birthday   : " + birthday
    return stats

# List for appending names
allstats = []


count = 0
list = 0

# tracks the amount of profiles done
amountpro = 0 

# prepares the amount of profiles for the 'for' loop
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
        amountpro =+1
        if todaydate == enterbday: # if date matches todays date it will give this little surprise
            print(f""" Wow!! {entername} {enterlastname} I can't believe it! Today is your birthday!! Happy Birthday and Good Wishes to You on turning {enterage} year(s) old!
             ^____^     
            (｡･ω･｡)つ━☆・*。
            ⊂　 ⠀|　　 ・゜+. ♡
            しーＪ　　°。+ *´¨)
    ⠀⠀      ⠀⠀ ⠀⠀ ⠀⠀.· ´¸.·*´¨) ¸.·*¨)
    ⠀⠀ ⠀    ⠀ ⠀⠀ ⠀⠀(¸.·´ (¸.·’* ☆

            """)
        print(profile(entername, enterlastname, enterage, entergender, entergrade, enterbday))
        count =+ 1 # adds 1 after making a new profile
        print("~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
        print("You have made", count , "profile(s)")
        allstats.append(entername) # adds first name to list
        allstats.append(enterlastname) # adds last name to list
    else:
        exit() # exits program if input of var(start) doesn't begin with 'y'
        
        
print("Nice Work !! You have made new profiles for:  ")

# prints names from lists and finds out when to print a line separating profiles
for listname in range(len(allstats)):
    print(allstats[listname])
    if listname % 2 == 1: # checks whether the index is odd; if yes then it creates a divider between profiles
        print("- - - - - -")


