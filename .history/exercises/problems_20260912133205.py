#problem 1 - Reverse a string

text = input("Enter a string: ")
reversed_text =text[::-1]
print("Reversed string:", reversed_text)

#problem 2 - palindrome

text = input("Enter a string: ")

if text == text[::-1]:
    print("Palindrome")
else:
    print("Not a palindrome")
    
    
#problem 3 -largest number

numbers = [10, 25, 7, 45, 18]

largest = numbers[0]

for number in numbers:
    if number > largest:
        largest = number

print("Largest:", largest)

#Problem 4 — Second Largest Number

numbers = [10, 25, 7, 45, 18]

unique_numbers = list(set(numbers))
unique_numbers.sort()

print("Second largest:", unique_numbers[-2])

#Problem 5 — Remove Duplicates

numbers = [10, 20, 10, 30, 20, 40]

result = list(set(numbers))

print("Without duplicates:", result)

#Problem 6 — Missing Number

numbers = [1, 2, 3, 5, 6]

n = 6

expected_sum = n * (n + 1) // 2
actual_sum = sum(numbers)

missing = expected_sum - actual_sum

print("Missing number:", missing)

#problem 7 - character frequency

text = input("Enter a string: ")

frequency = {}

for char in text:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print(frequency)

#Problem 8 — First Non-Repeating Character


text = input("Enter a string: ")

frequency = {}

for char in text:
    frequency[char] = frequency.get(char, 0) + 1

for char in text:
    if frequency[char] == 1:
        print("First non-repeating character:", char)
        break
    
 #Yesterday 8:20 PM
i want to this task with step by step

Absolutely. We can complete DAY 1 — Programming Fundamentals & Problem Solving from scratch, step by step.

I recommend using Python + VS Code + Git/GitHub because it is beginner-friendly and suitable for the Employee Management CLI assignment.

DAY 1 Roadmap

We will complete it in this order:

Set up Python and VS Code
Learn Programming Basics
Practice Data Structures & Algorithms
Solve 15 programming problems
Learn Git & GitHub
Build Employee Management CLI
Organize the required project folders
Create README.md
Push everything to GitHub
STEP 1 — Create the project

Open VS Code.

Create a folder:

day-01

Inside it, create this structure:

day-01/
│
├── exercises/
│
├── employee-management/
│
└── README.md
In VS Code

Go to:

File → Open Folder → Create/Select day-01

Then create the two folders and one file.

Your VS Code Explorer should look like:

DAY-01
├── exercises
├── employee-management
└── README.md
STEP 2 — Check Python

Open the VS Code terminal:

Terminal → New Terminal

Run:

python --version

You should get something similar to:

Python 3.12.x

If python doesn't work, try:

py --version

If Python is installed correctly, continue.

STEP 3 — Programming Basics

Create:

exercises/
└── programming_basics.py

Put this code inside:

# Variables
name = "Vaishnavi"
age = 21

print("Name:", name)
print("Age:", age)


# Data types
student_name = "Vaishnavi"   # String
student_age = 21             # Integer
percentage = 85.5            # Float
is_student = True            # Boolean

print(student_name)
print(student_age)
print(percentage)
print(is_student)


# Conditional statement
if percentage >= 40:
    print("Pass")
else:
    print("Fail")


# Loop
for i in range(1, 6):
    print(i)


# Function
def greet(name):
    return "Hello " + name


print(greet("Vaishnavi"))


# List
numbers = [10, 20, 30, 40, 50]

print(numbers)
print(numbers[0])


# Dictionary
student = {
    "name": "Vaishnavi",
    "age": 21,
    "course": "Engineering"
}

print(student)
print(student["name"])

Run:

python exercises/programming_basics.py
You have now covered:
Variables
Constants
Data types
Operators
Conditions
Loops
Functions
Arrays/Lists
Strings
Objects/Dictionaries
STEP 4 — Learn Data Structures

Create:

exercises/
└── data_structures.py

Add:

# Array / List
numbers = [10, 20, 30, 40, 50]

print("List:", numbers)


# Stack
stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print("Stack:", stack)

print("Removed:", stack.pop())
print("Stack after pop:", stack)


# Queue
from collections import deque

queue = deque()

queue.append("A")
queue.append("B")
queue.append("C")

print("Queue:", queue)

print("Removed:", queue.popleft())
print("Queue after removal:", queue)


# Dictionary / Hash Map
students = {
    101: "Rahul",
    102: "Amit",
    103: "Sneha"
}

print(students)
print(students[101])


# Set
numbers_set = {10, 20, 20, 30, 30, 40}

print("Set:", numbers_set)

Run:

python exercises/data_structures.py
STEP 5 — Solve 15 Programming Problems

Create:

exercises/
└── problems.py

We need at least 15 problems as specified in your task.

Problem 1 — Reverse a String
text = input("Enter a string: ")

reversed_text = text[::-1]

print("Reversed:", reversed_text)

Example:

Input: hello
Output: olleh
Problem 2 — Palindrome
text = input("Enter a string: ")

if text == text[::-1]:
    print("Palindrome")
else:
    print("Not a palindrome")

Example:

madam → Palindrome
hello → Not a palindrome
Problem 3 — Largest Number
numbers = [10, 25, 7, 45, 18]

largest = numbers[0]

for number in numbers:
    if number > largest:
        largest = number

print("Largest:", largest)
Problem 4 — Second Largest Number
numbers = [10, 25, 7, 45, 18]

unique_numbers = list(set(numbers))
unique_numbers.sort()

print("Second largest:", unique_numbers[-2])
Problem 5 — Remove Duplicates
numbers = [10, 20, 10, 30, 20, 40]

result = list(set(numbers))

print("Without duplicates:", result)
Problem 6 — Missing Number

For numbers from 1 to n, find the missing number.

numbers = [1, 2, 3, 5, 6]

n = 6

expected_sum = n * (n + 1) // 2
actual_sum = sum(numbers)

missing = expected_sum - actual_sum

print("Missing number:", missing)

Output:

Missing number: 4
Problem 7 — Character Frequency
text = input("Enter a string: ")

frequency = {}

for char in text:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print(frequency)

Example:

Input: hello

Output:
{'h': 1, 'e': 1, 'l': 2, 'o': 1}
Problem 8 — First Non-Repeating Character
text = input("Enter a string: ")

frequency = {}

for char in text:
    frequency[char] = frequency.get(char, 0) + 1

for char in text:
    if frequency[char] == 1:
        print("First non-repeating character:", char)
        break
Problem 9 — Merge Two Sorted Arrays   