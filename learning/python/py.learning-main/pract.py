#  dafault parameter
# key value argument 
#  more than one argument  *name , ye return karta hai tuple 
#   **name , ye return karta hai dictionary , keyvalue pairs me dena hai yisko 


# *skills // for the skills we have to give in tuple
# **additional // for the additionl values we have to give in key value pairs and it ruturs a dictionary

def userInfo(name,age=18, country=None,*end,**additional):
    print(f"hello kaise ho {name} {age} {country} {end} {additional}")

userInfo("akshay",19,"india", "hello",cource="BCA",hobby="cricket")


# def greet_name(name , age = 18 ,  country = "india",**additional ): 
#     print(f"hello kaise ho {name} {age} {country} {additional}")

# greet_name("nitesh", 19 , interest="developnemnt" , hobby="cricket",course="python"  )


# def greet_name(name , age = 18 ,  country = "india",**additional ): 
#     print(f"hello kaise ho {name} {age} {additional} {country}  ")

# greet_name("akshay", "india " , interest="developnemnt" , hobby="football",course="python"  )




# ? example
def info(name, age, *skills, **additional):
    print(f"hello kaise ho {name} {age}")
    print("name: " + name)
    print("age: " + str(age))
    print("Skills")
    for skill in skills:
      print(f"--> {skill}")

    for key, value in additional.items():
        print(f"{key}: {value}")


# info("akshay",19, "python", "java", "c++", interest="developnemnt", hobby="cricket", course="python")


# ! this will not work because first we should write *skills and they **additional
# ! [we cant do vice versa (**additional , *skills)]

# def employee_details(name , age = 18 ,**additional , *skills ):
#     # print(f"hello kaise ho {name} {age} {additional}   ")
#     print("name " +name)
#     print("age :" + str(age))
     
#     print("Skills")
#     for skill  in skills: 
#         print(f"--> {skill}")
    
#     print("additional")
#     for key , value in additional.items():
#         print(f"{key} : {value}")


# employee_details("justin" , 16  ,interest = "developnemnt" , hobby="cricket",course="python"  ,"python" , "java", "running" )

# employee_details = lambda name, age=18, *skills, **additional: (
#     print(f"name: {name}"),
#     print(f"age: {age}"),
#     print("Skills"),
#     print("\n".join(f"--> {skill}" for skill in skills)),
#     print("additional"),
#     print("\n".join(f"{key}: {value}" for key, value in additional.items()))
# )

# employee_details("akshay", 23, "python", "java", "running", interest="development", hobby="cricket", course="python")


# ! doc string
def employee_details(name, age=18, *skills, **additional):
    """
    Prints employee details.

    Parameters:
    name (str): Employee name
    age (int): Employee age (default: 18)
    *skills (str): Employee skills
    **additional (dict): Additional employee information (e.g. interest, hobby, course, class)

    Returns:
    None
    """
    print(f"name: {name}")
    print(f"age: {age}")
    print("Skills")
    print("\n".join(f"--> {skill}" for skill in skills))
    print("Additional Information")
    print("\n".join(f"{key}: {value}" for key, value in additional.items()))

# Example usage:
employee_details("rakesh", 23, "python", "java", "running", interest="development", hobby="cricket", course="python", class_="10")

# Printing the docstring
print(employee_details.__doc__)
