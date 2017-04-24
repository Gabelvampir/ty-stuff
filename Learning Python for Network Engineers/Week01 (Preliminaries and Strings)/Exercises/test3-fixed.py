#!/usr/bin/env python

# fixed version of test3.px (exercise 3)

import fileinput

for line in fileinput.input():
    print line.strip().split(".")
