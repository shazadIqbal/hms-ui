
def cube(n):
 return n*n*n
number =input("Enter number to find a cube: ")
number=int(number)
print("Cube of is",cube(number))





def recfactorial(n):
  if n==1:
    return 1
  return n* recfactorial(n-1)

number =input("Enter number to find a factorial: ")
number=int(number)
print("Factorial : ",recfactorial(number))







def count_pattern(input_pattern):
 pattern = ['g','a','b','a','b','a','b','a']
 count=[] 
 for  i in input_pattern:
   temp=pattern.count(i)
   count.append(temp)
 print("Total Pattern Count: ",min(count))

input_pattern = ['a','b']
count_pattern(input_pattern)




from msvcrt import getch
import os
map=[[2,0,1,0,0,0],[1,0,1,0,1,0],[1,0,1,0,1,0],[1,0,1,0,1,0],[1,0,0,0,1,0]]
loc=[0,0]
status=[False,False]
destination_x=4
destination_y=5
def map_funct(m):
    for i in range(len(m)):
        for j in range(len(m[i])):
            print(m[i][j], end=' ')
        print()
def up(loc,ls,st):
    if (loc[0] - 1 < 0):
        loc[0] = 0
        
    elif (ls[loc[0] - 1][loc[1]] == 1):
        Hit(loc,ls,0,-1)
        st[0] = True
    elif (ls[loc[0] - 1][loc[1]] == 0):
        Move(loc,ls,0,-1)
def down(loc,ls,st):
    if (loc[0] + 1 > 4):
            loc[0] = 4    
    elif (ls[loc[0] + 1][loc[1]] == 1):
        Hit(loc,ls,0,1)
        st[0] = True
    elif (ls[loc[0] + 1][loc[1]] == 0):
        Move(loc,ls,0,1)
def Left(loc,ls,st):
    if (loc[1]- 1 < 0):
        loc[1] = 0
    elif (ls[loc[0]][loc[1]-1] == 1):
        Hit(loc,ls,1,-1)
        st[0] = True
    elif (ls[loc[0]][loc[1]-1] == 0):
        Move(loc,ls,1,-1)
def Right(loc,ls,st):
    if (loc[1]+ 1 >5):
        loc[1] = 5
    elif (ls[loc[0]][loc[1]+1] == 1):
        Hit(loc,ls,1,1)
        st[0] = True
    elif (ls[loc[0]][loc[1]+1] == 0):
        Move(loc,ls,1,1)

def Move(loc,ls,index,op):
    ls[loc[0]][loc[1]] = 0
    loc[index]=loc[index]+ 1*op
    ls[loc[0]][loc[1]] = 2
    os.system('cls')
    map_funct(ls)

def Hit(loc,ls,index,op):
    ls[loc[0]][loc[1]] = 0
    loc[index]=loc[index]+ 1*op
    ls[loc[0]][loc[1]] = '*'
    os.system('cls')
    map_funct(ls)





maze = array[0][0]
pos_x,pos_y=0,0
row = np.shape(array)[0]
col = np.shape(array)[1]
trace = []
​
def condition(pos_x,pos_y,array):
    if (pos_x,pos_y)==(row-1,col-1):
        return False
    else:
        return True
​
while(True):
    if pos_y+1<7 and condition(pos_x,pos_y,array):
        if array[pos_x][pos_y+1] == 0:
            array[pos_x][pos_y+1] = maze
            array[pos_x][pos_y]=1
            trace.append((pos_x,pos_y))
            (pos_x,pos_y)=(pos_x,pos_y+1)
            continue
​
    if pos_x+1<5 and condition(pos_x,pos_y,array):
        if array[pos_x+1][pos_y] == 0:
            array[pos_x+1][pos_y] = maze
            array[pos_x][pos_y]=1
            trace.append((pos_x,pos_y))
            (pos_x,pos_y)=(pos_x+1,pos_y)
            continue
​
    if pos_x-1>=0 and condition(pos_x,pos_y,array):
        if array[pos_x-1][pos_y] == 0:
            array[pos_x-1][pos_y] = maze
            array[pos_x][pos_y]=1
            trace.append((pos_x,pos_y))
            (pos_x,pos_y)=(pos_x-1,pos_y)
            continue
    else:
        trace.append((pos_x,pos_y))
        for t in trace:
            for i,j in trace:
                array[i][j]=0
            t=list(t)
            i,j=t[0],t[1]
            array[i][j]=maze
            for i in range(np.shape(array)[0]):
                print(array[i][:])
            print('\n')
        print('The Maze has been  Solved')
        break