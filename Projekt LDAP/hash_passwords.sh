#! /bin/bash

# Replace clear text passwords with slappasswd generated salted hashes
# Use as filter.

awk \
'/userPassword/ {
  "slappasswd -s" "\"" $2 "\"" | getline pwhash
  print $1 " " pwhash
}
!/userPassword/
'
