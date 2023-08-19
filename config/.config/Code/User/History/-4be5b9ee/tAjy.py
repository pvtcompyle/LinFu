import ipaddress as ipa

def build_cidr_dict (ip):
    cidr = {}
    for i in range(0, 32):
        cidr[i] = f"{ip}/{i}"
    return cidr
ip = "10.10.1.0"
[print(key,value) for key, value in build_cidr_dict(ip).items()]
