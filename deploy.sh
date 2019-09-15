#!/usr/bin/env bash
docker ps -a -f status=exited
docker system prune -f
docker rmi d2p
docker build -t d2p .
docker run --detach --name d2p \
    -e "VIRTUAL_HOST=www.data2thepeople.com" \
    -e "LETSENCRYPT_HOST=www.data2thepeople.com" \
    d2p
