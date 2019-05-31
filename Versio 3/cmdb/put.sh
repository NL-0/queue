#!/bin/bash
#jono=$((jono+1))
#echo $((1 + RANDOM % 10))

declare -i jono=$((1 + RANDOM % 10))
declare -i seuraava=$((1 + RANDOM % 10))
declare tmp1
declare tmp2


while true
do 

# tmp1=`curl -G http://192.168.220.139:9595/components/api/server/id/1 | grep -oP '(?<="jono": ")[^"]*'`
# echo $tmp1
#tmp2=`grep -oP '(?<="jono": ")[^"]*' $tmp1`

# echo $tmp1
# echo $jono

# if [ $tmp1 > $jono ]
# then
#     curl -X PUT -d '{"id" : 1, "hostname" : "jokuhosti", "enabled" : "1", "created" : "data", "jono" : '$tmp1', "seuraava" : '$seuraava'}' http://localhost:9595/components/api/server/id/1
# else
    curl -X PUT -d '{"id" : 1, "hostname" : "jokuhosti", "enabled" : "1", "created" : "data", "jono" : '$jono', "seuraava" : '$seuraava'}' http://localhost:9595/components/api/server/id/1
# fi

jono=$(($jono + RANDOM % 2))
seuraava=$(($seuraava + RANDOM % 2)) 
echo $jono
echo $seuraava

    #echo "Hi"
    sleep 3
 done
