import datetime
import time


hour = datetime.datetime.now().hour
minute = datetime.datetime.now().minute
second = datetime.datetime.now().second
secinday = second + minute*60 + hour*3600
print("Обычное время: " + str(hour) +":"+ str(minute) +":"+ str(second))
print('Обычных секунд в дне: ' + str(secinday))
dsecinday = secinday/0.864
print(dsecinday)
sleep = 1 - dsecinday%1
time.sleep(sleep)
dsecinday += sleep

while True:
    dsecinday+=1
    time.sleep(0.864)
    dhour = int(dsecinday)//10000
    dminute = int(dsecinday)//100%100
    if dminute < 10:
        dminute = "0" + str(dminute)
    dsecond = int(dsecinday)%100
    if dsecond < 10:
        dsecond = "0" + str(dsecond)
    if dhour > 9:
        dhour = 0
    print("Децимальное время: " + str(dhour) +":"+ str(dminute) +":"+ str(dsecond) + '\r', end="")
    if dhour > 9:
        dhour = 0