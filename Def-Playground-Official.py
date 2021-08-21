# Fun Little Profile Creator For Exploring #

# Takes Date and Time
from datetime import date

today = date.today()
today_date_format = str(today.strftime("%m/%d/%y"))
date_character_len = len(today_date_format)
remove_years_restriction = today_date_format[:date_character_len -3]
#print(remove_years_restriction)


def profile_categories(name, lastname, age, gender, grade, birthday):
    welcome_profile = "Hello " + name + "! This is your profile statistics!    " "First Name   : " + name + "| Last Name   : " + lastname + "| Age     : " + age + "| Gender    : " + gender + "| Grade   : " + grade + "| Birthday   : " + birthday
    return welcome_profile

# List for appending names
append_all_names_list = []


profile_counter = 0


amount_of_created_profiles = 0 

# prepares the amount of profiles for the 'for' loop
num_profiles = int(input("How Many Profiles Would You like To Make?:   "))


for profile_counter in range(num_profiles): 
    start_answer = input("Would you like to make a new profile? Please enter y/n:  ")
    if start_answer.lower().startswith("y"):
        name_input = (input("Please enter their first name here:    "))
        last_name_input = (input("Please enter their last name here:    "))
        age_input = (input("Please enter their age here:    "))
        gender_input = (input("Please enter their gender here:    "))
        grade_input = (input("Please enter their grade here:    "))
        birthdate_input = (input("Please enter their birthday this year here; Please put it in this format > <month>/<date>/<last 2 digits of birth year> (e.g: 03/09/21):   "))
        amount_of_created_profiles =+1
        if birthdate_input.startswith(remove_years_restriction): # if date matches todays date it will give this little surprise
            print(f""" Wow!! {name_input} {last_name_input} I can't believe it! Today is your birthday!! Happy Birthday and Good Wishes to You on turning {age_input} year(s) old!
             ^____^     
            (｡･ω･｡)つ━☆・*。
            ⊂　 ⠀|　　 ・゜+. ♡
            しーＪ　　°。+ *´¨)
    ⠀⠀      ⠀⠀ ⠀⠀ ⠀⠀.· ´¸.·*´¨) ¸.·*¨)
    ⠀⠀ ⠀    ⠀ ⠀⠀ ⠀⠀(¸.·´ (¸.·’* ☆

            """)
        print(profile_categories(name_input, last_name_input, age_input, gender_input, grade_input, birthdate_input))
        profile_counter =+ 1 
        print("~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
        print("You have made", profile_counter , "profile(s)")
        append_all_names_list.append(name_input) 
        append_all_names_list.append(last_name_input) 
    else:
        exit() # exits program if input of var(start) doesn't begin with 'y'
        
        
print("Nice Work !! You have made new profiles for:  ")


for names_list_number in range(len(append_all_names_list)):
    print(append_all_names_list[names_list_number])
    if names_list_number % 2 == 1: # checks whether the index is odd; if yes then it creates a divider between profiles
        print("- - - - - -")


