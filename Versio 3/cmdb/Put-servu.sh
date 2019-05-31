#!/bin/bash
#jono=$((jono+1))
#echo $((1 + RANDOM % 10))

declare -i jono=$((1 + RANDOM % 10))
declare -i seuraava=$((1 + RANDOM % 10))

while true
do 

curl -X PUT -d '{"id" : 1, "hostname" : "jokuhosti", "enabled" : "1", "created" : "data", "jono" : '$jono', "seuraava" : '$seuraava'}' http://localhost:9595/components/api/server/id/1


jono=$(($jono + RANDOM % 2))
seuraava=$(($seuraava + RANDOM % 2)) 
echo $jono
echo $seuraava

    #echo "Hi"
    sleep 5
done
