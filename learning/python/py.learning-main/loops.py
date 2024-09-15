#loops in python

#while loop
# count = 1
# while count<=10:
#     print("hello")
#     count = count + 1

# print(count)


#1 print number 1 to 100

'''num = 1
while num <=100:
    print(num)
    num = num + 1'''


#2 print number 100 to 1

'''num = 100
while num >=1:
    print(num)
    num = num-1'''

#3 print even number from 1 to 100


# n = int(input("Enter a number for table you needed4:"))
# i=1
# while i<=10:
#     print(n*i)
#     i += 1



# a = [ 1,4,9,16,25,36,49,64,81,100]
# idx = 0
# while idx < len(a):
#     print(a[idx])
#     idx += 1


# a = (1,4,9,16,25,36,49,64,81,100)
# fnd = 36

# idx = 0
# while idx < len(a):
#     if (a[idx]==fnd):
#         print("found",idx)
#         idx += 1
#     else:
#         print(a)


# # Program to calculate the factorial of a number using a for loop


# num = int(input("enter a number:"))
# factorial = 1

# if num == 0:
#     print("factorial of 0 is 1")
# elif num == 1:
#     print("factorial of 1 is 1")
# else:
#     for i in range(1, num + 1):
#         factorial *=i
#     print(f"factorial of {i} is {factorial}")




# even number
# num = int(input("Enter a number: "))

# if num % 2 == 0:
#     print(f"{num} is even.")
# else:
#     print(f"{num} is odd.")



# Program to find the sum of natural numbers up to a given number using a while loop and if-else statement

# num = int(input("Enter a positive integer: "))
# sum = 0
# i = 1

# if num <= 0:
#     print("Please enter a positive integer.")
# else:
#     while i <= num:
#         sum += i
#         i += 1
#     print(f"The sum of natural numbers up to {num} is {sum}.")





# prime number

# num = 2
# if (num <= 1):
#     print("not a primay number")
# else:
#     for i in range(2, num):
#         if (num % i == 0):
#             print("not a primay number")
#             break
#     else:
#         print("primay number")


# num = 1
# if(num <=1 ):
#     print("not a prime number")
# else:
#     for i in range(2,num):
#         if (num % 2 ==0):
#             print("not a prime number")
#             break
#     else:
#             print("prime number")

# import calendar
# import sys

# month = int(input("Enter a month:"))
# year = int(input("Enter a year:"))

# if month < 1 or month > 12:
#     print("invalid month")
#     sys.exit()

# print("\ncalendar")
# print(calendar.month(year, month))       


# start = int(input("enter a start number:"))
# end = int(input("enter a start number:"))

# for i in range(start, end+1):
#     if i%2==0:
#         print(i)


# num = int(input("enter a number:"))
# if num%2==0:
#     print("even")
# else:
#     print("odd")



# num = int(input("enter a number"))
# if num<=1:
#     print("it is not a prime number")
# else:
#     for i in range(2,num):
#         if num%2==0:
#             print("it is not a prime no")
#             break
#     else:
#         print("it is prime number")
    