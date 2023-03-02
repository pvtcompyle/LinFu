#!/usr/bin/python

import socket
import sys
import argparse
import os

def check_name(un, server):
	print (f'[*] Checking {un} on {server}')
	# Create a socket
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

	# Connect to the server
	connect = s.connect((server,25))

	# Receive the banneer
	banner = s.recv(1024).decode('ascii').split('\n')[0]
	#banner = banner.split('\n')[0]
	print(f'[ banner ] {banner}')

	# VRFY a user
	s.send(f'VRFY {un} \r\n'.encode())
	result = s.recv(1024).decode('ascii')

	print(f'[response] {result}')

	# Close the socket
	s.close()

	if "VRFY is not supported" in result:
		return 'noVRFY'
def get_contents(fname):
	if os.path.exists(fname):
		with open(fname, 'r') as f:
			contents = f.read().split()
	else:
		print(f'[*] {fname} does not exists.')
		sys.exit(0)
	return contents

parser = argparse.ArgumentParser()
parser.add_argument('-u', type=str)
parser.add_argument('-uL')
parser.add_argument('-s', type=str)
parser.add_argument('-sL')
args = parser.parse_args()

if args.u:
	names = [args.u]
if args.s:
	servers = [args.s]
if args.uL:
	names = get_contents(args.uL)
if args.sL:
	servers = get_contents(args.sL)
for server in servers:
	for name in names:
		if check_name(name, server) == 'noVRFY':
			print(f'[*][*][*] {server} does not support VRFY, moving on to next server.')
			break
