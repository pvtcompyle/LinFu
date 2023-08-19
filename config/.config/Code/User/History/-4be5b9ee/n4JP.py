import ipaddress as ipa

def build_cidr_dict (ip):
    cidr = {}
    for i in range(0, 32):
        cidr[i] = ipa.IPv4Network(f"{ip}/{i}")

    return cidr
ip = "10.10.1.1"
[print(key,value) for key, value in build_cidr_dict(ip).items()]
