numbers = [10,20,30,40,50]

print("List:", numbers)

stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print("stack:",stack)

print("Removed:",stack.pop())
print("Stack after pop:",stack)

from collections import deque

queue = deque()

queue.apend("A")
queue.append("B")
queue.append("C")

print("Queue:",queue)

print("Removed:", queue.popleft())
print("Queue after removal:", queue)

students = {
    101:"vaish",
    102:"sanu",
    103:"kalyani",
    104:"gauri"
}

print(students)
print(students[101])

numbers_set ={10,20,30,40,40,30,30}

print("set:", numbers_set)