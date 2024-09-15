# size = int(input("enter a size: "))
# for i in range(size):
#     print("x" * size)
#     # break



# size = int(input("enter a size:"))
# for i in range(size):
#     print("x"* size)




# smthng =input("Enter something:")
# choice = input("do you want to enter (y/n):")
# if choice == 'y':
#     b = input("write:")
#     print("you wrote:",smthng+" "+b)
# else:
#     print("you wrote:", smthng)




# a=input("enter a string:")
# choice=input("do you want to enter something (y/n):")
# if choice=="y":
#     b=input("write something you wants to added:")
#     print("you wrote:",a+"  "+b)
# else:
#     print("you wrote:",a)






# # this question is of secret code game type
# secret = int(input("Enter to set your secret:"))
# # secret = 5
# attemt = 0


# while True:
#     num = int(input("Guess the number:"))
#     attemt = attemt+1
#     if num==secret:
#         print("contgras! you guess the number right")
#         break
#     elif attemt == 3:
#         print("you ran out of guess, the number was",secret)
#         break
#     else:
#         print("wrong Guess!!")


# sec=int(input("Enter to set a secreat code:"))
# attemt=0

# while True:
#     num=int(input("Guess the number:"))
#     attemt=attemt+1
#     if num == sec:
#         print("contgras! you guess the number right")
#         break
#     elif num == 3:
#         print("you ran out of guess, the number was",sec)
#         break
#     else:
#         print("wrong Guess!!")





# calculate the follow with using functions add,sub,mult,div 
# def add(y,x):
#     return y + x

# def sub(y,x):
#     return y-x

# def mult(y,x):
#     return y*x

# def div(y,x):
#     return y/x

# x=int(input("Enter a number1:"))
# y=int(input("Enter a number2:"))
# choice=input("Enter your choice (+,-,*,/)")

# if choice == "+":
#     print("The addition is:",add(y,x))
# elif choice == "-":
#     print("The subtraction is:",sub(y,x))
# elif choice == "*":
#     print("The multiplaction is:",div(y,x))
# elif choice == "/":
#     print("The division is:",div(y,x))


# def add(a,b):
#     return a + b
# def sub(a,b):
#     return a - b
# def mult(a,b):
#     return a * b
# def div(a,b):
#     return a / b

# a = int(input("Enter the first number:"))
# b = int(input("Enter the first number:"))
# choice = input("Enter your choice that you want to perform(+,-,*,/):")

# if choice == "+":
#     print("the addition of num1 and nun2 is:",add(a,b))
# elif choice =="-":
#     print("the addition of num1 and nun2 is:",sub(a,b))
# elif choice =="*":
#     print("the addition of num1 and nun2 is:",mult(a,b))
# elif choice =="/":
#     print("the addition of num1 and nun2 is:",div(a,b))
# else:
#     print("Wrong!!!Enter the correct choice")







# tuple = 1,2,3,4,5,6
# print(tuple)

# tuple = (1,2,3,4,5,6)
# a,*b = tuple
# print(a,b)


# calculate the factorial to number by taking input

# def fact(a):
#     if a<1:
#         print("fact cannot find.!!!")
#     else:
#         fact = 1
#     for i in range(1,a+1):
#         fact*=i
#         print(fact)
# no=int(input("Enter a number:"))
# fact(no)








# def fact(a):
#     if a<1:
#         print("fact cannot find.!!!")
#     else:
#         fact = 1
#         for i in range(1,a+1):
#             fact*=i
#             print(fact)
# no=int(input("Enter a number:"))
# fact(no)






# a = "python is programming language and i love python"
# old_word = "python"
# new_word = "java"

# replace_string = a.replace(old_word, new_word)
# print(replace_string)





# print(replace_string.upper())
# print(replace_string.lower())
# print(replace_string.capitalize())
# print(replace_string.title())


# list1 = [2,3,4,15,6,7]
# list1.reverse()
# print(list1)
# list1.sort()
# print(list1)
# print(max(list1))
# print(min(list1))
# list1.append(1)
# print(list1)




# tuple1 = (1,4,6,2,8,9,7)
# tuple2 = sorted(tuple1)
# print(tuple1) 
# print(tuple2)
# tuple2 = max(tuple1)
# print(tuple2)

# tuple2 = sum(tuple1)
# print(tuple2)

# tuple2 = any(tuple1)
# print(tuple2)

# tuple2 = all(tuple1)
# print(tuple2)





# set1 = { 1, 2, 3, 4}
# set2 = { 5, 6, 3, 4}

# set3 = set1.union(set2)
# print(set3)
# set3 = set1.intersection(set2)
# print(set3)
# set3 = set2.difference(set1)
# print(set3)
# set3 = set1.issubset(set2)
# print(set3)



# dich1 = {'name':'akshay', 'age':19 , 'city':'pune'}
# keys = dich1.keys()
# print(keys)
# keys = dich1.values()
# print(keys)
# keys = dich1.items()
# print(keys)
# keys = dich1.clear()
# print(keys)


# my_list = [x for x in range(10)]
# print(my_list)
# my_dict = {x: x**2 for x in range(10)}
# print(my_dict)

# file = open('akshay.txt', 'r')
# print(file.read())
# file.close()


# file = open('akshay.txt', 'w')
# file.write( "my name is navnath")
# file.close()


file = open('akshay.txt', 'a')
print(file.write("\n i am a akshay"))
file.close()


file = open('akshay.txt', '+')
print(file.read())
file.write("\n i am a chutiya i study in sbup")
file.close()


# file = open('akshay.txt', 'a')
# file.write("\n i am a chutiya i study in sbup")
# file.close()


# file = open('akshay.txt', 'r')
# data = file.read(10)
# print(data)

# file = open('akshay.txt', 'r')
# data = file.tell()
# print(data)

# file = open('akshay.txt', 'r')
# data = file.seek(10,0)
# print(data)

