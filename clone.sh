#!/bin/bash

server="https://github.com/skoved/tarot-server.git"
client="https://github.com/skoved/tarot-client.git"

echo Cloning repositories ...

git clone "$server" server
git clone "$client" client

echo repositories have been cloned!
