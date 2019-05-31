#!/usr/bin/env python

import sched, time
from random import seed
from random import randint
import requests

seed(1)
s = sched.scheduler(time.time, time.sleep)
def do_something(sc): 
    print("Doing stuff...")
    jono = randint(0, 1)
    seuraava = randint(0, 1)
    jono = jono + jono
    seuraava = seuraava + seuraava
    print(jono)
    print(seuraava)
    data = '{"id" : 1, "hostname" : "jokuhosti", "enabled" : "1", "created" : "data", "jono" : {jono}, "seuraava" : ]]{seuraava} }'

    response = requests.put('http://localhost:9595/components/api/server/id/1', data=data)


    # do your stuff
    s.enter(2, 1, do_something, (sc,))

s.enter(2, 1, do_something, (s,))
s.run()