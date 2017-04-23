#!/usr/bin/env python

# example IPv6 address
ipv6 = "FE80:0000:0000:0000:0101:A3EF:EE1E:1719"

# split it on the field delimiters (exercise 1)
octets = ipv6.split(":")
print(octets)

# join it together again (execrise 2)

rejoin = ":".join(octets)
print(rejoin)
